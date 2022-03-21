System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Animation, _decorator, Component, find, RigidBody2D, v2, Collider2D, Contact2DType, monkey_controller, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, HedgehogSTATE, HedgehogController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmonkey_controller(extras) {
    _reporterNs.report("monkey_controller", "./monkey_controller", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Animation = _cc.Animation;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      find = _cc.find;
      RigidBody2D = _cc.RigidBody2D;
      v2 = _cc.v2;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      monkey_controller = _unresolved_2.monkey_controller;
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

      (function (HedgehogSTATE) {
        HedgehogSTATE[HedgehogSTATE["UPRUNNING"] = 0] = "UPRUNNING";
        HedgehogSTATE[HedgehogSTATE["DOWNRUNNING"] = 1] = "DOWNRUNNING";
        HedgehogSTATE[HedgehogSTATE["IDLE"] = 2] = "IDLE";
        HedgehogSTATE[HedgehogSTATE["DEAD"] = 3] = "DEAD";
      })(HedgehogSTATE || (HedgehogSTATE = {}));

      _export("HedgehogController", HedgehogController = (_dec = ccclass('HedgehogController'), _dec2 = property(Number), _dec3 = property(Number), _dec4 = property(Number), _dec5 = property(Number), _dec6 = property(Number), _dec7 = property(_crd && monkey_controller === void 0 ? (_reportPossibleCrUseOfmonkey_controller({
        error: Error()
      }), monkey_controller) : monkey_controller), _dec8 = property(Number), _dec(_class = (_class2 = (_temp = class HedgehogController extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "during_time", 0);

          _defineProperty(this, "state", HedgehogSTATE.IDLE);

          _initializerDefineProperty(this, "y", _descriptor, this);

          _initializerDefineProperty(this, "judge_time", _descriptor2, this);

          _initializerDefineProperty(this, "run_possibility", _descriptor3, this);

          _initializerDefineProperty(this, "up_possibility", _descriptor4, this);

          _initializerDefineProperty(this, "revert_possibility", _descriptor5, this);

          _initializerDefineProperty(this, "mk_controller", _descriptor6, this);

          _initializerDefineProperty(this, "speed", _descriptor7, this);
        }

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        moveway() {
          var ifrun = Math.random();
          var ani = this.getComponent(Animation);
          var rgd = this.getComponent(RigidBody2D);

          if (ifrun < this.run_possibility) {
            if (this.node.getScale().x < 0) {
              rgd.linearVelocity = v2(0, this.speed - 3);
              this.state = HedgehogSTATE.DOWNRUNNING;
            } else {
              rgd.linearVelocity = v2(0, this.speed + 3);
              this.state = HedgehogSTATE.UPRUNNING;
            }

            ani.play("Hedgehog_Walking");
          } else {
            rgd.linearVelocity = v2(0, this.speed);
            this.state = HedgehogSTATE.IDLE;
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
          var up_or_down = Math.random();
          var l_or_r = Math.random();

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
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          if (otherCollider.tag == 2) {
            this.state = HedgehogSTATE.DEAD;
            var rgd = this.node.getComponent(RigidBody2D);
            rgd.linearVelocity = v2(0, this.speed);
            var ani = this.node.getComponent(Animation);
            ani.play("Hedgehog_Smoke");
          }
        }

        start() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }

          var ifup = Math.random();

          if (ifup < this.up_possibility) {
            this.reset();
          } else {
            this.node.setPosition(340, -1000, 0);
          } // [3]

        }

        update(deltaTime) {
          if (this.mk_controller.mk_state == 0) {
            var ltree = find("Canvas/ltree");
            var ltree_rgd = ltree.getComponent(RigidBody2D);
            this.during_time += deltaTime;
            var rgd = this.getComponent(RigidBody2D);
            this.speed = ltree_rgd.linearVelocity.y; //update speed

            switch (this.state) {
              case HedgehogSTATE.DOWNRUNNING:
                rgd.linearVelocity = v2(0, this.speed - 3);
                break;

              case HedgehogSTATE.UPRUNNING:
                rgd.linearVelocity = v2(0, this.speed + 3);
                break;

              case HedgehogSTATE.IDLE:
                rgd.linearVelocity = v2(0, this.speed);
                break;

              case HedgehogSTATE.DEAD:
                var _ani = this.node.getComponent(Animation);

                if (_ani.getState("Hedgehog_Smoke").isPlaying == false) {
                  this.state = HedgehogSTATE.IDLE;
                  rgd.linearVelocity = v2(0, this.speed);
                  this.node.setPosition(340, -1000, 0);
                }

                break;
            }

            if (this.during_time > this.judge_time && this.node.getPosition().y < -870 && this.judge()) {
              this.during_time = 0;
              var ifrevert = Math.random();

              if (ifrevert < this.revert_possibility) {
                this.reset();
              }
            }

            var ani = this.getComponent(Animation);

            if (ani.getState("Hedgehog_Walking").isPlaying == true) {
              if (this.judgerun() == false) {
                if (this.state == HedgehogSTATE.DOWNRUNNING) {
                  this.state = HedgehogSTATE.UPRUNNING;
                  this.node.setScale(0.25, this.node.getScale().y, this.node.getScale().z);
                  rgd.linearVelocity = v2(0, this.speed + 3);
                } else if (this.state == HedgehogSTATE.UPRUNNING) {
                  this.state = HedgehogSTATE.DOWNRUNNING;
                  this.node.setScale(-0.25, this.node.getScale().y, this.node.getScale().z);
                  rgd.linearVelocity = v2(0, this.speed - 3);
                }
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
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "mk_controller", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec8], {
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