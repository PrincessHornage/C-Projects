const instructionsBtn = document.querySelector("#instructionsBtn");
const instructionsScreen = document.querySelector("#instructionsScreen");
const creditsBtn = document.querySelector("#creditsBtn");
const optionsBtn = document.querySelector("#optionsBtn");
const startScreen = document.querySelector("#startScreen"); 
const closeInstBtn = document.querySelector("#closeBtn"); 
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
});

//Displays game controls and instructions 
instructionsBtn.addEventListener("click", ()=> {

    //Hide all other screens 
    startScreen.style.display = "none"; 
    gameTitle.style.display = "none"; 

    //Displays instructions screen 
    instructionsScreen.style.display = "flex"; 

    
    //Display Main Menu Button 
    
});

//Displays options screen
optionsBtn.addEventListener("click", ()=> {

    //Hide all other screens 
    startScreen.style.display = "none"; 
    //Display credits screen 

    
    //Display Main Menu Button 
});

//Returns to main menu 
closeInstBtn.addEventListener("click", ()=> {

    //Hide all other screens 
    startScreen.style.display = "flex"; 
    gameTitle.style.display = "flex"; 
    instructionsScreen.style.display = "none"; 

});

