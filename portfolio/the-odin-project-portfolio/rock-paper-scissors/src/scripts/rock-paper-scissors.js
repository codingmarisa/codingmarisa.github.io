computerPlay();


function computerPlay() {
    let selection = getRandomNumber(1,3);
    if (selection == 1) {
        return "rock";
    } else if (selection == 2) {
        return "paper";
    } else if (selection == 3) {
        return "scissors";
    }
}

function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = "rock"; // make .toLower
    console.log("Marisa played " + computerSelection + ". You played " + playerSelection + ".")
    if (computerSelection == playerSelection) {
        // TODO: Increase both win counters
        console.log("It's a tie!");
    } else {
        if (computerSelection == "rock") {
            if (playerSelection == "paper") {
                //computer loses player wins
                console.log("You win!");
            } else if (playerSelection == "scissors") {
                //player loses computer wins
                console.log("Marisa wins...");
            }
        } else if (computerSelection == "paper") {
            if (playerSelection == "rock") {
                //player loses computer wins 
                console.log("Marisa wins...");
            } else if (playerSelection == "scissors") {
                //computer loses player wins
                console.log("You win!");
            }
        } else if (computerSelection == "scissors") {
            if (playerSelection == "rock") {
                //computer loses player wins
                console.log("You win!");
            } else if (playerSelection == "paper") {
                //player loses computer wins
                console.log("Marisa wins...");
            } 
        }
    }
}

function getRandomNumber(a, b) {
    min = Math.ceil(a);
    max = Math.floor(b);
    return Math.floor(Math.random() * (max - min + 1) + min );
}