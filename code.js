let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNum = Math.random();
    
    if (randomNum < 1/3)
        return "scissors";
    else if (1/3 < randomNum < 2/3)
        return "rock";
    else 
        return "paper";
}

function getUserChoice() {
    return window.prompt("rock, paper or scissors?");
}

function playRound(humanChoice, computerChoice) {
    
}

const computerChoice = getComputerChoice();
const userChoice = getUserChoice();

if (userChoice !== null)
    console.log(getWinner());