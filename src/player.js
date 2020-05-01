const CONSTANTS = {
    GRAVITY: 0.35,
    TERMINAL_VELOCITY: 20,
    JUMP_SPEED: 8,
    BOUNCE_SPEED: 10,
    MOVE_SPEED: 7,
    DIVEKICK_SPEED: 20,
    SPRITE_HEIGHT: 80,
    SPRITE_WIDTH: 64
};

const SPINFRAMES = [0, 64, 128, 196];

class Player {
    constructor(ctx) {
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

        this.playerSprite.onload = () => this.draw(ctx);

        this.draw = this.draw.bind(this);
    }

    initializeSoundFX() {
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

    stopSoundFX() {
        if (this.spinSound) {
            this.stopSpin();
        }
    }

    toggleSoundFX() {
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

    stopSpin() {
        if (this.spinTimer) clearInterval(this.spinTimer);
        this.spinning = false;
        this.spinDelay = false;
        this.spinSound.pause();
        this.spinSound.currentTime = 0;
    }

    playJumpSound() {
        this.jumpSound.pause();
        this.jumpSound.currentTime = 0;
        this.jumpSound.play();
    }

    playDivekickSound() {
        if (!this.divekicking) {
            this.divekickSound.pause();
            this.divekickSound.currentTime = 0;
            this.divekickSound.play();
        }
    }

    getBounds() {
        return {
            top: this.y,
            right: this.x + (CONSTANTS.SPRITE_WIDTH / 2),
            left: this.x,
            bottom: this.y + (CONSTANTS.SPRITE_HEIGHT / 2)
        }
    }

    hitBottom() {
        const bounds = this.getBounds();
        if (bounds.bottom > 600) return true;
        return false;
    }

    jump() {
        if (this.jumpCount) {
            this.stopSpin();
            this.divekicking = false;
            this.jumping = true;
            this.playJumpSound();
            this.velocity = -1 * CONSTANTS.JUMP_SPEED;
            this.jumpCount--;
            const jumpAnimationTimer = setInterval(() => {
                this.jumping = false;
                clearInterval(jumpAnimationTimer);
            }, 1500);
        }
        
    }

    diveKick() {
        this.stopSpin();
        this.playDivekickSound();
        this.velocity = CONSTANTS.DIVEKICK_SPEED;
        this.jumping = false;
        this.divekicking = true;
    }

    bounce() {
        this.invincible = true;
        this.divekicking = false;
        this.jumping = true;
        this.jumpCount = 2;
        this.y -= CONSTANTS.BOUNCE_SPEED * 2;
        this.velocity = -1 * CONSTANTS.BOUNCE_SPEED;

        const invincibleTimer = setInterval(() => {
            this.invincible = false;
            clearInterval(invincibleTimer);
        }, 100);

        const bounceAnimationTimer = setInterval(() => {
            this.jumping = false;
            clearInterval(bounceAnimationTimer);
        }, 1000);
    }

    spin() {
        if (!this.spinning && !this.spinDelay) {
            this.spinning = true;
            this.spinDelay = true;
            this.spinSound.play();

            this.spinTimer = setInterval(() => {
                this.spinning = false;
                this.spinSound.pause();
                this.spinSound.currentTime = 0;
                clearInterval(this.spinTimer);
            }, 800);

            const spinDelayTimer = setInterval(() => {
                this.spinDelay = false;
                clearInterval(spinDelayTimer);
            }, 100);
        }
    }

    moveRight() {
        this.sideVelocity = CONSTANTS.MOVE_SPEED;
    }

    moveLeft() {
        this.sideVelocity = -CONSTANTS.MOVE_SPEED;
    }

    move() {
        this.x += this.sideVelocity;
        this.y += this.velocity;
        this.velocity += CONSTANTS.GRAVITY;
        if (Math.abs(this.velocity) >= CONSTANTS.TERMINAL_VELOCITY) {
            this.velocity = this.velocity > 0 ? CONSTANTS.TERMINAL_VELOCITY : CONSTANTS.TERMINAL_VELOCITY * -1;
        }
    }

    drawBase(ctx) {
        ctx.drawImage(this.playerSprite, 0, 0, 64, 80, this.x, this.y, 64, 80);
    }

    drawJump(ctx) {
        ctx.drawImage(this.playerSprite, 0, 80, 64, 80, this.x, this.y, 64, 80);
    }

    drawDivekick(ctx) {
        ctx.drawImage(this.playerSprite, 0, 160, 64, 80, this.x, this.y, 64, 80);
    }

    updateSpinFrame() {
        this.currentSpinFrame = (this.currentSpinFrame + 1) % SPINFRAMES.length;
    }

    drawSpin(ctx) {
        this.updateSpinFrame();
        const currentFrame = SPINFRAMES[this.currentSpinFrame];
        ctx.drawImage(this.spinSprite, 0, currentFrame, 64, 64, this.x, this.y, 64, 64);
    }

    draw(ctx) {
        ctx.clearRect(0, 0, 1000, 500);
        if (this.jumping && !this.spinning) {
            this.drawJump(ctx);
        } else if (this.divekicking) {
            this.drawDivekick(ctx);
        } else if (this.spinning) {
            this.drawSpin(ctx);
        } else {
            this.drawBase(ctx)
        }
    }

    animate(ctx) {
        this.move();
        this.draw(ctx);
    }
}

export default Player;