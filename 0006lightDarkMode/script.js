const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const themeMode = (color) => {
	const darkMode = color === 'dark';
	image1.src = `img/undraw_proud_coder_${color}.svg`;
	image2.src = `img/undraw_conceptual_idea_${color}.svg`;
	image3.src = `img/undraw_feeling_proud_${color}.svg`;
	toggleIcon.children[0].textContent = darkMode ? 'Dark Mode' : 'Light Mode';
	toggleIcon.children[1].classList.replace(
		darkMode ? 'fa-sun' : 'fa-moon',
		darkMode ? 'fa-moon' : 'fa-sun',
	);
	nav.style.backgroundColor = darkMode
		? 'rgb(0 0 0 / 50%)'
		: 'rgb(255 255 255 / 50%)';
	textBox.style.backgroundColor = darkMode
		? 'rgb(255 255 255 / 50%)'
		: 'rgb(0 0 0 / 50%)';
};

const switchTheme = (e) => {
	const themeColor = e.target.checked ? 'dark' : 'light';
	document.documentElement.setAttribute('data-theme', themeColor);
	localStorage.setItem('theme', themeColor);
	themeMode(themeColor);
};

const selectedTheme = () => {
	const theme = localStorage.getItem('theme') || null;
	if (theme === 'dark') {
		toggleSwitch.checked = true;
		document.documentElement.setAttribute('data-theme', 'dark');
		themeMode(theme);
	}
	return;
};

selectedTheme();

toggleSwitch.addEventListener('change', switchTheme);
