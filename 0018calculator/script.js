const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

let firstValue = 0;
let operatorValue = '';
let awaitingNextValue = false;

const sendNumberValue = (number) => {
	const displayValue = calculatorDisplay.textContent;
	calculatorDisplay.textContent =
		displayValue === '0' ? number : displayValue + number;
};

const addDecimal = () => {
	if (!calculatorDisplay.textContent.includes('.')) {
		calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
	}
};

const useOperator = (operator) => {
	const currentValue = Number(calculatorDisplay.textContent);
	if (!firstValue) {
		firstValue = currentValue;
	}
	operatorValue = operator;
};

// reset display
const resetAll = () => {
	calculatorDisplay.textContent = 0;
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
