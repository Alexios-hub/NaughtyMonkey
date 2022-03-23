System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, PhysicsSystem2D, EPhysics2DDrawFlags, RigidBody2D, v2, v3, AudioSource, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, bananaControl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      EPhysics2DDrawFlags = _cc.EPhysics2DDrawFlags;
      RigidBody2D = _cc.RigidBody2D;
      v2 = _cc.v2;
      v3 = _cc.v3;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3b87WBl7JN95MvHBY8QBll", "bananaControl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("bananaControl", bananaControl = (_dec = ccclass('bananaControl'), _dec(_class = (_class2 = (_temp = class bananaControl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "isDebug", _descriptor, this);

          _defineProperty(this, "addNumOfBanana", void 0);

          _defineProperty(this, "hp", 1);

          _defineProperty(this, "audio", null);
        }

        onLoad() {
          //开启物理系统
          PhysicsSystem2D.instance.enable = true;

          if (this.isDebug) {
            PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.All;
          } else {
            PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.None;
          }
        }

        start() {
          if (this.node.position.x < 0) {
            this.node.scale = v3(-1, 1, 1);
          }

          this.getComponent(RigidBody2D).linearVelocity = v2(0, -15);
          this.audio = this.node.getComponent(AudioSource);
        }

        update(deltaTime) {
          if (this.node.position.y < -2200) {
            this.hp--;
          }

          if (this.hp < 1) {
            this.node.destroy();
          }
        }

        BeEaten() {
          this.hp--;
          this.addNumOfBanana();
          this.audio.play();
          console.debug('yy');
        }

        die() {
          this.node.destroy();
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "isDebug", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bananaControl.js.map