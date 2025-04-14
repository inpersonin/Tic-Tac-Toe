const a = "Rock"; 
const b = "Scissor";
const c = "Paper";

function getComputerChoice() {
   
    
    const random = Math.random(); 

    if(random <= 0.33) {
        return a;
    } else if(random <= 0.66) {
        return b;
    } else {
        return c;
    }
}


function getHumanChoice() {

   let choice = prompt("Rock,Paper or Scissor?")
   choice = choice.toLowerCase();
    if(choice == "rock") {
        return a;
    }
    else if(choice == "scissor") {
        return b;
    }
    else {
        return c;
    }
    
}


var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice,computerChoice) {
 
    if(humanChoice == a && computerChoice == b) {
        console.log("You win! Rock beats Scissor");
        humanScore++
    }
    else if(humanChoice == a && computerChoice == c ) {
 console.log("You lose! Paper beats Rock");
 computerScore++
    }
   else if(humanChoice == b && computerChoice == c) {
        console.log("You win! Scissor beats Paper");
        humanScore++
    }
    else if(humanChoice == b  && computerChoice == a) {
 console.log("You lose! Rock beats Scissor");
 computerScore++
    }
    else if(humanChoice == c && computerChoice == a) {
        console.log("You win! Paper beats Rock");
        humanScore++
    }
    else if(humanChoice == c  && computerChoice == b) {
 console.log("You lose! Scissor beats Paper");
 computerScore++
    }
    else {
        console.log("It's a Tie!");
    }
    
}


function game(){
    for(let i=1;i<=5;i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection)
    }
    console.log("\nFinal Result:");
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie overall!");
    }
}
game();

