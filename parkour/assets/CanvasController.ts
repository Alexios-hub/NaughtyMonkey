
import {v2,find,_decorator, Component, Node, Prefab, resources, instantiate, Label, RigidBody2D } from 'cc';
import { BeeController } from './BeeController';
import { HedgehogController } from './HedgehogController';
import { monkey_controller } from './monkey_controller';
import { TreeController } from './TreeController';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = CanvasController
 * DateTime = Mon Mar 14 2022 19:42:21 GMT+0800 (中国标准时间)
 * Author = AlexiosLHB
 * FileBasename = CanvasController.ts
 * FileBasenameNoExtension = CanvasController
 * URL = db://assets/CanvasController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */


enum LEVEL{
    LEVEL1,
    LEVEL2,
    LEVEL3,
    LEVEL4,
    LEVEL5
}
 
@ccclass('CanvasController')
export class CanvasController extends Component {

    score_improve_timeline = 0.2;

    score_during_time = 0;

    level = LEVEL.LEVEL1


    @property(Label)
    score:Label
    @property(monkey_controller)
    mk_controller:monkey_controller

    @property(HedgehogController)
    hedgehog1:HedgehogController
    @property(HedgehogController)
    hedgehog2:HedgehogController
    @property(HedgehogController)
    hedgehog3:HedgehogController
    @property(HedgehogController)
    hedgehog4:HedgehogController
    @property(BeeController)
    bee:BeeController
    @property(TreeController)
    ltree:TreeController
    @property(TreeController)
    ltree2:TreeController
    @property(TreeController)
    rtree:TreeController
    @property(TreeController)
    rtree2:TreeController




    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;



    start () {

        this.score.string = "0";


        

        // [3]
    }

    update (deltaTime: number) {
     
        if(this.mk_controller.mk_state == 0){
        this.score_during_time+=deltaTime;
        let ltree = find("Canvas/ltree");
        let ltree_rgd = ltree.getComponent(RigidBody2D);
        let ltree_speed = ltree_rgd.linearVelocity.y;



     
        // let rtree = find("Canvas/rtree");
        // let rtree_rgd = rtree.getComponent(RigidBody2D);
        // rtree_rgd.linearVelocity = ltree_rgd.linearVelocity;

        // let ltree2 = find("Canvas/ltree2");
        // let ltree2_rgd = ltree2.getComponent(RigidBody2D);
        // ltree2_rgd.linearVelocity = ltree_rgd.linearVelocity;


        // let rtree2 = find("Canvas/rtree2");
        // let rtree2_rgd = rtree2.getComponent(RigidBody2D);
        // rtree2_rgd.linearVelocity = ltree_rgd.linearVelocity;



        if(this.score_during_time>this.score_improve_timeline){
            this.score_during_time = 0;

            this.score.string = parseInt(this.score.string)+Math.ceil(-ltree_speed*deltaTime)+"";
        }

        switch (this.level){
            case LEVEL.LEVEL1:
                if(parseInt(this.score.string)>40){
                    
                   

                    
                    let ltree_rgd= this.ltree.getComponent(RigidBody2D);
                    let origin_speed = ltree_rgd.linearVelocity.y;
                    ltree_rgd.linearVelocity = v2(0,origin_speed-5);

                    let ltree2_rgd= this.ltree2.getComponent(RigidBody2D);
                    ltree2_rgd.linearVelocity = v2(0,origin_speed-5);

                    let rtree_rgd= this.rtree.getComponent(RigidBody2D);
                    rtree_rgd.linearVelocity = v2(0,origin_speed-5);

                    let rtree2_rgd= this.rtree2.getComponent(RigidBody2D);
                    rtree2_rgd.linearVelocity = v2(0,origin_speed-5);
                    
                    
                    
                    this.level = LEVEL.LEVEL2;
                }
                break;
            case LEVEL.LEVEL2:
                if(parseInt(this.score.string)>80){
                    

                  
                    
                    let ltree_rgd= this.ltree.getComponent(RigidBody2D);
                    let origin_speed = ltree_rgd.linearVelocity.y;

                    ltree_rgd.linearVelocity = v2(0,origin_speed-5);

                    let ltree2_rgd= this.ltree2.getComponent(RigidBody2D);
                    ltree2_rgd.linearVelocity = v2(0,origin_speed-5);

                    let rtree_rgd= this.rtree.getComponent(RigidBody2D);
                    rtree_rgd.linearVelocity = v2(0,origin_speed-5);

                    let rtree2_rgd= this.rtree2.getComponent(RigidBody2D);
                    rtree2_rgd.linearVelocity = v2(0,origin_speed-5);
                    
                    
                    
                    this.level = LEVEL.LEVEL3;

                }
                break;
                case LEVEL.LEVEL3:
                    if(parseInt(this.score.string)>120){

                      
    
                       
    
                        
                        let ltree_rgd= this.ltree.getComponent(RigidBody2D);
                        let origin_speed = ltree_rgd.linearVelocity.y;
                        ltree_rgd.linearVelocity = v2(0,origin_speed-5);
    
                        let ltree2_rgd= this.ltree2.getComponent(RigidBody2D);
                        ltree2_rgd.linearVelocity = v2(0,origin_speed-5);
    
                        let rtree_rgd= this.rtree.getComponent(RigidBody2D);
                        rtree_rgd.linearVelocity = v2(0,origin_speed-5);
    
                        let rtree2_rgd= this.rtree2.getComponent(RigidBody2D);
                        rtree2_rgd.linearVelocity = v2(0,origin_speed-5);
                        
                        
                        
                        this.level = LEVEL.LEVEL4;

                    }
                    break;
                    case LEVEL.LEVEL4:
                        if(parseInt(this.score.string)>150){


        
        
                            
                          
                            
                            let ltree_rgd= this.ltree.getComponent(RigidBody2D);
                            let origin_speed = ltree_rgd.linearVelocity.y;
                            ltree_rgd.linearVelocity = v2(0,origin_speed -5);
        
                            let ltree2_rgd= this.ltree2.getComponent(RigidBody2D);
                            ltree2_rgd.linearVelocity = v2(0,origin_speed -5);
        
                            let rtree_rgd= this.rtree.getComponent(RigidBody2D);
                            rtree_rgd.linearVelocity = v2(0,origin_speed -5);
        
                            let rtree2_rgd= this.rtree2.getComponent(RigidBody2D);
                            rtree2_rgd.linearVelocity = v2(0,origin_speed -5);
                            
                            
                            
                            this.level = LEVEL.LEVEL5;

                        }
              

        }


    
    }

        
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
