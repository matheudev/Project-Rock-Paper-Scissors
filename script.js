function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toUpperCase();
    let cs = computerSelection.toUpperCase();
    let win = "You Won! ${ps} beats ${cs}"
    let lose = "You Lose! ${cs} beats ${ps}"
    let tie = "The game ended in a tie. Both chose ${ps}"
    if (ps === "PAPER" && cs === "ROCK") {
        return win
    } else if (ps === "PAPER" && cs === "SCISSORS") {
        return lose
    } else if (ps === "ROCK" && cs === "PAPER") {
        return lose
    } else if (ps === "ROCK" && cs === "SCISSORS") {
        return win
    } else if (ps === "SCISSORS" && cs === "PAPER") {
        return win
    } else if (ps === "SCISSORS" && cs === "ROCK") {
        return lose
    } else {
        return tie
    }
}

function getComputerChoice() {
    let rps = ["Rock", "Paper", "Scissors"]
    let randomIndex = Math.floor(Math.random() * rps.length);
    let computerSelection = rps[randomIndex]
    return computerSelection
}






const computerSelection = getComputerChoice();