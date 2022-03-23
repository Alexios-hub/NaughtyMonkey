System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, instantiate, v3, Label, bananaControl, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, bananaManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfbananaControl(extras) {
    _reporterNs.report("bananaControl", "./bananaControl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      v3 = _cc.v3;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      bananaControl = _unresolved_2.bananaControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2088a47/6hHgZr5Zb2CdQaj", "bananaManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("bananaManager", bananaManager = (_dec = ccclass('bananaManager'), _dec2 = property(Prefab), _dec3 = property(Label), _dec(_class = (_class2 = (_temp = class bananaManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "banana", _descriptor, this);

          _initializerDefineProperty(this, "numLabel", _descriptor2, this);

          _defineProperty(this, "time", 1);

          _defineProperty(this, "num", 0);
        }

        start() {
          this.schedule(() => {
            this.appearBanana();
          }, this.time);
        } //产生香蕉


        appearBanana() {
          var Bnode = instantiate(this.banana);
          Bnode.setParent(this.node);
          var x1 = -300;

          if (Math.random() * 10 > 5) {
            x1 = 320;
          }

          Bnode.position = v3(x1, 0, 0); //吃到香蕉，添加数量

          Bnode.getComponent(_crd && bananaControl === void 0 ? (_reportPossibleCrUseOfbananaControl({
            error: Error()
          }), bananaControl) : bananaControl).addNumOfBanana = () => {
            if (this.num < 2) {
              this.num++;
            } else {
              this.num = 0;
            }

            console.debug(this.num);
            this.numLabel.string = this.num + "";
          };
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "banana", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "numLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bananaManager.js.map