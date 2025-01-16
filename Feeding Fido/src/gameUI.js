const instructionsBtn = document.querySelector("#instructionsBtn");
const instructionsScreen = document.querySelector("#instructionsScreen");
const creditsBtn = document.querySelector("#creditsBtn");
const optionsBtn = document.querySelector("#optionsBtn");
const optionsScreen = document.querySelector("#optionsScreen"); 
const startScreen = document.querySelector("#startScreen"); 
const gameTitle = document.querySelector("#gameTitle"); 

const closeInstBtn = document.querySelector("#closeBtn"); 
const volumeBtnImg = document.querySelector("#volumeBtnImg"); 
const volumeBtn = document.querySelector("#volumeBtn"); 
const efxBtnImg = document.querySelector("#efxBtnImg"); 
const efxBtn = document.querySelector("#efxBtn"); 
const saveSettingsBtn = document.querySelector("#saveSettingsBtn"); 
const fullScreenBtn = document.querySelector("#fullscreenBtn"); 

const gameStartDiv = document.querySelector("#startScreen");
const gameStartBtn = document.querySelector("#startGameBtn");
const gameEndDiv = document.querySelector("#gameOverScreen");
const gameResults = document.querySelector("#gameWinLoseSpan");
const finalScore = document.querySelector("#gameEndScoreSpan");
const gameScreen = document.querySelector("#gameCanvas"); 
const pauseBtn = document.querySelector("#pauseBtn"); 

//efxBtnImg

let volClicks = 0; //Button click count 
let efxVolClicks = 0; //Button click count 
let fsClicks = 0; 

//********** UI Button Events ***************

//Displays credits screen 
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

    startScreen.style.display = "none"; 
    optionsScreen.style.display = "block"; 
    gameTitle.style.display = "none"; 
    
});
//Returns to main menu 
closeInstBtn.addEventListener("click", ()=> {

    //Hide all other screens 
    startScreen.style.display = "flex"; 
    gameTitle.style.display = "flex"; 
    instructionsScreen.style.display = "none"; 

});

//Applies all settings to game and returns to main title 
saveSettingsBtn.addEventListener("click", () => {
    optionsScreen.style.display = "none"; 
    startScreen.style.display = "flex"; 
    gameTitle.style.display = "flex"; 
}); 


//Volume On/Off Buttons 
//Switches image to match audio state 
volumeBtn.addEventListener("click", ()=> {
    volClicks++; 
    if(volClicks === 1){
        volumeBtnImg.src = "/assets/mute.png"; 
    } else if( volClicks === 2) {
        volumeBtnImg.src = "/assets/speaker.png"; 
        volClicks = 0; 
    }
});
efxBtn.addEventListener("click", ()=> {
    efxVolClicks++; 
    if(efxVolClicks === 1){
        efxBtnImg.src = "/assets/mute.png"; 
    } else if( efxVolClicks === 2) {
        efxBtnImg.src = "/assets/speaker.png"; 
        efxVolClicks = 0; 
    }
}); 

fullScreenBtn.addEventListener("click", ()=> {
    fsClicks++; 
    if(fsClicks === 1){
        fullScreenBtn.innerHTML = "Disabled" 
    } else if( fsClicks === 2) {
        fullScreenBtn.innerHTML = "Enabled" 
        fsClicks = 0; 
    }
}); 

/*Pause Menu Modal*/
document.addEventListener('DOMContentLoaded', () => {
    // Functions to open and close a modal
    function openModal($el) {
      $el.classList.add('is-active');
    }
  
    function closeModal($el) {
      $el.classList.remove('is-active');
      pauseBtn.style.display = "flex"; 
    }
  
    function closeAllModals() {
      (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
      });
    }
  
    // Add a click event on buttons to open a specific modal
    (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
      const modal = $trigger.dataset.target;
      const $target = document.getElementById(modal);
  
      $trigger.addEventListener('click', () => {
        openModal($target);
      });
    });
  
    // Add a click event on various child elements to close the parent modal
    (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
      const $target = $close.closest('.modal');
  
      $close.addEventListener('click', () => {
        closeModal($target);
      });
    });
  
    // Add a keyboard event to close all modals
    document.addEventListener('keydown', (event) => {
      if(event.key === "Escape") {
        closeAllModals();
      }
    });
});
