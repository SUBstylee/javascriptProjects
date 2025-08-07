const calculatorDisplay = document.querySelector('h1');
const inputBtns = document.querySelectorAll('button');
const clearBtn = document.getElementById('clear-btn');

const sendNumberValue = (number) => {
	const displayValue = calculatorDisplay.textContent;
	calculatorDisplay.textContent =
		displayValue === '0' ? number : displayValue + number;
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
		inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
	} else if (inputBtn.classList.contains('decimal')) {
		inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
	}
});

clearBtn.addEventListener('click', resetAll);
