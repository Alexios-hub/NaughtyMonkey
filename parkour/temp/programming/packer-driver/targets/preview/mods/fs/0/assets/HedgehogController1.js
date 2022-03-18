System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, find, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, HedgehogController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "703044trERFCJ4os7dTbgnl", "HedgehogController1", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = HedgehogController
       * DateTime = Tue Mar 15 2022 09:20:12 GMT+0800 (中国标准时间)
       * Author = AlexiosLHB
       * FileBasename = HedgehogController.ts
       * FileBasenameNoExtension = HedgehogController
       * URL = db://assets/HedgehogController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("HedgehogController", HedgehogController = (_dec = ccclass('HedgehogController'), _dec2 = property(Number), _dec(_class = (_class2 = (_temp = class HedgehogController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "y", _descriptor, this);
        }

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        judge() {
          for (var i = 1; i < 5; i++) {
            var node = find("Canvas/Hedgehog" + i);
            if (Math.abs(node.position.y - this.y) <= 300) return false;
          }

          return true;
        }

        reset() {
          var l_or_r = Math.random();

          if (l_or_r > 0.5) {
            this.node.setScale(-0.25, 0.25, 0.25);
            this.node.setPosition(340, this.y, 0);
          } else {
            this.node.setScale(-0.25, -0.25, 0.25);
            this.node.setPosition(-326, this.y, 0);
          }
        }

        start() {
          var ifup = Math.random();

          if (ifup < 0.65) {
            this.reset();
          } else {
            this.node.setPosition(340, -1000, 0);
          } // [3]

        }

        update(deltaTime) {
          if (this.node.getPosition().y < -870 && this.judge()) {
            var ifrevert = Math.random();

            if (ifrevert < 0.7) {
              this.reset();
            }
          } // [4]

        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "y", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
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
//# sourceMappingURL=HedgehogController1.js.map