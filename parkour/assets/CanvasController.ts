
import {v2,find,_decorator, Component, Node, Prefab, resources, instantiate, Label, RigidBody2D, Animation, director } from 'cc';
import { BeeController, BEESTATE } from './BeeController';
import { HedgehogController, HedgehogSTATE } from './HedgehogController';
import { monkey_controller, monkey_state } from './monkey_controller';
import { TreeController } from './TreeController';
import { BirdController, BIRDSTATE } from './BirdController';
import { HugeBirdController } from './HugeBirdController'
import { StoneController } from './StoneController';
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

    buff_count_number: number

    level = LEVEL.LEVEL1


    @property(Label)
    score:Label

    @property(Label)
    buff_count: Label

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

    @property(StoneController)
    stone: StoneController

    @property(BirdController)
    bird: BirdController

    @property(HugeBirdController)
    huge_bird: HugeBirdController




    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;



    start () {

        this.score.string = "0";
        this.buff_count_number = this.mk_controller.buff_count;
        this.buff_count.string = "Buff: " + this.buff_count_number;

        // let restart_button = find("Canvas/RestartButton");
        // restart_button.active = false;

        director.preloadScene("end_scene");


        

        // [3]
    }

    update (deltaTime: number) {

        let ltree = find("Canvas/ltree");
        let ltree_rgd = ltree.getComponent(RigidBody2D);
        let ltree_speed = ltree_rgd.linearVelocity.y;

        this.buff_count.string = "Buff: " + this.mk_controller.buff_count;

        if (this.mk_controller.mk_state == monkey_state.DEAD) {
            // let restart_button = find("Canvas/RestartButton");
            // restart_button.active = true;
            director.loadScene("end_scene");
        }


        // 吃到3个buff(砍杀3只鸟)之后暂时进入无敌状态3秒；之后恢复正常ALIVE状态
        if (this.mk_controller.buff_count == 3) {
            // 标志无敌状态，monkey的buff清零
            this.buff_count.string = "INVINCIBLE";
            this.mk_controller.buff_count = 0;
            // 激发huge_bird节点
            this.huge_bird.node.active = true;
            let huge_bird_animation = this.huge_bird.getComponent(Animation);
            huge_bird_animation.play("huge_bird_idle_blinking");

            // 暂时隐藏monnkey节点
            this.mk_controller.node.active = false;

            this.score_during_time += deltaTime;
            if (this.score_during_time > this.score_improve_timeline) {
                this.score_during_time = 0;
                this.score.string = parseInt(this.score.string) + Math.ceil(-ltree_speed * deltaTime) + "";
            }

            let ltree_rgd = this.ltree.getComponent(RigidBody2D);
            let ltree2_rgd = this.ltree2.getComponent(RigidBody2D);
            let rtree_rgd = this.rtree.getComponent(RigidBody2D);
            let rtree2_rgd = this.rtree2.getComponent(RigidBody2D);

            let monkey_rgd = this.mk_controller.getComponent(RigidBody2D);

            let original_speed_ltree = ltree_rgd.linearVelocity.y;
            let original_speed_ltree2 = ltree2_rgd.linearVelocity.y;
            let original_speed_rtree = rtree_rgd.linearVelocity.y;
            let original_speed_rtree2 = rtree2_rgd.linearVelocity.y;
            let original_speed_monkey = monkey_rgd.linearVelocity.y;

            // 超高速移动
            ltree_rgd.linearVelocity = v2(0, -100);
            ltree2_rgd.linearVelocity = v2(0, -100);
            rtree_rgd.linearVelocity = v2(0, -100);
            rtree2_rgd.linearVelocity = v2(0, -100);

            monkey_rgd.linearVelocity = v2(0, -100);


            switch(this.level) {
                case LEVEL.LEVEL1:
                    if (parseInt(this.score.string) > 40) {
                        this.level = LEVEL.LEVEL2;
                    }
                    break;
                case LEVEL.LEVEL2:
                    if (parseInt(this.score.string) > 80) {
                        this.level = LEVEL.LEVEL3;
                    }
                    break;
                case LEVEL.LEVEL3:
                    if (parseInt(this.score.string) > 120) {
                        this.level = LEVEL.LEVEL4;
                    }
                    break;
                case LEVEL.LEVEL4:
                    if (parseInt(this.score.string) > 150) {
                        this.level = LEVEL.LEVEL5;
                    }
                    break;
            }

            if (this.hedgehog1.node.getPosition().y < 800) {
                this.hedgehog1.state = HedgehogSTATE.DEAD;
                let rgd = this.hedgehog1.getComponent(RigidBody2D);
                // rgd.linearVelocity = v2(0, this.hedgehog1.speed);
                rgd.linearVelocity = v2(0, -100);
                let animation = this.hedgehog1.getComponent(Animation);
                animation.play("Hedgehog_Smoke");
            }
            if (this.hedgehog2.node.getPosition().y < 800) {
                this.hedgehog2.state = HedgehogSTATE.DEAD;
                let rgd = this.hedgehog2.getComponent(RigidBody2D);
                // rgd.linearVelocity = v2(0, this.hedgehog1.speed);
                rgd.linearVelocity = v2(0, -100);
                let animation = this.hedgehog2.getComponent(Animation);
                animation.play("Hedgehog_Smoke");
            }
            if (this.hedgehog3.node.getPosition().y < 800) {
                this.hedgehog3.state = HedgehogSTATE.DEAD;
                let rgd = this.hedgehog3.getComponent(RigidBody2D);
                // rgd.linearVelocity = v2(0, this.hedgehog1.speed);
                rgd.linearVelocity = v2(0, -100);
                let animation = this.hedgehog3.getComponent(Animation);
                animation.play("Hedgehog_Smoke");
            }
            if (this.hedgehog4.node.getPosition().y < 800) {
                this.hedgehog4.state = HedgehogSTATE.DEAD;
                let rgd = this.hedgehog4.getComponent(RigidBody2D);
                // rgd.linearVelocity = v2(0, this.hedgehog1.speed);
                rgd.linearVelocity = v2(0, -100);
                let animation = this.hedgehog4.getComponent(Animation);
                animation.play("Hedgehog_Smoke");
            }

            if (this.bee.node.getPosition().y < 800) {
                this.bee.state = BEESTATE.DEAD;
                let rgd = this.bee.getComponent(RigidBody2D);
                rgd.linearVelocity = v2(0, -100);
                let animation = this.bee.getComponent(Animation);
                animation.play("Bee_Smoke");
            }

            if (this.stone.node.getPosition().y < 800) {
                // 播放vanish的动画好像有点问题：在冲刺之后石头的动画都变成了vanish，不会恢复成原来的落石效果
                //
                // let animation = this.stone.getComponent(Animation);
                // animation.play("stone_vanish");
                this.stone.reset();
            }

            // 无敌时间持续3秒
            setTimeout(() => {
                this.mk_controller.mk_state = monkey_state.ALIVE;
                this.huge_bird.node.active = false;
                this.mk_controller.node.active = true;
                ltree_rgd.linearVelocity = v2(0, original_speed_ltree);
                ltree2_rgd.linearVelocity = v2(0, original_speed_ltree2);
                rtree_rgd.linearVelocity = v2(0, original_speed_rtree);
                rtree2_rgd.linearVelocity = v2(0, original_speed_rtree2);
                monkey_rgd.linearVelocity = v2(0, original_speed_monkey);
            }, 3000);

        }
     
        else if(this.mk_controller.mk_state == monkey_state.ALIVE) {
            this.score_during_time+=deltaTime;
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

            switch (this.level) {
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
