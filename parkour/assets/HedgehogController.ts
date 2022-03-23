
import { Animation,_decorator, Component, Node, find, RigidBody2D, v2, tween, v3 } from 'cc';
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
 
@ccclass('HedgehogController')
export class HedgehogController extends Component {
    during_time:number=0;
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

            if(this.node.getScale().x<0)
            rgd.linearVelocity=v2(0,-18);
            else  rgd.linearVelocity=v2(0,-12);
            ani.play("Hedgehog_Walking");

        }
        else{
            rgd.linearVelocity=v2(0,-15);
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
            console.log("set");

    }

    start () {
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
        this.during_time+=deltaTime;
        //console.log(this.during_time);
        if(this.during_time>this.judge_time&& this.node.getPosition().y<-870&&this.judge())
        {
            console.log("update!");
            this.during_time = 0;
            let ifrevert = Math.random();
            if(ifrevert<this.revert_possibility){
                this.reset();
            }
        }
        let ani = this.getComponent(Animation);
        if(ani.getState("Hedgehog_Walking").isPlaying == true){
            if(this.judgerun()==false){
                let rgd = this.getComponent(RigidBody2D);
                if(rgd.linearVelocity.y==-18){
                    this.node.setScale(0.25,this.node.getScale().y,this.node.getScale().z);
                    rgd.linearVelocity = v2(0,-12);
                }
                else {
                    this.node.setScale(-0.25,this.node.getScale().y,this.node.getScale().z);
                    rgd.linearVelocity = v2(0,-18);

                }
            }
        }
        
        // [4]
    }

    die() {
        // this.node.getComponent(RigidBody2D).linearVelocity = v2(0,0);
        this.node.getComponent(Animation).play('Hedgehog_Hurt');
        // tween(this.node).to((this.node.position.y+871)/50,{position: v3(this.node.position.x,-871,0)})
        // .start();

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
