const instructionsBtn = document.querySelector("#instructionsBtn");
const instructionsScreen = document.querySelector("#instructionsScreen");
const creditsBtn = document.querySelector("#creditsBtn");
const optionsBtn = document.querySelector("#optionsBtn");
const startScreen = document.querySelector("#startScreen"); 
const mainMenuBtn = document.querySelector("#backBtn"); 
const gameTitle = document.querySelector("#gameTitle"); 

const gameStartDiv = document.querySelector("#startScreen");
const gameStartBtn = document.querySelector("#startGameBtn");
const gameEndDiv = document.querySelector("#gameOverScreen");
const gameResults = document.querySelector("#gameWinLoseSpan");
const finalScore = document.querySelector("#gameEndScoreSpan ");
const gameScreen = document.querySelector("#gameCanvas"); 
const pauseBtn = document.querySelector("#pauseBtn");

//UI Button Events 
creditsBtn.addEventListener("click", ()=> {

    //Hide all other screens 
    startScreen.style.display = "none"; 
    //Display credits screen 

    //Display Main Menu Button 
    mainMenuBtn.style.display = "flex"; 
});

//Displays game controls and instructions 
instructionsBtn.addEventListener("click", ()=> {

    //Hide all other screens 
    startScreen.style.display = "none"; 
    gameTitle.style.display = "none"; 

    //Displays instructions screen 
    instructionsScreen.style.display = "flex"; 

    
    //Display Main Menu Button 
    mainMenuBtn.style.display = "flex"; 
    
});

//Displays options screen
optionsBtn.addEventListener("click", ()=> {

    //Hide all other screens 
    startScreen.style.display = "none"; 
    //Display credits screen 

    
    //Display Main Menu Button 
    mainMenuBtn.style.display = "flex"; 
});

//Returns to main menu 
mainMenuBtn.addEventListener("click", ()=> {

    //Hide all other screens 
    startScreen.style.display = "flex"; 
    mainMenuBtn.style.display = "none"; 
    instructionsScreen.style.display = "none"

});

