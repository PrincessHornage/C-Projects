const canvas = document.getElementById("canvas"); 
const ctx = canvas.getContext("2d");

//Sets canvas to viewport dimensions 
canvas.width = innerWidth; 
canvas.height = innerHeight;

//Sprite Sheets 
const shibaInuSpriteSheet = new Image(); 
shibaInuSpriteSheet.src = "shibaInuSpriteSheet.png"; 
shibaInuSpriteSheet.onload = loadImages; 

//Shiba Sprite Sheet Calculations
//Same for entire sheet 
let rows = 11;
let cols = 10; 

//Calculates indiviual sprite sizing 
//Bug*: Only splices properly when i update the width before animation
//Changes per row  
//let idleSpriteWidth = shibaInuSpriteSheet.width / cols + 0.7;   
//let idleSpriteHeight = shibaInuSpriteSheet.height / rows; 

let sitSpriteWidth = shibaInuSpriteSheet.width / cols;   
let sitSpriteHeight = shibaInuSpriteSheet.height / rows; 
ctx.webkitImageSmoothingEnabled = false; 
ctx.imageSmoothingEnabled = false; 

//Also changes
let totalFrames = 4; //total num of sprites in animation
let totalSitFrames = 15; 
let currFrame = 0; 
let srcX = 0; //Sprite source position 
let srcY = 0;
let fps = 0; //Animation speed 
let scaleFactor = 4; 
//let midXPos = innerWidth / 2 - (idleSpriteWidth * scaleFactor) / 2;
//let midYPos = innerHeight / 2 - (idleSpriteHeight * scaleFactor) / 2;
let midXPos = innerWidth / 2 - (sitSpriteWidth * scaleFactor) / 2;
let midYPos = innerHeight / 2 - (sitSpriteHeight * scaleFactor) / 2;


//Animates Sprite Sheets 
function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);//Clears previous frame  
    requestAnimationFrame(animate); //smoothes animation

    //Calculates current frame
    //currFrame = currFrame % totalFrames;
    currFrame = currFrame % totalSitFrames;
    srcX = currFrame * idleSpriteWidth; //Updates sprite position 
    //srcX = currFrame * sitSpriteWidth; //Updates sprite position 

    ctx.save();
    ctx.translate(midXPos, midYPos); //resizes animation  
    ctx.scale(scaleFactor, scaleFactor)
    ctx.drawImage(shibaInuSpriteSheet, srcX, srcY, idleSpriteWidth, idleSpriteHeight, 0, 0, idleSpriteWidth, idleSpriteHeight);
    //ctx.drawImage(shibaInuSpriteSheet, srcX, srcY, sitSpriteWidth, sitSpriteHeight, 0, 0, sitSpriteWidth, sitSpriteHeight);
    ctx.restore(); 

    fps++; 
    if(fps >= 10){
        currFrame++; 
        fps = 0; 
    }
}


//Loads canvas before image 
let numOfImages = 1; 
function loadImages() {
    if(--numOfImages > 0) return; 
    animate(); 
}

//Keyboad Events 
addEventListener("keydown", e => {
    if(e.key === "ArrowDown"){
        
    }
});



