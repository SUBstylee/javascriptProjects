const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const darkMode = () => {
	nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
	textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
};

const lightMode = () => {
	nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
	textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
};

const switchTheme = (e) => {
	console.log(e.target.checked);
	document.documentElement.setAttribute(
		'data-theme',
		e.target.checked ? 'dark' : 'light',
	);
	e.target.checked ? darkMode() : lightMode();
};

toggleSwitch.addEventListener('change', switchTheme);
