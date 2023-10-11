// let multiply = (num1, num2) => num1 * num2;

// let numba1 = prompt("Give me numba to multipy: ");
// let numba2 = prompt("Give me another numba: ");

// alert(multiply(numba1, numba2));


// if (confirm("Get computer choice?") == true ) {
//     alert(getComputerChoice());
// } else {
//     alert("You pressed cancel.");
// }

function getComputerChoice () {
    let a = "Rock";
    let b = "Paper";
    let c = "Scissors";

    let x = Math.floor((Math.random() * 100) + 1);

    if (x > 0 && x <= 33) {
        return a;
    } else if ( x > 33 && x <= 66 ) {
        return b;
    } else if ( x > 66 && x <= 100 ) {
        return c;
    }
}

function capitalise (str) {
    let restOfStr = str.substr(1).toLowerCase()
    let cap = str.charAt(0).toUpperCase();
    return cap + restOfStr;
}

function playRound (userChoice, compChoice) {
    switch (true) {
        case (capitalise(userChoice) === "Rock" && compChoice === "Rock"):            
            console.log(`Draw, No Winner this time!
The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
            break;
        case (capitalise(userChoice) === "Rock" && compChoice === "Paper"):
            console.log(`You Lose! Paper beats Rock!
The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);            
            break;
        case (capitalise(userChoice) === "Rock" && compChoice === "Scissors"):
            console.log(`You Win! Rock beats Scissors!
The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
            break;
        case (capitalise(userChoice) === "Paper" && compChoice === "Rock"):
            console.log(`You Win, Paper beats Rock!
The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
            break;
        case (capitalise(userChoice) === "Paper" && compChoice === "Paper"):
            console.log(`Draw, No Winner this time!
The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
            break;
        case (capitalise(userChoice) === "Paper" && compChoice === "Scissors"):
            console.log(`You Lose! Scissors beat Paper!
The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
            break;
        case (capitalise(userChoice) === "Scissors" && compChoice === "Rock"):
            console.log(`You Lose, Rock beats Scissors!
The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
            break;       
        case (capitalise(userChoice) === "Scissors" && compChoice === "Paper"):
            console.log(`You Win! Scissors beat paper
The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
            break;
        case (capitalise(userChoice) === "Scissors" && compChoice === "Scissors"):
            console.log(`Draw, No Winner this time!
The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
            break;
    }
}

let userChoice = prompt("Enter Rock, Paper, or Scissors");
if (userChoice.trim() === "" || userChoice === null) {
    prompt("You didnt enter anything");
} else if (capitalise(userChoice) === "Rock" || capitalise(userChoice) === "Paper" || capitalise(userChoice) === "Scissors") {
    let compChoice = getComputerChoice();

    playRound(userChoice, compChoice);

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

//     switch (true) {
//         case (capitalise(userChoice) === "Rock" && compChoice === "Rock"):            
//             console.log(`Draw, No Winner this time!
// The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
//             break;
//         case (capitalise(userChoice) === "Rock" && compChoice === "Paper"):
//             console.log(`You Lose! Paper beats Rock!
// The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);            
//             break;
//         case (capitalise(userChoice) === "Rock" && compChoice === "Scissors"):
//             console.log(`You Win! Rock beats Scissors!
// The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
//             break;
//         case (capitalise(userChoice) === "Paper" && compChoice === "Rock"):
//             console.log(`You Win, Paper beats Rock!
// The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
//             break;
//         case (capitalise(userChoice) === "Paper" && compChoice === "Paper"):
//             console.log(`Draw, No Winner this time!
// The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
//             break;
//         case (capitalise(userChoice) === "Paper" && compChoice === "Scissors"):
//             console.log(`You Lose! Scissors beat Paper!
// The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
//             break;
//         case (capitalise(userChoice) === "Scissors" && compChoice === "Rock"):
//             console.log(`You Lose, Rock beats Scissors!
// The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
//             break;       
//         case (capitalise(userChoice) === "Scissors" && compChoice === "Paper"):
//             console.log(`You Win! Scissors beat paper
// The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
//             break;
//         case (capitalise(userChoice) === "Scissors" && compChoice === "Scissors"):
//             console.log(`Draw, No Winner this time!
// The computer chose ${compChoice} and you chose ${capitalise(userChoice)}.`);
//             break;
//     }

    // console.log(`Computer chose ${compChoice} and you chose ${capitalise(userChoice)}`);
       



} else {
    alert("Please enter: Rock, Paper, or Scissors to play")
}
// alert(userChoice);