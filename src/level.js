import Enemy from './enemy';

const CONSTANTS = {
    MAX_ENEMIES: 8,
    SCROLL_SPEED: 5,
    OFFSCREEN_ENEMY: [5, 6, 7, 8]
}

class Level {
    constructor() {
        this.height = 500;
        this.width = 1000;
        this.currentEnemyIdx = 0;
        this.difficulty = 0;
        this.enemies = [
            this.createEnemy(3),
            this.createEnemy(3),
            this.createEnemy(4),
            this.createEnemy(5)
        ];

        this.soundFXEnabled = true;
        this.initializeSoundFX();
    }

    initializeSoundFX() {
        this.spinImpactSound = new Audio('./src/assets/soundFX/spin_impact_3.wav');
        this.divekickImpactSound = new Audio('./src/assets/soundFX/divekick_impact.mp3');
        this.divekickImpactSound.playbackRate = 2.5;
        this.spinImpactSound.volume = this.soundFXEnabled ? 0.35 : 0;
        this.divekickImpactSound.volume = this.soundFXEnabled ? 0.25 : 0;
    }

    toggleSoundFX() {
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

    playSpinImpactSound() {
        this.spinImpactSound.currentTime = 0;
        this.spinImpactSound.play();
    }

    playDivekickImpactSound() {
        this.divekickImpactSound.currentTime = 0;
        this.divekickImpactSound.play();
    }

    randomizeEnemySpawn(num) {
        switch(num) {
            case 1:
                return {
                    x: Math.floor(Math.random() * 250),
                    y: Math.floor(Math.random() * 400) + 100 
                }
            case 2:
                return {
                    x: Math.floor(Math.random() * 250) + 250,
                    y: Math.floor(Math.random() * 400) + 100 
                }
            case 3:
                return {
                    x: Math.floor(Math.random() * 250) + 500,
                    y: Math.floor(Math.random() * 300) + 200 
                }
            case 4:
                return {
                    x: Math.floor(Math.random() * 250) + 750,
                    y: Math.floor(Math.random() * 300) + 100 
                }
            case 5:
                return {
                    x: Math.floor(Math.random() * 1) + 1000,
                    y: Math.floor(Math.random() * 350) + 100 
                }
            case 6:
                return {
                    x: Math.floor(Math.random() * 1) + 1100,
                    y: Math.floor(Math.random() * 350) + 100 
                }
            case 7:
                return {
                    x: Math.floor(Math.random() * 1) + 1200,
                    y: Math.floor(Math.random() * 400)
                }
            case 8:
                return {
                    x: Math.floor(Math.random() * 1) + 1200,
                    y: Math.floor(Math.random() * 200) 
                }
            default:
                return {
                    x: Math.floor(Math.random() * 250),
                    y: Math.floor(Math.random() * 500) 
                }
        }
    }

    randomizeMoveDirection() {
        const num = Math.floor(Math.random() * 2);
        const moveDir = num === 0 ? 'horizontal' : 'vertical';
        return moveDir;
    }

    collisionCheck(player, enemy, scoreTracker) {
        const playerBounds = player.getBounds();
        const enemyBounds = enemy.getBounds();
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

    playerCollision(player, scoreTracker) {
        let collision = false;
        this.enemies.forEach(enemy => {
            if (this.collisionCheck(player, enemy, scoreTracker)) collision = true;
        });

        return collision;
    }

    createEnemy(num) {
        // return new Enemy(this.randomizeMoveDirection(), this.randomizeEnemySpawn(num));
        return new Enemy('vertical', this.randomizeEnemySpawn(num));
    }

    animateEnemies(ctx) {
        this.enemies.forEach(enemy => enemy.animate(ctx))
    }

    scrollEnemies() {
        this.enemies.forEach(enemy => {
            enemy.x -= (CONSTANTS.SCROLL_SPEED + this.difficulty)
        });

        if (this.enemies[0].x <= 200 && this.enemies.length < CONSTANTS.MAX_ENEMIES) {
            const enemyNum = CONSTANTS.OFFSCREEN_ENEMY[this.currentEnemyIdx];
            this.currentEnemyIdx = (this.currentEnemyIdx + 1) % CONSTANTS.OFFSCREEN_ENEMY.length;
            this.enemies.push(this.createEnemy(enemyNum));
        }

        if (this.enemies[0].x <= -70) {
            this.enemies.shift();
        }
    }

    animate(ctx) {
        this.animateEnemies(ctx);
        this.scrollEnemies();
    }
}

export default Level;