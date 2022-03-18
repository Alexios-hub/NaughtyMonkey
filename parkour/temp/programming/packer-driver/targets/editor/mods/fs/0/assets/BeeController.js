System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, v2, _decorator, Component, RigidBody2D, find, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, BeeController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      v2 = _cc.v2;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RigidBody2D = _cc.RigidBody2D;
      find = _cc.find;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f39caZZO8pGXZ4Ke8z6R5Ag", "BeeController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = BeeController
       * DateTime = Wed Mar 16 2022 19:47:19 GMT+0800 (中国标准时间)
       * Author = AlexiosLHB
       * FileBasename = BeeController.ts
       * FileBasenameNoExtension = BeeController
       * URL = db://assets/BeeController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("BeeController", BeeController = (_dec = ccclass('BeeController'), _dec2 = property(Number), _dec(_class = (_class2 = (_temp = class BeeController extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "y", _descriptor, this);

          _defineProperty(this, "judge_time", 3);

          _defineProperty(this, "during_time", 0);
        }

        judge() {
          for (var i = 1; i < 5; i++) {
            var node = find("Canvas/Hedgehog" + i);
            if (Math.abs(node.position.y - this.y) <= 250) return false;
          }

          return true;
        }

        start() {
          let ifreset = Math.random();
          if (ifreset < 0.15 && this.judge()) this.reset();else this.node.setPosition(0, -1000, 0); // [3]
        }

        reset() {
          this.node.setPosition(Math.random() * (200 + 186) - 186, this.y, 0);
          let dir = Math.random();

          if (dir < 0.5) {
            this.node.setScale(-0.25, 0.25, 0.25);
          } else {
            this.node.setScale(0.25, 0.25, 0.25);
          }

          let ifmove = Math.random();

          if (ifmove > 0.5) {
            let rgd = this.node.getComponent(RigidBody2D);

            if (dir < 0.5) {
              rgd.linearVelocity = v2(-5, -15);
            } else {
              rgd.linearVelocity = v2(5, -15);
            }
          } else {
            let rgd = this.node.getComponent(RigidBody2D);
            rgd.linearVelocity = v2(0, -15);
          }
        }

        update(deltaTime) {
          this.during_time += deltaTime; // [4]

          if (this.during_time > this.judge_time && this.node.getPosition().y < -870) {
            this.during_time = 0;
            let ifreset = Math.random();
            if (ifreset < 0.5 && this.judge()) this.reset();
          }

          let rgd = this.node.getComponent(RigidBody2D);

          if (this.node.getPosition().x <= -186 || this.node.getPosition().x >= 200) {
            rgd.linearVelocity = v2(-rgd.linearVelocity.x, rgd.linearVelocity.y);
            this.node.setScale(-this.node.getScale().x, this.node.getScale().y, this.node.getScale().z);
          }
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
//# sourceMappingURL=BeeController.js.map