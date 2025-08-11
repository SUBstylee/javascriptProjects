const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
const maxSteps = circles.length;
const splitPercent = 100 / (circles.length - 1);

// keeps currentActive in range, even if a user programatically gets past the disabled button, and triggers moveStep
const stepClamp = () => {
	currentActive = Math.max(1, Math.min(currentActive, maxSteps));
};

// toggle disabled if the beginning or ending of the step range is reached
const updateButtons = () => {
	currentActive === 1 ? (prev.disabled = true) : (prev.disabled = false);
	currentActive === maxSteps ? (next.disabled = true) : (next.disabled = false);
};

// highlight the current and previously finished steps, adjust width of progress bar
const updateUI = () => {
	circles.forEach((circle, i) => {
		circle.classList.toggle('active', i <= currentActive - 1);
	});
	progress.style.width = `${(currentActive - 1) * splitPercent}%`;
};

const moveStep = (dir) => {
	// in case something triggers moveStep with an unexpected value
	if (dir !== 'prev' && dir !== 'next') return;
	// increment or decrement the currently active step
	dir === 'prev' ? currentActive-- : currentActive++;
	stepClamp();
	updateButtons();
	updateUI();
};

prev.addEventListener('click', () => moveStep('prev'));
next.addEventListener('click', () => moveStep('next'));
