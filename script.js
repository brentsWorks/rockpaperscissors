const choicesDiv = document.createElement("div");
choicesDiv.style.display = "flex";
choicesDiv.style.justifyContent = "center";
choicesDiv.style.alignItems = "center";
document.body.appendChild(choicesDiv);

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.className = "choice";
rock.id = "rock";
choicesDiv.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
paper.className = "choice";
paper.id = "paper";
choicesDiv.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
scissors.className ="choice";
scissors.id = "scissors";
choicesDiv.appendChild(scissors);

const results = document.createElement("div");
results.className = "results";
document.body.appendChild(results);
results.style.display = "flex";
results.style.flexDirection = "column";
results.style.justifyContent = "center";
results.style.alignItems = "center";

const resultsText = document.createElement("p");
resultsText.textContent = "Results";
resultsText.className = "resultsText";
results.appendChild(resultsText);

const restart = document.createElement("button");
restart.textContent = "Restart";
restart.className = "restart";
results.appendChild(restart);

let gameActive = false;

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
					resultsText.textContent = ("Results: Draw! Each competitor chose rock.");
				} else if (humanChoice == 'paper') {		
					++humanScore;
					results.textContent = (`Results: You win! Paper beats rock.\nScore is now ${computerScore} to ${humanScore} (you)`);
				} else if (humanChoice == 'scissors') {
					++computerScore;
					resultsText.textContent = (`Results: The computer wins! Rock beats scissors.\nScore is now ${computerScore} to ${humanScore} (you)`);
				} else { // void return from invalid input
					resultsText.textContent = ("Results: Invalid input from user. Try again.");
				}
		
			} else if (computerChoice == 'paper') {
		
				if (humanChoice == 'rock') {
					++computerScore; 
					resultsText.textContent = (`Results: The computer wins! Paper beats rock.\nScore is now ${computerScore} to ${humanScore} (you)`);
				} else if (humanChoice == 'paper') {	
					resultsText.textContent = ("Results: Draw! Each competitor chose paper.");
				} else if (humanChoice == 'scissors') {
					++humanScore;
					resultsText.textContent = (`Results: You win! Scissors beats paper.\nScore is now ${computerScore} to ${humanScore} (you)`);
				} else { // void return from invalid input
					resultsText.textContent = ("Results: Invalid input from user. Try again.");
				}
		
			} else { // computer chose scissors
		
				if (humanChoice == 'rock') {
					++humanScore;
					resultsText.textContent = (`Results: You win! Rock beats scissors. \nScore is now ${computerScore} to ${humanScore} (you)`);
				} else if (humanChoice == 'paper') {
					++computerScore;
					resultsText.textContent = (`Results: The computer wins! Scissors beats paper.\nScore is now ${computerScore} to ${humanScore} (you)`);
				} else if (humanChoice == 'scissors') {
					resultsText.textContent = ("Results: Draw! Each competitor chose paper.");
				} else { // void return from invalid input
					resultsText.textContent = ("Results: Invalid input from user. Try again.");
				}
		
			}

			console.log(`Human Score: ${humanScore}\n`);
			console.log(`CPU Score: ${computerScore}\n`);
			
			if (humanScore == 5 || computerScore == 5) {
				if (humanScore == 5) {
					resultsText.textContent = (`Results: You win by reaching a score of 5 first! The computer trailed at a score of ${computerScore}.`);
				} else { // computer wins
					resultsText.textContent = (`Results: The computer wins by reaching a score of 5 first! You trailed with a score of ${humanScore}.`);
				}
				endGame();
			}
}

function handleChoices (event) {
	const humanChoice = event.target.id;
	const computerChoice = getComputerChoice();
	if (gameActive) {
		playRound(humanChoice, computerChoice);
	} else {
		resultsText.textContent = "Please press the restart button in order to begin a new game.";
	}
}

function endGame() {
	// game over, reset scores, announce winner
	humanScore = 0;
	computerScore = 0;

	// remove event listeners
	rock.removeEventListener('click', handleChoices);
	paper.removeEventListener('click', handleChoices);
	scissors.removeEventListener('click', handleChoices);
	gameActive = false;
}

function restartGame() {
	humanScore = 0;
	computerScore = 0;
	resultsText.textContent = "Game has been restarted. Please choose rock, paper or scissors to continue.";
	rock.addEventListener('click', handleChoices);
	paper.addEventListener('click', handleChoices);
	scissors.addEventListener('click', handleChoices);
	gameActive = true;
}

rock.addEventListener('click', handleChoices);
paper.addEventListener('click', handleChoices);
scissors.addEventListener('click', handleChoices);
restart.addEventListener('click', restartGame);


