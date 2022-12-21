//Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
//Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
//Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
//Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

const choices = ["Rock", "Paper", "Scizors"];

function getComputerChoice() {
  let choice = choices[Math.floor(Math.random() * 3)];

  return choice;
}

let playerScore = 0;
let computerScore = 0;
let rounds = 0;
const results = document.querySelector(".results");
const restart = document.querySelector(".restart");
const finalResults = document.querySelector(".finalResults");
const score = document.querySelector(".score");
results.textContent = "";
finalResults.textContent = "";
score.textContent = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock") {
    if (computerSelection == "Rock") {
      results.textContent = ` It's a tie! Your selection ${playerSelection}, Computer chose ${computerSelection}`;
      score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    } else if (computerSelection == "Scizors") {
      results.textContent = `YOU WIN! Your selection ${playerSelection}, Computer chose ${computerSelection}`;
      playerScore++;
      score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    } else if (computerSelection == "Paper") {
      results.textContent = `YOU LOSE! Your selection ${playerSelection}, Computer chose ${computerSelection}`;
      computerScore++;
      score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    }
    rounds++;
  } else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "Paper":
        results.textContent = ` It's a tie! Your selection ${playerSelection}, Computer chose ${computerSelection}`;
        score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
        break;
      case "Rock":
        results.textContent = ` You Win! Your selection ${playerSelection}, Computer chose ${computerSelection}`;
        playerScore++;
        score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
        break;

      case "Scizors":
        results.textContent = ` You Lose! Your selection ${playerSelection}, Computer chose ${computerSelection}`;
        computerScore++;
        score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
        break;
    }
    rounds++;
  } else if (playerSelection == "scizors") {
    switch (computerSelection) {
      case "Scizors":
        results.textContent = ` It's a tie! Your selection ${playerSelection}, Computer chose ${computerSelection}`;
        score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
        break;
      case "Paper":
        results.textContent = ` You Win! Your selection ${playerSelection}, Computer chose ${computerSelection}`;
        playerScore++;
        score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
        break;

      case "Rock":
        results.textContent = ` You Lose! Your selection ${playerSelection}, Computer chose ${computerSelection}`;
        computerScore++;
        score.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
        break;
    }
    rounds++;
  }
}

function game() {
  //  for (let i=0; i < 5; i++) {
  //      let playerSelection = prompt('rock paper or scizors?').toLowerCase();
  //      let computerSelection = getComputerChoice();
  //      playRound(playerSelection, computerSelection);
  //   }

  //let playerSelection = '';

  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scizors = document.querySelector(".scizors");
  const button = document.querySelectorAll("button");
  let playerSelection = "";

  rock.addEventListener("click", () => {
    if (rounds < 5) {
      let computerSelection = getComputerChoice();
      playRound('rock', computerSelection);
    } else {
      pickWinner();
    }
  });

  paper.addEventListener("click", () => {
    if (rounds < 5) {
        let computerSelection = getComputerChoice();
        playRound('paper', computerSelection);
      } else {
        pickWinner();
      }
  });

  scizors.addEventListener("click", () => {
    if (rounds < 5) {
        let computerSelection = getComputerChoice();
        playRound('scizors', computerSelection);
      } else {
        pickWinner();
      }
  });

  
}

function pickWinner() {
   
        if (playerScore == computerScore) {
          finalResults.textContent = "A Tie!";
        } else if (playerScore > computerScore) {
            finalResults.textContent = "Player Win";
        } else {
            finalResults.textContent = "Computer Win :(";
        }
   
}

restart.addEventListener('click', () =>{
    playerScore = 0;
    computerScore = 0;
    rounds = 0;
    results.textContent = '';
    score.textContent ='';
    finalResults.textContent = '';
}
)

game();
