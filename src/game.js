import Player from './player';
import Background from './background';
import Enemy from './enemy';

class Game {
    constructor(canvas, ctx, backgroundCtx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = new Player(ctx);
        this.enemy = new Enemy(ctx);
        this.backgroundCtx = backgroundCtx;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 30;
        this.dx = 2;
        this.dy = -2;
    }

    initializeBackground() {
        this.background = new Background(this.backgroundCtx, 1.0);
        this.background.draw()
    }

    initializePlayer() {
        const playerImg = new Image();
        playerImg.src = 'src/assets/divekicker_sprites.png';
        this.player = new Player(this.ctx, playerImg);
    }
    
    draw() {
        this.initializeBackground();
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // this.x += this.dx;
        // this.y += this.dy;
        this.player.draw();
        this.enemy.draw();
    }

    start() {
        setInterval(this.draw(), 10);
    }
}

export default Game;