function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toUpperCase();
    let cs = computerSelection.toUpperCase();
    let win = `You Won! ${ps} beats ${cs}`;
    let lose = `You Lose! ${cs} beats ${ps}`;
    let tie = `The game ended in a tie. Both chose ${ps}`;
  
    if (ps === "PAPER" && cs === "ROCK") {
      return win;
    } else if (ps === "ROCK" && cs === "SCISSORS") {
      return win;
    } else if (ps === "SCISSORS" && cs === "PAPER") {
      return win;
    } else if (ps === cs) {
      return tie;
    } else {
      return lose;
    }
  }
  
  const rps = ["ROCK", "PAPER", "SCISSORS"];
  let playerScore = 0;
  let computerScore = 0;
  
  function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * rps.length);
    return rps[randomIndex];
  }
  
  function getPlayerSelection() {
    let playerSelection = prompt("Choose ROCK, PAPER, or SCISSORS").toUpperCase();
    while (!rps.includes(playerSelection)) {
      playerSelection = prompt("Invalid input! Choose ROCK, PAPER, or SCISSORS").toUpperCase();
    }
    return playerSelection;
  }
  
  function game() {
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
    console.log("        ROCK PAPER SCISSORS GAME!")
    console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-")
    console.log("Win the first to get 3 points")
    while (playerScore < 3 && computerScore < 3) {
      let playerSelection = getPlayerSelection();
      let computerSelection = getComputerChoice();
      let result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.startsWith("You Won")) {
        playerScore++;
      } else if (result.startsWith("You Lose")) {
        computerScore++;
      }
  
      console.log(`Player: ${playerScore} Computer: ${computerScore}`);
    }
  }
  
  console.log(game());
  