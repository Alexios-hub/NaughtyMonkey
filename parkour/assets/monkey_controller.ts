
import {v2, Animation,_decorator, Component, Node, Sprite, Input, systemEvent, input, Collider2D, Contact2DType, IPhysics2DContact, RealInterpolationMode, RigidBody2D, v3, find, Vec3 } from 'cc';
import { HedgehogController } from './HedgehogController';
import { bananaControl } from './script/bananaControl';
import { shieldControl } from './script/shieldControl';
import { bananaManager } from './script/bananaManager'
import { BeeController } from './BeeController';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = monkey_controller
 * DateTime = Sun Mar 13 2022 21:48:57 GMT+0800 (中国标准时间)
 * Author = AlexiosLHB
 * FileBasename = monkey_controller.ts
 * FileBasenameNoExtension = monkey_controller
 * URL = db://assets/monkey_controller.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 export enum monkey_state{
     ALIVE,
     DEAD,
     INVINCIBLE // 无敌模式
}
 
@ccclass('monkey_controller')
export class monkey_controller extends Component {

    mk_state:monkey_state

    buff_count: number = 0

    @property(Number)
    NumOfHedgehogs:number
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;
   

    isInvincible: number = 0;

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        //吃香蕉
        if(otherCollider.tag==12) {
            otherCollider.getComponent(bananaControl).BeEaten();
            let bMan = find('Canvas/BananaManager');
            let num = bMan.getComponent(bananaManager).num;
            if(num == 0){
                this.eatBanana();
            }
            
            return;
        }
        else if(otherCollider.tag==11) { //吃盾
            otherCollider.getComponent(shieldControl).die();
            this.eatShield();
            return;
        }
        
        if(this.isInvincible>0){
            if(otherCollider.tag==0){
                otherCollider.getComponent(HedgehogController).die();
            }
            else if(otherCollider.tag==1){
                otherCollider.getComponent(BeeController).die();
            }
            
            return;
        }
        // 只在两个碰撞体开始接触时被调用一次


        let ani = this.node.getComponent(Animation);
        let monkey_rgd = this.node.getComponent(RigidBody2D);
        let ltree = find("Canvas/ltree");
        let ltree_rgd = ltree.getComponent(RigidBody2D);
        let ltree2 = find("Canvas/ltree2");
        let ltree2_rgd = ltree2.getComponent(RigidBody2D);
        let rtree = find("Canvas/rtree");
        let rtree_rgd = rtree.getComponent(RigidBody2D);
        let rtree2 = find("Canvas/rtree2");
        let rtree2_rgd = rtree2.getComponent(RigidBody2D);
        let bee = find("Canvas/Bee");
        let bee_rgd=bee.getComponent(RigidBody2D);
        let bird = find("Canvas/Bird");
        let bird_rgd = bird.getComponent(RigidBody2D);

        // 碰到鸟判定鸟死亡，除此以外判定猴子死亡
        // TAG == 10 => 鸟的tag是10
        if (otherCollider.tag == 10) {
            let bird_animation = bird.getComponent(Animation);
            bird_animation.play("bird_smoke");
            this.buff_count++;

            // 积累三个buff之后进入无敌（冲刺）模式
            if (this.buff_count == 3) {
                // 无敌模式相关内容还没做
                // this.mk_state = monkey_state.INVINCIBLE;
            }
        } else {
            monkey_rgd.linearVelocity = v2(0,-25);
            this.mk_state=monkey_state.DEAD;
            ltree_rgd.linearVelocity = v2(0,0);
            ltree2_rgd.linearVelocity= v2(0,0);
            rtree_rgd.linearVelocity= v2(0,0);
            rtree2_rgd.linearVelocity= v2(0,0);
            for(var i =1;i<this.NumOfHedgehogs+1;i++){

                var HedgeHogNode=find("Canvas/Hedgehog"+i);

                var Hedgehog_rgd=HedgeHogNode.getComponent(RigidBody2D);
                Hedgehog_rgd.linearVelocity= v2(0,0);
            }
            bee_rgd.linearVelocity = v2(0,0);


            bird_rgd.linearVelocity = v2(0, 0);


            ani.play("monkey_dying");

        }

        console.log("onBeginContact");

    }
    onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体结束接触时被调用一次
        console.log('onEndContact');
    }
    onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 每次将要处理碰撞体接触逻辑时被调用
        console.log('onPreSolve');
    }
    onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 每次处理完碰撞体接触逻辑时被调用
        console.log('onPostSolve');
    }


    
    start () {
        this.mk_state = monkey_state.ALIVE
        let x1=0.3;
        input.on(Input.EventType.MOUSE_DOWN,(event)=>{
            let ani = this.node.getComponent(Animation);
            if(ani.getState("monkey_runninng").isPlaying==true)
            {
                let x =this.node.getPosition().x
                if(x>0){
                    if(this.isInvincible>0){
                        this.node.setScale(2*x1,-2*x1,0);
                    } else {
                        this.node.setScale(0.3,-0.3,0);
                    }
                 
                ani.play("monkey_jumpingtoleft");
                }
                else if(x<0){
                    if(this.isInvincible>0){
                        this.node.setScale(2*x1,2*x1,0)
                    } else {
                        this.node.setScale(0.3,0.3,0);
                    }
                    ani.play("monkey_jumpingtoright");

                }

            
               
                
            }
           
        })
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }
        // [3]
    }

 
    

    update (deltaTime: number) {
        let ani = this.node.getComponent(Animation);
        if(ani.getState("monkey_runninng").isPlaying==false&&ani.getState("monkey_jumpingtoleft").isPlaying==false&&ani.getState("monkey_jumpingtoright").isPlaying==false&&this.mk_state == monkey_state.ALIVE){
            ani.play("monkey_runninng");
        }
        if(this.isInvincible>0) {
            this.isInvincible-=1;
        }else {
            if(this.node.position.x>0){
                this.node.setScale(0.3,0.3,1);
            } else {
                this.node.setScale(0.3,-0.3,1);
            }
            this.isInvincible=0;
        }
        
        
        // [4]
    }

    //吃到香蕉
    eatBanana() {
        this.isInvincible = 60*3;
        if(this.node.position.x>0){
            this.node.setScale(0.6,0.6,1);
        } else {
            this.node.setScale(0.6,-0.6,1);
        }
        
    }

    //吃到盾
    eatShield() {
        this.isInvincible = 60*3;
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
