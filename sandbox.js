let computerScore = 0;
let playerScore = 0;
let number_of_rounds = 0;

let playerSelection;

const gameChoices = ["rock", "paper", "scissors"]


// get user choice
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorBtn = document.getElementById("scissors");

rockBtn.addEventListener('click', () => handleClick(rockBtn.id))
paperBtn.addEventListener('click', () => handleClick(paperBtn.id))
scissorBtn.addEventListener('click', () => handleClick(scissorBtn.id))

let resultsDiv = document.querySelector(".results");

// get computer choice
function getComputerChoice() {
    let max = 2, min = 0;
    let number = Math.floor(Math.random()*(max-min+1)) + min;
    return gameChoices[number]
}

// game logic
function playRound(playerSelection, computerSelection) {
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++;
        return `You win, ${playerSelection} beats ${computerSelection}`;
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        computerScore++;
        return `You lose, ${computerSelection} beats ${playerSelection}`;
    }
    
    if (playerSelection === computerSelection) {
        return `It's a tie`;
    }
}

// play game
function handleClick(choice) {

    if (playerScore == 5 ){
        resultsDiv.firstElementChild.innerHTML = "You won the game";
        playerScore, computerScore = 0;
    } else if (computerScore == 5) {
        resultsDiv.firstElementChild.innerHTML = "You lost the game";
        playerScore, computerScore = 0;
    } else {
        playerSelection = choice;
        // console.log(playerSelection);
        let result = playRound(playerSelection, getComputerChoice());
        // update scores
        let playerP = document.querySelector(".player");
        playerP.lastElementChild.innerHTML = playerScore;
        
        // console.log(computerScore);
        let computerP = document.querySelector(".computer");
        computerP.lastElementChild.innerHTML = computerScore;

        // show result
        resultsDiv.firstElementChild.innerHTML = result;
    }
}
