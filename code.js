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


function getHumanChoice(choice) {
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
var count = 0;

const buttonContainer = document.createElement('div');
document.body.appendChild(buttonContainer);

const Div = document.createElement('div'); 
Div.id = 'round';                    
document.body.appendChild(Div);        

const messageDiv = document.createElement('div');
round.appendChild(messageDiv)

const scoreDiv = document.createElement('div');
round.appendChild(scoreDiv)

function playRound(humanChoice,computerChoice) {
 
    if (humanChoice == a && computerChoice == b) {
        messageDiv.textContent = "You win! Rock beats Scissor";
        humanScore++;
    }
    
    else if(humanChoice == a && computerChoice == c ) {
        messageDiv.textContent = "You lose! Paper beats Rock";
 computerScore++
    }
   else if(humanChoice == b && computerChoice == c) {
        messageDiv.textContent = "You win! Scissor beats Paper";
        humanScore++
    }
    else if(humanChoice == b  && computerChoice == a) {
 messageDiv.textContent = "You lose! Rock beats Scissor";
 computerScore++
    }
    else if(humanChoice == c && computerChoice == a) {
        messageDiv.textContent = "You win! Paper beats Rock";
        humanScore++
    }
    else if(humanChoice == c  && computerChoice == b) {
 messageDiv.textContent = "You lose! Scissor beats Paper";
 computerScore++
    }
    else {
        messageDiv.textContent = "It's a Tie!";
    }
    scoreDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    count++
    if (count === 5){
        game();
    }
    console.log(count);
    
}



//const bCount = 3;
//for (let i = 1; i <= bCount; i++) {
    const b1 = document.createElement('button');
    b1.textContent = `Rock`; // Set button label
    b1.addEventListener('click', function() {
        console.log('rock');
        const human = getHumanChoice("rock");
        const comp = getComputerChoice();
        playRound(human,comp);
    });
    buttonContainer.appendChild(b1);

    const b2 = document.createElement('button');
    b2.textContent = `Paper`; // Set button label
    b2.addEventListener('click', function() {
        console.log('paper');
        const human = getHumanChoice("paper");
        const comp = getComputerChoice();
        playRound(human,comp);
    });
    buttonContainer.appendChild(b2);

    const b3 = document.createElement('button');
    b3.textContent = `Scissor`; // Set button label
    b3.addEventListener('click', function() {
        console.log('scissor');
        const human = getHumanChoice("scissor");
        const comp = getComputerChoice();
        playRound(human,comp);
    });
    buttonContainer.appendChild(b3);

    

const result = document.createElement('h1')
document.body.appendChild(result)

    function game() {
            if (humanScore > computerScore) {
        result.textContent = "You win the game!";
    } else if (computerScore > humanScore) {
     result.textContent = "Computer wins the game!";
    } else {
        result.textContent = "It's a tie overall!";

    }
   
    playAgainBtn.style.display = "inline-block"

}
    const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = "Play Again";
playAgainBtn.style.display = "none"; // hide initially
document.body.appendChild(playAgainBtn);

playAgainBtn.addEventListener('click', function () {
    resetGame();
    playAgainBtn.style.display = "none"; // hide the button again
});

function resetGame() {
    count = 0;
humanScore = 0;
computerScore = 0;

    messageDiv.textContent = "";
    scoreDiv.textContent = "Human: 0 - Computer: 0";
    result.textContent = "Click a button to start!";
}







      
//}



//function game(){
    //for(let i=1;i<=5;i++) {
        //const humanSelection = getHumanChoice();
        //const computerSelection = getComputerChoice();
        
   //   function playRound(humanSelection, computerSelection) {
    
    //console.log("\nFinal Result:");
    //if (humanScore > computerScore) {
      //  console.log("You win the game!");
    //} else if (computerScore > humanScore) {
      //  console.log("Computer wins the game!");
    //} else {
      //  console.log("It's a tie overall!");
    //}
//}
//game();
