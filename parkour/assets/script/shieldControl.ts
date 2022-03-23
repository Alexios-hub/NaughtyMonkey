
import { _decorator, Component, Node, PhysicsSystem2D, RigidBody2D, v2, AudioSource } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('shieldControl')
export class shieldControl extends Component {
    hp: number = 1;

    audio: AudioSource=null;

    onLoad() {
        //开启物理系统
        PhysicsSystem2D.instance.enable = true;
    }

    start () {
        this.getComponent(RigidBody2D).linearVelocity=v2(0,-15);
        this.audio=this.node.getComponent(AudioSource);
    }

    update (deltaTime: number) {
        if(this.node.position.y<-2200) {
            this.hp--;
        }
        if(this.hp<1) {
            this.node.destroy();
        }
    }

    die() {
        this.hp--;
        this.audio.play();
    }
}
