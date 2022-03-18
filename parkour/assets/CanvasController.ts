
import {_decorator, Component, Node, Prefab, resources, instantiate } from 'cc';
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

 
@ccclass('CanvasController')
export class CanvasController extends Component {
    NumOfHedgehogs:number=8;

    // [1]
    // dummy = '';

    // [2]
    // @property
    // serializableDummy = 0;



    start () {


        

        // [3]
    }

    // update (deltaTime: number) {
        
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
