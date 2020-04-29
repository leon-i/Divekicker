import Player from './player';
import Background from './background';
import Level from './level';
// import Enemy from './enemy';

class Game {
    constructor(canvas, ctx, backgroundCtx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = new Player(ctx);
        // this.enemy = new Enemy(ctx, 'vertical', { x: 200, y: 200 });
        this.background = new Background(backgroundCtx, 1.0);
        this.level = new Level();
        this.initializeControls();

        this.animate = this.animate.bind(this);
    }

    initializeControls() {
        window.addEventListener('keydown', e => {
            if (e.defaultPrevented) return;

            switch(e.code) {
                case 'Space':
                    this.player.jump();
                    break;
                case 'ArrowDown':
                    this.player.diveKick();
                    break;
                case 'ArrowRight':
                    this.player.moveRight();
                    break;
                case 'ArrowLeft':
                    this.player.moveLeft();
                    break;
                case 'KeyQ':
                    this.player.spin();
                default:
                    return;
            }
        });

        window.addEventListener('keyup', e => {
            if (e.defaultPrevented) return;

            switch(e.code) {
                case 'ArrowRight':
                    this.player.sideVelocity = 0;
                    break;
                case 'ArrowLeft':
                    this.player.sideVelocity = 0;
                    break;
            }
        })
    }

    gameOver() {
        return this.level.playerCollision(this.player) || this.player.hitBottom();
    }

    restart() {
        this.player = new Player(this.ctx);
        this.level = new Level();
    }

    animate() {
        this.background.animate()
        this.player.animate(this.ctx);
        this.level.animate(this.ctx);

        if (this.gameOver()) {
            this.restart()
        }

        requestAnimationFrame(this.animate);
    }

    // play() {

    // }
}

export default Game;