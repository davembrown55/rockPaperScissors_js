// Play game:

let userScore = 0;
let compScore = 0;

function playRound(userChoice) {


    compChoice = getComputerChoice();

    let result = getResult(userChoice, compChoice) + "<br/>" + printChoices(userChoice);

    if (userScore < 5 && compScore < 5) {
    document.querySelector('.message').innerHTML = result;
    }

    document.getElementById('userScore').textContent = userScore;
    document.getElementById('compScore').textContent = compScore;

    if (userScore >= 5) {
        result = "You Win!<br/> Have another go. First to 5 wins";
        document.querySelector('.message').innerHTML = result;
        resetGame();
    } else if (compScore >= 5) {
        result = "Computer Wins!<br/> Have another go. First to 5 wins";
        document.querySelector('.message').innerHTML = result;
        resetGame();
    }
}


//.........Other Functions

function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"]; 
        return choices[Math.floor(Math.random() * choices.length)]
}

function getResult (userChoice, compChoice) {
    switch (true) {
        case (userChoice === compChoice):
            return "Draw! No Winner this time!";            
        case (userChoice === "Rock" && compChoice === "Paper"):
            compScore++;
            return "You Lose! Paper beats Rock!"; 
        case (userChoice === "Rock" && compChoice === "Scissors"):
            userScore++;
            return "You Win! Rock beats Scissors!";
        case (userChoice === "Paper" && compChoice === "Rock"):
            userScore++;
            return "You Win! Paper beats Rock!";
        case (userChoice === "Paper" && compChoice === "Scissors"):
            compScore++;
            return "You Lose! Scissors beat Paper!";
        case (userChoice === "Scissors" && compChoice === "Rock"):
            compScore++;
            return "You Lose! Rock beats Scissors!";       
        case (userChoice === "Scissors" && compChoice === "Paper"):
            userScore++;
            return "You Win! Scissors beat paper";
    }
}
function printChoices (userChoice) {
    if (userChoice === compChoice) {
        return `You both chose ${userChoice}.`;
    } else {
    return `The computer chose ${compChoice}. Your choice was ${userChoice}.`;
    }
}

function resetGame(){
    userScore = 0;
    compScore = 0;
    document.getElementById('userScore').textContent = userScore;
    document.getElementById('compScore').textContent = compScore;
}


// layout 
// Start game. Button Eventlistener to display gameConent area and hide startContent area.

const startButton = document.querySelector('.startButton');

startButton.addEventListener('click', () => {
    const gameContent = document.querySelector('.gameContent');
    gameContent.style.display = 'flex';
    
    const startContent = document.querySelector('.startContent');
    startContent.style.display = 'none';

    let startMessage = "First to 5 wins";
    document.querySelector('.message').innerHTML = startMessage;

});

// Exit game. Button Eventlistener to display startContent area and hide gameContent area.
// resets scores and clears message area. 

const exitGame = document.querySelector('.doneBtn');

exitGame.addEventListener('click', () => {
    const gameContent = document.querySelector('.gameContent');
    gameContent.style.display = 'none';
    
    const startContent = document.querySelector('.startContent');
    startContent.style.display = 'flex';

    resetGame();

    let startMessage = "";
    document.querySelector('.message').innerHTML = startMessage;

});


// Not needed anymore. The following functions are from when the game was played using prompts and the console.

function getInput() {
    
    do {    
        userChoice = prompt("Enter Rock, Paper, or Scissors");
    
        if (userChoice.trim() === "" || userChoice === null) {
            prompt("You didnt enter anything");
        } else if (!(capitalise(userChoice) === "Rock" || capitalise(userChoice) === "Paper" || capitalise(userChoice) === "Scissors")) {
            alert("Please enter: Rock, Paper, or Scissors to play")
        }
    } 
    while (!(capitalise(userChoice) === "Rock" || capitalise(userChoice) === "Paper" || capitalise(userChoice) === "Scissors"));

    return capitalise(userChoice);
}

function capitalise (str) {
    let restOfStr = str.substr(1).toLowerCase();
    let cap = str.charAt(0).toUpperCase();
    return cap + restOfStr;
}


function printScore () {
    return `The computer chose ${compChoice}. Your choice was ${capitalise(userChoice)}.
Current scores are:\n You: ${userScore}   Computer ${compScore}`;
}

function result () {
    if (userScore === 5) {
        return `You Win! The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.
Final scores are:\n You: ${userScore}   Computer ${compScore}`
    } else {
        return `You Lose! The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.
Final scores are:\n You: ${userScore}   Computer ${compScore}`
    }

}

