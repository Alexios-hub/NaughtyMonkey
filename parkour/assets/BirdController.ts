
import {Animation, v2, _decorator, Component, Node, RigidBody2D, find, Collider2D, IPhysics2DContact, Contact2DType, AudioSource, AudioClip, loader } from 'cc';
import { monkey_controller, monkey_state } from './monkey_controller'
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BirdController
 * DateTime = Tue Mar 22 2022 15:12:27 GMT+0800 (中国标准时间)
 * Author = frederickmo
 * FileBasename = BirdController.ts
 * FileBasenameNoExtension = BirdController
 * URL = db://assets/resources/BirdController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */

export enum BIRDSTATE {
    ALIVE,
    DEAD
}
 
@ccclass('BirdController')
export class BirdController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    judge_time = 3;
    during_time = 0;
    state: BIRDSTATE = BIRDSTATE.ALIVE;

    @property(Number)
    y: number;

    @property(monkey_controller)
    mk_controller: monkey_controller;

    @property(Number)
    speed: number;

    judge() {
        let node = find("Canvas/Bird");
        if (Math.abs(node.position.y - this.y) <= 250) {
            return false;
        }
        return true;
    }

    playAudio(audioName: string) {
        // to be finished
    }

    onBeginContact(selfCollider: Collider2D,
                   otherCollider: Collider2D,
                   contact: IPhysics2DContact | null) {

        if (otherCollider.tag == 2) { // 石头的TAG是2
            this.state = BIRDSTATE.DEAD;
            let rgd = this.node.getComponent(RigidBody2D);
            rgd.linearVelocity = v2(0, this.speed);
            let animation = this.node.getComponent(Animation);
            animation.play("bird_smoke");
        }
        if (otherCollider.tag == 1) { // 猴子的TAG是1
            this.state = BIRDSTATE.DEAD;
            let rgd = this.node.getComponent(RigidBody2D);
            rgd.linearVelocity = v2(0, this.speed);
            let animation = this.node.getComponent(Animation);
            animation.play("bird_smoke");
        }
    }

    start () {
        // [3]

        let collider = this.getComponent(Collider2D);

        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        let ifreset = Math.random();
        if (ifreset < 0.15 && this.judge()) {
            this.reset();
        } else {
            this.node.setPosition(0, -1000, 0);
        }
    }

    reset () {
        let animation = this.node.getComponent(Animation);
        animation.play("bird_idle_blinking");
        this.state = BIRDSTATE.ALIVE;

        let ltree = find("Canvas/ltree");
        let ltree_rgd = ltree.getComponent(RigidBody2D);

        this.node.setPosition(Math.random() * (200 + 186) - 186, this.y, 0);

        let dir = Math.random();
        if (dir < 0.5) {
            this.node.setScale(-0.25, 0.25, 0.25);
        } else {
            this.node.setScale(0.25, 0.25, 0.25);
        }

        let ifmove = Math.random();
        if (ifmove > 0.5) {
            let rgd = this.node.getComponent(RigidBody2D);
            if (dir < 0.5) {
                rgd.linearVelocity = v2(-5, this.speed);
            } else {
                rgd.linearVelocity = v2(5, this.speed);
            }
        } else {
            let rgd = this.node.getComponent(RigidBody2D);
            rgd.linearVelocity = v2(0, this.speed);
        }
    }

    update (deltaTime: number) {
        if (this.mk_controller.mk_state == monkey_state.ALIVE) {

            let ltree = find("Canvas/ltree");
            let ltree_rgd = ltree.getComponent(RigidBody2D);
            let rgd = this.getComponent(RigidBody2D);
            this.speed = ltree_rgd.linearVelocity.y;
            rgd.linearVelocity = v2(rgd.linearVelocity.x, this.speed);

            this.during_time += deltaTime;

            if (this.during_time > this.judge_time && this.node.getPosition().y < -870) {
                this.during_time = 0;
                let ifreset = Math.random();
                if (ifreset < 0.5 && this.judge()) {
                    this.reset();
                }
            }

            let animation = this.node.getComponent(Animation);

            if (this.state == BIRDSTATE.DEAD && animation.getState("bird_smoke").isPlaying == false) {
                this.state = BIRDSTATE.ALIVE;
                this.node.setPosition(0, -1000, 0);
            }

            if (this.node.getPosition().x <= -186 || this.node.getPosition().x >= 200) {
                rgd.linearVelocity = v2(-rgd.linearVelocity.x, rgd.linearVelocity.y);
                this.node.setScale(-this.node.getScale().x,
                                    this.node.getScale().y,
                                    this.node.getScale().z);
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
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
