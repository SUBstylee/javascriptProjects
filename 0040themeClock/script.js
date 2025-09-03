const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const html = document.querySelector('html');

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];
const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const setTime = () => {
	const time = new Date();
	const month = time.getMonth();
	const day = time.getDay();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360,
	)}deg)`;
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		59,
		0,
		360,
	)}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		59,
		0,
		360,
	)}deg)`;
};

const toggleDarkMode = (e = null) => {
	const colorMode = window.localStorage.getItem('colorMode');
	if (!e) {
		if (colorMode === 'dark') {
			html.classList.add('dark');
			toggle.innerHTML = 'Light mode';
		} else {
			html.classList.remove('dark');
			toggle.innerHTML = 'Dark mode';
		}
		return;
	}
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		toggle.innerHTML = 'Dark mode';
		window.localStorage.setItem('colorMode', 'light');
	} else {
		html.classList.add('dark');
		toggle.innerHTML = 'Light mode';
		window.localStorage.setItem('colorMode', 'dark');
	}
};

toggle.addEventListener('click', (e) => toggleDarkMode(e));

toggleDarkMode();

setTime();
