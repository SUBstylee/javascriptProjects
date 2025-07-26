const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const imageMode = (color) => {
	image1.src = `img/undraw_proud_coder_${color}.svg`;
	image2.src = `img/undraw_conceptual_idea_${color}.svg`;
	image3.src = `img/undraw_feeling_proud_${color}.svg`;
};

const darkMode = () => {
	nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
	textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
	toggleIcon.children[0].textContent = 'Dark Mode';
	toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
	imageMode('dark');
};

const lightMode = () => {
	nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
	textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
	toggleIcon.children[0].textContent = 'Light Mode';
	toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
	imageMode('light');
};

const switchTheme = (e) => {
	const themeColor = e.target.checked ? 'dark' : 'light';
	document.documentElement.setAttribute('data-theme', themeColor);
	localStorage.setItem('theme', themeColor);
	themeColor === 'dark' ? darkMode() : lightMode();
};

const selectedTheme = () => {
	const theme = localStorage.getItem('theme') || null;
	if (theme === 'dark') {
		toggleSwitch.checked = true;
		document.documentElement.setAttribute('data-theme', 'dark');
	}
	return;
};

selectedTheme();

toggleSwitch.addEventListener('change', switchTheme);
