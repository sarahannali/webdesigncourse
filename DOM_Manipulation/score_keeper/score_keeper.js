var playerOne = document.querySelector("#p1");
var playerTwo = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var reset = document.querySelector("#reset");
var games = document.querySelector("input");
var gamesDisplay = document.querySelector("#games")

var p1 = 0;
var p2 = 0;
var zeroed = 0
var gameOver = false;

function gamePlay(display, score, reset=false){
    return function(){
        gamesDisplay.textContent = games.value;
        winningScore = Number(games.value)
        for(var i = 0; i < display.length; i++){
            if(reset){
                p1 = 0;
                p2 = 0;
                gameOver = false;
                display[i].classList.remove("winner");
            }
            else if(!gameOver){
                if(window[score] < winningScore){ 
                    window[score]++;
                    if(window[score] === winningScore){
                        gameOver = true;
                        display[i].classList.add("winner");
                    }
                }
            }
            display[i].textContent = window[score];
        }
    }
}

playerOne.addEventListener("click", gamePlay([p1Display],"p1"))

playerTwo.addEventListener("click", gamePlay([p2Display],"p2"))

reset.addEventListener("click", gamePlay([p1Display,p2Display], "zeroed", true))

games.addEventListener("change", gamePlay([p1Display,p2Display], "zeroed", true))