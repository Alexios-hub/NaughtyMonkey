System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, v2, Animation, _decorator, Component, Input, input, Collider2D, Contact2DType, RigidBody2D, find, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, monkey_state, monkey_controller;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  _export("monkey_state", void 0);

  return {
    setters: [function (_cc) {
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
        monkey_state[monkey_state["INVINCIBLE"] = 2] = "INVINCIBLE";
      })(monkey_state || _export("monkey_state", monkey_state = {}));

      _export("monkey_controller", monkey_controller = (_dec = ccclass('monkey_controller'), _dec2 = property(Number), _dec(_class = (_class2 = (_temp = class monkey_controller extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "mk_state", void 0);

          _defineProperty(this, "buff_count", 0);

          _initializerDefineProperty(this, "NumOfHedgehogs", _descriptor, this);
        }

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        onBeginContact(selfCollider, otherCollider, contact) {
          // 只在两个碰撞体开始接触时被调用一次
          let ani = this.node.getComponent(Animation);
          let monkey_rgd = this.node.getComponent(RigidBody2D);
          let ltree = find("Canvas/ltree");
          let ltree_rgd = ltree.getComponent(RigidBody2D);
          let ltree2 = find("Canvas/ltree2");
          let ltree2_rgd = ltree2.getComponent(RigidBody2D);
          let rtree = find("Canvas/rtree");
          let rtree_rgd = rtree.getComponent(RigidBody2D);
          let rtree2 = find("Canvas/rtree2");
          let rtree2_rgd = rtree2.getComponent(RigidBody2D);
          let bee = find("Canvas/Bee");
          let bee_rgd = bee.getComponent(RigidBody2D);
          let bird = find("Canvas/Bird");
          let bird_rgd = bird.getComponent(RigidBody2D); // 碰到鸟判定鸟死亡，除此以外判定猴子死亡
          // TAG == 10 => 鸟的tag是10

          if (otherCollider.tag == 10) {
            let bird_animation = bird.getComponent(Animation);
            bird_animation.play("bird_smoke");
            this.buff_count++; // 积累三个buff之后进入无敌（冲刺）模式

            if (this.buff_count == 3) {// 无敌模式相关内容还没做
              // this.mk_state = monkey_state.INVINCIBLE;
            }
          } else {
            monkey_rgd.linearVelocity = v2(0, -25);
            this.mk_state = monkey_state.DEAD;
            ltree_rgd.linearVelocity = v2(0, 0);
            ltree2_rgd.linearVelocity = v2(0, 0);
            rtree_rgd.linearVelocity = v2(0, 0);
            rtree2_rgd.linearVelocity = v2(0, 0);

            for (var i = 1; i < this.NumOfHedgehogs + 1; i++) {
              var HedgeHogNode = find("Canvas/Hedgehog" + i);
              var Hedgehog_rgd = HedgeHogNode.getComponent(RigidBody2D);
              Hedgehog_rgd.linearVelocity = v2(0, 0);
            }

            bee_rgd.linearVelocity = v2(0, 0);
            bird_rgd.linearVelocity = v2(0, 0);
            ani.play("monkey_dying");
          }

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
          input.on(Input.EventType.MOUSE_DOWN, event => {
            let ani = this.node.getComponent(Animation);

            if (ani.getState("monkey_runninng").isPlaying == true) {
              let x = this.node.getPosition().x;

              if (x > 0) {
                this.node.setScale(0.3, -0.3, 0);
                ani.play("monkey_jumpingtoleft");
              } else if (x < 0) {
                this.node.setScale(0.3, 0.3, 0);
                ani.play("monkey_jumpingtoright");
              }
            }
          });
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
          } // [3]

        }

        update(deltaTime) {
          let ani = this.node.getComponent(Animation);

          if (ani.getState("monkey_runninng").isPlaying == false && ani.getState("monkey_jumpingtoleft").isPlaying == false && ani.getState("monkey_jumpingtoright").isPlaying == false && this.mk_state == monkey_state.ALIVE) {
            ani.play("monkey_runninng");
          } // [4]

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