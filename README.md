# Divekicker

## Background and Overview  
Divekicker is a 2D sidescrolling platformer game. Divekicker finds itself in the same vein as games such as Google's T-Rex game, but in Divekicker players cannot rely on solid ground beneath their feet. Instead players must permorm divekicks to bounce themselves from enemy to enemy in order to progress.
  
## Functionality & MVP  
 * **Basic Game Logic**
   * Players are able to start, pause, and restart the game after a loss
 * **Player Character**
   * Players are able to perform divekicks and jumps
   * Players are able to move their character's trajectory
 * **Enemies**
   * Enemies invoke a loss upon contact (if not through a divekick)
   * Divekicking an enemy causes the player's character to bounce upwards and resets their jump
 * **Procedural Generation**
   * The game infinitely scrolls and generates enemies until the player loses
   * The game becomes harder as time goes on
 * **Score**
   * Players are able to record their scores and see high scores
  
## Technologies and Architecture 
* **Frontend**  
   * Javascript
* **Backend**  
   * Firebase
   
**Architecture**  
`game.js` renders the game and handles the logic for updating visual changes, as well as game physics.  
  
`level.js` handles the logic for generating the level and ramping difficult as time goes on.  
  
`player.js` handles the logic related to the player character's functions.  
  
`enemy.js` handles the logic related to enemy characters.  
  
## Wireframe  
  * **Components**
    * `Title` - where the game's title will be shown.  
    * `Nav Links` - where links to the project repository and my LinkedIn will be shown
    * `Game Window` - main component, will house the game render
    * `Controls/Info` - will contain instructions on how to play the game  
  
![divekicker_wireframe](https://user-images.githubusercontent.com/56734437/80316819-f499ff80-87cd-11ea-92f1-8c638225e754.png)
  
## Implementation Timeline  
* **Phase 1 - Days 1/2**
  * Set up file structure/architecture for the project
  * Write basic game logic and physics
  * Begin writing logic for player character
   
* **Phase 2 - Day 3**
  * Finish logic for player character, write logic for enemy characters
  * Work on level generation, enemy spawns
  * Set up difficulty ramp logic
  
* **Phase 3 - Day 4**
  * Impliment user controls for gameplay
  * Set up user scores, saving scores to database  
  
## Credits  
Music: “Underground Army”, from PlayOnLoop.com
Licensed under Creative Commons by Attribution 4.0
