import './style.css';
import Phaser from 'phaser';
/********************************/

 
const sizes = {//Canvas Dimensions
  width: 500,
  height: 500
}
const speedDown = 300 //Gravity speed 
const foodSizes = {
  width: 200, 
  height: 200, 
}

class GameScene extends Phaser.Scene{
  constructor(){
    super({ key: 'boot' });
    this.player
    this.cursor 
    this.playerSpeed = speedDown + 50; 
    this.target
  }

  //Loads assets 
  preload(){
    console.log("Loading images...");
    this.load.image("bg", "/assets/levelonebg.png");  // Make sure this path is correct
    this.load.image("player","/assets/playerSprite.png");
    this.load.image("chicken", "/assets/chicken-leg.png");
    this.load.image("apple","/assets/apple.png"); 
    this.load.on("complete", () => {
      console.log("Image loaded successfully.");
    });
  }

  create(){
    const bg = this.add.image(0,0,"bg").setOrigin(0,0);
    bg.setDisplaySize(sizes.width, sizes.height);

    this.player = this.physics.add.image(175, sizes.height-100,"player").setOrigin(0,0);
    this.player.setDisplaySize(200,100); //scales image 
    this.player.setImmovable(true); //prevents other sprites from interacting 
    this.player.body.allowGravity = false;  //stops player from falling off screen 
    this.player.setCollideWorldBounds(true);//Prevents player from leaving
    this.player.body.setSize(this.player.width - 350, this.player.height);//resizes hitbox 
    this.cursor = this.input.keyboard.createCursorKeys(); //Keyboard controls 
    
  }

  update(){
   const {right, left} = this.cursor; 
   
   //Player Movement
   if(left.isDown) {
    this.player.setVelocityX(-this.playerSpeed);
   } else if (right.isDown) {
    this.player.setVelocityX(this.playerSpeed);
   } else {
    this.player.setVelocityX(0);
   }
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
