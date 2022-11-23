console.log("Hello world");

const gameChoices = ["Rock", "Paper", "Scissors"]

// get computer choice
function getComputerChoice() {
    let max = 2, min = 0;
    let number = Math.floor(Math.random()*(max-min+1)) + min;
    console.log(number);
    return gameChoices[number]
}

console.log(getComputerChoice());