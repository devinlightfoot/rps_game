var computerSelection;
var playerSelection;
let huscore = 0;
let compscore = 0;
var count;
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
        computerSelection = "scissors";
    }
}
function playRound(player, computer) {
    player = playerSelection;
    computer = computerSelection;
    if (playerSelection === computerSelection) {
        count--;
        return "You both chose the same thing, go again!";
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        compscore++;
        return "You lose this round, paper beats rock";
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        huscore++;
        return "You won this round! Rock beats paper";
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        huscore++;
        return "You won this round! Paper bears rock";
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        compscore++;
        return "You lose this round, scissors beat paper";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        compscore++;
        return "You lose this round, rock beats scissors";
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        huscore++;
        return "You win this round! Scissors beat paper";
    }
    else {
        alert("something went wrong");
    }
}
function game() {
    for (count = 0; count < 5; count++) {
        playerSelection = prompt("Please make your selection", "rock");
        playerSelection = playerSelection.toLowerCase();
        computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (huscore > compscore) {
        return "Congratulations, you beat the machine!";
    }
    else if (compscore > huscore) {
        return "The machine has bested you, better luck next time";
    }
    else {
        alert("something went wrong");
    }
}
