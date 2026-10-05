const logs = document.querySelector(".logs");

function getcomputerChoice() {
	let computerChoice = Math.floor(Math.random() * 3) + 1;
	const comChoiceLog = document.createElement("p");

	if (computerChoice === 1) {
		logs.appendChild(comChoiceLog);
		comChoiceLog.textContent = "Computer chose Rock";
		return "rock";
	} else if (computerChoice === 2) {
		logs.appendChild(comChoiceLog);
		comChoiceLog.textContent = "Computer chose Paper";
		return "paper";
	} else if (computerChoice === 3) {
		logs.appendChild(comChoiceLog);
		comChoiceLog.textContent = "Computer chose Scissors";
		return "scissors";
	} else {
		console.log("Default");
		return;
	}
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {	
	const roundResult = document.createElement("p");
	const updatedScores = document.createElement("p");

	if (humanChoice.toUpperCase() === computerChoice.toUpperCase()) {
		logs.append(roundResult, updatedScores);
		roundResult.textContent = "Draw";
		updatedScores.textContent = `Score: ${humanScore} | ${computerScore}`;
	} else if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "PAPER") {
		logs.append(roundResult, updatedScores);
		roundResult.textContent = "You Lost";
		computerScore++;
		updatedScores.textContent = `Score: ${humanScore} | ${computerScore}`;
	} else if (humanChoice.toUpperCase() === "ROCK" && computerChoice.toUpperCase() === "SCISSORS") {
		logs.append(roundResult, updatedScores);
		roundResult.textContent = "You Win";
		humanScore++;
		updatedScores.textContent = `Score: ${humanScore} | ${computerScore}`;
	} else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "ROCK") {
		logs.append(roundResult, updatedScores);
		roundResult.textContent = "You Win";
		humanScore++;
		updatedScores.textContent = `Score: ${humanScore} | ${computerScore}`;
	} else if (humanChoice.toUpperCase() === "PAPER" && computerChoice.toUpperCase() === "SCISSORS") {
		logs.append(roundResult, updatedScores);
		roundResult.textContent = "You Lost";
		computerScore++;
		updatedScores.textContent = `Score: ${humanScore} | ${computerScore}`;
	} else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "ROCK") {
		logs.append(roundResult, updatedScores);
		roundResult.textContent = "You Lost";
		computerScore++;
		updatedScores.textContent = `Score: ${humanScore} | ${computerScore}`;
	} else if (humanChoice.toUpperCase() === "SCISSORS" && computerChoice.toUpperCase() === "PAPER") {
		logs.append(roundResult, updatedScores);
		roundResult.textContent = "You Win";
		humanScore++;
		updatedScores.textContent = `Score: ${humanScore} | ${computerScore}`;
	} else {
		console.log("Default");
	}
}


const choices = document.querySelectorAll(".choices");

choices.forEach((choice) => {
	choice.addEventListener('click', (e) => {
		e.preventDefault();
		logs.textContent = "";
		playRound(choice.id, getcomputerChoice());

		if (humanScore === 5 || computerScore == 5) {
			const gameResult = document.createElement("p");

			if (humanScore > computerScore) {
				logs.appendChild(gameResult);
				gameResult.textContent = "You won the game!";
			} else {
				logs.appendChild(gameResult);
				gameResult.textContent = "You lost the game...";
			}
			humanScore = 0, computerScore = 0;
		}
	})
})

