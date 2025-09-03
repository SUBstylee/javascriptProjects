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
