/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/divekicker.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Background = /*#__PURE__*/function () {
  function Background(ctx, scrollSpeed) {
    _classCallCheck(this, Background);

    this.ctx = ctx;
    this.scrollSpeed = scrollSpeed;
    this.backgroundImg = new Image();
    this.backgroundImg.src = './src/assets/background.png';
    this.x = 0;
  }

  _createClass(Background, [{
    key: "animate",
    value: function animate() {
      this.ctx.clearRect(0, 0, 1000, 500);
      this.x -= this.scrollSpeed;
      this.ctx.drawImage(this.backgroundImg, this.x, 0);
      this.ctx.drawImage(this.backgroundImg, this.x + 1600, 0);
      if (this.x === -1600) this.x = 0;
    }
  }]);

  return Background;
}();

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./src/divekicker.js":
/*!***************************!*\
  !*** ./src/divekicker.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/reset.scss */ "./src/styles/reset.scss");
/* harmony import */ var _styles_reset_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_reset_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_divekicker_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/divekicker.scss */ "./src/styles/divekicker.scss");
/* harmony import */ var _styles_divekicker_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_divekicker_scss__WEBPACK_IMPORTED_MODULE_2__);



document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var background = document.getElementById('bg-canvas');
  var backgroundCtx = background.getContext('2d');
  var newGame = new _game__WEBPACK_IMPORTED_MODULE_0__["default"](canvas, ctx, backgroundCtx);
  newGame.initializeGame();
});

/***/ }),

/***/ "./src/enemy.js":
/*!**********************!*\
  !*** ./src/enemy.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONSTANTS = {
  MOVE_SPEED: 2,
  SPRITE_HEIGHT: 128,
  SPRITE_WIDTH: 128
};

var Enemy = /*#__PURE__*/function () {
  function Enemy(moveDir, position) {
    _classCallCheck(this, Enemy);

    this.enemySprite = new Image();
    this.enemySprite.src = './src/assets/divekicker_enemy_128.png';
    this.moveDir = moveDir;
    this.startingPosition = position;
    this.positiveMove = true;
    this.x = position.x;
    this.y = position.y;
    this.hit = false;
    this.draw = this.draw.bind(this);
  }

  _createClass(Enemy, [{
    key: "getBounds",
    value: function getBounds() {
      return {
        top: this.y,
        right: this.x + CONSTANTS.SPRITE_WIDTH / 2,
        left: this.x,
        bottom: this.y + CONSTANTS.SPRITE_HEIGHT / 2
      };
    }
  }, {
    key: "move",
    value: function move() {
      // if (this.y <= (this.startingPosition.y - CONSTANTS.SPRITE_HEIGHT)) this.positiveMove = false;
      // if (this.y >= (this.startingPosition.y + CONSTANTS.SPRITE_HEIGHT)) this.positiveMove = true;
      // if (this.moveDir === 'vertical') {
      if (this.y <= this.startingPosition.y - CONSTANTS.SPRITE_HEIGHT / 2) this.positiveMove = false;
      if (this.y >= this.startingPosition.y + CONSTANTS.SPRITE_HEIGHT / 2) this.positiveMove = true;
      var change = this.positiveMove ? CONSTANTS.MOVE_SPEED : -CONSTANTS.MOVE_SPEED;
      this.y -= change; // } else {
      //     if (this.x <= (this.startingPosition.x - CONSTANTS.SPRITE_WIDTH)) this.positiveMove = true;
      //     if (this.x >= (this.startingPosition.x + CONSTANTS.SPRITE_WIDTH)) this.positiveMove = false;
      //     const change = this.positiveMove ? CONSTANTS.MOVE_SPEED : -CONSTANTS.MOVE_SPEED;
      //     this.x += change;
      // }
    }
  }, {
    key: "drawBase",
    value: function drawBase(ctx) {
      ctx.drawImage(this.enemySprite, 0, 0, 128, 128, this.x, this.y, 128, 128);
    }
  }, {
    key: "drawHit",
    value: function drawHit(ctx) {
      ctx.drawImage(this.enemySprite, 0, 128, 128, 128, this.x, this.y, 128, 128);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.hit ? this.drawHit(ctx) : this.drawBase(ctx);
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.move();
      this.draw(ctx);
    }
  }]);

  return Enemy;
}();

/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background */ "./src/background.js");
/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level */ "./src/level.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _score_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score_tracker */ "./src/score_tracker.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var Game = /*#__PURE__*/function () {
  function Game(canvas, ctx, backgroundCtx) {
    _classCallCheck(this, Game);

    this.canvas = canvas;
    this.ctx = ctx;
    this.gameStatus = false;
    this.gamePaused = false;
    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
    this.background = new _background__WEBPACK_IMPORTED_MODULE_1__["default"](backgroundCtx, 1.0);
    this.level = new _level__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.menu = new _menu__WEBPACK_IMPORTED_MODULE_3__["default"](this);
    this.scoreTracker = new _score_tracker__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    this.soundFXEnabled = true;
    this.musicEnabled = true;
    this.drawToggle = false;
    this.currentToggle = '';
    this.initializeControls();
    this.rightPressed = false;
    this.leftPressed = false;
    this.finalScoreMessage = document.getElementById('final-score');
    this.restartMessage = document.getElementById('restart-msg');
    this.animate = this.animate.bind(this);
  }

  _createClass(Game, [{
    key: "initializeControls",
    value: function initializeControls() {
      var _this = this;

      window.addEventListener('keydown', function (e) {
        if (e.defaultPrevented) return;

        if (_this.gameStatus) {
          switch (e.code) {
            case 'Space':
              _this.player.jump();

              break;

            case 'ArrowDown':
              _this.player.diveKick();

              break;

            case 'ArrowRight':
              _this.rightPressed = true;

              _this.player.moveRight();

              break;

            case 'ArrowLeft':
              _this.leftPressed = true;

              _this.player.moveLeft();

              break;

            case 'KeyQ':
              _this.player.spin();

              break;

            case 'KeyM':
              _this.toggleMusic();

              break;

            case 'KeyN':
              _this.toggleSoundFX();

              break;

            default:
              return;
          }
        } else {
          switch (e.code) {
            case 'KeyR':
              if (_this.menu.menu.className !== 'open' && _this.menu.controlsMenu.className !== 'open') _this.start();
              break;

            case 'KeyM':
              _this.toggleMusic();

              break;

            case 'KeyN':
              _this.toggleSoundFX();

              break;

            default:
              return;
          }
        }
      });
      window.addEventListener('keyup', function (e) {
        if (e.defaultPrevented) return;

        switch (e.code) {
          case 'ArrowRight':
            _this.rightPressed = false;
            if (!_this.leftPressed) _this.player.sideVelocity = 0;
            break;

          case 'ArrowLeft':
            _this.leftPressed = false;
            if (!_this.rightPressed) _this.player.sideVelocity = 0;
            break;
        }
      });
    }
  }, {
    key: "initializeGame",
    value: function initializeGame() {
      this.menu.openMenu('menu');
      this.gameMusic = new Audio('src/assets/music/POL-underground-army-short-looped.wav');
      this.gameOverSound = new Audio('src/assets/soundFX/game_loss.mp3');
      this.gameMusic.loop = true;
      this.gameMusic.volume = this.musicEnabled ? 0.35 : 0;
      this.gameOverSound.volume = this.soundFXEnabled ? 0.35 : 0;
    }
  }, {
    key: "toggleMusic",
    value: function toggleMusic() {
      var _this2 = this;

      this.musicEnabled = this.musicEnabled ? false : true;
      this.gameMusic.volume = this.musicEnabled ? 0.35 : 0;
      this.currentToggle = 'music';
      this.drawToggle = true;
      if (!this.gameStatus) this.drawSoundToggle('music');
      if (this.drawToggleTimer) clearInterval(this.drawToggleTimer);
      this.drawToggleTimer = setInterval(function () {
        _this2.drawToggle = false;
        clearInterval(_this2.drawToggleTimer);
      }, 1500);
    }
  }, {
    key: "toggleSoundFX",
    value: function toggleSoundFX() {
      var _this3 = this;

      this.soundFXEnabled = this.soundFXEnabled ? false : true;
      this.gameOverSound.volume = this.soundFXEnabled ? 0.35 : 0;
      this.player.toggleSoundFX();
      this.level.toggleSoundFX();
      this.currentToggle = 'soundFX';
      this.drawToggle = true;
      if (!this.gameStatus) this.drawSoundToggle('soundFX');
      if (this.drawToggleTimer) clearInterval(this.drawToggleTimer);
      this.drawToggleTimer = setInterval(function () {
        _this3.drawToggle = false;
        clearInterval(_this3.drawToggleTimer);
      }, 1500);
    }
  }, {
    key: "drawNotification",
    value: function drawNotification(message) {
      if (!this.gameStatus) this.ctx.clearRect(825, 472, 180, 28);
      this.ctx.font = 'bold 28px sans-serif';
      this.ctx.lineWidth = 1;
      this.ctx.fillStyle = '#ffd24c';
      this.ctx.fillText(message, 825, 495);
    }
  }, {
    key: "drawSoundToggle",
    value: function drawSoundToggle(soundType) {
      if (soundType === 'soundFX') {
        if (this.soundFXEnabled && this.drawToggle) {
          this.drawNotification('SOUND: ON');
        } else if (!this.soundFXEnabled && this.drawToggle) {
          this.drawNotification('SOUND: OFF');
        }
      } else {
        if (this.musicEnabled && this.drawToggle) {
          this.drawNotification('MUSIC: ON');
        } else if (!this.musicEnabled && this.drawToggle) {
          this.drawNotification('MUSIC: OFF');
        }
      }
    }
  }, {
    key: "gameOver",
    value: function gameOver() {
      return this.level.playerCollision(this.player, this.scoreTracker) || this.player.hitBottom();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.difficultyIncreaseTimer) clearInterval(this.difficultyIncreaseTimer);
      this.gameStatus = false;
      this.player.stopSoundFX();
      this.player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx);
      this.level = new _level__WEBPACK_IMPORTED_MODULE_2__["default"]();

      if (!this.soundFXEnabled) {
        this.player.toggleSoundFX();
        this.level.toggleSoundFX();
      }

      this.scoreTracker.resetScore();
      this.scoreTracker = new _score_tracker__WEBPACK_IMPORTED_MODULE_4__["default"](this);
      this.showRestartMessage(this.finalScore);
      this.gameMusic.pause();
      this.gameMusic.currentTime = 0;
    }
  }, {
    key: "showRestartMessage",
    value: function showRestartMessage(finalScore) {
      this.finalScoreMessage.innerHTML = "FINAL SCORE: ".concat(finalScore);
      this.restartMessage.className = 'show';
    }
  }, {
    key: "hideRestartMessage",
    value: function hideRestartMessage() {
      this.restartMessage.className = 'hide';
    }
  }, {
    key: "animate",
    value: function animate() {
      if (this.gameStatus && !this.gamePaused) {
        this.background.animate();
        this.player.animate(this.ctx);
        this.level.animate(this.ctx);
        this.scoreTracker.draw(this.ctx);

        if (this.drawToggle) {
          this.drawSoundToggle(this.currentToggle);
        }

        if (this.gameOver()) {
          this.finalScore = Math.floor(this.scoreTracker.score);
          this.gameOverSound.play();
          this.reset();
        }

        requestAnimationFrame(this.animate);
      }
    }
  }, {
    key: "start",
    value: function start() {
      var _this4 = this;

      this.gameStatus = true;
      this.hideRestartMessage();
      this.scoreTracker.initializeScore();
      this.gameOverSound.pause();
      this.gameOverSound.currentTime = 0;
      this.gameMusic.play();
      this.difficultyIncreaseTimer = setInterval(function () {
        if (_this4.level.difficulty < 10) _this4.level.difficulty++;
        _this4.scoreTracker.scoreMultiplyer += 0.5;
      }, 10000);
      this.animate();
    }
  }]);

  return Game;
}();

