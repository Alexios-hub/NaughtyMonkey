System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, find, _decorator, Component, RigidBody2D, _dec, _class, _crd, ccclass, property, TreeController;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      find = _cc.find;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RigidBody2D = _cc.RigidBody2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "83fbchn2n9OkaxWp4LkJx2i", "TreeController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("TreeController", TreeController = (_dec = ccclass('TreeController'), _dec(_class = class TreeController extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        }

        update(dt) {
          let ltree = find("Canvas/ltree");
          let ltree_rgd = ltree.getComponent(RigidBody2D);
          let speed = ltree_rgd.linearVelocity.y;

          if (this.node.getPosition().y <= -1865.937) {
            let name = this.node.name;

            switch (name) {
              case "ltree":
                this.node.setPosition(this.node.getPosition().x, find("Canvas/ltree2").getPosition().y + 2000, 0);
                break;

              case "ltree2":
                this.node.setPosition(this.node.getPosition().x, find("Canvas/ltree").getPosition().y + 2000, 0);
                break;

              case "rtree":
                this.node.setPosition(this.node.getPosition().x, find("Canvas/rtree2").getPosition().y + 2000, 0);
                break;

              case "rtree2":
                this.node.setPosition(this.node.getPosition().x, find("Canvas/rtree").getPosition().y + 2000, 0);
                break;
            } // this.node.setPosition(new Vec3(this.node.getPosition().x,1850+speed*dt,0));

          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }) || _class));
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


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TreeController.js.map