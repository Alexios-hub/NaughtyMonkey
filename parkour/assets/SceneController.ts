
import { _decorator, Component, Node, director, Button, EventHandler } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = SceneController
 * DateTime = Wed Mar 23 2022 12:43:30 GMT+0800 (中国标准时间)
 * Author = frederickmo
 * FileBasename = SceneController.ts
 * FileBasenameNoExtension = SceneController
 * URL = db://assets/SceneController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('SceneController')
export class SceneController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;


    start () {
        // [3]
        // director.loadScene("scene")
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
