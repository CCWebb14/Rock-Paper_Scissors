
const playerMove = (window.prompt("rock, paper or scissors?", "rock")).toLowerCase();
const compMove = computerPlay();

console.log(playerMove);
const res = playRound();

console.log(compMove);
console.log(res);

function computerPlay(){
    genNum = Math.floor(Math.random() * 98);
    let compMove = "";
    if (genNum <= 32){
        compMove = "rock";
    }
    else if (genNum <= 65){
        compMove = "scissors";
    }
    else {
        compMove = "paper";
    }
    return compMove;
}

function playRound(){
    let Result = "";
    if (playerMove != ("rock" || "scissors" || "paper")){
        Result = "Sorry! You cannot use a " + playerMove + ". Please refresh.";
    }
    else if (playerMove == compMove){
        Result = "You Tie... Both players chose "  + compMove;
    }
    else if ((playerMove == "rock" && compMove == "scissors")
     || (playerMove == "scissors" && compMove == "paper")
     || (playerMove == "paper" && compMove == "rock")){
        Result = "You Win! " + playerMove + " beats " + compMove;
     }
     else {
        Result = "You Lose! " + compMove + " beats " + playerMove;
     }
     return Result;
}