import './style.css';
import Phaser from 'phaser';
import './gameUI.js'; 
/********************************/
//Game UI 
const gameStartDiv = document.querySelector("#startScreen");
const gameStartBtn = document.querySelector("#startGameBtn");
const gameEndDiv = document.querySelector("#gameOverScreen");
const gameResults = document.querySelector("#gameWinLoseSpan");
const finalScore = document.querySelector("#gameEndScoreSpan ");
const gameScreen = document.querySelector("#gameCanvas"); 
const pauseBtn = document.querySelector("#pauseBtn");

const sizes = {//Canvas Dimensions
  width: 500,
  height: 500
}
const speedDown = 200 //Gravity speed 
const foodSizes = {//Food Sprites 
  width: 70, 
  height: 70, 
}
const badFood = [
  "avocado",
  "dark-chocolate"
]
const goodFood = [
  "apple",
  "bananas",
  "chicken-leg"
]

class GameScene extends Phaser.Scene{
  constructor(){//Game Variables 
    super("scene-game");
    this.player;
    this.cursor; 
    this.playerSpeed = speedDown + 50; 
    this.target;
    this.badTarget; 
    this.points = 0; 
    this.textScore; 
    this.textTime; 
    this.timedEvent; 
    this.remainingTime; 
    this.goodEmitter; 
    this.badEmitter; 
  }

  //Loads assets 
  preload(){
    console.log("Loading images...");
    this.load.image("bg", "/assets/levelonebg.png");
    this.load.image("player","/assets/playerSprite.png");
    this.load.image("apple","/assets/apple.png"); 
    this.load.image("avocado","/assets/avocado.png"); 
    this.load.image("bananas","/assets/bananas.png"); 
    this.load.image("chicken-leg", "/assets/chicken-leg.png");
    this.load.image("dark-chocolate","/assets/dark-chocolate.png"); 
    this.load.image("good", "/assets/goodParticleEffect.png"); 
    this.load.image("bad", "/assets/badParticleEffect.png"); 
    //this.load.image("lArrow", "/assets/left-arrow.png"); 
    //this.load.image("rArrow", "/assets/right-arrow.png"); 
    

    this.load.on("complete", () => {
      console.log("Image loaded successfully.");
    });

    console.log(`${this.textures.get('bg')}`); 
  }
  create(){
   /******* Game Logic *******/
   this.scene.pause("scene-game");//pauses game (add to pause btn later)

  /*********************Images*******************/
    //Backgound 
    const bg = this.add.image(0,0,"bg").setOrigin(0,0);
    bg.setDisplaySize(sizes.width, sizes.height);

    /**********************Sprites Logic****************************/
    //Player 
    this.player = this.physics.add.image(175, sizes.height-100,"player").setOrigin(0,0);
    this.player.setDisplaySize(200,100); //scales image 
    this.player.setImmovable(true); //prevents other sprites from interacting 
    this.player.body.allowGravity = false;  //stops player from falling off screen 
    this.player.setCollideWorldBounds(true);//Prevents player from leaving
    this.player.setSize(this.player.width - this.player.width / 6, this.player.height / 6).
    setOffset(this.player.width/10, this.player.height - this.player.height/ 10);//Sets hitbox to bottom of player 
    //resizes hitbox 
    this.cursor = this.input.keyboard.createCursorKeys(); //Keyboard controls 

    //Food 
    this.target = this.physics.add
    .image(sizes.width / 2,0,"chicken-leg").setDisplaySize(foodSizes.width,foodSizes.height)
    .setOrigin(0,0); 
    this.target.setMaxVelocity(0,speedDown); 

    this.badTarget = this.physics.add
    .image(sizes.width / 2, 0, "dark-chocolate").setDisplaySize(foodSizes.width, foodSizes.height);
    this.badTarget.setMaxVelocity(0,speedDown); 


    //Collisons 
    this.physics.add.overlap(this.target, this.player, this.targetHit, null, this);
    this.physics.add.overlap(this.badTarget, this.player, this.badTargetHit, null, this);

    /************Game UI ***********/
    //Score 
    this.textScore = this.add.text(sizes.width - 120, 10, "Score: 0", {
      font: "25px Arial",
      fill: "#FFFFFF",
    });

  //Timer 
    this.textTime = this.add.text(0, 10, "Time: 00", {
      font: "25px Arial",
      fill: "#FFFFFF",
    });
    //Change # to +/- game length 
    this.timedEvent = this.time.delayedCall(40000, this.gameOver, [], this); 

    //Particle Effects
    this.goodEmitter = this.add.particles(0,0,"good", {
      speed: 100,
      gravityY: speedDown - 200, 
      scale: 0.1,
      duration: 100,
      emitting: false
    });

    this.badEmitter = this.add.particles(0,0,"bad", {
      speed: 100,
      gravityY: speedDown - 200, 
      scale: 0.1,
      duration: 200,
      emitting: false
    });

    //Lets particles follow player 
    this.goodEmitter.startFollow(this.player, this.player.width / 8, this.player.height / 6, true); 
    this.badEmitter.startFollow(this.player, this.player.width / 8, this.player.height / 6, true); 

  }
  update(){
    this.remainingTime = this.timedEvent.getRemainingSeconds(); 
    this.textTime.setText(`Time: ${Math.round(this.remainingTime).toString()}`)
    //Food Movement 
    if(this.target.y >= sizes.height){
      this.target.setY(0);//resets pos to top of screen 
      this.target.setX(this.getRandomX()) //sets random x pos 
      this.points--; //Deducts points for missing good food  
      this.textScore.setText(`Score: ${this.points}`)
    }

    if(this.badTarget.y >= sizes.height){
      this.badTarget.setY(0);//resets pos to top of screen 
      this.badTarget.setX(this.getRandomX()) //sets random x pos 
      this.points++; //Adds points for missing toxic food  
      this.textScore.setText(`Score: ${this.points}`)
    }


   //Player Movement
   const {right, left} = this.cursor; 
   
   if(left.isDown) {
    this.player.setVelocityX(-this.playerSpeed);
   } else if (right.isDown) {
    this.player.setVelocityX(this.playerSpeed);
   } else {
    this.player.setVelocityX(0);
   }
  }

