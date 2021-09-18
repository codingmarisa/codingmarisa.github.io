game();


function game() {
    let computerWins = 0;
    let playerWins = 0;
    let ties = 0;
    
    let i = 0;
    for(i; i < 5; i++) {
        let winner = playRound();
        if (winner == "tie") {
            ties++;
        } else if (winner == "marisa") {
            computerWins++;
        } else if (winner == "player") {
            playerWins++;
        }
    }

    if (computerWins > playerWins) {
        console.log("Marisa won " + computerWins + ", you won " + playerWins + ", and the number of ties was " + ties + ". Ouch, Marisa squashed you...");
    } else if (computerWins < playerWins) {
        console.log("Marisa won " + computerWins + ", you won " + playerWins + ", and the number of ties was " + ties + ". ALL OTHERS BOW DOWN!!! You are the Rock, Paper, Scissors champion!");
    } else if (computerWins == playerWins) {
        console.log("Marisa won " + computerWins + ", you won " + playerWins + ", and the number of ties was " + ties + ". Peace & Love ~ You're both winners, baby!");
    }
}

//TODO: get user input for player selection. make selection toLower and when console.logging, make the first letter capital at start of sentence
function playRound() {
    let computerSelection = computerPlay();
    let playerSelection = "rock"; // make .toLower
    console.log("Marisa played " + computerSelection + ". You played " + playerSelection + ".")
    if (computerSelection == playerSelection) {
        console.log("It's a tie!");
        return "tie";
    } else {
        if (computerSelection == "rock") {
            if (playerSelection == "paper") {
                //computer loses player wins
                console.log(playerSelection + " beats " + computerSelection + ". You win!");
                return "player";
            } else if (playerSelection == "scissors") {
                //player loses computer wins
                console.log(computerSelection + " beats " + playerSelection + ". Marisa wins...");
                return "marisa";
            }
        } else if (computerSelection == "paper") {
            if (playerSelection == "rock") {
                //player loses computer wins 
                console.log(computerSelection + " beats " + playerSelection + ". Marisa wins...");
                return "marisa";
            } else if (playerSelection == "scissors") {
                //computer loses player wins
                console.log(playerSelection + " beats " + computerSelection + ". You win!");
                return "player";
            }
        } else if (computerSelection == "scissors") {
            if (playerSelection == "rock") {
                //computer loses player wins
                console.log(playerSelection + " beats " + computerSelection + ". You win!");
                return "player";
            } else if (playerSelection == "paper") {
                //player loses computer wins
                console.log(computerSelection + " beats " + playerSelection + ". Marisa wins...");
                return "marisa";
            } 
        }
    }
}

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

function getRandomNumber(a, b) {
    min = Math.ceil(a);
    max = Math.floor(b);
    return Math.floor(Math.random() * (max - min + 1) + min );
}