////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    
    if (playerMove === computerMove){
        winner = "tie";
    }
    else if (playerMove === "scissors"){
        if(computerMove ==="rock"){
            winner = "computer";
        }
        else{
            winner = "player";
        }
    }
    else if (playerMove ==="rock"){
        if (computerMove === "paper" ){
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    else if (playerMove === "paper"){
        if (computerMove === "scissors"){
            winner = "computer";
        }
        else {
            winner = "player";
        }
    }
    return winner;
}

function playToFive() {
    
    console.log("Let's play Rock, Paper, Scissors");
    
    var playerWins = 0;
    var computerWins = 0;
    var winner = getWinner();

    while (playerWins !== 5 || computerWins !== 5){
    
    
    if (winner === "player"){
        playerWins += 1;
        
    }
    else if (winner === "computer"){
        computerWins += 1;
        
    }
    else if (winner === "tie"){
        console.log("Tie, try again.");
    }
   
    console.log("The score is " + [playerWins] +" for the player and "+[computerWins] +" for the computer" );
    return [playerWins, computerWins];
    }
    console.log("Final score"+ [playerWins]+ "for the player and "+[computerWins]+ " for the computer");
    }
    

