function getComputerChoice() {
    let rnd = Math.floor(Math.random() * 3);

    switch (rnd) {
        case 0:
            return "rock";

        case 1:
            return "paper";

        case 2:
            return "scissors";
    }
}

function getPlayerChoice() {
    let playerInput = prompt("Enter Rock, Paper or Scissors");
    return playerInput;
}

function playRound(playerSelection, computerSelection) {
    let lowerPlayerSelection = playerSelection.toLowerCase();

    switch (lowerPlayerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                return "Draw - Rock vs rock";
            } else if (computerSelection == "paper") {
                return "Lose - Rock smothered by paper";
            } else if (computerSelection == "scissors") {
                return "Win - Rock smashes scissors";
            }
        case "paper":
            if (computerSelection == "rock") {
                return "Win - Paper smothers rock";
            } else if (computerSelection == "paper") {
                return "Draw - Paper vs paper";
            } else if (computerSelection == "scissors") {
                return "Lose - Paper cut by scissors";
            }
        case "scissors":
            if (computerSelection == "rock") {
                return "Lose - Scissors smashed by rock";
            } else if (computerSelection == "paper") {
                return "Win - Scissors cut paper";
            } else if (computerSelection == "scissors") {
                return "Draw - Scissors vs scissors";
            }

        default:
            return "Input invalid";
    }
}

// function game() {

//     for (let i = 0; i < 5; i++) {
//         console.log(`Round ${i+1}!`)
//         let playerChoice = getPlayerChoice();
//         let computerChoice = getComputerChoice();

//         console.log(playRound(playerChoice, computerChoice));
//     }
// }

const buttons = document.querySelectorAll('.playerSelection');


buttons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.textContent, getComputerChoice()));
    });
});