var computerSelection;
var playerSelection;
function computerPlay() {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    choice = getRndInteger(0, 3);
    if (choice == 0) {
        computerSelection = "rock";
    }
    else if (choice == 1) {
        computerSelection = "paper";
    }
    else {
        computerSelection = "scissors"
    }
    console.log(computerSelection);
}
function game() {
    let huscore = 0;
    let compscore = 0;
    let count;
    for (count = 0; count < 5; count++) {
        playerSelection = prompt("Please make your selection", "rock");
        playerSelection = playerSelection.toLowerCase();
        computerPlay();
        function round(player, computer) {
            playerSelection = prompt("Please make your selection", "rock");
        playerSelection = playerSelection.toLowerCase();
            player = playerSelection;
            computer= computerSelection;
            if (playerSelection == computerSelection) {
                count--;
                console.log("count:" + count);
                console.log("Your score:" + huscore);
                console.log("Computer score:" + compscore);
                return "You both chose the same thing, go again!"
            }
            if (playerSelection == "rock" && computerSelection == "paper")
                compscore++;
            console.log("count:" + count);
            console.log("Your score:" + huscore);
            console.log("Computer score:" + compscore);
            return "You lose this round, paper beats rock";
            if (playerSelection == "rock" && computerSelection == "scissors") {
                huscore++;
                console.log("count:" + count);
                console.log("Your score:" + huscore);
                console.log("Computer score:" + compscore);
                return "You won this round! Rock beats paper";
            }
            if (playerSelection == "paper" && computerSelection == "rock") {
                huscore++; console.log("count:" + count);
                console.log("Your score:" + huscore);
                console.log("Computer score:" + compscore);
                return "You won this round! Paper bears rock"
            }
            if (playerSelection == "paper" && computerSelection == "scissors") {
                compscore++;
                console.log("count:" + count);
                console.log("Your score:" + huscore);
                console.log("Computer score:" + compscore);
                return "You lose this round, scissors beat paper";
            }
            if (playerSelection == "scissors" && computerSelection == "rock") {
                compscore++;
                console.log("count:" + count);
                console.log("Your score:" + huscore);
                console.log("Computer score:" + compscore);
                return "You lose this round, rock beats scissors";
            }
            if (playerSelection == "scissors" && computerSelection == "paper") {
                huscore++;
                console.log("count:" + count);
                console.log("Your score:" + huscore);
                console.log("Computer score:" + compscore);
                return "You win this round! Scissors beat paper";
            }
        }
    }
    if (huscore > compscore) {
            return "Congratulations, you beat the machine!";
        }
        else {
            return "The machine has bested you, better luck next time";
        }
}