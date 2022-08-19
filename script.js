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

function getResult(playerSelection, computerSelection) {
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

function displayResult(result) {
    results.textContent = result;
}

function updateScore(result) {
    let winner = result[0];
    let playerScoreNum = Number(playerScore.textContent);
    let computerScoreNum = Number(computerScore.textContent);

    switch (winner) {
        case 'W':
            playerScore.textContent = playerScoreNum += 1;
            break;
        case 'L':
            computerScore.textContent = computerScoreNum += 1;
        default:
            break;
    }
}

function playRound(event) {
    let result = getResult(event.target.textContent, getComputerChoice());
    displayResult(result);
    updateScore(result);
}

const results = document.querySelector('.results');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const finalResult = document.querySelector('.finalResult');

const buttons = document.querySelectorAll('.playerSelection');

buttons.forEach((button) => {
    button.addEventListener('click', playRound);
});



