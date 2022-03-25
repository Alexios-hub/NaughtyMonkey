
import {Animation,v2, _decorator, Component, Node, RigidBody2D, find, Collider2D, IPhysics2DContact, Contact2DType } from 'cc';
import { monkey_controller } from './monkey_controller';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BeeController
 * DateTime = Wed Mar 16 2022 19:47:19 GMT+0800 (中国标准时间)
 * Author = AlexiosLHB
 * FileBasename = BeeController.ts
 * FileBasenameNoExtension = BeeController
 * URL = db://assets/BeeController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

export enum BEESTATE{
    ALIVE,
    DEAD
}

 
@ccclass('BeeController')
export class BeeController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
    judge_time = 3;//10s
    during_time = 0;
    state:BEESTATE = BEESTATE.ALIVE;

  

    @property(Number)
    y:number
    @property(monkey_controller)
    mk_controller:monkey_controller;
    @property(Number)
    speed:number

    judge(){
        for(var i =1;i<5;i++){
            var node = find("Canvas/Hedgehog"+i);
            if(Math.abs(node.position.y-this.y)<=250 )return false;
        }
        return true;
    }
    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
   
        // 只在两个碰撞体开始接触时被调用一次
       

        if(otherCollider.tag==2){
        this.state=BEESTATE.DEAD;
        let ani = this.node.getComponent(Animation);
        ani.play("Bee_Smoke");
        }




    }
    start () {
        let collider = this.getComponent(Collider2D);
        if(collider){
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        let ifreset = Math.random();
        if(ifreset<0.15&&this.judge())this.reset();
        else this.node.setPosition(0,-1000,0);

        
        // [3]
    }

    reset(){

        let ani = this.node.getComponent(Animation);
        ani.play("Bee_Idle");
        this.state=BEESTATE.ALIVE;
     
        let ltree = find("Canvas/ltree");
        let ltree_rgd = ltree.getComponent(RigidBody2D);
  
        this.node.setPosition(Math.random()*(200+186)-186,this.y,0);
        let dir = Math.random();
        if(dir<0.5){
            this.node.setScale(-0.25,0.25,0.25);
        }
        else {
            this.node.setScale(0.25,0.25,0.25);
        }
        let ifmove = Math.random();
        if(ifmove>0.5){
            let rgd = this.node.getComponent(RigidBody2D);
            if(dir<0.5){
                rgd.linearVelocity=v2(-5,this.speed);
            }
            else{
                rgd.linearVelocity=v2(5,this.speed);

            }
        }
        else{
            let rgd = this.node.getComponent(RigidBody2D);
            rgd.linearVelocity=v2(0,this.speed);

        }


    }





    update (deltaTime: number) {
        if(this.mk_controller.mk_state == 0){

            let ltree = find("Canvas/ltree");
            let ltree_rgd = ltree.getComponent(RigidBody2D);
            let rgd = this.getComponent(RigidBody2D);
        this.speed = ltree_rgd.linearVelocity.y;
        rgd.linearVelocity=v2(rgd.linearVelocity.x,this.speed);
     

     
        this.during_time +=deltaTime;
        // [4]
        if(this.during_time>this.judge_time&&this.node.getPosition().y<-870){
            this.during_time = 0;
     
            let ifreset = Math.random();
            if(ifreset<0.5&&this.judge())
            this.reset();
        }
       let ani = this.node.getComponent(Animation);

    if(this.state == BEESTATE.DEAD&&ani.getState("Bee_Smoke").isPlaying==false){
        this.state=BEESTATE.ALIVE;
        this.node.setPosition(0,-1000,0);
    }
           

           
            if(this.node.getPosition().x<=-186||this.node.getPosition().x>=200){
            rgd.linearVelocity = v2(-rgd.linearVelocity.x,rgd.linearVelocity.y);
            this.node.setScale(-this.node.getScale().x,this.node.getScale().y,this.node.getScale().z);
        
            }
        
        }

    }

    die() {
        this.node.getComponent(Animation).play('Bee_Hurt');
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
