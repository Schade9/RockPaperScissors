const gameChoices = ["rock", "paper", "scissors"]

// get computer choice
function getComputerChoice() {
    let max = 2, min = 0;
    let number = Math.floor(Math.random()*(max-min+1)) + min;
    return gameChoices[number]
}

// game logic
function playRound(playerSelection, computerSelection) {
    const choices = new Array()
    choices.push(playerSelection);
    choices.push(computerSelection);
    console.log(choices);

    if (choices[0] === choices[1]) {
        return `It's a tie`;
    } else if (choices.includes('scissors', 'rock')) {
        if (playerSelection === 'rock') {
            playerScore += 1;
            return `You win, ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore += 1;
            return `You lose, ${computerSelection} beats ${playerSelection}`;
        }
    } else if (choices.includes('rock', 'paper')) {
        if (playerSelection === 'paper') {
            playerScore += 1;
            return `You win, ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore += 1;
            return `You lose, ${computerSelection} beats ${playerSelection}`;
        }
    } else if (choices.includes('scissors', 'paper')) {
        if (playerSelection === 'scissors') {
            playerScore += 1;
            return `You win, ${playerSelection} beats ${computerSelection}`;
        } else {
            computerScore += 1;
            return `You lose, ${computerSelection} beats ${playerSelection}`;
        }
    }
}


let number_of_rounds = 0;

let computerScore = 0;
let playerScore = 0;

// play game in rounds
function game(numRounds) {
    while (number_of_rounds < numRounds) {
        input = prompt("Enter your selection. (rock, paper or scissors)");
        let playerSelection = input.toLowerCase();
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
        console.log(`Your score: ${playerScore} ..... Computer score: ${computerScore}`);
        number_of_rounds++;
    }

    if (playerScore > computerScore) {
        return `You win with a score of ${playerScore} against ${computerScore}`;
    } else if (playerScore == computerScore){
        input = prompt("Enter your selection. (rock, paper or scissors)");
        let playerSelection = input.toLowerCase();
        let result = playRound(playerSelection, getComputerChoice());
        console.log(result);
    } else {
        return `You lost witha a score of ${playerScore} against ${computerScore}`;
    }
}

let gameResult = game(5);
console.log(gameResult);