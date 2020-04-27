class Player {
    constructor(ctx) {
        this.ctx = ctx;
        this.playerSprite = new Image();
        this.playerSprite.src = './src/assets/divekicker_2-5.png';
        this.x = 0;
        this.y = 128;
        this.scale = 2;

        this.playerSprite.onload = () => this.draw();

        this.draw = this.draw.bind(this);
    }

    draw() {
        this.ctx.drawImage(this.playerSprite, 0, 0, 64, 80, 0, 0, 64, 80);
    }
}

export default Player;