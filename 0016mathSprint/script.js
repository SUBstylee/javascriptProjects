// pages
const gamePage = document.getElementById('game-page');
const scorePage = document.getElementById('score-page');
const splashPage = document.getElementById('splash-page');
const countdownPage = document.getElementById('countdown-page');
// splash page
const startForm = document.getElementById('start-form');
const radioContainers = document.querySelectorAll('.radio-container');
const radioInputs = document.querySelectorAll('input');
const bestScores = document.querySelectorAll('.best-score-value');
// countdown page
const countdown = document.querySelector('.countdown');
// game page
const itemContainer = document.querySelector('.item-container');
// score page
const finalTimeEl = document.querySelector('.final-time');
const baseTimeEl = document.querySelector('.base-time');
const penaltyTimeEl = document.querySelector('.penalty-time');
const playAgainBtn = document.querySelector('.play-again');

// equations
let questionAmount = 0;
let equationsArray = [];
let playerGuessArray = [];

// game page
let firstNumber = 0;
let secondNumber = 0;
let equationObject = {};
const wrongFormat = [];

// time

// scroll
let valueY = 0;

// scroll and store user selection in playerGuessArray
const select = (guessedTrue) => {
	valueY += 80;
	itemContainer.scroll(0, valueY);
	return guessedTrue
		? playerGuessArray.push('true')
		: playerGuessArray.push('false');
};

// display game page
const showGamePage = () => {
	gamePage.hidden = false;
	countdownPage.hidden = true;
};

// get a random int based on the questionAmount
const getRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
};

// fisher-yates shuffle
const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
};

// create correct/incorrect random equations
const createEquations = () => {
	// randomly choose how many correct equations there should be
	const correctEquations = getRandomInt(questionAmount);
	// set amount of wrong equations
	const wrongEquations = questionAmount - correctEquations;
	// loop through, multiply random numbers up to 9, push to array
	for (let i = 0; i < correctEquations; i++) {
		const firstNumber = getRandomInt(9);
		const secondNumber = getRandomInt(9);
		const equationValue = firstNumber * secondNumber;
		const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
		equationObject = { value: equation, evaluated: 'true' };
		equationsArray.push(equationObject);
	}
	// loop through, mess with the equation results, push to array
	for (let i = 0; i < wrongEquations; i++) {
		const firstNumber = getRandomInt(9);
		const secondNumber = getRandomInt(9);
		const equationValue = firstNumber * secondNumber;
		wrongFormat[0] = `${firstNumber} x ${secondNumber + 1} = ${equationValue}`;
		wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${equationValue - 1}`;
		wrongFormat[2] = `${firstNumber + 1} x ${secondNumber} = ${equationValue}`;
		const formatChoice = getRandomInt(3);
		const equation = wrongFormat[formatChoice];
		equationObject = { value: equation, evaluated: 'false' };
		equationsArray.push(equationObject);
	}
	shuffle(equationsArray);
};

// add equations to DOM
const equationsToDOM = () => {
	equationsArray.forEach((equation) => {
		const item = document.createElement('div');
		item.classList.add('item');
		const equationText = document.createElement('h1');
		equationText.textContent = equation.value;
		item.appendChild(equationText);
		itemContainer.appendChild(item);
	});
};

// dynamically adding correct/incorrect equations
const populateGamePage = () => {
	// reset dom, set blank space above
	itemContainer.textContent = '';
	// spacer
	const topSpacer = document.createElement('div');
	topSpacer.classList.add('height-240');
	// selected item
	const selectedItem = document.createElement('div');
	selectedItem.classList.add('selected-item');
	// append
	itemContainer.append(topSpacer, selectedItem);

	// create equations, build elements in dom
	createEquations();
	equationsToDOM();

	// set blank space below
	const bottomSpacer = document.createElement('div');
	bottomSpacer.classList.add('height-500');
	itemContainer.appendChild(bottomSpacer);
};

// displays countdown
const countdownStart = () => {
	const coundownValues = ['Ready?', '3', '2', '1', 'GO!'];
	coundownValues.forEach((val, i) => {
		setTimeout(() => {
			countdown.textContent = val;
		}, i * 1000);
	});
};

// navigate from splash to countdown page
const showCountdown = () => {
	countdownPage.hidden = false;
	splashPage.hidden = true;
	countdownStart();
	populateGamePage();
	setTimeout(showGamePage, 5000);
};

// get value from selected radio button on form
const getRadioValue = () => {
	let radioValue;
	radioInputs.forEach((radioInput) => {
		radioInput.checked && (radioValue = radioInput.value);
	});
	return radioValue;
};

// form selection that determines number of questions
const selectQuestionAmount = (e) => {
	e.preventDefault();
	questionAmount = getRadioValue();
	questionAmount && showCountdown();
};

startForm.addEventListener('click', () => {
	radioContainers.forEach((radioEl) => {
		// check if selected, if so add selected-label class, otherwise make sure it is removed
		radioEl.children[1].checked
			? radioEl.classList.add('selected-label')
			: radioEl.classList.remove('selected-label');
	});
});

startForm.addEventListener('submit', selectQuestionAmount);
