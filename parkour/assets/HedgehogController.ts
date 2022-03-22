
import { Animation,_decorator, Component, Node, find, RigidBody2D, v2, TypeScript, Collider2D, IPhysics2DContact, Contact2DType, director } from 'cc';
import { CanvasController } from './CanvasController';
import { monkey_controller, monkey_state } from './monkey_controller';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = HedgehogController
 * DateTime = Tue Mar 15 2022 09:20:12 GMT+0800 (中国标准时间)
 * Author = AlexiosLHB
 * FileBasename = HedgehogController.ts
 * FileBasenameNoExtension = HedgehogController
 * URL = db://assets/HedgehogController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
enum HedgehogSTATE{
    UPRUNNING,
    DOWNRUNNING,
    IDLE,
    DEAD
}
 
@ccclass('HedgehogController')
export class HedgehogController extends Component {
    during_time:number=0;
    state:HedgehogSTATE = HedgehogSTATE.IDLE;

  

    @property(Number)
    y:number
    @property(Number)
    judge_time:number;
    @property(Number)
    run_possibility:number;
    @property(Number)
    up_possibility:number;
    @property(Number)
    revert_possibility:number;

    @property(monkey_controller)
    mk_controller:monkey_controller;

    @property(Number)
    speed:number


   

    
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    moveway(){
    

        let ifrun = Math.random();
        let ani = this.getComponent(Animation);
        let rgd = this.getComponent(RigidBody2D);
        if(ifrun<this.run_possibility){

            if(this.node.getScale().x<0){
                rgd.linearVelocity=v2(0,this.speed-3);
                this.state = HedgehogSTATE.DOWNRUNNING;
            }
            
            else  {
                rgd.linearVelocity=v2(0,this.speed+3);
                this.state=HedgehogSTATE.UPRUNNING;
            }
            ani.play("Hedgehog_Walking");

        }
        else{
            rgd.linearVelocity=v2(0,this.speed);
            this.state=HedgehogSTATE.IDLE;
            ani.play("Hedgehog_Idle");

        }
    }
    judgerun(){
        var y = this.node.getPosition().y;
        for(var i =1;i<5;i++){
            var node = find("Canvas/Hedgehog"+i);
            if("Hedgehog"+i != this.node.name&&Math.abs(node.position.y-y)<=300)return false;
        }
        var bee_node = find("Canvas/Bee");
        if(Math.abs(bee_node.position.y-y)<=300)return false;
        return true;
    }
    judge(){
        for(var i =1;i<5;i++){
            var node = find("Canvas/Hedgehog"+i);
            if(Math.abs(node.position.y-this.y)<=300)return false;
        }
        var bee_node = find("Canvas/Bee");
        if(Math.abs(bee_node.position.y-this.y)<=300)return false;
        return true;
    }
    reset(){
        let up_or_down = Math.random();

        let l_or_r = Math.random();
            if(l_or_r>0.5){
                if(up_or_down<0.5){
                this.node.setScale(-0.25,0.25,0.25);
                }
                else 
                {
                    this.node.setScale(0.25,0.25,0.25);
                }
                this.node.setPosition(340,this.y,0);
               

            }
            else{
                if(up_or_down<0.5)
                this.node.setScale(-0.25,-0.25,0.25);
                else
                this.node.setScale(0.25,-0.25,0.25);
                this.node.setPosition(-326,this.y,0);
            }
            this.moveway();


    }
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
   
        // 只在两个碰撞体开始接触时被调用一次
        if(otherCollider.tag == 2){
        this.state = HedgehogSTATE.DEAD;
        let rgd = this.node.getComponent(RigidBody2D);
        rgd.linearVelocity = v2(0,this.speed);
        let ani = this.node.getComponent(Animation);
        ani.play("Hedgehog_Smoke");
        }
       

    }




    start () {
        let collider = this.getComponent(Collider2D);
        if(collider){
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
        let ifup = Math.random();
        if(ifup<this.up_possibility){
            this.reset();
        }
        else{
            this.node.setPosition(340,-1000,0);
        }
        // [3]
    }

    update (deltaTime: number) {
        
      if(this.mk_controller.mk_state == monkey_state.ALIVE){
        let ltree = find("Canvas/ltree");
        let ltree_rgd = ltree.getComponent(RigidBody2D);
       
      

        this.during_time+=deltaTime;
        let rgd = this.getComponent(RigidBody2D);
        this.speed = ltree_rgd.linearVelocity.y;
      

        //update speed
        switch(this.state){
            case  HedgehogSTATE.DOWNRUNNING:
                rgd.linearVelocity = v2(0,this.speed-3);
                break;
            case HedgehogSTATE.UPRUNNING:
                rgd.linearVelocity = v2(0,this.speed+3);
                break;
            case  HedgehogSTATE.IDLE:
                rgd.linearVelocity = v2(0,this.speed);
                break;
            case HedgehogSTATE.DEAD:
                let ani = this.node.getComponent(Animation);
               
                if(ani.getState("Hedgehog_Smoke").isPlaying==false){
              

                    this.state = HedgehogSTATE.IDLE;
                    rgd.linearVelocity = v2(0,this.speed);
                    this.node.setPosition(340,-1000,0);
                   
                }
                break;




        }



    





        if(this.during_time>this.judge_time&& this.node.getPosition().y<-870&&this.judge())
        {

            this.during_time = 0;
            let ifrevert = Math.random();
            if(ifrevert<this.revert_possibility){
                this.reset();
            }
        }
        let ani = this.getComponent(Animation);

        if(ani.getState("Hedgehog_Walking").isPlaying == true){
          
           
            if(this.judgerun()==false){
               
                if(this.state == HedgehogSTATE.DOWNRUNNING){
                    this.state=HedgehogSTATE.UPRUNNING;
                    this.node.setScale(0.25,this.node.getScale().y,this.node.getScale().z);
                
                    rgd.linearVelocity = v2(0,this.speed+3);
                }
                else if(this.state == HedgehogSTATE.UPRUNNING){
                    this.state = HedgehogSTATE.DOWNRUNNING;
                    this.node.setScale(-0.25,this.node.getScale().y,this.node.getScale().z);
                   
                    rgd.linearVelocity = v2(0,this.speed-3);

                }
            }

        }
    




      }
        // [4]
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
