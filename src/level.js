import Enemy from './enemy';

const CONSTANTS = {
    MAX_ENEMIES: 5,
    SCROLL_SPEED: 5
}

class Level {
    constructor() {
        this.height = 500;
        this.width = 1000;
        this.enemies = [
            this.createEnemy(3),
            this.createEnemy(3),
            this.createEnemy(3),
            this.createEnemy(4),
            this.createEnemy(4),
            this.createEnemy(5),
            this.createEnemy(5)
        ];
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
                    y: Math.floor(Math.random() * 400) + 100 
                }
            case 5:
                return {
                    x: Math.floor(Math.random() * 250) + 1000,
                    y: Math.floor(Math.random() * 400) + 100 
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

    collisionCheck(player, enemy) {
        const playerBounds = player.getBounds();
        const enemyBounds = enemy.getBounds();
        if (playerBounds.left > enemyBounds.right || playerBounds.right < enemyBounds.left) return false;
        if (playerBounds.top > enemyBounds.bottom || playerBounds.bottom < enemyBounds.top) return false;
        if (player.divekicking) {
            player.bounce();
            enemy.hit = true;
        } else if (!player.invincible) {
            return true;
        }
    }

    playerCollision(player) {
        let collision = false;
        this.enemies.forEach(enemy => {
            if (this.collisionCheck(player, enemy)) collision = true;
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
            enemy.x -= CONSTANTS.SCROLL_SPEED
        });

        if (this.enemies[0].x <= 200 && this.enemies.length < 8) {
            this.enemies.push(this.createEnemy(5));
        }

        if (this.enemies[0].x <= -70) {
            this.enemies.shift();
            // this.enemies.push(this.createEnemy(5));
        }
    }

    animate(ctx) {
        this.animateEnemies(ctx);
        this.scrollEnemies();
    }
}

export default Level;