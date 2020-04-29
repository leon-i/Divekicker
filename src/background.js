class Background {
    constructor(ctx, scrollSpeed) {
        this.ctx = ctx;
        this.scrollSpeed = scrollSpeed;
        this.backgroundImg = new Image();
        this.backgroundImg.src = './src/assets/background.png';
        this.x = 0;
    }

    animate() {
        this.ctx.clearRect(0, 0, 1000, 500);
        this.x -= this.scrollSpeed;
        this.ctx.drawImage(this.backgroundImg, this.x, 0); 
        this.ctx.drawImage(this.backgroundImg, this.x + 1600, 0);
        if (this.x === -1600) this.x = 0; 
    }
}

export default Background;