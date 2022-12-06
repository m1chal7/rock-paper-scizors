//Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
//Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:


const choices = ['Rock','Paper','Scizors'];

function getComputerChoice() {
    
    let choice = choices[Math.floor(Math.random()*3)];
   
    return(choice);
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "Rock") {
            console.log(` It's a tie! Your selection ${playerSelection}, Computer chose ${computerSelection}`)
        } else if (computerSelection == "Scizors") {
            console.log(`YOU WIN! Your selection ${playerSelection}, Computer chose ${computerSelection}`)
            playerScore++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);

        } else if (computerSelection == "Paper"){
            console.log(`YOU LOSE! Your selection ${playerSelection}, Computer chose ${computerSelection}`)
            computerScore++;
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
        }
    }
    else if (playerSelection == "paper") {
        switch(computerSelection) {
            case "Paper":
                console.log(` It's a tie! Your selection ${playerSelection}, Computer chose ${computerSelection}`);
                console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
                break;
            case "Rock":
                console.log(` You Win! Your selection ${playerSelection}, Computer chose ${computerSelection}`);
                playerScore++;
                console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
                break;

            case "Scizors":
                console.log(` You Lose! Your selection ${playerSelection}, Computer chose ${computerSelection}`);
                computerScore++;
                console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
                break;
        
        }

    }
    else if (playerSelection == "scizors") {
        switch(computerSelection) {
            case "Scizors":
                console.log(` It's a tie! Your selection ${playerSelection}, Computer chose ${computerSelection}`);
                console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
                break;
            case "Paper":
                console.log(` You Win! Your selection ${playerSelection}, Computer chose ${computerSelection}`);
                playerScore++;
                console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
                break;

            case "Rock":
                console.log(` You Lose! Your selection ${playerSelection}, Computer chose ${computerSelection}`);
                computerScore++;
                console.log(`Player: ${playerScore}, Computer: ${computerScore}`);
                break;
        
        }

    }
  }


   
  
  

  function game() {
    for (let i=0; i < 5; i++) {
        let playerSelection = prompt('rock paper or scizors?').toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore == computerScore) {
        console.log('A Tie!');
    }
    else if (playerScore > computerScore) {
        console.log('Player Win');
    }
    else {
        console.log('Computer Win :(');
    }
  }

  game();