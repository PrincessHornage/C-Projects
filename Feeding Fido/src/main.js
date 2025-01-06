import './style.css';
import Phaser from 'phaser';
/********************************/

//Canvas Dimensions 
const sizes = {
  width: 500,
  height: 500
}
const speedDown = 300 //How fast gravity affects object  

class GameScene extends Phaser.Scene{
  constructor(){
    super({ key: 'boot' });
  }

  preload(){
    console.log("Loading image...");
    this.load.image("bg", "/assets/levelonebg.png");  // Make sure this path is correct
    this.load.on("complete", () => {
      console.log("Image loaded successfully.");
    });
  }

  create(){
    this.add.image(0,0,"bg").setOrigin(0,0)
  }

  update(){
   
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
