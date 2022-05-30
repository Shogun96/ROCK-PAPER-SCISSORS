const computerSelection = document.getElementById('computer-selection');
const playerSelection = document.getElementById('player-selection');
const resultDesplay = document.getElementById('result');
const posibleChoices = document.querySelectorAll('button');
let playerChoice;
let computerChoice;
let result;

posibleChoices.forEach(posibleChoices => addEventListener('click',(e) => {
    playerChoice = e.target.id;
    playerSelection.innerHTML = playerChoice;
    computerPlay();
    finalResult();
}))

function computerPlay() {
    const random = Math.floor(Math.random() * 3 + 1);
    
    if(random === 1) {
        computerChoice='rock';
    }
    if(random === 2) {
        computerChoice='scissors';
    }
    if(random === 3) {
        computerChoice='paper';
    }
    computerSelection.innerHTML = computerChoice;
}

function finalResult() {
    if (computerChoice === playerChoice) {
        result = 'TIE!!!';
    }
    if (computerChoice === 'rock' && playerChoice === 'paper') {
        result = 'YOU WIN!!!';
    }
    if (computerChoice === 'rock' && playerChoice === 'scissors') {
        result = 'YOU LOST!!!';
    }
    if (computerChoice === 'paper' && playerChoice === 'scissors') {
        result = 'YOU WIN!!!';
    }
    if (computerChoice === 'paper' && playerChoice === 'rock') {
        result = 'YOU LOST!!!';
    }
    if (computerChoice === 'scissors' && playerChoice === 'rock') {
        result = 'YOU WIN!!!';
    }
    if (computerChoice === 'scissors' && playerChoice === 'paper') {
        result = 'YOU LOST!!!';
    }
    resultDesplay.innerHTML = result;
}