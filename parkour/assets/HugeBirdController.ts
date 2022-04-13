
import { _decorator, Component, Node, Animation } from 'cc';
import { monkey_controller, monkey_state } from './monkey_controller'
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = HugeBirdController
 * DateTime = Tue Mar 22 2022 21:13:33 GMT+0800 (中国标准时间)
 * Author = frederickmo
 * FileBasename = HugeBirdController.ts
 * FileBasenameNoExtension = HugeBirdController
 * URL = db://assets/HugeBirdController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('HugeBirdController')
export class HugeBirdController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    @property(monkey_controller)
    mk_controller: monkey_controller

    mk_state: monkey_state

    start () {
        // [3]
        if (this.mk_state == monkey_state.INVINCIBLE) {
            this.node.active = true;
            let animation = this.node.getComponent(Animation);
            animation.play("huge_bird_idle_blinking");
        } else {
            this.node.active = false;
        }
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
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
