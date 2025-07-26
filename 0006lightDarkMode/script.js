const toggleSwitch = document.querySelector('input[type="checkbox"]');

const switchTheme = (e) => {
	console.log(e.target.checked);
};

toggleSwitch.addEventListener('change', switchTheme);
