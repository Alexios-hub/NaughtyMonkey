System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, v2, Animation, _decorator, Component, Input, input, Collider2D, Contact2DType, RigidBody2D, find, HedgehogController, bananaControl, shieldControl, bananaManager, BeeController, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, monkey_state, monkey_controller;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfHedgehogController(extras) {
    _reporterNs.report("HedgehogController", "./HedgehogController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbananaControl(extras) {
    _reporterNs.report("bananaControl", "./script/bananaControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfshieldControl(extras) {
    _reporterNs.report("shieldControl", "./script/shieldControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfbananaManager(extras) {
    _reporterNs.report("bananaManager", "./script/bananaManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBeeController(extras) {
    _reporterNs.report("BeeController", "./BeeController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      v2 = _cc.v2;
      Animation = _cc.Animation;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Input = _cc.Input;
      input = _cc.input;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      RigidBody2D = _cc.RigidBody2D;
      find = _cc.find;
    }, function (_unresolved_2) {
      HedgehogController = _unresolved_2.HedgehogController;
    }, function (_unresolved_3) {
      bananaControl = _unresolved_3.bananaControl;
    }, function (_unresolved_4) {
      shieldControl = _unresolved_4.shieldControl;
    }, function (_unresolved_5) {
      bananaManager = _unresolved_5.bananaManager;
    }, function (_unresolved_6) {
      BeeController = _unresolved_6.BeeController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f9f6tZfYlFkLE8tdJ/1prg", "monkey_controller", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = monkey_controller
       * DateTime = Sun Mar 13 2022 21:48:57 GMT+0800 (中国标准时间)
       * Author = AlexiosLHB
       * FileBasename = monkey_controller.ts
       * FileBasenameNoExtension = monkey_controller
       * URL = db://assets/monkey_controller.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      (function (monkey_state) {
        monkey_state[monkey_state["ALIVE"] = 0] = "ALIVE";
        monkey_state[monkey_state["DEAD"] = 1] = "DEAD";
      })(monkey_state || (monkey_state = {}));

      _export("monkey_controller", monkey_controller = (_dec = ccclass('monkey_controller'), _dec2 = property(Number), _dec(_class = (_class2 = (_temp = class monkey_controller extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "NumOfHedgehogs", _descriptor, this);

          _defineProperty(this, "mk_state", void 0);

          _defineProperty(this, "isInvincible", 0);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          //吃香蕉
          if (otherCollider.tag == 10) {
            otherCollider.getComponent(_crd && bananaControl === void 0 ? (_reportPossibleCrUseOfbananaControl({
              error: Error()
            }), bananaControl) : bananaControl).BeEaten();
            var bMan = find('Canvas/BananaManager');
            var num = bMan.getComponent(_crd && bananaManager === void 0 ? (_reportPossibleCrUseOfbananaManager({
              error: Error()
            }), bananaManager) : bananaManager).num;

            if (num == 0) {
              this.eatBanana();
            }

            return;
          } else if (otherCollider.tag == 11) {
            //吃盾
            otherCollider.getComponent(_crd && shieldControl === void 0 ? (_reportPossibleCrUseOfshieldControl({
              error: Error()
            }), shieldControl) : shieldControl).die();
            this.eatShield();
            return;
          }

          if (this.isInvincible > 0) {
            if (otherCollider.tag == 0) {
              otherCollider.getComponent(_crd && HedgehogController === void 0 ? (_reportPossibleCrUseOfHedgehogController({
                error: Error()
              }), HedgehogController) : HedgehogController).die();
            } else if (otherCollider.tag == 1) {
              otherCollider.getComponent(_crd && BeeController === void 0 ? (_reportPossibleCrUseOfBeeController({
                error: Error()
              }), BeeController) : BeeController).die();
            }

            return;
          } // 只在两个碰撞体开始接触时被调用一次


          var ani = this.node.getComponent(Animation);
          var monkey_rgd = this.node.getComponent(RigidBody2D);
          monkey_rgd.linearVelocity = v2(0, -25);
          this.mk_state = monkey_state.DEAD;
          var ltree = find("Canvas/ltree");
          var ltree_rgd = ltree.getComponent(RigidBody2D);
          ltree_rgd.linearVelocity = v2(0, 0);
          var ltree2 = find("Canvas/ltree2");
          var ltree2_rgd = ltree2.getComponent(RigidBody2D);
          ltree2_rgd.linearVelocity = v2(0, 0);
          var rtree = find("Canvas/rtree");
          var rtree_rgd = rtree.getComponent(RigidBody2D);
          rtree_rgd.linearVelocity = v2(0, 0);
          var rtree2 = find("Canvas/rtree2");
          var rtree2_rgd = rtree2.getComponent(RigidBody2D);
          rtree2_rgd.linearVelocity = v2(0, 0);

          for (var i = 1; i < this.NumOfHedgehogs + 1; i++) {
            var HedgeHogNode = find("Canvas/Hedgehog" + i);
            var Hedgehog_rgd = HedgeHogNode.getComponent(RigidBody2D);
            Hedgehog_rgd.linearVelocity = v2(0, 0);
          }

          var bee = find("Canvas/Bee");
          var bee_rgd = bee.getComponent(RigidBody2D);
          bee_rgd.linearVelocity = v2(0, 0);
          ani.play("monkey_dying");
          console.log("onBeginContact");
        }

        onEndContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体结束接触时被调用一次
          console.log('onEndContact');
        }

        onPreSolve(selfCollider, otherCollider, contact) {
          // 每次将要处理碰撞体接触逻辑时被调用
          console.log('onPreSolve');
        }

        onPostSolve(selfCollider, otherCollider, contact) {
          // 每次处理完碰撞体接触逻辑时被调用
          console.log('onPostSolve');
        }

        start() {
          this.mk_state = monkey_state.ALIVE;
          var x1 = 0.3;
          input.on(Input.EventType.MOUSE_DOWN, event => {
            var ani = this.node.getComponent(Animation);

            if (ani.getState("monkey_runninng").isPlaying == true) {
              var x = this.node.getPosition().x;

              if (x > 0) {
                if (this.isInvincible > 0) {
                  this.node.setScale(2 * x1, -2 * x1, 0);
                } else {
                  this.node.setScale(0.3, -0.3, 0);
                }

                ani.play("monkey_jumpingtoleft");
              } else if (x < 0) {
                if (this.isInvincible > 0) {
                  this.node.setScale(2 * x1, 2 * x1, 0);
                } else {
                  this.node.setScale(0.3, 0.3, 0);
                }

                ani.play("monkey_jumpingtoright");
              }
            }
          });
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          } // [3]

        }

        update(deltaTime) {
          var ani = this.node.getComponent(Animation);

          if (ani.getState("monkey_runninng").isPlaying == false && ani.getState("monkey_jumpingtoleft").isPlaying == false && ani.getState("monkey_jumpingtoright").isPlaying == false && this.mk_state == monkey_state.ALIVE) {
            ani.play("monkey_runninng");
          }

          if (this.isInvincible > 0) {
            this.isInvincible -= 1;
          } else {
            if (this.node.position.x > 0) {
              this.node.setScale(0.3, 0.3, 1);
            } else {
              this.node.setScale(0.3, -0.3, 1);
            }

            this.isInvincible = 0;
          } // [4]

        } //吃到香蕉


        eatBanana() {
          this.isInvincible = 60 * 3;

          if (this.node.position.x > 0) {
            this.node.setScale(0.6, 0.6, 1);
          } else {
            this.node.setScale(0.6, -0.6, 1);
          }
        } //吃到盾


        eatShield() {
          this.isInvincible = 60 * 3;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "NumOfHedgehogs", [_dec2], {
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
//# sourceMappingURL=monkey_controller.js.map