
import { _decorator, Component, Node, PhysicsSystem2D, EPhysics2DDrawFlags, RigidBody2D, v2, v3, AudioSource } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('bananaControl')
export class bananaControl extends Component {

    @property
    private isDebug: boolean = false;

    //加香蕉数量
    addNumOfBanana: Function;

    hp: number = 1;

    audio: AudioSource=null;

    onLoad() {
        //开启物理系统
        PhysicsSystem2D.instance.enable=true;
        if(this.isDebug) {
            PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.All;
        } else {
            PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.None;
        }
    }
    start () {
        if(this.node.position.x<0) {
            this.node.scale=v3(-1,1,1);
        }
        this.getComponent(RigidBody2D).linearVelocity=v2(0,-15);
        this.audio=this.node.getComponent(AudioSource);
    }

    update (deltaTime: number) {
        if(this.node.position.y<-2200){
            this.hp--;
        }
        if(this.hp<1){
            this.node.destroy();
        }
    }

    BeEaten() {
        this.hp--;
        this.addNumOfBanana();
        this.audio.play();
        console.debug('播放香蕉的音效')
    }

    die() {
        this.node.destroy();
    }
}

