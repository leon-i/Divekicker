# Divekicker

[Live site](https://leon-i.github.io/Divekicker/)

> **HTML5**/**Javascript** action-platformer/endless runner.  
  
![divekicker_main_gif](https://user-images.githubusercontent.com/56734437/83052687-a9b61680-a01d-11ea-9673-e420ee14cac3.gif)
  
## Background and Overview  
Divekicker is a 2D sidescrolling platformer game. Divekicker finds itself in the same vein as games such as Google's T-Rex game, but in Divekicker players cannot rely on solid ground beneath their feet. Instead players must perform divekicks to bounce themselves from enemy to enemy in order to progress. Mechanics inspired by Crunchy Games' action platformer Starbreak.  
  
## Technologies Used  
 * Javascript 9
 * Webpack 4.43.0    
   
## Features  
  
### Player Movement + Cancellable Actions  
  
Players are able to manipulate both vertical and horizontal movement with the directional keys, jumps, and divekickes. Players are also able to perform a buzzsaw/spin to pass through and defeat enemies. Players have 2 jumps that are reset upon performing a successful divekick (impacts an enemy). All actions are cancellable via input of a different action (i.e. cancelling a spin with a jump) to allow for greater fluidity of movement.  
  
![divekicker_gif_1](https://user-images.githubusercontent.com/56734437/83045376-7c646b00-a013-11ea-8cdc-49c060636c44.gif)  
  
```javascript  
    initializeControls() {
        window.addEventListener('keydown', e => {
            if (e.defaultPrevented) return;

            if (this.gameStatus) {
                switch(e.code) {
                    case 'Space':
                        this.player.jump();
                        break;
                    case 'ArrowDown':
                        this.player.diveKick();
                        break;
                    case 'ArrowRight':
                        this.rightPressed = true;
                        this.player.moveRight();
                        break;
                    case 'ArrowLeft':
                        this.leftPressed = true;
                        this.player.moveLeft();
                        break;
                    case 'KeyQ':
                        this.player.spin();
                        break;
                    case 'KeyM':
                        this.toggleMusic();
                        break;
                    case 'KeyN':
                        this.toggleSoundFX();
                        break;
                    default:
                        return;
                }
            } else {
                switch(e.code) {
                    case 'KeyR':
                        if (this.menu.menu.className !== 'open') this.start();
                        break;
                    case 'KeyM':
                        this.toggleMusic();
                        break;
                    case 'KeyN':
                        this.toggleSoundFX();
                        break;
                    default:
                        return;
                }
            }

        });

        window.addEventListener('keyup', e => {
            if (e.defaultPrevented) return;

            switch(e.code) {
                case 'ArrowRight':
                    this.rightPressed = false;
                    if (!this.leftPressed) this.player.sideVelocity = 0;
                    break;
                case 'ArrowLeft':
                    this.leftPressed = false;
                    if (!this.rightPressed) this.player.sideVelocity = 0;
                    break;
            }
        });
    }
```  
  
By manipulating the class variables `leftPressed` and `rightPressed`, I was able to create more fluid/responsive movement. `leftPressed` and `rightPressed` are assigned **true** values when the player presses either the left/right keys. Assigning the additonal event listener for keyup checks to see if the player is holding down the opposite directional key when they release the directional key corresponding to their current movement (i.e. holding down the right arrow key, then pressing the left arrow key and releasing the right  arrow key). If the player is holding down the opposite directional key, then their side velocity is preserved and applied to the opposite direction of motion. If no other directional key is held, the player's side velocity is reset. Allowing players to freely choose their direction instead of having to fully release a key before applying the opposite direction of movement is important in making a game feel "good", and as such it was important to me to impliment this feature.  
  
```javascript  
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
```  
  
Here in the player's `spin()` function you can see an example of how I programmed player actions to be cancellable. By binding the `spinTimer` interval to the player class, I am able to call `clearInterval(this.spinTimer)` within any other function. Clearing the interval for the action acts as cancelling it, as then I am able to manually reset the class variables that represent that function without having to worry about the interval resolving and resetting them again.  
  
### Enemy Spawn Randomization + Movement 
  
Enemies randomly spawn offscreen and move into the visible window for the player to interact with. Enemies move diagonally bouncing between upwards and downwards trajectory as they travel across the screen.  
  
![divekicker_gif_2](https://user-images.githubusercontent.com/56734437/83045838-280dbb00-a014-11ea-9af8-2f6a20e2f0b4.gif)  
  
```javascript  
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
```  
  
The `scrollEnemies()` function within the `Level` class is responsible for creating enemies offscreen as the game canvas scrolls, as well as moving the enemies across the screen. Each enemy's horizontal axis of movement is adjusted, and then if the oldest enemy is far enough leftward on the screen, a new enemy is spawned offscreen. A second x value check is applied after wards to see if the oldest enemy has moved offscreen to the left, and if it is then it is removed from the game. The `this.currentEnemyIdx` class variable represents an integer that will be passed into a function to randomize the spawn coordinates of a new Enemy (see below).  
  
```javascript  
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
```  
  
This `switch` statement takes in a number used to indicate the x and y bounds of where an enemy should spawn on the screen. The `scrollEnemies()` function references a `CONSTANTS.OFFSCREEN_ENEMY` array, which consists of numbers that represent switch cases within the `randomizeEnemySpawn(num)` function that create x values that are outside of the visible window of the game. Passing the coordinate objects that this function returns into the constructor for a new Enemy allows them to spawn at this location offscreen.  
  
```javascript  
    move() {
        if (this.y <= (this.startingPosition.y - (CONSTANTS.SPRITE_HEIGHT / 2))) this.positiveMove = false;
        if (this.y >= (this.startingPosition.y + (CONSTANTS.SPRITE_HEIGHT / 2))) this.positiveMove = true;

        const change = this.positiveMove ? CONSTANTS.MOVE_SPEED : -CONSTANTS.MOVE_SPEED;
        this.y -= change;
    }
```  
  
The `move()` function within the `Enemy` class is responsible for dictating the vertical movement for each enemy. The enemy class only influences vertical movement, so its diagonal motion is actually a result of the interaction with the `Level` class' scrolling function. This function checks to see if each enemy has moved more than or equivalent to its sprite height divided by 2 from its starting position, and if it has then it begins motion in the opposite vertical direction, creating the zigzag effect you see in game.  
  
## Credits  
Music: “Air Sharks”, from PlayOnLoop.com  
Licensed under Creative Commons by Attribution 4.0  
  
Music: “Underground Army”, from PlayOnLoop.com  
Licensed under Creative Commons by Attribution 4.0
  
Sound effects from Zapsplat.com
