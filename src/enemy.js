const CONSTANTS = {
    MOVE_SPEED: 2,
    SPRITE_HEIGHT: 128,
    SPRITE_WIDTH: 128
};

class Enemy {
    constructor(moveDir, position) {
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

    getBounds() {
        return {
            top: this.y,
            right: this.x + (CONSTANTS.SPRITE_WIDTH / 2),
            left: this.x,
            bottom: this.y + (CONSTANTS.SPRITE_HEIGHT / 2)
        }
    }

    move() {
        // if (this.y <= (this.startingPosition.y - CONSTANTS.SPRITE_HEIGHT)) this.positiveMove = false;
        // if (this.y >= (this.startingPosition.y + CONSTANTS.SPRITE_HEIGHT)) this.positiveMove = true;
        // if (this.moveDir === 'vertical') {
        if (this.y <= (this.startingPosition.y - (CONSTANTS.SPRITE_HEIGHT / 2))) this.positiveMove = false;
        if (this.y >= (this.startingPosition.y + (CONSTANTS.SPRITE_HEIGHT / 2))) this.positiveMove = true;

        const change = this.positiveMove ? CONSTANTS.MOVE_SPEED : -CONSTANTS.MOVE_SPEED;
        this.y -= change;
        // } else {
        //     if (this.x <= (this.startingPosition.x - CONSTANTS.SPRITE_WIDTH)) this.positiveMove = true;
        //     if (this.x >= (this.startingPosition.x + CONSTANTS.SPRITE_WIDTH)) this.positiveMove = false;

        //     const change = this.positiveMove ? CONSTANTS.MOVE_SPEED : -CONSTANTS.MOVE_SPEED;
        //     this.x += change;
        // }
    }

    drawBase(ctx) {
        ctx.drawImage(this.enemySprite, 0, 0, 128, 128, this.x, this.y, 128, 128);
    }

    drawHit(ctx) {
        ctx.drawImage(this.enemySprite, 0, 128, 128, 128, this.x, this.y, 128, 128);
    }

    draw(ctx) {
        this.hit ? this.drawHit(ctx) : this.drawBase(ctx);
    }

    animate(ctx) {
        this.move();
        this.draw(ctx);
    }
}

export default Enemy;