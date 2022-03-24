System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, PhysicsSystem2D, RigidBody2D, v2, AudioSource, _dec, _class, _temp, _crd, ccclass, property, shieldControl;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      RigidBody2D = _cc.RigidBody2D;
      v2 = _cc.v2;
      AudioSource = _cc.AudioSource;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "113949Yr0FAYK86HyRXxcBW", "shieldControl", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("shieldControl", shieldControl = (_dec = ccclass('shieldControl'), _dec(_class = (_temp = class shieldControl extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "hp", 1);

          _defineProperty(this, "audio", null);
        }

        onLoad() {
          //开启物理系统
          PhysicsSystem2D.instance.enable = true;
        }

        start() {
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

        die() {
          this.hp--;
          this.audio.play();
        }

      }, _temp)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=shieldControl.js.map