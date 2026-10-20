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

function playRound(user, computer) {
    const winRound = (user === "rock" && computer === "scissors") || (user === "paper" && computer === "rock") || (user === "scissors" && computer === "paper");
    
    if (user === computer)
        console.log(`${user} against ${computer}, it's a tie!`);
    else if (winRound) {
        console.log(`${user} won against ${computer}; congratulations!`);
        return "win";
}   else {
        console.log (`${user} lost against ${computer}, better luck next time!`)
        return "lose";
    };
}

function playGame() {
    let userScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    startRound();

    function startRound() {
    const computerChoice = getComputerChoice();
    const userChoice = getUserChoice().toLowerCase();
    const score = playRound(userChoice, computerChoice);

    if (score === "win")
        userScore++;
    else if (score === "lose")
        computerScore++;
    else 
        tieScore++;

    console.log(`You: ${userScore}; Computer: ${computerScore}`);

    if ((userScore + computerScore + tieScore) < 5)
        startRound();
    }
}

playGame();