var computerSelection;
var playerSelection;
var huScore = 0;
var compScore = 0;
refreshScore();
function computerPlay() {
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    choice = getRndInteger(0, 3);
    if (choice == 0) {
        return "rock";
    }
    else if (choice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function playRound(player, computer) {
    player.toLowerCase();
    console.log(player);
    console.log(computer);
    if (player === computer) {
        count--;
        alert("You both chose the same thing, go again!");
    }
    else if ((player === "rock") && (computer === "paper")) {
        compScore++;
        alert("You lose this round, paper beats rock");
    }
    else if ((player === "rock") && (computer === "scissors")) {
        huScore++;
        alert("You won this round! Rock beats paper");
    }
    else if ((player === "paper") && (computer === "rock")) {
        huScore++;
        alert("You won this round! Paper beats rock");
    }
    else if ((player === "paper") && (computer === "scissors")) {
        compScore++;
        alert("You lose this round, scissors beat paper");
    }
    else if ((player === "scissors") && (computer === "rock")) {
        compScore++;
        alert("You lose this round, rock beats scissors");
    }
    else if ((player === "scissors") && (computer === "paper")) {
        huScore++;
        alert("You win this round! Scissors beat paper");
    }
    else {
        alert("something went wrong");
    }
}
const btns = Array.from(document.querySelectorAll("button"));
btns.forEach((button) => {
    button.addEventListener('click', (e) => {
        playRound(button.dataset.key, computerPlay());
        refreshScore();
        console.log(huScore);
        console.log(compScore);
        checkWin();
    });
});
function refreshScore() {
    document.getElementById('hscore').innerHTML = huScore;
    document.getElementById('cscore').innerHTML = compScore;
}
function checkWin(){
    if(huScore === 5){
        alert("Congratulations, you have bested the machine!");
    }
    else if(compScore === 5){
        alert("The machine has bested you, better luck next time");
    }
    else{
        return;
    }

}