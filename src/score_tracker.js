const CONSTANTS = {
    SCORE_PER_100_MS: 10,
    ENEMY_KILL: 200
}

class ScoreTracker {
    constructor(game) {
        this.score = 0;
        this.scoreMultiplyer = 1.0;

        this.draw = this.draw.bind(this);
    }

    initializeScore() {
        const that = this;
        return this.scoreIncreaseTimer = setInterval(() => {
            that.score += (CONSTANTS.SCORE_PER_100_MS * that.scoreMultiplyer);
        }, 100);
    }

    resetScore() {
        if (this.scoreIncreaseTimer) clearInterval(this.scoreIncreaseTimer);
        this.score = 0;
        this.scoreMultiplyer = 1.0;
    }

    enemyKill(enemyHit) {
        if (!enemyHit) this.score += (CONSTANTS.ENEMY_KILL * this.scoreMultiplyer);
    }

    draw(ctx) {
        const score = `SCORE: ${this.score}`;
        ctx.font = 'bold 28px sans-serif';
        ctx.lineWidth = 1;
        ctx.fillStyle = '#ffd24c';
        ctx.fillText(score, 20, 40);
    }
}

export default ScoreTracker;