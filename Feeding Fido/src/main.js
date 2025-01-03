import './style.css'
import Phaser from 'phaser'
/********************************/

//Canvas Dimensions 
const sizes = {
  width: 500,
  height: 500
}
const speedDown = 300; //How fast gravity affects object  

class GameScene extends Phaser.Scene{
  constructor(){
    super("scene-game")
  }

  //Preloads assets 
  preload(){
    this.load.image("bg","/assets/levelonebg.png")
  }
  //Accepts and loads assets 
  create(){
    //Spans image across canvas 
    this.add.image(0,0,"bg"); 
  }
  update(){}
}
//Game Configurations 
const config = { 
  type: Phaser.WEBGL,
  width: sizes.width,
  height: sizes.height,
  canvas:gameCanvas,
  physics: {
    default: "arcade",
    arcade: {
      gravity: {y: speedDown}, 
      debug: true 
    }
  },
  scene: {GameScene}
}

const game = new Phaser.Game(config); 
