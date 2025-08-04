const playerScoreEl = document.getElementById('player-score');
const playerChoiceEl = document.getElementById('player-choice');
const computerScoreEl = document.getElementById('computer-score');
const computerChoiceEl = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

const playerRock = document.getElementById('player-rock');
const playerPaper = document.getElementById('player-paper');
const playerScissors = document.getElementById('player-scissors');
const playerLizard = document.getElementById('player-lizard');
const playerSpock = document.getElementById('player-spock');

const computerRock = document.getElementById('computer-rock');
const computerPaper = document.getElementById('computer-paper');
const computerScissors = document.getElementById('computer-scissors');
const computerLizard = document.getElementById('computer-lizard');
const computerSpock = document.getElementById('computer-spock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
	rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
	paper: { name: 'Paper', defeats: ['rock', 'spock'] },
	scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
	lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
	spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';
let storedScores = {
	player: 0,
	computer: 0,
};

const resetSelected = () => {
	allGameIcons.forEach((icon) => {
		icon.classList.remove('selected');
	});
};

const computerRandomChoice = () => {
	const computerChoiceNumber = Math.floor(Math.random() * 5);
	if (computerChoiceNumber === 0) {
		computerChoice = 'rock';
	} else if (computerChoiceNumber === 1) {
		computerChoice = 'paper';
	} else if (computerChoiceNumber === 2) {
		computerChoice = 'scissors';
	} else if (computerChoiceNumber === 3) {
		computerChoice = 'lizard';
	} else {
		computerChoice = 'spock';
	}
};

const displayComputerChoice = () => {
	switch (computerChoice) {
		case 'rock':
			computerRock.classList.add('selected');
			computerChoiceEl.textContent = ' --- Rock';
			break;
		case 'paper':
			computerPaper.classList.add('selected');
			computerChoiceEl.textContent = ' --- Paper';
			break;
		case 'scissors':
			computerScissors.classList.add('selected');
			computerChoiceEl.textContent = ' --- Scissors';
			break;
		case 'lizard':
			computerLizard.classList.add('selected');
			computerChoiceEl.textContent = ' --- Lizard';
			break;
		case 'spock':
			computerSpock.classList.add('selected');
			computerChoiceEl.textContent = ' --- Spock';
			break;
		default:
			break;
	}
};

const updateStoredScores = () => {
	localStorage.setItem('scores', JSON.stringify(storedScores));
};

const updateScore = (playerChoice) => {
	if (playerChoice === computerChoice) {
		resultText.textContent = "It's a tie.";
	} else {
		const choice = choices[playerChoice];
		if (choice.defeats.indexOf(computerChoice) > -1) {
			resultText.textContent = 'You Won!';
			playerScoreNumber++;
			storedScores.player = playerScoreNumber;
			playerScoreEl.textContent = playerScoreNumber;
			updateStoredScores();
		} else {
			resultText.textContent = 'Computer Won : (';
			computerScoreNumber++;
			storedScores.computer = computerScoreNumber;
			computerScoreEl.textContent = computerScoreNumber;
			updateStoredScores();
		}
	}
};

const checkResult = (playerChoice) => {
	resetSelected();
	computerRandomChoice();
	displayComputerChoice();
	updateScore(playerChoice);
};

const select = (playerChoice) => {
	checkResult(playerChoice);
	switch (playerChoice) {
		case 'rock':
			playerRock.classList.add('selected');
			playerChoiceEl.textContent = ' --- Rock';
			break;
		case 'paper':
			playerPaper.classList.add('selected');
			playerChoiceEl.textContent = ' --- Paper';
			break;
		case 'scissors':
			playerScissors.classList.add('selected');
			playerChoiceEl.textContent = ' --- Scissors';
			break;
		case 'lizard':
			playerLizard.classList.add('selected');
			playerChoiceEl.textContent = ' --- Lizard';
			break;
		case 'spock':
			playerSpock.classList.add('selected');
			playerChoiceEl.textContent = ' --- Spock';
			break;
		default:
			break;
	}
};

const fetchScores = () => {
	localStorage.getItem('scores')
		? (storedScores = JSON.parse(localStorage.getItem('scores')))
		: localStorage.setItem('scores', JSON.stringify(storedScores));
	playerScoreNumber = storedScores.player;
	computerScoreNumber = storedScores.computer;
	playerScoreEl.textContent = playerScoreNumber;
	computerScoreEl.textContent = computerScoreNumber;
};

fetchScores();
