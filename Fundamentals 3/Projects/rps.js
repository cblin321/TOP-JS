function getComputerChoice() {
    choices = new Map();
    choices.set(0, "rock");
    choices.set(1, "paper");
    choices.set(2, "scissors");
    return choices.get(Math.floor(Math.random() * 3));
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {  
        console.log("tie");
        return 0
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("player loses to paper");
        return -1
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("computer loses to paper");
        return 1
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("computer loses to rock");
        return 1
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        console.log("player loses to rock");
        return -1
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log("computer loses to scissors");
        return 1
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        console.log("player loses to scissors")
        return -1
    } 
    console.log("player input not recognized");
    return 2;    
}

function game() {
    let pScore = 0;
    let cScore = 0;
    for (i = 0; i < 5; i++) {
        let id = playRound(prompt("Select rock, paper, or scissors"), getComputerChoice());
        if (id == 1) 
            pScore++;
        else if (id == -1)
            cScore++;
    }
    console.log("Player: " + pScore + " cScore: " + cScore);
}