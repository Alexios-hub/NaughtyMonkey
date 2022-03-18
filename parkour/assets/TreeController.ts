
import { _decorator, Component, Node, Sprite, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = TreeController
 * DateTime = Sun Mar 13 2022 20:06:24 GMT+0800 (中国标准时间)
 * Author = AlexiosLHB
 * FileBasename = TreeController.ts
 * FileBasenameNoExtension = TreeController
 * URL = db://assets/TreeController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */
 
@ccclass('TreeController')
export class TreeController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {


        // [3]
    }


    update(dt){
       
        if(this.node.getPosition().y<=-1730.02){
            this.node.setPosition(new Vec3(this.node.getPosition().x,1757,0));
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
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/decorator.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
 */
