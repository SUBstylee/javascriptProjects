const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdown-form');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-btn');
const timeElements = document.querySelectorAll('span');

const completeEl = document.getElementById('complete');
const completeElInfo = document.getElementById('complete-info');
const completeBtn = document.getElementById('complete-btn');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let coundownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

const updateDOM = () => {
	coundownActive = setInterval(() => {
		const now = new Date().getTime();
		const distance = countdownValue - now;

		const days = Math.floor(distance / day);
		const hours = Math.floor((distance % day) / hour);
		const minutes = Math.floor((distance % hour) / minute);
		const seconds = Math.floor((distance % minute) / second);
		inputContainer.hidden = true;

		if (distance < 0) {
			countdownEl.hidden = true;
			clearInterval(coundownActive);
			completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
			completeEl.hidden = false;
		} else {
			completeEl.hidden = true;
			countdownElTitle.textContent = `${countdownTitle}`;
			timeElements[0].textContent = `${days}`;
			timeElements[1].textContent = `${hours}`;
			timeElements[2].textContent = `${minutes}`;
			timeElements[3].textContent = `${seconds}`;
			countdownEl.hidden = false;
		}
	}, second);
};

const updateCountdown = (e) => {
	e.preventDefault();
	countdownTitle = e.srcElement[0].value;
	countdownDate = e.srcElement[1].value;
	countdownValue = new Date(countdownDate).getTime();
	updateDOM();
};

const reset = () => {
	countdownEl.hidden = true;
	completeEl.hidden = true;
	inputContainer.hidden = false;
	clearInterval(coundownActive);
	countdownTitle = '';
	countdownDate = '';
};

countdownForm.addEventListener('submit', updateCountdown);
countdownBtn.addEventListener('click', reset);
completeBtn.addEventListener('click', reset);
