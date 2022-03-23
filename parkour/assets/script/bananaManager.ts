
import { _decorator, Component, Node, Prefab, instantiate, v2, v3, math, quat, Label } from 'cc';
import { bananaControl } from './bananaControl';
const { ccclass, property } = _decorator;

 
@ccclass('bananaManager')
export class bananaManager extends Component {
    @property(Prefab)
    banana: Prefab=null;

    //香蕉数UI
    @property(Label)
    numLabel: Label=null;

    //产生香蕉的时间间隔s
    time: number = 1;

    //积累的香蕉数量
    num: number = 0;

    start () {
        this.schedule(()=>{
            this.appearBanana();
        },this.time)

    }

    //产生香蕉
    appearBanana() {
        let Bnode=instantiate(this.banana);
        Bnode.setParent(this.node);
        let x1: number=-300;
        if(Math.random()*10>5){
            x1=320;
        }
        Bnode.position=v3(x1,0,0);
        //吃到香蕉，添加数量
        Bnode.getComponent(bananaControl).addNumOfBanana = ()=>{
            if(this.num<2){
                this.num++;
            }else {
                this.num=0;
            }
            console.debug(this.num)
            this.numLabel.string=this.num+"";
        };
    }

}

