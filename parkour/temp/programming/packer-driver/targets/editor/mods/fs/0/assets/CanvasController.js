System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, CanvasController;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7686d59tL5CZKbnp2v7HaO4", "CanvasController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
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

      _export("CanvasController", CanvasController = (_dec = ccclass('CanvasController'), _dec(_class = (_temp = class CanvasController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "NumOfHedgehogs", 8);
        }

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        } // update (deltaTime: number) {
        // }


      }, _temp)) || _class));
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
//# sourceMappingURL=CanvasController.js.map