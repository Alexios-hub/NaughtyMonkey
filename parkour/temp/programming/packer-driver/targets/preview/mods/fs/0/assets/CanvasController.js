System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, v2, find, _decorator, Component, Label, RigidBody2D, Animation, director, BeeController, BEESTATE, HedgehogController, HedgehogSTATE, monkey_controller, monkey_state, TreeController, BirdController, HugeBirdController, StoneController, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _temp, _crd, ccclass, property, LEVEL, CanvasController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBeeController(extras) {
    _reporterNs.report("BeeController", "./BeeController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBEESTATE(extras) {
    _reporterNs.report("BEESTATE", "./BeeController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHedgehogController(extras) {
    _reporterNs.report("HedgehogController", "./HedgehogController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHedgehogSTATE(extras) {
    _reporterNs.report("HedgehogSTATE", "./HedgehogController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmonkey_controller(extras) {
    _reporterNs.report("monkey_controller", "./monkey_controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmonkey_state(extras) {
    _reporterNs.report("monkey_state", "./monkey_controller", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTreeController(extras) {
    _reporterNs.report("TreeController", "./TreeController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBirdController(extras) {
    _reporterNs.report("BirdController", "./BirdController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHugeBirdController(extras) {
    _reporterNs.report("HugeBirdController", "./HugeBirdController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStoneController(extras) {
    _reporterNs.report("StoneController", "./StoneController", _context.meta, extras);
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
      Animation = _cc.Animation;
      director = _cc.director;
    }, function (_unresolved_2) {
      BeeController = _unresolved_2.BeeController;
      BEESTATE = _unresolved_2.BEESTATE;
    }, function (_unresolved_3) {
      HedgehogController = _unresolved_3.HedgehogController;
      HedgehogSTATE = _unresolved_3.HedgehogSTATE;
    }, function (_unresolved_4) {
      monkey_controller = _unresolved_4.monkey_controller;
      monkey_state = _unresolved_4.monkey_state;
    }, function (_unresolved_5) {
      TreeController = _unresolved_5.TreeController;
    }, function (_unresolved_6) {
      BirdController = _unresolved_6.BirdController;
    }, function (_unresolved_7) {
      HugeBirdController = _unresolved_7.HugeBirdController;
    }, function (_unresolved_8) {
      StoneController = _unresolved_8.StoneController;
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

      _export("CanvasController", CanvasController = (_dec = ccclass('CanvasController'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(_crd && monkey_controller === void 0 ? (_reportPossibleCrUseOfmonkey_controller({
        error: Error()
      }), monkey_controller) : monkey_controller), _dec5 = property(_crd && HedgehogController === void 0 ? (_reportPossibleCrUseOfHedgehogController({
        error: Error()
      }), HedgehogController) : HedgehogController), _dec6 = property(_crd && HedgehogController === void 0 ? (_reportPossibleCrUseOfHedgehogController({
        error: Error()
      }), HedgehogController) : HedgehogController), _dec7 = property(_crd && HedgehogController === void 0 ? (_reportPossibleCrUseOfHedgehogController({
        error: Error()
      }), HedgehogController) : HedgehogController), _dec8 = property(_crd && HedgehogController === void 0 ? (_reportPossibleCrUseOfHedgehogController({
        error: Error()
      }), HedgehogController) : HedgehogController), _dec9 = property(_crd && BeeController === void 0 ? (_reportPossibleCrUseOfBeeController({
        error: Error()
      }), BeeController) : BeeController), _dec10 = property(_crd && TreeController === void 0 ? (_reportPossibleCrUseOfTreeController({
        error: Error()
      }), TreeController) : TreeController), _dec11 = property(_crd && TreeController === void 0 ? (_reportPossibleCrUseOfTreeController({
        error: Error()
      }), TreeController) : TreeController), _dec12 = property(_crd && TreeController === void 0 ? (_reportPossibleCrUseOfTreeController({
        error: Error()
      }), TreeController) : TreeController), _dec13 = property(_crd && TreeController === void 0 ? (_reportPossibleCrUseOfTreeController({
        error: Error()
      }), TreeController) : TreeController), _dec14 = property(_crd && StoneController === void 0 ? (_reportPossibleCrUseOfStoneController({
        error: Error()
      }), StoneController) : StoneController), _dec15 = property(_crd && BirdController === void 0 ? (_reportPossibleCrUseOfBirdController({
        error: Error()
      }), BirdController) : BirdController), _dec16 = property(_crd && HugeBirdController === void 0 ? (_reportPossibleCrUseOfHugeBirdController({
        error: Error()
      }), HugeBirdController) : HugeBirdController), _dec(_class = (_class2 = (_temp = class CanvasController extends Component {
        constructor() {
          super(...arguments);

          _defineProperty(this, "score_improve_timeline", 0.2);

          _defineProperty(this, "score_during_time", 0);

          _defineProperty(this, "buff_count_number", void 0);

          _defineProperty(this, "level", LEVEL.LEVEL1);

          _initializerDefineProperty(this, "score", _descriptor, this);

          _initializerDefineProperty(this, "buff_count", _descriptor2, this);

          _initializerDefineProperty(this, "mk_controller", _descriptor3, this);

          _initializerDefineProperty(this, "hedgehog1", _descriptor4, this);

          _initializerDefineProperty(this, "hedgehog2", _descriptor5, this);

          _initializerDefineProperty(this, "hedgehog3", _descriptor6, this);

          _initializerDefineProperty(this, "hedgehog4", _descriptor7, this);

          _initializerDefineProperty(this, "bee", _descriptor8, this);

          _initializerDefineProperty(this, "ltree", _descriptor9, this);

          _initializerDefineProperty(this, "ltree2", _descriptor10, this);

          _initializerDefineProperty(this, "rtree", _descriptor11, this);

          _initializerDefineProperty(this, "rtree2", _descriptor12, this);

          _initializerDefineProperty(this, "stone", _descriptor13, this);

          _initializerDefineProperty(this, "bird", _descriptor14, this);

          _initializerDefineProperty(this, "huge_bird", _descriptor15, this);
        }

        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {
          this.score.string = "0";
          this.buff_count_number = this.mk_controller.buff_count;
          this.buff_count.string = "Buff: " + this.buff_count_number; // let restart_button = find("Canvas/RestartButton");
          // restart_button.active = false;

          director.preloadScene("end_scene"); // [3]
        }

        update(deltaTime) {
          var ltree = find("Canvas/ltree");
          var ltree_rgd = ltree.getComponent(RigidBody2D);
          var ltree_speed = ltree_rgd.linearVelocity.y;
          this.buff_count.string = "Buff: " + this.mk_controller.buff_count;

          if (this.mk_controller.mk_state == (_crd && monkey_state === void 0 ? (_reportPossibleCrUseOfmonkey_state({
            error: Error()
          }), monkey_state) : monkey_state).DEAD) {
            // let restart_button = find("Canvas/RestartButton");
            // restart_button.active = true;
            director.loadScene("end_scene");
          } // 吃到3个buff(砍杀3只鸟)之后暂时进入无敌状态3秒；之后恢复正常ALIVE状态


          if (this.mk_controller.buff_count == 3) {
            // 标志无敌状态，monkey的buff清零
            this.buff_count.string = "INVINCIBLE";
            this.mk_controller.buff_count = 0; // 激发huge_bird节点

            this.huge_bird.node.active = true;
            var huge_bird_animation = this.huge_bird.getComponent(Animation);
            huge_bird_animation.play("huge_bird_idle_blinking"); // 暂时隐藏monnkey节点

            this.mk_controller.node.active = false;
            this.score_during_time += deltaTime;

            if (this.score_during_time > this.score_improve_timeline) {
              this.score_during_time = 0;
              this.score.string = parseInt(this.score.string) + Math.ceil(-ltree_speed * deltaTime) + "";
            }

            var _ltree_rgd = this.ltree.getComponent(RigidBody2D);

            var ltree2_rgd = this.ltree2.getComponent(RigidBody2D);
            var rtree_rgd = this.rtree.getComponent(RigidBody2D);
            var rtree2_rgd = this.rtree2.getComponent(RigidBody2D);
            var monkey_rgd = this.mk_controller.getComponent(RigidBody2D);
            var original_speed_ltree = _ltree_rgd.linearVelocity.y;
            var original_speed_ltree2 = ltree2_rgd.linearVelocity.y;
            var original_speed_rtree = rtree_rgd.linearVelocity.y;
            var original_speed_rtree2 = rtree2_rgd.linearVelocity.y;
            var original_speed_monkey = monkey_rgd.linearVelocity.y; // 超高速移动

            _ltree_rgd.linearVelocity = v2(0, -100);
            ltree2_rgd.linearVelocity = v2(0, -100);
            rtree_rgd.linearVelocity = v2(0, -100);
            rtree2_rgd.linearVelocity = v2(0, -100);
            monkey_rgd.linearVelocity = v2(0, -100);

            switch (this.level) {
              case LEVEL.LEVEL1:
                if (parseInt(this.score.string) > 40) {
                  this.level = LEVEL.LEVEL2;
                }

                break;

              case LEVEL.LEVEL2:
                if (parseInt(this.score.string) > 80) {
                  this.level = LEVEL.LEVEL3;
                }

                break;

              case LEVEL.LEVEL3:
                if (parseInt(this.score.string) > 120) {
                  this.level = LEVEL.LEVEL4;
                }

                break;

              case LEVEL.LEVEL4:
                if (parseInt(this.score.string) > 150) {
                  this.level = LEVEL.LEVEL5;
                }

                break;
            }

            if (this.hedgehog1.node.getPosition().y < 800) {
              this.hedgehog1.state = (_crd && HedgehogSTATE === void 0 ? (_reportPossibleCrUseOfHedgehogSTATE({
                error: Error()
              }), HedgehogSTATE) : HedgehogSTATE).DEAD;
              var rgd = this.hedgehog1.getComponent(RigidBody2D); // rgd.linearVelocity = v2(0, this.hedgehog1.speed);

              rgd.linearVelocity = v2(0, -100);
              var animation = this.hedgehog1.getComponent(Animation);
              animation.play("Hedgehog_Smoke");
            }

            if (this.hedgehog2.node.getPosition().y < 800) {
              this.hedgehog2.state = (_crd && HedgehogSTATE === void 0 ? (_reportPossibleCrUseOfHedgehogSTATE({
                error: Error()
              }), HedgehogSTATE) : HedgehogSTATE).DEAD;

              var _rgd = this.hedgehog2.getComponent(RigidBody2D); // rgd.linearVelocity = v2(0, this.hedgehog1.speed);


              _rgd.linearVelocity = v2(0, -100);

              var _animation = this.hedgehog2.getComponent(Animation);

              _animation.play("Hedgehog_Smoke");
            }

            if (this.hedgehog3.node.getPosition().y < 800) {
              this.hedgehog3.state = (_crd && HedgehogSTATE === void 0 ? (_reportPossibleCrUseOfHedgehogSTATE({
                error: Error()
              }), HedgehogSTATE) : HedgehogSTATE).DEAD;

              var _rgd2 = this.hedgehog3.getComponent(RigidBody2D); // rgd.linearVelocity = v2(0, this.hedgehog1.speed);


              _rgd2.linearVelocity = v2(0, -100);

              var _animation2 = this.hedgehog3.getComponent(Animation);

              _animation2.play("Hedgehog_Smoke");
            }

            if (this.hedgehog4.node.getPosition().y < 800) {
              this.hedgehog4.state = (_crd && HedgehogSTATE === void 0 ? (_reportPossibleCrUseOfHedgehogSTATE({
                error: Error()
              }), HedgehogSTATE) : HedgehogSTATE).DEAD;

              var _rgd3 = this.hedgehog4.getComponent(RigidBody2D); // rgd.linearVelocity = v2(0, this.hedgehog1.speed);


              _rgd3.linearVelocity = v2(0, -100);

              var _animation3 = this.hedgehog4.getComponent(Animation);

              _animation3.play("Hedgehog_Smoke");
            }

            if (this.bee.node.getPosition().y < 800) {
              this.bee.state = (_crd && BEESTATE === void 0 ? (_reportPossibleCrUseOfBEESTATE({
                error: Error()
              }), BEESTATE) : BEESTATE).DEAD;

              var _rgd4 = this.bee.getComponent(RigidBody2D);

              _rgd4.linearVelocity = v2(0, -100);

              var _animation4 = this.bee.getComponent(Animation);

              _animation4.play("Bee_Smoke");
            }

            if (this.stone.node.getPosition().y < 800) {
              var _animation5 = this.stone.getComponent(Animation);

              _animation5.play("stone_vanish");

              this.stone.reset();
            } // 无敌时间持续3秒


            setTimeout(() => {
              this.mk_controller.mk_state = (_crd && monkey_state === void 0 ? (_reportPossibleCrUseOfmonkey_state({
                error: Error()
              }), monkey_state) : monkey_state).ALIVE;
              this.huge_bird.node.active = false;
              this.mk_controller.node.active = true;
              _ltree_rgd.linearVelocity = v2(0, original_speed_ltree);
              ltree2_rgd.linearVelocity = v2(0, original_speed_ltree2);
              rtree_rgd.linearVelocity = v2(0, original_speed_rtree);
              rtree2_rgd.linearVelocity = v2(0, original_speed_rtree2);
              monkey_rgd.linearVelocity = v2(0, original_speed_monkey);
            }, 3000);
          } else if (this.mk_controller.mk_state == (_crd && monkey_state === void 0 ? (_reportPossibleCrUseOfmonkey_state({
            error: Error()
          }), monkey_state) : monkey_state).ALIVE) {
            this.score_during_time += deltaTime; // let rtree = find("Canvas/rtree");
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
                  var _ltree_rgd2 = this.ltree.getComponent(RigidBody2D);

                  var origin_speed = _ltree_rgd2.linearVelocity.y;
                  _ltree_rgd2.linearVelocity = v2(0, origin_speed - 5);

                  var _ltree2_rgd = this.ltree2.getComponent(RigidBody2D);

                  _ltree2_rgd.linearVelocity = v2(0, origin_speed - 5);

                  var _rtree_rgd = this.rtree.getComponent(RigidBody2D);

                  _rtree_rgd.linearVelocity = v2(0, origin_speed - 5);

                  var _rtree2_rgd = this.rtree2.getComponent(RigidBody2D);

                  _rtree2_rgd.linearVelocity = v2(0, origin_speed - 5);
                  this.level = LEVEL.LEVEL2;
                }

                break;

              case LEVEL.LEVEL2:
                if (parseInt(this.score.string) > 80) {
                  var _ltree_rgd3 = this.ltree.getComponent(RigidBody2D);

                  var _origin_speed = _ltree_rgd3.linearVelocity.y;
                  _ltree_rgd3.linearVelocity = v2(0, _origin_speed - 5);

                  var _ltree2_rgd2 = this.ltree2.getComponent(RigidBody2D);

                  _ltree2_rgd2.linearVelocity = v2(0, _origin_speed - 5);

                  var _rtree_rgd2 = this.rtree.getComponent(RigidBody2D);

                  _rtree_rgd2.linearVelocity = v2(0, _origin_speed - 5);

                  var _rtree2_rgd2 = this.rtree2.getComponent(RigidBody2D);

                  _rtree2_rgd2.linearVelocity = v2(0, _origin_speed - 5);
                  this.level = LEVEL.LEVEL3;
                }

                break;

              case LEVEL.LEVEL3:
                if (parseInt(this.score.string) > 120) {
                  var _ltree_rgd4 = this.ltree.getComponent(RigidBody2D);

                  var _origin_speed2 = _ltree_rgd4.linearVelocity.y;
                  _ltree_rgd4.linearVelocity = v2(0, _origin_speed2 - 5);

                  var _ltree2_rgd3 = this.ltree2.getComponent(RigidBody2D);

                  _ltree2_rgd3.linearVelocity = v2(0, _origin_speed2 - 5);

                  var _rtree_rgd3 = this.rtree.getComponent(RigidBody2D);

                  _rtree_rgd3.linearVelocity = v2(0, _origin_speed2 - 5);

                  var _rtree2_rgd3 = this.rtree2.getComponent(RigidBody2D);

                  _rtree2_rgd3.linearVelocity = v2(0, _origin_speed2 - 5);
                  this.level = LEVEL.LEVEL4;
                }

                break;

              case LEVEL.LEVEL4:
                if (parseInt(this.score.string) > 150) {
                  var _ltree_rgd5 = this.ltree.getComponent(RigidBody2D);

                  var _origin_speed3 = _ltree_rgd5.linearVelocity.y;
                  _ltree_rgd5.linearVelocity = v2(0, _origin_speed3 - 5);

                  var _ltree2_rgd4 = this.ltree2.getComponent(RigidBody2D);

                  _ltree2_rgd4.linearVelocity = v2(0, _origin_speed3 - 5);

                  var _rtree_rgd4 = this.rtree.getComponent(RigidBody2D);

                  _rtree_rgd4.linearVelocity = v2(0, _origin_speed3 - 5);

                  var _rtree2_rgd4 = this.rtree2.getComponent(RigidBody2D);

                  _rtree2_rgd4.linearVelocity = v2(0, _origin_speed3 - 5);
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "buff_count", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "mk_controller", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "hedgehog1", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "hedgehog2", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "hedgehog3", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "hedgehog4", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "bee", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "ltree", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "ltree2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "rtree", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "rtree2", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "stone", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "bird", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "huge_bird", [_dec16], {
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