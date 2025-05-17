// Tron-style animated background using canvas
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lines = [];
for (let i = 0; i < 100; i++) {
    lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 1.5,
        length: 100 + Math.random() * 200
    });
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#0ff';
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#0ff';
    ctx.lineWidth = 2;

    lines.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + line.length);
        ctx.stroke();

        line.y += line.speed;
        if (line.y > canvas.height) {
            line.y = -line.length;
            line.x = Math.random() * canvas.width;
        }
    });

    requestAnimationFrame(draw);
}
draw();

const a = "Rock";
const b = "Scissor";
const c = "Paper";

function getComputerChoice() {
    const random = Math.random();
    if (random <= 0.33) {
        return a;
    } else if (random <= 0.66) {
        return b;
    } else {
        return c;
    }
}

function getHumanChoice(choice) {
    choice = choice.toLowerCase();
    if (choice == "rock") {
        return a;
    } else if (choice == "scissor") {
        return b;
    } else {
        return c;
    }
}

var humanScore = 0;
var computerScore = 0;
var count = 0;

document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.alignItems = 'center';
document.body.style.height = '100vh';
document.body.style.margin = '0';
document.body.style.backgroundColor = 'black';
document.body.style.color = '#0ff';
document.body.style.fontFamily = 'Arial, sans-serif';
document.body.style.textAlign = 'center';

const buttonContainer = document.createElement('div');
buttonContainer.style.display = 'flex';
buttonContainer.style.flexDirection = 'row';
buttonContainer.style.justifyContent = 'center';
buttonContainer.style.alignItems = 'center';
buttonContainer.style.gap = '30px';
buttonContainer.style.marginTop = '20vh';
document.body.appendChild(buttonContainer);

function styleButton(btn) {
    btn.style.padding = '15px 30px';
    btn.style.fontSize = '20px';
    btn.style.border = '2px solid #0ff';
    btn.style.borderRadius = '8px';
    btn.style.backgroundColor = 'black';
    btn.style.color = '#0ff';
    btn.style.textShadow = '0 0 5px #0ff, 0 0 10px #0ff';
    btn.style.boxShadow = '0 0 5px #0ff, 0 0 20px #0ff';
    btn.style.cursor = 'pointer';
}

const b1 = document.createElement('button');
b1.textContent = `Rock`;
b1.addEventListener('click', function () {
    const human = getHumanChoice("rock");
    const comp = getComputerChoice();
    playRound(human, comp);
});
buttonContainer.appendChild(b1);
styleButton(b1);

const b2 = document.createElement('button');
b2.textContent = `Paper`;
b2.addEventListener('click', function () {
    const human = getHumanChoice("paper");
    const comp = getComputerChoice();
    playRound(human, comp);
});
buttonContainer.appendChild(b2);
styleButton(b2);

const b3 = document.createElement('button');
b3.textContent = `Scissor`;
b3.addEventListener('click', function () {
    const human = getHumanChoice("scissor");
    const comp = getComputerChoice();
    playRound(human, comp);
});
buttonContainer.appendChild(b3);
styleButton(b3);

const textContainer = document.createElement('div');
textContainer.style.marginTop = '40px';
textContainer.style.display = 'flex';
textContainer.style.flexDirection = 'column';
textContainer.style.alignItems = 'center';
textContainer.style.gap = '10px';
document.body.appendChild(textContainer);

const messageDiv = document.createElement('div');
messageDiv.style.fontSize = '24px';
messageDiv.style.textShadow = '0 0 5px #0ff, 0 0 15px #0ff';
textContainer.appendChild(messageDiv);

const scoreDiv = document.createElement('div');
scoreDiv.style.fontSize = '20px';
scoreDiv.style.textShadow = '0 0 5px #0ff, 0 0 15px #0ff';
scoreDiv.textContent = "Human: 0 - Computer: 0";
textContainer.appendChild(scoreDiv);

const result = document.createElement('h1');
result.style.fontSize = '28px';
result.style.textShadow = '0 0 5px #0ff, 0 0 20px #0ff';
textContainer.appendChild(result);

const playAgainBtn = document.createElement('button');
playAgainBtn.textContent = "Play Again";
playAgainBtn.style.display = "none";
textContainer.appendChild(playAgainBtn);
styleButton(playAgainBtn);

playAgainBtn.addEventListener('click', function () {
    resetGame();
    playAgainBtn.style.display = "none";
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice == a && computerChoice == b) {
        messageDiv.textContent = "You win! Rock beats Scissor";
        humanScore++;
    } else if (humanChoice == a && computerChoice == c) {
        messageDiv.textContent = "You lose! Paper beats Rock";
        computerScore++;
    } else if (humanChoice == b && computerChoice == c) {
        messageDiv.textContent = "You win! Scissor beats Paper";
        humanScore++;
    } else if (humanChoice == b && computerChoice == a) {
        messageDiv.textContent = "You lose! Rock beats Scissor";
        computerScore++;
    } else if (humanChoice == c && computerChoice == a) {
        messageDiv.textContent = "You win! Paper beats Rock";
        humanScore++;
    } else if (humanChoice == c && computerChoice == b) {
        messageDiv.textContent = "You lose! Scissor beats Paper";
        computerScore++;
    } else {
        messageDiv.textContent = "It's a Tie!";
    }

    scoreDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
    count++;

    // Check after 10 clicks
    if (count > 10) {
        const lonelyMessage = document.createElement('div');
        lonelyMessage.style.color = 'white';
        lonelyMessage.style.fontSize = '24px';
        lonelyMessage.style.fontWeight = 'bold';
        lonelyMessage.style.textShadow = '0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff';
        lonelyMessage.textContent = "WHY ARE YOU SO LONELY? GET A LIFE!!";
        document.body.appendChild(lonelyMessage);
    }

    if (count === 5) {
        game();
    }
}

function game() {
    if (humanScore > computerScore) {
        result.textContent = "You win the game!";
    } else if (computerScore > humanScore) {
        result.textContent = "Computer wins the game!";
    } else {
        result.textContent = "It's a tie overall!";
    }
    playAgainBtn.style.display = "inline-block";
}

function resetGame() {
    count = 0;
    humanScore = 0;
    computerScore = 0;
    messageDiv.textContent = "";
    scoreDiv.textContent = "Human: 0 - Computer: 0";
    result.textContent = "Click a button to start!";
}
