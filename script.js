function getComputerChoice () {
	// Write the code so that getComputerChoice will randomly return one of the 
	// following string values: “rock”, “paper” or “scissors”.

	const random = Math.random();
	console.log(random);
	if (random <= 0.333) { // rock
		return 'rock';
	} else if (random > 0.333 && random <= 0.666) { // paper
		return 'paper';
	} else { //  scissors
		return 'scissors';
	}
}


//Create a new function named getHumanChoice.
//Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
//Hint: Use the prompt method to get the user’s input.
//Test what your function returns by using console.log.

function getHumanChoice () {

	let userChoice = prompt("Choose rock, paper, or scissors to make a move:").toLowerCase().trim();
	if (userChoice == 'rock') {
		return 'rock';
	} else if (userChoice == 'paper') {
		return 'paper';
	} else if (userChoice == 'scissors') {
		return 'scissors';
	} else { // invalid
		console.log("Invalid input");
		return;
	}
}

// Create a new function named playGame.
// Move your playRound function and score variables so that they’re declared inside of the new playGame function
// Play 5 rounds by calling playRound 5 times.
// Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
// Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.

function playGame() {
	let humanScore = 0;
	let computerScore = 0;

	function playRound (humanChoice, computerChoice) {
		//	Write the code for your playRound function to console.log a string value representing the round winner, 
		//	such as: “You lose! Paper beats Rock”.
		//	Increment the humanScore or computerScore variable based on the round winner.
			// 1. Choices are already in parameters given to function in call
			// 2. Make cases for winning/losing
			// 3. We can assume humanChoice is valid (ref. getHumanChoice() function)
			//  paper beats rock, rock beats scissors, scissors beat paper
		
			// Make clauses for both sides
			console.log(`Your Choice: ${humanChoice}\nComputer Choice: ${computerChoice}`);
			// Computer Choice Clauses
			if (computerChoice == 'rock') {
		
				if (humanChoice == 'rock') {
					console.log("Draw! Each competitor chose rock.");
				} else if (humanChoice == 'paper') {		
					++humanScore;
					console.log(`You win! Paper beats rock.\nScore is now ${computerScore} to ${humanScore} (you)`);
				} else if (humanChoice == 'scissors') {
					++computerScore;
					console.log(`The computer wins! Rock beats scissors.\nScore is now ${computerScore} to ${humanScore} (you)`);
				} else { // void return from invalid input
					console.log("Invalid input from user. Try again.");
				}
		
			} else if (computerChoice == 'paper') {
		
				if (humanChoice == 'rock') {
					++computerScore; 
					console.log(`The computer wins! Paper beats rock.\nScore is now ${computerScore} to ${humanScore} (you)`);
				} else if (humanChoice == 'paper') {	
					console.log("Draw! Each competitor chose paper.");
				} else if (humanChoice == 'scissors') {
					++humanScore;
					console.log(`You win! Scissors beats paper.\nScore is now ${computerScore} to ${humanScore} (you)`);
				} else { // void return from invalid input
					console.log("Invalid input from user. Try again.");
				}
		
			} else { // computer chose scissors
		
				if (humanChoice == 'rock') {
					++humanScore;
					console.log(`You win! Rock beats scissors. \nScore is now ${computerScore} to ${humanScore} (you)`);
				} else if (humanChoice == 'paper') {
					++computerScore;
					console.log(`The computer wins! Scissors beats paper.\nScore is now ${computerScore} to ${humanScore} (you)`);
				} else if (humanChoice == 'scissors') {
					console.log("Draw! Each competitor chose paper.");
				} else { // void return from invalid input
					console.log("Invalid input from user. Try again.");
				}
		
			}
	}

	for (let i=0; i<5; ++i) {
		let humanMove = getHumanChoice();
		let computerMove = getComputerChoice();
		playRound(humanMove, computerMove);
	}	

	if (humanScore > computerScore) {
		console.log(`You win by a score of ${humanScore} to ${computerScore}!`);
	} else if (humanScore < computerScore) {
		console.log(`Computer wins by a score of ${computerScore} to ${humanScore}!`);
	} else {
		console.log(`Draw! Final score: Computer - ${computerScore} , Player - ${humanScore}`);
	}
	return 1;
}

playGame();