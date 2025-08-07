const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

// calculate first and second values by operator
const calculate = {
	'/': (firstNumber, secondNumber) => firstNumber / secondNumber,
	'*': (firstNumber, secondNumber) => firstNumber * secondNumber,
	'+': (firstNumber, secondNumber) => firstNumber + secondNumber,
	'-': (firstNumber, secondNumber) => firstNumber - secondNumber,
	'=': (secondNumber) => secondNumber,
};

const sendNumberValue = (number) => {
	if (awaitingNextValue) {
		calculatorDisplay.textContent = number;
		awaitingNextValue = false;
	} else {
		const displayValue = calculatorDisplay.textContent;
		calculatorDisplay.textContent =
			displayValue === '0' ? number : displayValue + number;
	}
};

const addDecimal = () => {
	if (awaitingNextValue) return;
	if (!calculatorDisplay.textContent.includes('.')) {
		calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
	}
};

const useOperator = (operator) => {
	const currentValue = Number(calculatorDisplay.textContent);
	if (operatorValue && awaitingNextValue) return;
	if (!firstValue) {
		firstValue = currentValue;
	} else {
		const calculation = calculate[operatorValue](firstValue, currentValue);
		calculatorDisplay.textContent = calculation;
	}
	awaitingNextValue = true;
	operatorValue = operator;
};

// reset all values and display
const resetAll = () => {
	firstValue = 0;
	operatorValue = '';
	awaitingNextValue = false;
	calculatorDisplay.textContent = '0';
};

// add event listeners for numbers, operators and decimal buttons
inputBtns.forEach((inputBtn) => {
	if (inputBtn.classList.length === 0) {
		inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
	} else if (inputBtn.classList.contains('operator')) {
		inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
	} else if (inputBtn.classList.contains('decimal')) {
		inputBtn.addEventListener('click', () => addDecimal());
	}
});

clearBtn.addEventListener('click', resetAll);
