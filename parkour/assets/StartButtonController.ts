
import { _decorator, Component, Node, director } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = StartButtonController
 * DateTime = Wed Mar 23 2022 13:56:26 GMT+0800 (中国标准时间)
 * Author = frederickmo
 * FileBasename = StartButtonController.ts
 * FileBasenameNoExtension = StartButtonController
 * URL = db://assets/StartButtonController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('StartButtonController')
export class StartButtonController extends Component {
    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;

    start () {
        // [3]
        // 预加载：在点击开始之后立刻切换到游戏场景
        director.preloadScene("scene");
    }

    onStartClick (e) {
        director.loadScene("scene");
    }

    onRestartClick (e) {
        director.reset()
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