/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/level.js":
/*!**********************!*\
  !*** ./src/level.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./src/enemy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var CONSTANTS = {
  MAX_ENEMIES: 8,
  SCROLL_SPEED: 5,
  OFFSCREEN_ENEMY: [5, 6, 7, 8]
};

var Level = /*#__PURE__*/function () {
  function Level() {
    _classCallCheck(this, Level);

    this.height = 500;
    this.width = 1000;
    this.currentEnemyIdx = 0;
    this.difficulty = 0;
    this.enemies = [this.createEnemy(3), this.createEnemy(3), this.createEnemy(4), this.createEnemy(5)];
    this.soundFXEnabled = true;
    this.initializeSoundFX();
  }

  _createClass(Level, [{
    key: "initializeSoundFX",
    value: function initializeSoundFX() {
      this.spinImpactSound = new Audio('./src/assets/soundFX/spin_impact_3.wav');
      this.divekickImpactSound = new Audio('./src/assets/soundFX/divekick_impact.mp3');
      this.divekickImpactSound.playbackRate = 2.5;
      this.spinImpactSound.volume = this.soundFXEnabled ? 0.35 : 0;
      this.divekickImpactSound.volume = this.soundFXEnabled ? 0.25 : 0;
    }
  }, {
    key: "toggleSoundFX",
    value: function toggleSoundFX() {
      if (this.soundFXEnabled) {
        this.soundFXEnabled = false;
        this.spinImpactSound.volume = 0;
        this.divekickImpactSound.volume = 0;
      } else {
        this.soundFXEnabled = true;
        this.spinImpactSound.volume = 0.35;
        this.divekickImpactSound.volume = 0.25;
      }
    }
  }, {
    key: "playSpinImpactSound",
    value: function playSpinImpactSound() {
      this.spinImpactSound.currentTime = 0;
      this.spinImpactSound.play();
    }
  }, {
    key: "playDivekickImpactSound",
    value: function playDivekickImpactSound() {
      this.divekickImpactSound.currentTime = 0;
      this.divekickImpactSound.play();
    }
  }, {
    key: "randomizeEnemySpawn",
    value: function randomizeEnemySpawn(num) {
      switch (num) {
        case 1:
          return {
            x: Math.floor(Math.random() * 250),
            y: Math.floor(Math.random() * 400) + 100
          };

        case 2:
          return {
            x: Math.floor(Math.random() * 250) + 250,
            y: Math.floor(Math.random() * 400) + 100
          };

        case 3:
          return {
            x: Math.floor(Math.random() * 250) + 500,
            y: Math.floor(Math.random() * 300) + 200
          };

        case 4:
          return {
            x: Math.floor(Math.random() * 250) + 750,
            y: Math.floor(Math.random() * 300) + 100
          };

        case 5:
          return {
            x: Math.floor(Math.random() * 1) + 1000,
            y: Math.floor(Math.random() * 350) + 100
          };

        case 6:
          return {
            x: Math.floor(Math.random() * 1) + 1100,
            y: Math.floor(Math.random() * 350) + 100
          };

        case 7:
          return {
            x: Math.floor(Math.random() * 1) + 1200,
            y: Math.floor(Math.random() * 400)
          };

        case 8:
          return {
            x: Math.floor(Math.random() * 1) + 1200,
            y: Math.floor(Math.random() * 200)
          };

        default:
          return {
            x: Math.floor(Math.random() * 250),
            y: Math.floor(Math.random() * 500)
          };
      }
    }
  }, {
    key: "randomizeMoveDirection",
    value: function randomizeMoveDirection() {
      var num = Math.floor(Math.random() * 2);
      var moveDir = num === 0 ? 'horizontal' : 'vertical';
      return moveDir;
    }
  }, {
    key: "collisionCheck",
    value: function collisionCheck(player, enemy, scoreTracker) {
      var playerBounds = player.getBounds();
      var enemyBounds = enemy.getBounds();
      if (playerBounds.left > enemyBounds.right || playerBounds.right < enemyBounds.left) return false;
      if (playerBounds.top > enemyBounds.bottom || playerBounds.bottom < enemyBounds.top) return false;

      if (player.divekicking) {
        player.bounce();
        scoreTracker.enemyKill(enemy.hit);
        enemy.hit = true;
        this.playDivekickImpactSound();
      } else if (player.spinning) {
        scoreTracker.enemyKill(enemy.hit);
        this.playSpinImpactSound();
        enemy.hit = true;
      } else if (!player.invincible) {
        return true;
      }
    }
  }, {
    key: "playerCollision",
    value: function playerCollision(player, scoreTracker) {
      var _this = this;

      var collision = false;
      this.enemies.forEach(function (enemy) {
        if (_this.collisionCheck(player, enemy, scoreTracker)) collision = true;
      });
      return collision;
    }
  }, {
    key: "createEnemy",
    value: function createEnemy(num) {
      // return new Enemy(this.randomizeMoveDirection(), this.randomizeEnemySpawn(num));
      return new _enemy__WEBPACK_IMPORTED_MODULE_0__["default"]('vertical', this.randomizeEnemySpawn(num));
    }
  }, {
    key: "animateEnemies",
    value: function animateEnemies(ctx) {
      this.enemies.forEach(function (enemy) {
        return enemy.animate(ctx);
      });
    }
  }, {
    key: "scrollEnemies",
    value: function scrollEnemies() {
      var _this2 = this;

      this.enemies.forEach(function (enemy) {
        enemy.x -= CONSTANTS.SCROLL_SPEED + _this2.difficulty;
      });

      if (this.enemies[0].x <= 200 && this.enemies.length < CONSTANTS.MAX_ENEMIES) {
        var enemyNum = CONSTANTS.OFFSCREEN_ENEMY[this.currentEnemyIdx];
        this.currentEnemyIdx = (this.currentEnemyIdx + 1) % CONSTANTS.OFFSCREEN_ENEMY.length;
        this.enemies.push(this.createEnemy(enemyNum));
      }

      if (this.enemies[0].x <= -70) {
        this.enemies.shift();
      }
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.animateEnemies(ctx);
      this.scrollEnemies();
    }
  }]);

  return Level;
}();

/* harmony default export */ __webpack_exports__["default"] = (Level);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu(game) {
    _classCallCheck(this, Menu);

    this.game = game;
    this.menu = document.getElementById('menu');
    this.controlsMenu = document.getElementById('controls-menu');
    this.startButton = document.getElementById('start-btn');
    this.controlsButton = document.getElementById('controls-menu-btn');
    this.controlsButton2 = document.getElementById('controls-menu-btn-2');
    this.closeButton = document.getElementById('close-btn');
    this.initializeSoundFX();
    this.initializeMenuButtons();
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  _createClass(Menu, [{
    key: "initializeSoundFX",
    value: function initializeSoundFX() {
      this.menuButtonSounds = new Audio('./src/assets/soundFX/menu_button_sounds.mp3');
      this.menuButtonSounds.volume = 0.4;
    }
  }, {
    key: "initializeMenuButtons",
    value: function initializeMenuButtons() {
      var _this = this;

      this.startButton.addEventListener('click', this.startGame.bind(this));
      this.controlsButton.addEventListener('click', function () {
        return _this.openMenu('controls');
      });
      this.controlsButton2.addEventListener('click', function () {
        return _this.openMenu('controls');
      });
      this.closeButton.addEventListener('click', function () {
        return _this.closeMenu('controls');
      });
    }
  }, {
    key: "playMenuButtonSound",
    value: function playMenuButtonSound() {
      this.menuButtonSounds.pause();
      this.menuButtonSounds.currentTime = 0;
      this.menuButtonSounds.play();
    }
  }, {
    key: "openMenu",
    value: function openMenu(id) {
      if (id === 'menu') {
        this.menu.className = 'open';
      } else {
        this.playMenuButtonSound();
        this.controlsMenu.className = 'open';
      }
    }
  }, {
    key: "closeMenu",
    value: function closeMenu(id) {
      if (id === 'menu') {
        this.menu.className = 'closed';
      } else {
        this.playMenuButtonSound();
        this.controlsMenu.className = 'closed';
      }
    }
  }, {
    key: "startGame",
    value: function startGame() {
      var _this2 = this;

      this.playMenuButtonSound();
      var gameStartTimer = setInterval(function () {
        _this2.closeMenu('menu');

        _this2.game.start();

        clearInterval(gameStartTimer);
      }, 500);
    }
  }]);

  return Menu;
}();

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONSTANTS = {
  GRAVITY: 0.35,
  TERMINAL_VELOCITY: 20,
  JUMP_SPEED: 8,
  BOUNCE_SPEED: 10,
  MOVE_SPEED: 7,
  DIVEKICK_SPEED: 20,
  SPRITE_HEIGHT: 80,
  SPRITE_WIDTH: 64
};
var SPINFRAMES = [0, 64, 128, 196];

