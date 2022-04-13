System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Animation, v2, _decorator, Component, RigidBody2D, find, Collider2D, Contact2DType, monkey_controller, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, BEESTATE, BeeController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmonkey_controller(extras) {
    _reporterNs.report("monkey_controller", "./monkey_controller", _context.meta, extras);
  }

  _export("BEESTATE", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      Animation = _cc.Animation;
      v2 = _cc.v2;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RigidBody2D = _cc.RigidBody2D;
      find = _cc.find;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      monkey_controller = _unresolved_2.monkey_controller;
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

      (function (BEESTATE) {
        BEESTATE[BEESTATE["ALIVE"] = 0] = "ALIVE";
        BEESTATE[BEESTATE["DEAD"] = 1] = "DEAD";
      })(BEESTATE || _export("BEESTATE", BEESTATE = {}));

      _export("BeeController", BeeController = (_dec = ccclass('BeeController'), _dec2 = property(Number), _dec3 = property(_crd && monkey_controller === void 0 ? (_reportPossibleCrUseOfmonkey_controller({
        error: Error()
      }), monkey_controller) : monkey_controller), _dec4 = property(Number), _dec(_class = (_class2 = (_temp = class BeeController extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "judge_time", 3);

          _defineProperty(this, "during_time", 0);

          _defineProperty(this, "state", BEESTATE.ALIVE);

          _initializerDefineProperty(this, "y", _descriptor, this);

          _initializerDefineProperty(this, "mk_controller", _descriptor2, this);

          _initializerDefineProperty(this, "speed", _descriptor3, this);
        }

        judge() {
          for (var i = 1; i < 5; i++) {
            var node = find("Canvas/Hedgehog" + i);
            if (Math.abs(node.position.y - this.y) <= 250) return false;
          }

          return true;
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          if (otherCollider.tag == 2) {
            this.state = BEESTATE.DEAD;
            var ani = this.node.getComponent(Animation);
            ani.play("Bee_Smoke");
          }
        }

        start() {
          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          }

          var ifreset = Math.random();
          if (ifreset < 0.15 && this.judge()) this.reset();else this.node.setPosition(0, -1000, 0); // [3]
        }

        reset() {
          var ani = this.node.getComponent(Animation);
          ani.play("Bee_Idle");
          this.state = BEESTATE.ALIVE;
          var ltree = find("Canvas/ltree");
          var ltree_rgd = ltree.getComponent(RigidBody2D);
          this.node.setPosition(Math.random() * (200 + 186) - 186, this.y, 0);
          var dir = Math.random();

          if (dir < 0.5) {
            this.node.setScale(-0.25, 0.25, 0.25);
          } else {
            this.node.setScale(0.25, 0.25, 0.25);
          }

          var ifmove = Math.random();

          if (ifmove > 0.5) {
            var rgd = this.node.getComponent(RigidBody2D);

            if (dir < 0.5) {
              rgd.linearVelocity = v2(-5, this.speed);
            } else {
              rgd.linearVelocity = v2(5, this.speed);
            }
          } else {
            var _rgd = this.node.getComponent(RigidBody2D);

            _rgd.linearVelocity = v2(0, this.speed);
          }
        }

        update(deltaTime) {
          if (this.mk_controller.mk_state == 0) {
            var ltree = find("Canvas/ltree");
            var ltree_rgd = ltree.getComponent(RigidBody2D);
            var rgd = this.getComponent(RigidBody2D);
            this.speed = ltree_rgd.linearVelocity.y;
            rgd.linearVelocity = v2(rgd.linearVelocity.x, this.speed);
            this.during_time += deltaTime; // [4]

            if (this.during_time > this.judge_time && this.node.getPosition().y < -870) {
              this.during_time = 0;
              var ifreset = Math.random();
              if (ifreset < 0.5 && this.judge()) this.reset();
            }

            var ani = this.node.getComponent(Animation);

            if (this.state == BEESTATE.DEAD && ani.getState("Bee_Smoke").isPlaying == false) {
              this.state = BEESTATE.ALIVE;
              this.node.setPosition(0, -1000, 0);
            }

            if (this.node.getPosition().x <= -186 || this.node.getPosition().x >= 200) {
              rgd.linearVelocity = v2(-rgd.linearVelocity.x, rgd.linearVelocity.y);
              this.node.setScale(-this.node.getScale().x, this.node.getScale().y, this.node.getScale().z);
            }
          }
        }

        die() {
          this.node.getComponent(Animation).play('Bee_Smoke');
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "y", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mk_controller", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec4], {
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