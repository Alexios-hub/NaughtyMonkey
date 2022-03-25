
import { _decorator, Component, Node, Prefab, instantiate, math, v3 } from 'cc';
const { ccclass, property } = _decorator;
 
@ccclass('shieldManager')
export class shieldManager extends Component {

    @property(Prefab)
    shield: Prefab;

    //产生护盾的间隔时间s
    time: number = 5;

    start () {
        this.schedule(()=>{
            this.appearShield();
        },this.time)
    }

    //产生护盾
    appearShield() {
        let shi=instantiate(this.shield);
        shi.setParent(this.node);
        let x: number=-300;
        if(Math.random()*10 > 5){
            x=320;
        }
        shi.position=v3(x,0,0);

    }
    // update (deltaTime: number) {
    //     // [4]
    // }
}

