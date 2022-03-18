System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Animation, _decorator, Component, find, RigidBody2D, v2, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp, _crd, ccclass, property, HedgehogController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Animation = _cc.Animation;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
      RigidBody2D = _cc.RigidBody2D;
      v2 = _cc.v2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "703044trERFCJ4os7dTbgnl", "HedgehogController", undefined);

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

      _export("HedgehogController", HedgehogController = (_dec = ccclass('HedgehogController'), _dec2 = property(Number), _dec3 = property(Number), _dec4 = property(Number), _dec5 = property(Number), _dec6 = property(Number), _dec(_class = (_class2 = (_temp = class HedgehogController extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "during_time", 0);

          _initializerDefineProperty(this, "y", _descriptor, this);

          _initializerDefineProperty(this, "judge_time", _descriptor2, this);

          _initializerDefineProperty(this, "run_possibility", _descriptor3, this);

          _initializerDefineProperty(this, "up_possibility", _descriptor4, this);

          _initializerDefineProperty(this, "revert_possibility", _descriptor5, this);
        }

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        moveway() {
          let ifrun = Math.random();
          let ani = this.getComponent(Animation);
          let rgd = this.getComponent(RigidBody2D);

          if (ifrun < this.run_possibility) {
            if (this.node.getScale().x < 0) rgd.linearVelocity = v2(0, -18);else rgd.linearVelocity = v2(0, -12);
            ani.play("Hedgehog_Walking");
          } else {
            rgd.linearVelocity = v2(0, -15);
            ani.play("Hedgehog_Idle");
          }
        }

        judgerun() {
          var y = this.node.getPosition().y;

          for (var i = 1; i < 5; i++) {
            var node = find("Canvas/Hedgehog" + i);
            if ("Hedgehog" + i != this.node.name && Math.abs(node.position.y - y) <= 300) return false;
          }

          var bee_node = find("Canvas/Bee");
          if (Math.abs(bee_node.position.y - y) <= 300) return false;
          return true;
        }

        judge() {
          for (var i = 1; i < 5; i++) {
            var node = find("Canvas/Hedgehog" + i);
            if (Math.abs(node.position.y - this.y) <= 300) return false;
          }

          var bee_node = find("Canvas/Bee");
          if (Math.abs(bee_node.position.y - this.y) <= 300) return false;
          return true;
        }

        reset() {
          let up_or_down = Math.random();
          let l_or_r = Math.random();

          if (l_or_r > 0.5) {
            if (up_or_down < 0.5) {
              this.node.setScale(-0.25, 0.25, 0.25);
            } else {
              this.node.setScale(0.25, 0.25, 0.25);
            }

            this.node.setPosition(340, this.y, 0);
          } else {
            if (up_or_down < 0.5) this.node.setScale(-0.25, -0.25, 0.25);else this.node.setScale(0.25, -0.25, 0.25);
            this.node.setPosition(-326, this.y, 0);
          }

          this.moveway();
          console.log("set");
        }

        start() {
          let ifup = Math.random();

          if (ifup < this.up_possibility) {
            this.reset();
          } else {
            this.node.setPosition(340, -1000, 0);
          } // [3]

        }

        update(deltaTime) {
          this.during_time += deltaTime;
          console.log(this.during_time);

          if (this.during_time > this.judge_time && this.node.getPosition().y < -870 && this.judge()) {
            console.log("update!");
            this.during_time = 0;
            let ifrevert = Math.random();

            if (ifrevert < this.revert_possibility) {
              this.reset();
            }
          }

          let ani = this.getComponent(Animation);

          if (ani.getState("Hedgehog_Walking").isPlaying == true) {
            if (this.judgerun() == false) {
              let rgd = this.getComponent(RigidBody2D);

              if (rgd.linearVelocity.y == -18) {
                this.node.setScale(0.25, this.node.getScale().y, this.node.getScale().z);
                rgd.linearVelocity = v2(0, -12);
              } else {
                this.node.setScale(-0.25, this.node.getScale().y, this.node.getScale().z);
                rgd.linearVelocity = v2(0, -18);
              }
            }
          } // [4]

        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "y", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "judge_time", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "run_possibility", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "up_possibility", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "revert_possibility", [_dec6], {
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
//# sourceMappingURL=HedgehogController.js.map