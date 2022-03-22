
import { Animation,_decorator, Component, Node, RigidBody2D, v2, find } from 'cc';
import { HedgehogController } from './HedgehogController';
import { monkey_controller, monkey_state } from './monkey_controller';
import { TreeController } from './TreeController';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = StoneController
 * DateTime = Mon Mar 21 2022 15:29:07 GMT+0800 (中国标准时间)
 * Author = AlexiosLHB
 * FileBasename = StoneController.ts
 * FileBasenameNoExtension = StoneController
 * URL = db://assets/StoneController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('StoneController')
export class StoneController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    during_time:number = 0;
@property(TreeController)
ltree:TreeController;

@property(Number)
speed:number;
@property(Number)
judge_time:number;

@property(Number)
reset_probability:number;

@property(monkey_controller)
mk_controller:monkey_controller;




    reset(){
        let rgd = this.node.getComponent(RigidBody2D);
        rgd.linearVelocity=v2(0,this.speed);
        let l_or_r = Math.random();
        if(l_or_r>0.5){
            this.node.setPosition(330,-1000,0);
            if(this.JudgeIfReset()){
            this.node.setPosition(330,920,0);
            let ani = this.node.getComponent(Animation);
            ani.play("stone_rolling_right");
            }

        }
        else{

            this.node.setPosition(-310,-1000,0);
            if(this.JudgeIfReset()){
            this.node.setPosition(-310,920,0);
            let ani = this.node.getComponent(Animation);
            ani.play("stone_rolling_left");
            }
            
            
        }
    }

    start () {
        if(Math.random()<this.reset_probability){
            this.reset();
        }
        else{
            this.node.setPosition(0,-1000,0);
        }

        // [3]
    }

   JudgeIfReset(){

    let l_or_r = this.node.getPosition().x;
    if(l_or_r>0){
        for(var i =1;i<5;i++){
            let hedgehog = find("Canvas/Hedgehog"+i);
            if(hedgehog.getPosition().x<0&&hedgehog.getPosition().y<920&&hedgehog.getPosition().y>-870){
                return false;

            }
        }
        return true;
    }
    else{
        for(var i =1;i<5;i++){
            let hedgehog = find("Canvas/Hedgehog"+i);
            if(hedgehog.getPosition().x>0&&hedgehog.getPosition().y<920&&hedgehog.getPosition().y>-870){
                return false;

            }
        }
        return true;

    }


   }

           

    update (deltaTime: number) {

        if(this.mk_controller.mk_state == monkey_state.ALIVE){


            this.during_time+=deltaTime;
            this.speed = this.ltree.getComponent(RigidBody2D).linearVelocity.y;

            if(this.during_time>this.judge_time&& this.node.getPosition().y<-870){
                this.during_time = 0;
                if(Math.random()<this.reset_probability){
                    
                    this.reset();
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
