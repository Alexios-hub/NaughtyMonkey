
import { _decorator, Component, Node, ProgressBar, director } from 'cc';
const { ccclass, property } = _decorator;

 
@ccclass('loadingControl')
export class loadingControl extends Component {

    num: number=0
    start () {
        let self=this.node.getComponent(ProgressBar).progress;
        // [3]
        director.preloadScene("scene",()=>{
            self=1;
        })
        director.loadScene("scene");
    }

    update (deltaTime: number) {
        this.num++;
        if(60<this.num&&this.num<120){
            this.node.getComponent(ProgressBar).progress=0.3;
        }
        else if(120<=this.num&&this.num<180) {
            this.node.getComponent(ProgressBar).progress=0.6;
        }
        else if(180<=this.num&&this.num<240) {
            this.node.getComponent(ProgressBar).progress=0.9;
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
