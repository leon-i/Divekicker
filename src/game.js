import Player from './player';
import Background from './background';
import Level from './level';
import Menu from './menu';
import ScoreTracker from './score_tracker';
// import Enemy from './enemy';

class Game {
    constructor(canvas, ctx, backgroundCtx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.gameStatus = false;
        this.player = new Player(ctx);
        this.background = new Background(backgroundCtx, 1.0);
        this.level = new Level();
        this.menu = new Menu(this);
        this.scoreTracker = new ScoreTracker(this);
        this.initializeControls();

        this.rightPressed = false;
        this.leftPressed = false;

        this.finalScoreMessage = document.getElementById('final-score');
        this.restartMessage = document.getElementById('restart-msg');

        this.animate = this.animate.bind(this);
    }

    initializeControls() {
        window.addEventListener('keydown', e => {
            if (e.defaultPrevented) return;

            if (this.gameStatus) {
                switch(e.code) {
                    case 'Space':
                        this.player.jump();
                        break;
                    case 'ArrowDown':
                        this.player.diveKick();
                        break;
                    case 'ArrowRight':
                        this.rightPressed = true;
                        this.player.moveRight();
                        break;
                    case 'ArrowLeft':
                        this.leftPressed = true;
                        this.player.moveLeft();
                        break;
                    case 'KeyQ':
                        this.player.spin();
                        break;
                    default:
                        return;
                }
            } else {
                switch(e.code) {
                    case 'KeyR':
                        if (this.menu.menu.className !== 'open') this.start();
                        break;
                    default:
                        return;
                }
            }

        });

        window.addEventListener('keyup', e => {
            if (e.defaultPrevented) return;

            switch(e.code) {
                case 'ArrowRight':
                    this.rightPressed = false;
                    if (!this.leftPressed) this.player.sideVelocity = 0;
                    break;
                case 'ArrowLeft':
                    this.leftPressed = false;
                    if (!this.rightPressed) this.player.sideVelocity = 0;
                    break;
            }
        });
    }

    initializeGame() {
        this.menu.openMenu('menu');
    }

    gameOver() {
        return this.level.playerCollision(this.player, this.scoreTracker) || this.player.hitBottom();
    }

    reset() {
        if (this.difficultyIncreaseTimer) clearInterval(this.difficultyIncreaseTimer);
        this.gameStatus = false;
        this.player = new Player(this.ctx);
        this.level = new Level();
        this.scoreTracker.resetScore();
        this.scoreTracker = new ScoreTracker(this);
        this.showRestartMessage(this.finalScore);
    }

    showRestartMessage(finalScore) {
        this.finalScoreMessage.innerHTML = `FINAL SCORE: ${finalScore}`;
        this.restartMessage.className = 'show';
    }

    hideRestartMessage() {
        this.restartMessage.className = 'hide';
    }

    animate() {
        if (this.gameStatus) {
            this.background.animate()
            this.player.animate(this.ctx);
            this.level.animate(this.ctx);
            this.scoreTracker.draw(this.ctx);

            if (this.gameOver()) {
                this.finalScore = Math.floor(this.scoreTracker.score);
                this.reset()
            }

            requestAnimationFrame(this.animate);
        }
    }

    start() {
        this.gameStatus = true;
        this.hideRestartMessage();
        this.scoreTracker.initializeScore();
        this.difficultyIncreaseTimer = setInterval(() => {
            if (this.level.difficulty < 10) this.level.difficulty++;
            this.scoreTracker.scoreMultiplyer += 0.5;
        }, 10000);
        this.animate();
    }
}

export default Game;