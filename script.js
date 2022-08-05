function getComputerChoice() {
    let rnd = Math.floor(Math.random()*3);

    switch (rnd) {
        case 0:
            return "Rock";

        case 1:
            return "Paper";

        case 2:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            if (computerSelection == "Rock") {
                return "Draw - Rock vs rock";
            } else if (computerSelection == "Paper") {
                return "Lose - Rock smothered by paper";
            } else if (computerSelection == "Scissors") {
                return "Win - Rock smashes scissors";
            }
        case "Paper":
            if (computerSelection == "Rock") {
                return "Win - Paper smothers rock";
            } else if (computerSelection == "Paper") {
                return "Draw - Paper vs paper";
            } else if (computerSelection == "Scissors") {
                return "Lose - Paper cut by scissors";
            }
        case "Scissors":
            if (computerSelection == "Rock") {
                return "Lose - Scissors smashed by rock";
            } else if (computerSelection == "Paper") {
                return "Win - Scissors cut paper";
            } else if (computerSelection == "Scissors") {
                return "Draw - Scissors vs scissors";
            }
    
        default:
            return "Input invalid"
    }
}