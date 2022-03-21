System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, v2, find, _decorator, Component, Label, RigidBody2D, BeeController, HedgehogController, monkey_controller, TreeController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _temp, _crd, ccclass, property, LEVEL, CanvasController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBeeController(extras) {
    _reporterNs.report("BeeController", "./BeeController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHedgehogController(extras) {
    _reporterNs.report("HedgehogController", "./HedgehogController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmonkey_controller(extras) {
    _reporterNs.report("monkey_controller", "./monkey_controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTreeController(extras) {
    _reporterNs.report("TreeController", "./TreeController", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      v2 = _cc.v2;
      find = _cc.find;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      RigidBody2D = _cc.RigidBody2D;
    }, function (_unresolved_2) {
      BeeController = _unresolved_2.BeeController;
    }, function (_unresolved_3) {
      HedgehogController = _unresolved_3.HedgehogController;
    }, function (_unresolved_4) {
      monkey_controller = _unresolved_4.monkey_controller;
    }, function (_unresolved_5) {
      TreeController = _unresolved_5.TreeController;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7686d59tL5CZKbnp2v7HaO4", "CanvasController", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = CanvasController
       * DateTime = Mon Mar 14 2022 19:42:21 GMT+0800 (中国标准时间)
       * Author = AlexiosLHB
       * FileBasename = CanvasController.ts
       * FileBasenameNoExtension = CanvasController
       * URL = db://assets/CanvasController.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      (function (LEVEL) {
        LEVEL[LEVEL["LEVEL1"] = 0] = "LEVEL1";
        LEVEL[LEVEL["LEVEL2"] = 1] = "LEVEL2";
        LEVEL[LEVEL["LEVEL3"] = 2] = "LEVEL3";
        LEVEL[LEVEL["LEVEL4"] = 3] = "LEVEL4";
        LEVEL[LEVEL["LEVEL5"] = 4] = "LEVEL5";
      })(LEVEL || (LEVEL = {}));

      _export("CanvasController", CanvasController = (_dec = ccclass('CanvasController'), _dec2 = property(Label), _dec3 = property(_crd && monkey_controller === void 0 ? (_reportPossibleCrUseOfmonkey_controller({
        error: Error()
      }), monkey_controller) : monkey_controller), _dec4 = property(_crd && HedgehogController === void 0 ? (_reportPossibleCrUseOfHedgehogController({
        error: Error()
      }), HedgehogController) : HedgehogController), _dec5 = property(_crd && HedgehogController === void 0 ? (_reportPossibleCrUseOfHedgehogController({
        error: Error()
      }), HedgehogController) : HedgehogController), _dec6 = property(_crd && HedgehogController === void 0 ? (_reportPossibleCrUseOfHedgehogController({
        error: Error()
      }), HedgehogController) : HedgehogController), _dec7 = property(_crd && HedgehogController === void 0 ? (_reportPossibleCrUseOfHedgehogController({
        error: Error()
      }), HedgehogController) : HedgehogController), _dec8 = property(_crd && BeeController === void 0 ? (_reportPossibleCrUseOfBeeController({
        error: Error()
      }), BeeController) : BeeController), _dec9 = property(_crd && TreeController === void 0 ? (_reportPossibleCrUseOfTreeController({
        error: Error()
      }), TreeController) : TreeController), _dec10 = property(_crd && TreeController === void 0 ? (_reportPossibleCrUseOfTreeController({
        error: Error()
      }), TreeController) : TreeController), _dec11 = property(_crd && TreeController === void 0 ? (_reportPossibleCrUseOfTreeController({
        error: Error()
      }), TreeController) : TreeController), _dec12 = property(_crd && TreeController === void 0 ? (_reportPossibleCrUseOfTreeController({
        error: Error()
      }), TreeController) : TreeController), _dec(_class = (_class2 = (_temp = class CanvasController extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "score_improve_timeline", 0.2);

          _defineProperty(this, "score_during_time", 0);

          _defineProperty(this, "level", LEVEL.LEVEL1);

          _initializerDefineProperty(this, "score", _descriptor, this);

          _initializerDefineProperty(this, "mk_controller", _descriptor2, this);

          _initializerDefineProperty(this, "hedgehog1", _descriptor3, this);

          _initializerDefineProperty(this, "hedgehog2", _descriptor4, this);

          _initializerDefineProperty(this, "hedgehog3", _descriptor5, this);

          _initializerDefineProperty(this, "hedgehog4", _descriptor6, this);

          _initializerDefineProperty(this, "bee", _descriptor7, this);

          _initializerDefineProperty(this, "ltree", _descriptor8, this);

          _initializerDefineProperty(this, "ltree2", _descriptor9, this);

          _initializerDefineProperty(this, "rtree", _descriptor10, this);

          _initializerDefineProperty(this, "rtree2", _descriptor11, this);
        }

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {
          this.score.string = "0"; // [3]
        }

        update(deltaTime) {
          if (this.mk_controller.mk_state == 0) {
            this.score_during_time += deltaTime;
            var ltree = find("Canvas/ltree");
            var ltree_rgd = ltree.getComponent(RigidBody2D);
            var ltree_speed = ltree_rgd.linearVelocity.y; // let rtree = find("Canvas/rtree");
            // let rtree_rgd = rtree.getComponent(RigidBody2D);
            // rtree_rgd.linearVelocity = ltree_rgd.linearVelocity;
            // let ltree2 = find("Canvas/ltree2");
            // let ltree2_rgd = ltree2.getComponent(RigidBody2D);
            // ltree2_rgd.linearVelocity = ltree_rgd.linearVelocity;
            // let rtree2 = find("Canvas/rtree2");
            // let rtree2_rgd = rtree2.getComponent(RigidBody2D);
            // rtree2_rgd.linearVelocity = ltree_rgd.linearVelocity;

            if (this.score_during_time > this.score_improve_timeline) {
              this.score_during_time = 0;
              this.score.string = parseInt(this.score.string) + Math.ceil(-ltree_speed * deltaTime) + "";
            }

            switch (this.level) {
              case LEVEL.LEVEL1:
                if (parseInt(this.score.string) > 40) {
                  var _ltree_rgd = this.ltree.getComponent(RigidBody2D);

                  var origin_speed = _ltree_rgd.linearVelocity.y;
                  _ltree_rgd.linearVelocity = v2(0, origin_speed - 5);
                  var ltree2_rgd = this.ltree2.getComponent(RigidBody2D);
                  ltree2_rgd.linearVelocity = v2(0, origin_speed - 5);
                  var rtree_rgd = this.rtree.getComponent(RigidBody2D);
                  rtree_rgd.linearVelocity = v2(0, origin_speed - 5);
                  var rtree2_rgd = this.rtree2.getComponent(RigidBody2D);
                  rtree2_rgd.linearVelocity = v2(0, origin_speed - 5);
                  this.level = LEVEL.LEVEL2;
                }

                break;

              case LEVEL.LEVEL2:
                if (parseInt(this.score.string) > 80) {
                  var _ltree_rgd2 = this.ltree.getComponent(RigidBody2D);

                  var _origin_speed = _ltree_rgd2.linearVelocity.y;
                  _ltree_rgd2.linearVelocity = v2(0, _origin_speed - 5);

                  var _ltree2_rgd = this.ltree2.getComponent(RigidBody2D);

                  _ltree2_rgd.linearVelocity = v2(0, _origin_speed - 5);

                  var _rtree_rgd = this.rtree.getComponent(RigidBody2D);

                  _rtree_rgd.linearVelocity = v2(0, _origin_speed - 5);

                  var _rtree2_rgd = this.rtree2.getComponent(RigidBody2D);

                  _rtree2_rgd.linearVelocity = v2(0, _origin_speed - 5);
                  this.level = LEVEL.LEVEL3;
                }

                break;

              case LEVEL.LEVEL3:
                if (parseInt(this.score.string) > 120) {
                  var _ltree_rgd3 = this.ltree.getComponent(RigidBody2D);

                  var _origin_speed2 = _ltree_rgd3.linearVelocity.y;
                  _ltree_rgd3.linearVelocity = v2(0, _origin_speed2 - 5);

                  var _ltree2_rgd2 = this.ltree2.getComponent(RigidBody2D);

                  _ltree2_rgd2.linearVelocity = v2(0, _origin_speed2 - 5);

                  var _rtree_rgd2 = this.rtree.getComponent(RigidBody2D);

                  _rtree_rgd2.linearVelocity = v2(0, _origin_speed2 - 5);

                  var _rtree2_rgd2 = this.rtree2.getComponent(RigidBody2D);

                  _rtree2_rgd2.linearVelocity = v2(0, _origin_speed2 - 5);
                  this.level = LEVEL.LEVEL4;
                }

                break;

              case LEVEL.LEVEL4:
                if (parseInt(this.score.string) > 150) {
                  var _ltree_rgd4 = this.ltree.getComponent(RigidBody2D);

                  var _origin_speed3 = _ltree_rgd4.linearVelocity.y;
                  _ltree_rgd4.linearVelocity = v2(0, _origin_speed3 - 5);

                  var _ltree2_rgd3 = this.ltree2.getComponent(RigidBody2D);

                  _ltree2_rgd3.linearVelocity = v2(0, _origin_speed3 - 5);

                  var _rtree_rgd3 = this.rtree.getComponent(RigidBody2D);

                  _rtree_rgd3.linearVelocity = v2(0, _origin_speed3 - 5);

                  var _rtree2_rgd3 = this.rtree2.getComponent(RigidBody2D);

                  _rtree2_rgd3.linearVelocity = v2(0, _origin_speed3 - 5);
                  this.level = LEVEL.LEVEL5;
                }

            }
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "mk_controller", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hedgehog1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hedgehog2", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "hedgehog3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "hedgehog4", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bee", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ltree", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ltree2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "rtree", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "rtree2", [_dec12], {
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
//# sourceMappingURL=CanvasController.js.map