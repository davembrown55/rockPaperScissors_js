
// intialise scores
let userScore = 0;
let compScore = 0;
let userChoice;
let compChoice;


const start = document.querySelector('.startButton');
start.addEventListener('click', () => {
    userchoice = getInput();
    compChoice = getComputerChoice(); 

    playRound(userchoice, compChoice);
    });

// getInput();

function playRound (userChoice, compChoice) {
    let result = getResult(userChoice, compChoice) + `
${printChoices(userChoice)}`;

    if (userScore < 5 && compScore < 5) {
        alert(`${result} 
Your score: ${userScore}. Computer score: ${compScore}`);
        }
    
    if (userScore >= 5) {
        result = "You Win!\n Have another go. First to 5 wins";
        alert(result + " Your score: " + userScore + ". Computer score: " + compScore);

        resetGame();
    } else if (compScore >= 5) {
        result = "Computer Wins!\n Have another go. First to 5 wins";
        alert(result + " Your score: " + userScore + ". Computer score: " + compScore);

        resetGame();
    }


    // if (userScore < 5 && compScore < 5) {
    //     alert(result + "\n" + printScore());
    // }
    // alert(result());
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
    // document.getElementById('userScore').textContent = userScore;
    // document.getElementById('compScore').textContent = compScore;
}



//.........Other Functions

function getComputerChoice () {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

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
    let restOfStr = str.substr(1).toLowerCase()
    let cap = str.charAt(0).toUpperCase();
    return cap + restOfStr;
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


function printScore () {
    return `The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.
Current scores are:\n You: ${userScore}   Computer ${compScore}`
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

// layout 

// Event listener: Click button to change display gameContent and start game

// const startButton = document.querySelector("startButton");
// startButton.addEventListener('click', )


// round using nested if statments in a switch
    // switch (capitalise(userChoice)) {
    //     case "Rock":
    //         if (compChoice === "Rock") {
    //             console.log("Draw, No Winner this time!");
    //         } else if (compChoice === "Paper") {
    //             console.log("You Lose! Paper beats Rock!");
    //         } else if (compChoice === "Scissors") {
    //             console.log("You Win! Rock beats Scissors!");
    //         }    
    //         break;
    //     case "Paper":
    //         if (compChoice === "Rock") {
    //             console.log("You Win, Paper beats Rock!");
    //         } else if (compChoice === "Paper") {
    //             console.log("Draw, No Winner this time!");
    //         } else if (compChoice === "Scissors") {
    //             console.log("You Lose! Scissors beat Paper!");
    //         }  
    //         break;
    //     case "Scissors":
    //         if (compChoice === "Rock") {
    //             console.log("You Lose, Rock beats Scissors!");
    //         } else if (compChoice === "Paper") {
    //             console.log("You Win! Scissors beat paper");
    //         } else if (compChoice === "Scissors") {
    //             console.log("Draw, No Winner this time!!");
    //         } 
    //         break;
    // } 