var Player = /*#__PURE__*/function () {
  function Player(ctx) {
    var _this = this;

    _classCallCheck(this, Player);

    this.ctx = ctx;
    this.playerSprite = new Image();
    this.playerSprite.src = './src/assets/divekicker_2-5-jump.png';
    this.spinSprite = new Image();
    this.spinSprite.src = './src/assets/spin_frames.png';
    this.x = 0;
    this.y = 500 / 4;
    this.velocity = 0;
    this.sideVelocity = 0;
    this.divekicking = false;
    this.jumping = false;
    this.currentSpinFrame = -1;
    this.spinning = false;
    this.spinDelay = false;
    this.invincible = false;
    this.jumpCount = 2;
    this.soundFXEnabled = true;
    this.initializeSoundFX();

    this.playerSprite.onload = function () {
      return _this.draw(ctx);
    };

    this.draw = this.draw.bind(this);
  }

  _createClass(Player, [{
    key: "initializeSoundFX",
    value: function initializeSoundFX() {
      this.spinSound = new Audio('./src/assets/soundFX/spin_sound.wav');
      this.jumpSound = new Audio('./src/assets/soundFX/jump_sound.mp3');
      this.divekickSound = new Audio('./src/assets/soundFX/divekick_sound.mp3');

      if (this.soundFXEnabled) {
        this.spinSound.volume = 0.4;
        this.jumpSound.volume = 0.4;
        this.divekickSound.volume = 0.2;
      } else {
        this.spinSound.volume = 0;
        this.jumpSound.volume = 0;
        this.divekickSound.volume = 0;
      }
    }
  }, {
    key: "stopSoundFX",
    value: function stopSoundFX() {
      if (this.spinSound) {
        this.stopSpin();
      }
    }
  }, {
    key: "toggleSoundFX",
    value: function toggleSoundFX() {
      if (this.soundFXEnabled) {
        this.soundFXEnabled = false;
        this.spinSound.volume = 0;
        this.jumpSound.volume = 0;
        this.divekickSound.volume = 0;
      } else {
        this.soundFXEnabled = true;
        this.spinSound.volume = 0.4;
        this.jumpSound.volume = 0.4;
        this.divekickSound.volume = 0.2;
      }
    }
  }, {
    key: "stopSpin",
    value: function stopSpin() {
      if (this.spinTimer) clearInterval(this.spinTimer);
      this.spinning = false;
      this.spinDelay = false;
      this.spinSound.pause();
      this.spinSound.currentTime = 0;
    }
  }, {
    key: "playJumpSound",
    value: function playJumpSound() {
      this.jumpSound.pause();
      this.jumpSound.currentTime = 0;
      this.jumpSound.play();
    }
  }, {
    key: "playDivekickSound",
    value: function playDivekickSound() {
      if (!this.divekicking) {
        this.divekickSound.pause();
        this.divekickSound.currentTime = 0;
        this.divekickSound.play();
      }
    }
  }, {
    key: "getBounds",
    value: function getBounds() {
      return {
        top: this.y,
        right: this.x + CONSTANTS.SPRITE_WIDTH / 2,
        left: this.x,
        bottom: this.y + CONSTANTS.SPRITE_HEIGHT / 2
      };
    }
  }, {
    key: "hitBottom",
    value: function hitBottom() {
      var bounds = this.getBounds();
      if (bounds.bottom > 600) return true;
      return false;
    }
  }, {
    key: "jump",
    value: function jump() {
      var _this2 = this;

      if (this.jumpCount) {
        this.stopSpin();
        this.divekicking = false;
        this.jumping = true;
        this.playJumpSound();
        this.velocity = -1 * CONSTANTS.JUMP_SPEED;
        this.jumpCount--;
        var jumpAnimationTimer = setInterval(function () {
          _this2.jumping = false;
          clearInterval(jumpAnimationTimer);
        }, 1500);
      }
    }
  }, {
    key: "diveKick",
    value: function diveKick() {
      this.stopSpin();
      this.playDivekickSound();
      this.velocity = CONSTANTS.DIVEKICK_SPEED;
      this.jumping = false;
      this.divekicking = true;
    }
  }, {
    key: "bounce",
    value: function bounce() {
      var _this3 = this;

      this.invincible = true;
      this.divekicking = false;
      this.jumping = true;
      this.jumpCount = 2;
      this.y -= CONSTANTS.BOUNCE_SPEED * 2;
      this.velocity = -1 * CONSTANTS.BOUNCE_SPEED;
      var invincibleTimer = setInterval(function () {
        _this3.invincible = false;
        clearInterval(invincibleTimer);
      }, 100);
      var bounceAnimationTimer = setInterval(function () {
        _this3.jumping = false;
        clearInterval(bounceAnimationTimer);
      }, 1000);
    }
  }, {
    key: "spin",
    value: function spin() {
      var _this4 = this;

      if (!this.spinning && !this.spinDelay) {
        this.spinning = true;
        this.spinDelay = true;
        this.spinSound.play();
        this.spinTimer = setInterval(function () {
          _this4.spinning = false;

          _this4.spinSound.pause();

          _this4.spinSound.currentTime = 0;
          clearInterval(_this4.spinTimer);
        }, 800);
        var spinDelayTimer = setInterval(function () {
          _this4.spinDelay = false;
          clearInterval(spinDelayTimer);
        }, 100);
      }
    }
  }, {
    key: "moveRight",
    value: function moveRight() {
      this.sideVelocity = CONSTANTS.MOVE_SPEED;
    }
  }, {
    key: "moveLeft",
    value: function moveLeft() {
      this.sideVelocity = -CONSTANTS.MOVE_SPEED;
    }
  }, {
    key: "move",
    value: function move() {
      this.x += this.sideVelocity;
      this.y += this.velocity;
      this.velocity += CONSTANTS.GRAVITY;

      if (Math.abs(this.velocity) >= CONSTANTS.TERMINAL_VELOCITY) {
        this.velocity = this.velocity > 0 ? CONSTANTS.TERMINAL_VELOCITY : CONSTANTS.TERMINAL_VELOCITY * -1;
      }
    }
  }, {
    key: "drawBase",
    value: function drawBase(ctx) {
      ctx.drawImage(this.playerSprite, 0, 0, 64, 80, this.x, this.y, 64, 80);
    }
  }, {
    key: "drawJump",
    value: function drawJump(ctx) {
      ctx.drawImage(this.playerSprite, 0, 80, 64, 80, this.x, this.y, 64, 80);
    }
  }, {
    key: "drawDivekick",
    value: function drawDivekick(ctx) {
      ctx.drawImage(this.playerSprite, 0, 160, 64, 80, this.x, this.y, 64, 80);
    }
  }, {
    key: "updateSpinFrame",
    value: function updateSpinFrame() {
      this.currentSpinFrame = (this.currentSpinFrame + 1) % SPINFRAMES.length;
    }
  }, {
    key: "drawSpin",
    value: function drawSpin(ctx) {
      this.updateSpinFrame();
      var currentFrame = SPINFRAMES[this.currentSpinFrame];
      ctx.drawImage(this.spinSprite, 0, currentFrame, 64, 64, this.x, this.y, 64, 64);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(0, 0, 1000, 500);

      if (this.jumping && !this.spinning) {
        this.drawJump(ctx);
      } else if (this.divekicking) {
        this.drawDivekick(ctx);
      } else if (this.spinning) {
        this.drawSpin(ctx);
      } else {
        this.drawBase(ctx);
      }
    }
  }, {
    key: "animate",
    value: function animate(ctx) {
      this.move();
      this.draw(ctx);
    }
  }]);

  return Player;
}();

/* harmony default export */ __webpack_exports__["default"] = (Player);

/***/ }),

/***/ "./src/score_tracker.js":
/*!******************************!*\
  !*** ./src/score_tracker.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CONSTANTS = {
  SCORE_PER_100_MS: 10,
  ENEMY_KILL: 200
};

var ScoreTracker = /*#__PURE__*/function () {
  function ScoreTracker(game) {
    _classCallCheck(this, ScoreTracker);

    this.score = 0;
    this.scoreMultiplyer = 1.0;
    this.draw = this.draw.bind(this);
  }

  _createClass(ScoreTracker, [{
    key: "initializeScore",
    value: function initializeScore() {
      var that = this;
      return this.scoreIncreaseTimer = setInterval(function () {
        that.score += CONSTANTS.SCORE_PER_100_MS * that.scoreMultiplyer;
      }, 100);
    }
  }, {
    key: "resetScore",
    value: function resetScore() {
      if (this.scoreIncreaseTimer) clearInterval(this.scoreIncreaseTimer);
      this.score = 0;
      this.scoreMultiplyer = 1.0;
    }
  }, {
    key: "enemyKill",
    value: function enemyKill(enemyHit) {
      if (!enemyHit) this.score += CONSTANTS.ENEMY_KILL * this.scoreMultiplyer;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var score = "SCORE: ".concat(this.score);
      ctx.font = 'bold 28px sans-serif';
      ctx.lineWidth = 1;
      ctx.fillStyle = '#ffd24c';
      ctx.fillText(score, 20, 40);
    }
  }]);

  return ScoreTracker;
}();

