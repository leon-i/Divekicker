import Player from './player';
import Background from './background';
import Level from './level';
import Menu from './menu';
import ScoreTracker from './score_tracker';

class Game {
    constructor(canvas, ctx, backgroundCtx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.gameStatus = false;
        this.gamePaused = false;
        this.player = new Player(ctx);
        this.background = new Background(backgroundCtx, 1.0);
        this.level = new Level();
        this.menu = new Menu(this);
        this.scoreTracker = new ScoreTracker(this);

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
                    case 'KeyM':
                        this.toggleMusic();
                        break;
                    case 'KeyN':
                        this.toggleSoundFX();
                        break;
                    default:
                        return;
                }
            } else {
                switch(e.code) {
                    case 'KeyR':
                        if (this.menu.menu.className !== 'open' && this.menu.controlsMenu.className !== 'open') this.start();
                        break;
                    case 'KeyM':
                        this.toggleMusic();
                        break;
                    case 'KeyN':
                        this.toggleSoundFX();
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
        this.gameMusic = new Audio('src/assets/music/POL-underground-army-short-looped.wav');
        this.gameOverSound = new Audio('src/assets/soundFX/game_loss.mp3');

        this.gameMusic.loop = true;
        this.gameMusic.volume = this.musicEnabled ? 0.35 : 0;
        this.gameOverSound.volume = this.soundFXEnabled ? 0.35 : 0;
    }

    toggleMusic() {
        this.musicEnabled = this.musicEnabled ? false : true;
        this.gameMusic.volume = this.musicEnabled ? 0.35 : 0;
        this.currentToggle = 'music';
        this.drawToggle = true;
        if (!this.gameStatus) this.drawSoundToggle('music');
        if (this.drawToggleTimer) clearInterval(this.drawToggleTimer);
        this.drawToggleTimer = setInterval(() => {
            this.drawToggle = false;
            clearInterval(this.drawToggleTimer);
        }, 1500);
    }

    toggleSoundFX() {
        this.soundFXEnabled = this.soundFXEnabled ? false : true;
        this.gameOverSound.volume = this.soundFXEnabled ? 0.35 : 0;
        this.player.toggleSoundFX();
        this.level.toggleSoundFX();
        this.currentToggle = 'soundFX';
        this.drawToggle = true;
        if (!this.gameStatus) this.drawSoundToggle('soundFX');
        if (this.drawToggleTimer) clearInterval(this.drawToggleTimer);
        this.drawToggleTimer = setInterval(() => {
            this.drawToggle = false;
            clearInterval(this.drawToggleTimer);
        }, 1500);
    }

    drawNotification(message) {
        if (!this.gameStatus) this.ctx.clearRect(825, 472, 180, 28);
        this.ctx.font = 'bold 28px sans-serif';
        this.ctx.lineWidth = 1;
        this.ctx.fillStyle = '#ffd24c';
        this.ctx.fillText(message, 825, 495);
    }

    drawSoundToggle(soundType) {
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

    gameOver() {
        return this.level.playerCollision(this.player, this.scoreTracker) || this.player.hitBottom();
    }

    reset() {
        if (this.difficultyIncreaseTimer) clearInterval(this.difficultyIncreaseTimer);
        this.gameStatus = false;
        this.player.stopSoundFX();

        this.player = new Player(this.ctx);
        this.level = new Level();

        if (!this.soundFXEnabled) {
            this.player.toggleSoundFX();
            this.level.toggleSoundFX();
        }

        this.scoreTracker.resetScore();
        this.scoreTracker = new ScoreTracker(this);
        this.showRestartMessage(this.finalScore);
        this.gameMusic.pause();
        this.gameMusic.currentTime = 0;
    }

    showRestartMessage(finalScore) {
        this.finalScoreMessage.innerHTML = `FINAL SCORE: ${finalScore}`;
        this.restartMessage.className = 'show';
    }

    hideRestartMessage() {
        this.restartMessage.className = 'hide';
    }

    animate() {
        if (this.gameStatus && !this.gamePaused) {
            this.background.animate()
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

    start() {
        this.gameStatus = true;
        this.hideRestartMessage();
        this.scoreTracker.initializeScore();
        this.gameOverSound.pause();
        this.gameOverSound.currentTime = 0;
        this.gameMusic.play();
        this.difficultyIncreaseTimer = setInterval(() => {
            if (this.level.difficulty < 10) this.level.difficulty++;
            this.scoreTracker.scoreMultiplyer += 0.5;
        }, 10000);
        this.animate();
    }
}

export default Game;