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
let rows = 13;
let cols = 26; 

//Calculates indiviual sprite sizing 
//Bug*: Only splices properly when i update the width before animation
//Changes per row  
let idleSpriteWidth = shibaInuSpriteSheet.width / cols + 2.5;   
let idleSpriteHeight = shibaInuSpriteSheet.height / rows; 
ctx.webkitImageSmoothingEnabled = false; 
ctx.imageSmoothingEnabled = false; 

//Also changes
let totalFrames = 4; //total num of sprites in animation
let currFrame = 0; 
let srcX = 0; //Sprite source position 
let srcY = 0;
let fps = 0; //Animation speed 

//Animates Sprite Sheets 
function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);//Clears previous frame  
    requestAnimationFrame(animate); 

    //Calculates current frame w/ 0 being the first
    currFrame = currFrame % totalFrames;
    srcX = currFrame * idleSpriteWidth; //shows new sprite position 

    ctx.save();
    resizeImage(); 
    ctx.drawImage(shibaInuSpriteSheet, srcX, 27, idleSpriteWidth, idleSpriteHeight, 0, 0, idleSpriteWidth, idleSpriteHeight);
    ctx.restore(); 

    fps++; 
    if(fps >= 8){
        currFrame++; 
        fps = 0; 
    }
}

function resizeImage(){
    let scaleFactor = 4;
    let midXPos = innerWidth / 2 - (idleSpriteWidth * scaleFactor) / 2;
    let midYPos = innerHeight / 2 - (idleSpriteHeight * scaleFactor) / 2;
    ctx.translate(midXPos, midYPos); 
    ctx.scale(scaleFactor, scaleFactor)
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

