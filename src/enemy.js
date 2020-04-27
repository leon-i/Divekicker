class Enemy {
    constructor(ctx) {
        this.ctx = ctx;
        this.enemySprite = new Image();
        this.enemySprite.src = './src/assets/divekicker_enemy_128.png';
        this.x = 0;
        this.y = 128;

        this.enemySprite.onload = () => this.draw();

        this.draw = this.draw.bind(this);
    }

    randomizeEnemySpawn() {
        const enemyInfo = [];
        cloudInfo.push(Math.floor(Math.random() * 800));
        cloudInfo.push(Math.floor(Math.random() * 550));
        cloudInfo.push(Math.floor(Math.random() * 75) + 75);
        cloudInfo.push(Math.floor(Math.random() * 50) + 50);
        return cloudInfo;
    }

    drawCloud(spawnInfo) {
        this.ctx.beginPath();
        this.ctx.rect(...spawnInfo);
        this.ctx.fillStyle = "#eaf6f3";
        this.ctx.fill();
    }

    drawEnemies() {
        for (let i = 0; i < 10; i++) {
            const enemyInfo = this.randomizeCloudSpawn();
            this.drawCloud(enemyInfo);
        }
    }

    draw() {
        this.ctx.drawImage(this.enemySprite, 0, 0, 128, 128, 200, 200, 128, 128);
    }
}

export default Enemy;