/* harmony default export */ __webpack_exports__["default"] = (ScoreTracker);

/***/ }),

/***/ "./src/styles/divekicker.scss":
/*!************************************!*\
  !*** ./src/styles/divekicker.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/styles/reset.scss":
/*!*******************************!*\
  !*** ./src/styles/reset.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpdmVraWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZW15LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9sZXZlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZV90cmFja2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvZGl2ZWtpY2tlci5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMvcmVzZXQuc2NzcyJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiY3R4Iiwic2Nyb2xsU3BlZWQiLCJiYWNrZ3JvdW5kSW1nIiwiSW1hZ2UiLCJzcmMiLCJ4IiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRDdHgiLCJuZXdHYW1lIiwiR2FtZSIsImluaXRpYWxpemVHYW1lIiwiQ09OU1RBTlRTIiwiTU9WRV9TUEVFRCIsIlNQUklURV9IRUlHSFQiLCJTUFJJVEVfV0lEVEgiLCJFbmVteSIsIm1vdmVEaXIiLCJwb3NpdGlvbiIsImVuZW15U3ByaXRlIiwic3RhcnRpbmdQb3NpdGlvbiIsInBvc2l0aXZlTW92ZSIsInkiLCJoaXQiLCJkcmF3IiwiYmluZCIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImNoYW5nZSIsImRyYXdIaXQiLCJkcmF3QmFzZSIsIm1vdmUiLCJnYW1lU3RhdHVzIiwiZ2FtZVBhdXNlZCIsInBsYXllciIsIlBsYXllciIsImxldmVsIiwiTGV2ZWwiLCJtZW51IiwiTWVudSIsInNjb3JlVHJhY2tlciIsIlNjb3JlVHJhY2tlciIsInNvdW5kRlhFbmFibGVkIiwibXVzaWNFbmFibGVkIiwiZHJhd1RvZ2dsZSIsImN1cnJlbnRUb2dnbGUiLCJpbml0aWFsaXplQ29udHJvbHMiLCJyaWdodFByZXNzZWQiLCJsZWZ0UHJlc3NlZCIsImZpbmFsU2NvcmVNZXNzYWdlIiwicmVzdGFydE1lc3NhZ2UiLCJhbmltYXRlIiwid2luZG93IiwiZSIsImRlZmF1bHRQcmV2ZW50ZWQiLCJjb2RlIiwianVtcCIsImRpdmVLaWNrIiwibW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJzcGluIiwidG9nZ2xlTXVzaWMiLCJ0b2dnbGVTb3VuZEZYIiwiY2xhc3NOYW1lIiwiY29udHJvbHNNZW51Iiwic3RhcnQiLCJzaWRlVmVsb2NpdHkiLCJvcGVuTWVudSIsImdhbWVNdXNpYyIsIkF1ZGlvIiwiZ2FtZU92ZXJTb3VuZCIsImxvb3AiLCJ2b2x1bWUiLCJkcmF3U291bmRUb2dnbGUiLCJkcmF3VG9nZ2xlVGltZXIiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJtZXNzYWdlIiwiZm9udCIsImxpbmVXaWR0aCIsImZpbGxTdHlsZSIsImZpbGxUZXh0Iiwic291bmRUeXBlIiwiZHJhd05vdGlmaWNhdGlvbiIsInBsYXllckNvbGxpc2lvbiIsImhpdEJvdHRvbSIsImRpZmZpY3VsdHlJbmNyZWFzZVRpbWVyIiwic3RvcFNvdW5kRlgiLCJyZXNldFNjb3JlIiwic2hvd1Jlc3RhcnRNZXNzYWdlIiwiZmluYWxTY29yZSIsInBhdXNlIiwiY3VycmVudFRpbWUiLCJpbm5lckhUTUwiLCJnYW1lT3ZlciIsIk1hdGgiLCJmbG9vciIsInNjb3JlIiwicGxheSIsInJlc2V0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiaGlkZVJlc3RhcnRNZXNzYWdlIiwiaW5pdGlhbGl6ZVNjb3JlIiwiZGlmZmljdWx0eSIsInNjb3JlTXVsdGlwbHllciIsIk1BWF9FTkVNSUVTIiwiU0NST0xMX1NQRUVEIiwiT0ZGU0NSRUVOX0VORU1ZIiwiaGVpZ2h0Iiwid2lkdGgiLCJjdXJyZW50RW5lbXlJZHgiLCJlbmVtaWVzIiwiY3JlYXRlRW5lbXkiLCJpbml0aWFsaXplU291bmRGWCIsInNwaW5JbXBhY3RTb3VuZCIsImRpdmVraWNrSW1wYWN0U291bmQiLCJwbGF5YmFja1JhdGUiLCJudW0iLCJyYW5kb20iLCJlbmVteSIsInBsYXllckJvdW5kcyIsImdldEJvdW5kcyIsImVuZW15Qm91bmRzIiwiZGl2ZWtpY2tpbmciLCJib3VuY2UiLCJlbmVteUtpbGwiLCJwbGF5RGl2ZWtpY2tJbXBhY3RTb3VuZCIsInNwaW5uaW5nIiwicGxheVNwaW5JbXBhY3RTb3VuZCIsImludmluY2libGUiLCJjb2xsaXNpb24iLCJmb3JFYWNoIiwiY29sbGlzaW9uQ2hlY2siLCJyYW5kb21pemVFbmVteVNwYXduIiwibGVuZ3RoIiwiZW5lbXlOdW0iLCJwdXNoIiwic2hpZnQiLCJhbmltYXRlRW5lbWllcyIsInNjcm9sbEVuZW1pZXMiLCJnYW1lIiwic3RhcnRCdXR0b24iLCJjb250cm9sc0J1dHRvbiIsImNvbnRyb2xzQnV0dG9uMiIsImNsb3NlQnV0dG9uIiwiaW5pdGlhbGl6ZU1lbnVCdXR0b25zIiwiY2xvc2VNZW51IiwibWVudUJ1dHRvblNvdW5kcyIsInN0YXJ0R2FtZSIsImlkIiwicGxheU1lbnVCdXR0b25Tb3VuZCIsImdhbWVTdGFydFRpbWVyIiwiR1JBVklUWSIsIlRFUk1JTkFMX1ZFTE9DSVRZIiwiSlVNUF9TUEVFRCIsIkJPVU5DRV9TUEVFRCIsIkRJVkVLSUNLX1NQRUVEIiwiU1BJTkZSQU1FUyIsInBsYXllclNwcml0ZSIsInNwaW5TcHJpdGUiLCJ2ZWxvY2l0eSIsImp1bXBpbmciLCJjdXJyZW50U3BpbkZyYW1lIiwic3BpbkRlbGF5IiwianVtcENvdW50Iiwib25sb2FkIiwic3BpblNvdW5kIiwianVtcFNvdW5kIiwiZGl2ZWtpY2tTb3VuZCIsInN0b3BTcGluIiwic3BpblRpbWVyIiwiYm91bmRzIiwicGxheUp1bXBTb3VuZCIsImp1bXBBbmltYXRpb25UaW1lciIsInBsYXlEaXZla2lja1NvdW5kIiwiaW52aW5jaWJsZVRpbWVyIiwiYm91bmNlQW5pbWF0aW9uVGltZXIiLCJzcGluRGVsYXlUaW1lciIsImFicyIsInVwZGF0ZVNwaW5GcmFtZSIsImN1cnJlbnRGcmFtZSIsImRyYXdKdW1wIiwiZHJhd0RpdmVraWNrIiwiZHJhd1NwaW4iLCJTQ09SRV9QRVJfMTAwX01TIiwiRU5FTVlfS0lMTCIsInRoYXQiLCJzY29yZUluY3JlYXNlVGltZXIiLCJlbmVteUhpdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNsRk1BLFU7QUFDRixzQkFBWUMsR0FBWixFQUFpQkMsV0FBakIsRUFBOEI7QUFBQTs7QUFDMUIsU0FBS0QsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLElBQUlDLEtB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Ozs7Ozs7O0FDdkNBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9kaXZla2lja2VyLmpzXCIpO1xuIiwiY2xhc3MgQmFja2dyb3VuZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdHgsIHNjcm9sbFNwZWVkKSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxTcGVlZCA9IHNjcm9sbFNwZWVkO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZEltZy5zcmMgPSAnLi9zcmMvYXNzZXRzL2JhY2tncm91bmQucG5nJztcclxuICAgICAgICB0aGlzLnggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoKSB7XHJcbiAgICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIDEwMDAsIDUwMCk7XHJcbiAgICAgICAgdGhpcy54IC09IHRoaXMuc2Nyb2xsU3BlZWQ7XHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZEltZywgdGhpcy54LCAwKTsgXHJcbiAgICAgICAgdGhpcy5jdHguZHJhd0ltYWdlKHRoaXMuYmFja2dyb3VuZEltZywgdGhpcy54ICsgMTYwMCwgMCk7XHJcbiAgICAgICAgaWYgKHRoaXMueCA9PT0gLTE2MDApIHRoaXMueCA9IDA7IFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kOyIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZSc7XHJcbmltcG9ydCAnLi9zdHlsZXMvcmVzZXQuc2Nzcyc7XHJcbmltcG9ydCBcIi4vc3R5bGVzL2RpdmVraWNrZXIuc2Nzc1wiO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmctY2FudmFzJyk7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ3R4ID0gYmFja2dyb3VuZC5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIGNvbnN0IG5ld0dhbWUgPSBuZXcgR2FtZShjYW52YXMsIGN0eCwgYmFja2dyb3VuZEN0eCk7XHJcbiAgICBuZXdHYW1lLmluaXRpYWxpemVHYW1lKCk7XHJcbn0pIiwiY29uc3QgQ09OU1RBTlRTID0ge1xyXG4gICAgTU9WRV9TUEVFRDogMixcclxuICAgIFNQUklURV9IRUlHSFQ6IDEyOCxcclxuICAgIFNQUklURV9XSURUSDogMTI4XHJcbn07XHJcblxyXG5jbGFzcyBFbmVteSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihtb3ZlRGlyLCBwb3NpdGlvbikge1xyXG4gICAgICAgIHRoaXMuZW5lbXlTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmVuZW15U3ByaXRlLnNyYyA9ICcuL3NyYy9hc3NldHMvZGl2ZWtpY2tlcl9lbmVteV8xMjgucG5nJztcclxuICAgICAgICB0aGlzLm1vdmVEaXIgPSBtb3ZlRGlyO1xyXG4gICAgICAgIHRoaXMuc3RhcnRpbmdQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMucG9zaXRpdmVNb3ZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnggPSBwb3NpdGlvbi54O1xyXG4gICAgICAgIHRoaXMueSA9IHBvc2l0aW9uLnk7XHJcbiAgICAgICAgdGhpcy5oaXQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3ID0gdGhpcy5kcmF3LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Qm91bmRzKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvcDogdGhpcy55LFxyXG4gICAgICAgICAgICByaWdodDogdGhpcy54ICsgKENPTlNUQU5UUy5TUFJJVEVfV0lEVEggLyAyKSxcclxuICAgICAgICAgICAgbGVmdDogdGhpcy54LFxyXG4gICAgICAgICAgICBib3R0b206IHRoaXMueSArIChDT05TVEFOVFMuU1BSSVRFX0hFSUdIVCAvIDIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMueSA8PSAodGhpcy5zdGFydGluZ1Bvc2l0aW9uLnkgLSBDT05TVEFOVFMuU1BSSVRFX0hFSUdIVCkpIHRoaXMucG9zaXRpdmVNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMueSA+PSAodGhpcy5zdGFydGluZ1Bvc2l0aW9uLnkgKyBDT05TVEFOVFMuU1BSSVRFX0hFSUdIVCkpIHRoaXMucG9zaXRpdmVNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAvLyBpZiAodGhpcy5tb3ZlRGlyID09PSAndmVydGljYWwnKSB7XHJcbiAgICAgICAgaWYgKHRoaXMueSA8PSAodGhpcy5zdGFydGluZ1Bvc2l0aW9uLnkgLSAoQ09OU1RBTlRTLlNQUklURV9IRUlHSFQgLyAyKSkpIHRoaXMucG9zaXRpdmVNb3ZlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHRoaXMueSA+PSAodGhpcy5zdGFydGluZ1Bvc2l0aW9uLnkgKyAoQ09OU1RBTlRTLlNQUklURV9IRUlHSFQgLyAyKSkpIHRoaXMucG9zaXRpdmVNb3ZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY2hhbmdlID0gdGhpcy5wb3NpdGl2ZU1vdmUgPyBDT05TVEFOVFMuTU9WRV9TUEVFRCA6IC1DT05TVEFOVFMuTU9WRV9TUEVFRDtcclxuICAgICAgICB0aGlzLnkgLT0gY2hhbmdlO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLnggPD0gKHRoaXMuc3RhcnRpbmdQb3NpdGlvbi54IC0gQ09OU1RBTlRTLlNQUklURV9XSURUSCkpIHRoaXMucG9zaXRpdmVNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMueCA+PSAodGhpcy5zdGFydGluZ1Bvc2l0aW9uLnggKyBDT05TVEFOVFMuU1BSSVRFX1dJRFRIKSkgdGhpcy5wb3NpdGl2ZU1vdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGNoYW5nZSA9IHRoaXMucG9zaXRpdmVNb3ZlID8gQ09OU1RBTlRTLk1PVkVfU1BFRUQgOiAtQ09OU1RBTlRTLk1PVkVfU1BFRUQ7XHJcbiAgICAgICAgLy8gICAgIHRoaXMueCArPSBjaGFuZ2U7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdCYXNlKGN0eCkge1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5lbmVteVNwcml0ZSwgMCwgMCwgMTI4LCAxMjgsIHRoaXMueCwgdGhpcy55LCAxMjgsIDEyOCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0hpdChjdHgpIHtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuZW5lbXlTcHJpdGUsIDAsIDEyOCwgMTI4LCAxMjgsIHRoaXMueCwgdGhpcy55LCAxMjgsIDEyOCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICB0aGlzLmhpdCA/IHRoaXMuZHJhd0hpdChjdHgpIDogdGhpcy5kcmF3QmFzZShjdHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3KGN0eCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVuZW15OyIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xyXG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL2JhY2tncm91bmQnO1xyXG5pbXBvcnQgTGV2ZWwgZnJvbSAnLi9sZXZlbCc7XHJcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBTY29yZVRyYWNrZXIgZnJvbSAnLi9zY29yZV90cmFja2VyJztcclxuXHJcbmNsYXNzIEdhbWUge1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzLCBjdHgsIGJhY2tncm91bmRDdHgpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmdhbWVQYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIoY3R4KTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZChiYWNrZ3JvdW5kQ3R4LCAxLjApO1xyXG4gICAgICAgIHRoaXMubGV2ZWwgPSBuZXcgTGV2ZWwoKTtcclxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgTWVudSh0aGlzKTtcclxuICAgICAgICB0aGlzLnNjb3JlVHJhY2tlciA9IG5ldyBTY29yZVRyYWNrZXIodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc291bmRGWEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubXVzaWNFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRyYXdUb2dnbGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUb2dnbGUgPSAnJztcclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29udHJvbHMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxlZnRQcmVzc2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuZmluYWxTY29yZU1lc3NhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluYWwtc2NvcmUnKTtcclxuICAgICAgICB0aGlzLnJlc3RhcnRNZXNzYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3RhcnQtbXNnJyk7XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuYW5pbWF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemVDb250cm9scygpIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZS5kZWZhdWx0UHJldmVudGVkKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lU3RhdHVzKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goZS5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU3BhY2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5qdW1wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLmRpdmVLaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJpZ2h0UHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLm1vdmVSaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlZnRQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5ZXIubW92ZUxlZnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnS2V5USc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnNwaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnS2V5TSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTXVzaWMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnS2V5Tic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU291bmRGWCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2goZS5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnS2V5Uic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lbnUubWVudS5jbGFzc05hbWUgIT09ICdvcGVuJyAmJiB0aGlzLm1lbnUuY29udHJvbHNNZW51LmNsYXNzTmFtZSAhPT0gJ29wZW4nKSB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0tleU0nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0tleU4nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVNvdW5kRlgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcclxuICAgICAgICAgICAgaWYgKGUuZGVmYXVsdFByZXZlbnRlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoKGUuY29kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yaWdodFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMubGVmdFByZXNzZWQpIHRoaXMucGxheWVyLnNpZGVWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGVmdFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucmlnaHRQcmVzc2VkKSB0aGlzLnBsYXllci5zaWRlVmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZUdhbWUoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51Lm9wZW5NZW51KCdtZW51Jyk7XHJcbiAgICAgICAgdGhpcy5nYW1lTXVzaWMgPSBuZXcgQXVkaW8oJ3NyYy9hc3NldHMvbXVzaWMvUE9MLXVuZGVyZ3JvdW5kLWFybXktc2hvcnQtbG9vcGVkLndhdicpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZCA9IG5ldyBBdWRpbygnc3JjL2Fzc2V0cy9zb3VuZEZYL2dhbWVfbG9zcy5tcDMnKTtcclxuXHJcbiAgICAgICAgdGhpcy5nYW1lTXVzaWMubG9vcCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lTXVzaWMudm9sdW1lID0gdGhpcy5tdXNpY0VuYWJsZWQgPyAwLjM1IDogMDtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyU291bmQudm9sdW1lID0gdGhpcy5zb3VuZEZYRW5hYmxlZCA/IDAuMzUgOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZU11c2ljKCkge1xyXG4gICAgICAgIHRoaXMubXVzaWNFbmFibGVkID0gdGhpcy5tdXNpY0VuYWJsZWQgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgdGhpcy5nYW1lTXVzaWMudm9sdW1lID0gdGhpcy5tdXNpY0VuYWJsZWQgPyAwLjM1IDogMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUb2dnbGUgPSAnbXVzaWMnO1xyXG4gICAgICAgIHRoaXMuZHJhd1RvZ2dsZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKCF0aGlzLmdhbWVTdGF0dXMpIHRoaXMuZHJhd1NvdW5kVG9nZ2xlKCdtdXNpYycpO1xyXG4gICAgICAgIGlmICh0aGlzLmRyYXdUb2dnbGVUaW1lcikgY2xlYXJJbnRlcnZhbCh0aGlzLmRyYXdUb2dnbGVUaW1lcik7XHJcbiAgICAgICAgdGhpcy5kcmF3VG9nZ2xlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1RvZ2dsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZHJhd1RvZ2dsZVRpbWVyKTtcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTb3VuZEZYKCkge1xyXG4gICAgICAgIHRoaXMuc291bmRGWEVuYWJsZWQgPSB0aGlzLnNvdW5kRlhFbmFibGVkID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZC52b2x1bWUgPSB0aGlzLnNvdW5kRlhFbmFibGVkID8gMC4zNSA6IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudG9nZ2xlU291bmRGWCgpO1xyXG4gICAgICAgIHRoaXMubGV2ZWwudG9nZ2xlU291bmRGWCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFRvZ2dsZSA9ICdzb3VuZEZYJztcclxuICAgICAgICB0aGlzLmRyYXdUb2dnbGUgPSB0cnVlO1xyXG4gICAgICAgIGlmICghdGhpcy5nYW1lU3RhdHVzKSB0aGlzLmRyYXdTb3VuZFRvZ2dsZSgnc291bmRGWCcpO1xyXG4gICAgICAgIGlmICh0aGlzLmRyYXdUb2dnbGVUaW1lcikgY2xlYXJJbnRlcnZhbCh0aGlzLmRyYXdUb2dnbGVUaW1lcik7XHJcbiAgICAgICAgdGhpcy5kcmF3VG9nZ2xlVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1RvZ2dsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuZHJhd1RvZ2dsZVRpbWVyKTtcclxuICAgICAgICB9LCAxNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3Tm90aWZpY2F0aW9uKG1lc3NhZ2UpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZ2FtZVN0YXR1cykgdGhpcy5jdHguY2xlYXJSZWN0KDgyNSwgNDcyLCAxODAsIDI4KTtcclxuICAgICAgICB0aGlzLmN0eC5mb250ID0gJ2JvbGQgMjhweCBzYW5zLXNlcmlmJztcclxuICAgICAgICB0aGlzLmN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9ICcjZmZkMjRjJztcclxuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dChtZXNzYWdlLCA4MjUsIDQ5NSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1NvdW5kVG9nZ2xlKHNvdW5kVHlwZSkge1xyXG4gICAgICAgIGlmIChzb3VuZFR5cGUgPT09ICdzb3VuZEZYJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zb3VuZEZYRW5hYmxlZCAmJiB0aGlzLmRyYXdUb2dnbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd05vdGlmaWNhdGlvbignU09VTkQ6IE9OJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc291bmRGWEVuYWJsZWQgJiYgdGhpcy5kcmF3VG9nZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdOb3RpZmljYXRpb24oJ1NPVU5EOiBPRkYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11c2ljRW5hYmxlZCAmJiB0aGlzLmRyYXdUb2dnbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd05vdGlmaWNhdGlvbignTVVTSUM6IE9OJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMubXVzaWNFbmFibGVkICYmIHRoaXMuZHJhd1RvZ2dsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3Tm90aWZpY2F0aW9uKCdNVVNJQzogT0ZGJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IFxyXG4gICAgfVxyXG5cclxuICAgIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxldmVsLnBsYXllckNvbGxpc2lvbih0aGlzLnBsYXllciwgdGhpcy5zY29yZVRyYWNrZXIpIHx8IHRoaXMucGxheWVyLmhpdEJvdHRvbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpZmZpY3VsdHlJbmNyZWFzZVRpbWVyKSBjbGVhckludGVydmFsKHRoaXMuZGlmZmljdWx0eUluY3JlYXNlVGltZXIpO1xyXG4gICAgICAgIHRoaXMuZ2FtZVN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxheWVyLnN0b3BTb3VuZEZYKCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzLmN0eCk7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbCgpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc291bmRGWEVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudG9nZ2xlU291bmRGWCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxldmVsLnRvZ2dsZVNvdW5kRlgoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2NvcmVUcmFja2VyLnJlc2V0U2NvcmUoKTtcclxuICAgICAgICB0aGlzLnNjb3JlVHJhY2tlciA9IG5ldyBTY29yZVRyYWNrZXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5zaG93UmVzdGFydE1lc3NhZ2UodGhpcy5maW5hbFNjb3JlKTtcclxuICAgICAgICB0aGlzLmdhbWVNdXNpYy5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuZ2FtZU11c2ljLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UmVzdGFydE1lc3NhZ2UoZmluYWxTY29yZSkge1xyXG4gICAgICAgIHRoaXMuZmluYWxTY29yZU1lc3NhZ2UuaW5uZXJIVE1MID0gYEZJTkFMIFNDT1JFOiAke2ZpbmFsU2NvcmV9YDtcclxuICAgICAgICB0aGlzLnJlc3RhcnRNZXNzYWdlLmNsYXNzTmFtZSA9ICdzaG93JztcclxuICAgIH1cclxuXHJcbiAgICBoaWRlUmVzdGFydE1lc3NhZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZXN0YXJ0TWVzc2FnZS5jbGFzc05hbWUgPSAnaGlkZSc7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5nYW1lU3RhdHVzICYmICF0aGlzLmdhbWVQYXVzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmFuaW1hdGUoKVxyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5hbmltYXRlKHRoaXMuY3R4KTtcclxuICAgICAgICAgICAgdGhpcy5sZXZlbC5hbmltYXRlKHRoaXMuY3R4KTtcclxuICAgICAgICAgICAgdGhpcy5zY29yZVRyYWNrZXIuZHJhdyh0aGlzLmN0eCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5kcmF3VG9nZ2xlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTb3VuZFRvZ2dsZSh0aGlzLmN1cnJlbnRUb2dnbGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lT3ZlcigpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbmFsU2NvcmUgPSBNYXRoLmZsb29yKHRoaXMuc2NvcmVUcmFja2VyLnNjb3JlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXJTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmdhbWVTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaGlkZVJlc3RhcnRNZXNzYWdlKCk7XHJcbiAgICAgICAgdGhpcy5zY29yZVRyYWNrZXIuaW5pdGlhbGl6ZVNjb3JlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNvdW5kLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5nYW1lT3ZlclNvdW5kLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmdhbWVNdXNpYy5wbGF5KCk7XHJcbiAgICAgICAgdGhpcy5kaWZmaWN1bHR5SW5jcmVhc2VUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGV2ZWwuZGlmZmljdWx0eSA8IDEwKSB0aGlzLmxldmVsLmRpZmZpY3VsdHkrKztcclxuICAgICAgICAgICAgdGhpcy5zY29yZVRyYWNrZXIuc2NvcmVNdWx0aXBseWVyICs9IDAuNTtcclxuICAgICAgICB9LCAxMDAwMCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7IiwiaW1wb3J0IEVuZW15IGZyb20gJy4vZW5lbXknO1xyXG5cclxuY29uc3QgQ09OU1RBTlRTID0ge1xyXG4gICAgTUFYX0VORU1JRVM6IDgsXHJcbiAgICBTQ1JPTExfU1BFRUQ6IDUsXHJcbiAgICBPRkZTQ1JFRU5fRU5FTVk6IFs1LCA2LCA3LCA4XVxyXG59XHJcblxyXG5jbGFzcyBMZXZlbCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDUwMDtcclxuICAgICAgICB0aGlzLndpZHRoID0gMTAwMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRFbmVteUlkeCA9IDA7XHJcbiAgICAgICAgdGhpcy5kaWZmaWN1bHR5ID0gMDtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXkoMyksXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXkoMyksXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXkoNCksXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRW5lbXkoNSlcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB0aGlzLnNvdW5kRlhFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVTb3VuZEZYKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZVNvdW5kRlgoKSB7XHJcbiAgICAgICAgdGhpcy5zcGluSW1wYWN0U291bmQgPSBuZXcgQXVkaW8oJy4vc3JjL2Fzc2V0cy9zb3VuZEZYL3NwaW5faW1wYWN0XzMud2F2Jyk7XHJcbiAgICAgICAgdGhpcy5kaXZla2lja0ltcGFjdFNvdW5kID0gbmV3IEF1ZGlvKCcuL3NyYy9hc3NldHMvc291bmRGWC9kaXZla2lja19pbXBhY3QubXAzJyk7XHJcbiAgICAgICAgdGhpcy5kaXZla2lja0ltcGFjdFNvdW5kLnBsYXliYWNrUmF0ZSA9IDIuNTtcclxuICAgICAgICB0aGlzLnNwaW5JbXBhY3RTb3VuZC52b2x1bWUgPSB0aGlzLnNvdW5kRlhFbmFibGVkID8gMC4zNSA6IDA7XHJcbiAgICAgICAgdGhpcy5kaXZla2lja0ltcGFjdFNvdW5kLnZvbHVtZSA9IHRoaXMuc291bmRGWEVuYWJsZWQgPyAwLjI1IDogMDtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTb3VuZEZYKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kRlhFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmRGWEVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zcGluSW1wYWN0U291bmQudm9sdW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy5kaXZla2lja0ltcGFjdFNvdW5kLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zb3VuZEZYRW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpbkltcGFjdFNvdW5kLnZvbHVtZSA9IDAuMzU7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2ZWtpY2tJbXBhY3RTb3VuZC52b2x1bWUgPSAwLjI1O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5U3BpbkltcGFjdFNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuc3BpbkltcGFjdFNvdW5kLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLnNwaW5JbXBhY3RTb3VuZC5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheURpdmVraWNrSW1wYWN0U291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5kaXZla2lja0ltcGFjdFNvdW5kLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICB0aGlzLmRpdmVraWNrSW1wYWN0U291bmQucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbWl6ZUVuZW15U3Bhd24obnVtKSB7XHJcbiAgICAgICAgc3dpdGNoKG51bSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1MCksXHJcbiAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDAwKSArIDEwMCBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTApICsgMjUwLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwMCkgKyAxMDAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjUwKSArIDUwMCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzMDApICsgMjAwIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1MCkgKyA3NTAsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzAwKSArIDEwMCBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxKSArIDEwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzUwKSArIDEwMCBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA2OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxKSArIDExMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMzUwKSArIDEwMCBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSA3OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxKSArIDEyMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgeTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNDAwKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDg6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHg6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEpICsgMTIwMCxcclxuICAgICAgICAgICAgICAgICAgICB5OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyMDApIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB4OiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTApLFxyXG4gICAgICAgICAgICAgICAgICAgIHk6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUwMCkgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJhbmRvbWl6ZU1vdmVEaXJlY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3QgbnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgY29uc3QgbW92ZURpciA9IG51bSA9PT0gMCA/ICdob3Jpem9udGFsJyA6ICd2ZXJ0aWNhbCc7XHJcbiAgICAgICAgcmV0dXJuIG1vdmVEaXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlzaW9uQ2hlY2socGxheWVyLCBlbmVteSwgc2NvcmVUcmFja2VyKSB7XHJcbiAgICAgICAgY29uc3QgcGxheWVyQm91bmRzID0gcGxheWVyLmdldEJvdW5kcygpO1xyXG4gICAgICAgIGNvbnN0IGVuZW15Qm91bmRzID0gZW5lbXkuZ2V0Qm91bmRzKCk7XHJcbiAgICAgICAgaWYgKHBsYXllckJvdW5kcy5sZWZ0ID4gZW5lbXlCb3VuZHMucmlnaHQgfHwgcGxheWVyQm91bmRzLnJpZ2h0IDwgZW5lbXlCb3VuZHMubGVmdCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChwbGF5ZXJCb3VuZHMudG9wID4gZW5lbXlCb3VuZHMuYm90dG9tIHx8IHBsYXllckJvdW5kcy5ib3R0b20gPCBlbmVteUJvdW5kcy50b3ApIHJldHVybiBmYWxzZTtcclxuICAgICAgICBpZiAocGxheWVyLmRpdmVraWNraW5nKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5ib3VuY2UoKTtcclxuICAgICAgICAgICAgc2NvcmVUcmFja2VyLmVuZW15S2lsbChlbmVteS5oaXQpO1xyXG4gICAgICAgICAgICBlbmVteS5oaXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlEaXZla2lja0ltcGFjdFNvdW5kKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuc3Bpbm5pbmcpIHtcclxuICAgICAgICAgICAgc2NvcmVUcmFja2VyLmVuZW15S2lsbChlbmVteS5oaXQpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTcGluSW1wYWN0U291bmQoKTtcclxuICAgICAgICAgICAgZW5lbXkuaGl0ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKCFwbGF5ZXIuaW52aW5jaWJsZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyQ29sbGlzaW9uKHBsYXllciwgc2NvcmVUcmFja2VyKSB7XHJcbiAgICAgICAgbGV0IGNvbGxpc2lvbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKGVuZW15ID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29sbGlzaW9uQ2hlY2socGxheWVyLCBlbmVteSwgc2NvcmVUcmFja2VyKSkgY29sbGlzaW9uID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVFbmVteShudW0pIHtcclxuICAgICAgICAvLyByZXR1cm4gbmV3IEVuZW15KHRoaXMucmFuZG9taXplTW92ZURpcmVjdGlvbigpLCB0aGlzLnJhbmRvbWl6ZUVuZW15U3Bhd24obnVtKSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBFbmVteSgndmVydGljYWwnLCB0aGlzLnJhbmRvbWl6ZUVuZW15U3Bhd24obnVtKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5pbWF0ZUVuZW1pZXMoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goZW5lbXkgPT4gZW5lbXkuYW5pbWF0ZShjdHgpKVxyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEVuZW1pZXMoKSB7XHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goZW5lbXkgPT4ge1xyXG4gICAgICAgICAgICBlbmVteS54IC09IChDT05TVEFOVFMuU0NST0xMX1NQRUVEICsgdGhpcy5kaWZmaWN1bHR5KVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzBdLnggPD0gMjAwICYmIHRoaXMuZW5lbWllcy5sZW5ndGggPCBDT05TVEFOVFMuTUFYX0VORU1JRVMpIHtcclxuICAgICAgICAgICAgY29uc3QgZW5lbXlOdW0gPSBDT05TVEFOVFMuT0ZGU0NSRUVOX0VORU1ZW3RoaXMuY3VycmVudEVuZW15SWR4XTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RW5lbXlJZHggPSAodGhpcy5jdXJyZW50RW5lbXlJZHggKyAxKSAlIENPTlNUQU5UUy5PRkZTQ1JFRU5fRU5FTVkubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmVuZW1pZXMucHVzaCh0aGlzLmNyZWF0ZUVuZW15KGVuZW15TnVtKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5lbmVtaWVzWzBdLnggPD0gLTcwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmltYXRlKGN0eCkge1xyXG4gICAgICAgIHRoaXMuYW5pbWF0ZUVuZW1pZXMoY3R4KTtcclxuICAgICAgICB0aGlzLnNjcm9sbEVuZW1pZXMoKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGV2ZWw7IiwiY2xhc3MgTWVudSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHNNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRyb2xzLW1lbnUnKTtcclxuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWJ0bicpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHNCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udHJvbHMtbWVudS1idG4nKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzQnV0dG9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250cm9scy1tZW51LWJ0bi0yJyk7XHJcbiAgICAgICAgdGhpcy5jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1idG4nKTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVTb3VuZEZYKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplTWVudUJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vcGVuTWVudSA9IHRoaXMub3Blbk1lbnUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNsb3NlTWVudSA9IHRoaXMuY2xvc2VNZW51LmJpbmQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbGl6ZVNvdW5kRlgoKSB7XHJcbiAgICAgICAgdGhpcy5tZW51QnV0dG9uU291bmRzID0gbmV3IEF1ZGlvKCcuL3NyYy9hc3NldHMvc291bmRGWC9tZW51X2J1dHRvbl9zb3VuZHMubXAzJyk7XHJcbiAgICAgICAgdGhpcy5tZW51QnV0dG9uU291bmRzLnZvbHVtZSA9IDAuNDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplTWVudUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc3RhcnRHYW1lLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm9wZW5NZW51KCdjb250cm9scycpKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzQnV0dG9uMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMub3Blbk1lbnUoJ2NvbnRyb2xzJykpO1xyXG4gICAgICAgIHRoaXMuY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLmNsb3NlTWVudSgnY29udHJvbHMnKSlcclxuICAgIH1cclxuXHJcbiAgICBwbGF5TWVudUJ1dHRvblNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMubWVudUJ1dHRvblNvdW5kcy5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMubWVudUJ1dHRvblNvdW5kcy5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgdGhpcy5tZW51QnV0dG9uU291bmRzLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuTWVudShpZCkge1xyXG4gICAgICAgIGlmIChpZCA9PT0gJ21lbnUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudS5jbGFzc05hbWUgPSAnb3Blbic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbGF5TWVudUJ1dHRvblNvdW5kKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHNNZW51LmNsYXNzTmFtZSA9ICdvcGVuJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VNZW51KGlkKSB7XHJcbiAgICAgICAgaWYgKGlkID09PSAnbWVudScpIHtcclxuICAgICAgICAgICAgdGhpcy5tZW51LmNsYXNzTmFtZSA9ICdjbG9zZWQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheU1lbnVCdXR0b25Tb3VuZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzTWVudS5jbGFzc05hbWUgPSAnY2xvc2VkJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRHYW1lKCkge1xyXG4gICAgICAgIHRoaXMucGxheU1lbnVCdXR0b25Tb3VuZCgpO1xyXG4gICAgICAgIGNvbnN0IGdhbWVTdGFydFRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNsb3NlTWVudSgnbWVudScpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuc3RhcnQoKTtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChnYW1lU3RhcnRUaW1lcik7XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWVudTsiLCJjb25zdCBDT05TVEFOVFMgPSB7XHJcbiAgICBHUkFWSVRZOiAwLjM1LFxyXG4gICAgVEVSTUlOQUxfVkVMT0NJVFk6IDIwLFxyXG4gICAgSlVNUF9TUEVFRDogOCxcclxuICAgIEJPVU5DRV9TUEVFRDogMTAsXHJcbiAgICBNT1ZFX1NQRUVEOiA3LFxyXG4gICAgRElWRUtJQ0tfU1BFRUQ6IDIwLFxyXG4gICAgU1BSSVRFX0hFSUdIVDogODAsXHJcbiAgICBTUFJJVEVfV0lEVEg6IDY0XHJcbn07XHJcblxyXG5jb25zdCBTUElORlJBTUVTID0gWzAsIDY0LCAxMjgsIDE5Nl07XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJTcHJpdGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnBsYXllclNwcml0ZS5zcmMgPSAnLi9zcmMvYXNzZXRzL2RpdmVraWNrZXJfMi01LWp1bXAucG5nJztcclxuICAgICAgICB0aGlzLnNwaW5TcHJpdGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnNwaW5TcHJpdGUuc3JjID0gJy4vc3JjL2Fzc2V0cy9zcGluX2ZyYW1lcy5wbmcnO1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gNTAwIC8gNDtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDtcclxuICAgICAgICB0aGlzLnNpZGVWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXZla2lja2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFNwaW5GcmFtZSA9IC0xO1xyXG4gICAgICAgIHRoaXMuc3Bpbm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwaW5EZWxheSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaW52aW5jaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuanVtcENvdW50ID0gMjtcclxuICAgICAgICB0aGlzLnNvdW5kRlhFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVTb3VuZEZYKCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyU3ByaXRlLm9ubG9hZCA9ICgpID0+IHRoaXMuZHJhdyhjdHgpO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplU291bmRGWCgpIHtcclxuICAgICAgICB0aGlzLnNwaW5Tb3VuZCA9IG5ldyBBdWRpbygnLi9zcmMvYXNzZXRzL3NvdW5kRlgvc3Bpbl9zb3VuZC53YXYnKTtcclxuICAgICAgICB0aGlzLmp1bXBTb3VuZCA9IG5ldyBBdWRpbygnLi9zcmMvYXNzZXRzL3NvdW5kRlgvanVtcF9zb3VuZC5tcDMnKTtcclxuICAgICAgICB0aGlzLmRpdmVraWNrU291bmQgPSBuZXcgQXVkaW8oJy4vc3JjL2Fzc2V0cy9zb3VuZEZYL2RpdmVraWNrX3NvdW5kLm1wMycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLnNvdW5kRlhFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpblNvdW5kLnZvbHVtZSA9IDAuNDtcclxuICAgICAgICAgICAgdGhpcy5qdW1wU291bmQudm9sdW1lID0gMC40O1xyXG4gICAgICAgICAgICB0aGlzLmRpdmVraWNrU291bmQudm9sdW1lID0gMC4yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpblNvdW5kLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcFNvdW5kLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2ZWtpY2tTb3VuZC52b2x1bWUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFNvdW5kRlgoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BpblNvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcFNwaW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlU291bmRGWCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zb3VuZEZYRW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kRlhFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpblNvdW5kLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcFNvdW5kLnZvbHVtZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2ZWtpY2tTb3VuZC52b2x1bWUgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmRGWEVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5Tb3VuZC52b2x1bWUgPSAwLjQ7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcFNvdW5kLnZvbHVtZSA9IDAuNDtcclxuICAgICAgICAgICAgdGhpcy5kaXZla2lja1NvdW5kLnZvbHVtZSA9IDAuMjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcFNwaW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BpblRpbWVyKSBjbGVhckludGVydmFsKHRoaXMuc3BpblRpbWVyKTtcclxuICAgICAgICB0aGlzLnNwaW5uaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zcGluRGVsYXkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNwaW5Tb3VuZC5wYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuc3BpblNvdW5kLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5SnVtcFNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuanVtcFNvdW5kLnBhdXNlKCk7XHJcbiAgICAgICAgdGhpcy5qdW1wU291bmQuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgIHRoaXMuanVtcFNvdW5kLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5RGl2ZWtpY2tTb3VuZCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZGl2ZWtpY2tpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXZla2lja1NvdW5kLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2ZWtpY2tTb3VuZC5jdXJyZW50VGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGl2ZWtpY2tTb3VuZC5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEJvdW5kcygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3A6IHRoaXMueSxcclxuICAgICAgICAgICAgcmlnaHQ6IHRoaXMueCArIChDT05TVEFOVFMuU1BSSVRFX1dJRFRIIC8gMiksXHJcbiAgICAgICAgICAgIGxlZnQ6IHRoaXMueCxcclxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnkgKyAoQ09OU1RBTlRTLlNQUklURV9IRUlHSFQgLyAyKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaXRCb3R0b20oKSB7XHJcbiAgICAgICAgY29uc3QgYm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcclxuICAgICAgICBpZiAoYm91bmRzLmJvdHRvbSA+IDYwMCkgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGp1bXAoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuanVtcENvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcFNwaW4oKTtcclxuICAgICAgICAgICAgdGhpcy5kaXZla2lja2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlKdW1wU291bmQoKTtcclxuICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IC0xICogQ09OU1RBTlRTLkpVTVBfU1BFRUQ7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcENvdW50LS07XHJcbiAgICAgICAgICAgIGNvbnN0IGp1bXBBbmltYXRpb25UaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChqdW1wQW5pbWF0aW9uVGltZXIpO1xyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZGl2ZUtpY2soKSB7XHJcbiAgICAgICAgdGhpcy5zdG9wU3BpbigpO1xyXG4gICAgICAgIHRoaXMucGxheURpdmVraWNrU291bmQoKTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gQ09OU1RBTlRTLkRJVkVLSUNLX1NQRUVEO1xyXG4gICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGl2ZWtpY2tpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGJvdW5jZSgpIHtcclxuICAgICAgICB0aGlzLmludmluY2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGl2ZWtpY2tpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuanVtcENvdW50ID0gMjtcclxuICAgICAgICB0aGlzLnkgLT0gQ09OU1RBTlRTLkJPVU5DRV9TUEVFRCAqIDI7XHJcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IC0xICogQ09OU1RBTlRTLkJPVU5DRV9TUEVFRDtcclxuXHJcbiAgICAgICAgY29uc3QgaW52aW5jaWJsZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmludmluY2libGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnZpbmNpYmxlVGltZXIpO1xyXG4gICAgICAgIH0sIDEwMCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvdW5jZUFuaW1hdGlvblRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChib3VuY2VBbmltYXRpb25UaW1lcik7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BpbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3Bpbm5pbmcgJiYgIXRoaXMuc3BpbkRlbGF5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bpbm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwaW5EZWxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BpblNvdW5kLnBsYXkoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3BpblRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGlubmluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluU291bmQucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BpblNvdW5kLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5zcGluVGltZXIpO1xyXG4gICAgICAgICAgICB9LCA4MDApO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3BpbkRlbGF5VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwaW5EZWxheSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzcGluRGVsYXlUaW1lcik7XHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVSaWdodCgpIHtcclxuICAgICAgICB0aGlzLnNpZGVWZWxvY2l0eSA9IENPTlNUQU5UUy5NT1ZFX1NQRUVEO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVMZWZ0KCkge1xyXG4gICAgICAgIHRoaXMuc2lkZVZlbG9jaXR5ID0gLUNPTlNUQU5UUy5NT1ZFX1NQRUVEO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHRoaXMuc2lkZVZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5O1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHkgKz0gQ09OU1RBTlRTLkdSQVZJVFk7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMudmVsb2NpdHkpID49IENPTlNUQU5UUy5URVJNSU5BTF9WRUxPQ0lUWSkge1xyXG4gICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eSA+IDAgPyBDT05TVEFOVFMuVEVSTUlOQUxfVkVMT0NJVFkgOiBDT05TVEFOVFMuVEVSTUlOQUxfVkVMT0NJVFkgKiAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0Jhc2UoY3R4KSB7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnBsYXllclNwcml0ZSwgMCwgMCwgNjQsIDgwLCB0aGlzLngsIHRoaXMueSwgNjQsIDgwKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3SnVtcChjdHgpIHtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMucGxheWVyU3ByaXRlLCAwLCA4MCwgNjQsIDgwLCB0aGlzLngsIHRoaXMueSwgNjQsIDgwKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3RGl2ZWtpY2soY3R4KSB7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLnBsYXllclNwcml0ZSwgMCwgMTYwLCA2NCwgODAsIHRoaXMueCwgdGhpcy55LCA2NCwgODApO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVNwaW5GcmFtZSgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTcGluRnJhbWUgPSAodGhpcy5jdXJyZW50U3BpbkZyYW1lICsgMSkgJSBTUElORlJBTUVTLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3BpbihjdHgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNwaW5GcmFtZSgpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRGcmFtZSA9IFNQSU5GUkFNRVNbdGhpcy5jdXJyZW50U3BpbkZyYW1lXTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuc3BpblNwcml0ZSwgMCwgY3VycmVudEZyYW1lLCA2NCwgNjQsIHRoaXMueCwgdGhpcy55LCA2NCwgNjQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY3R4KSB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCAxMDAwLCA1MDApO1xyXG4gICAgICAgIGlmICh0aGlzLmp1bXBpbmcgJiYgIXRoaXMuc3Bpbm5pbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3SnVtcChjdHgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXZla2lja2luZykge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdEaXZla2ljayhjdHgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zcGlubmluZykge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdTcGluKGN0eCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3QmFzZShjdHgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuaW1hdGUoY3R4KSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3KGN0eCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBsYXllcjsiLCJjb25zdCBDT05TVEFOVFMgPSB7XHJcbiAgICBTQ09SRV9QRVJfMTAwX01TOiAxMCxcclxuICAgIEVORU1ZX0tJTEw6IDIwMFxyXG59XHJcblxyXG5jbGFzcyBTY29yZVRyYWNrZXIge1xyXG4gICAgY29uc3RydWN0b3IoZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuc2NvcmUgPSAwO1xyXG4gICAgICAgIHRoaXMuc2NvcmVNdWx0aXBseWVyID0gMS4wO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXcgPSB0aGlzLmRyYXcuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0aWFsaXplU2NvcmUoKSB7XHJcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcmVJbmNyZWFzZVRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGF0LnNjb3JlICs9IChDT05TVEFOVFMuU0NPUkVfUEVSXzEwMF9NUyAqIHRoYXQuc2NvcmVNdWx0aXBseWVyKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0U2NvcmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2NvcmVJbmNyZWFzZVRpbWVyKSBjbGVhckludGVydmFsKHRoaXMuc2NvcmVJbmNyZWFzZVRpbWVyKTtcclxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcclxuICAgICAgICB0aGlzLnNjb3JlTXVsdGlwbHllciA9IDEuMDtcclxuICAgIH1cclxuXHJcbiAgICBlbmVteUtpbGwoZW5lbXlIaXQpIHtcclxuICAgICAgICBpZiAoIWVuZW15SGl0KSB0aGlzLnNjb3JlICs9IChDT05TVEFOVFMuRU5FTVlfS0lMTCAqIHRoaXMuc2NvcmVNdWx0aXBseWVyKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIGNvbnN0IHNjb3JlID0gYFNDT1JFOiAke3RoaXMuc2NvcmV9YDtcclxuICAgICAgICBjdHguZm9udCA9ICdib2xkIDI4cHggc2Fucy1zZXJpZic7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZkMjRjJztcclxuICAgICAgICBjdHguZmlsbFRleHQoc2NvcmUsIDIwLCA0MCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNjb3JlVHJhY2tlcjsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9