  /**************Helper Methods**************/
  //Returns random food pos 
  getRandomX(){
    return Math.floor(Math.random() * 400); 
  }
  //Collision Detection 
  targetHit() {
    this.target.setY(0); 
    this.target.setVelocityY(speedDown);
    this.goodEmitter.start(); 
    this.target.setX(this.getRandomX()); 
    this.points++; 
    this.textScore.setText(`Score: ${this.points}`)
  }

  badTargetHit() {
    this.badTarget.setY(0); 
    this.target.setVelocityY(speedDown);
    this.badEmitter.start(); 
    this.badTarget.setX(this.getRandomX()); 
    this.points--; 
    this.textScore.setText(`Score: ${this.points}`)
  }

    gameOver(){
    this.sys.game.destroy(true);//removes and destroys scene

    //Win/Lose Conditions 
    if(this.points >= 10){
      finalScore.textContent = this.points; 
      gameResults.textContent = "Win!";
    }else{ 
      finalScore.textContent = this.points; 
      gameResults.textContent = "Lose!";
    }

    //Unhides gameover screen 
    gameEndDiv.style.display = "flex"; 
    pauseBtn.style.display = "none"; 
  }
}

//Game Configurations 
const config = { 
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas: gameCanvas,
  physics:{
    default: "arcade",
    arcade: {
      gravity: {y: speedDown}, 
      debug: true 
    }
  },
  scene:[GameScene]
}

const game = new Phaser.Game(config) 

//Button Events 
gameStartBtn.addEventListener("click", () => {
  gameStartDiv.style.display = "none";
  gameScreen.style.display = "flex";
  pauseBtn.style.display = "flex"; 
  game.scene.resume("scene-game"); 
});


//Pause Button
pauseBtn.addEventListener("click", () => {
  game.scene.pause("scene-game");
});

//Resumes scene is players double click pause btn 
pauseBtn.addEventListener("dblclick", () => {
  game.scene.resume("scene-game"); 
});




