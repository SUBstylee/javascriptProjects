const loadText = document.querySelector('.loading-text');
const bgImg = document.querySelector('.bg');

let load = 0;

// takes in a number and its min and max values, then balances the transition for a range
const scale = (num, in_min, in_max, out_min, out_max) =>
	((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

const animate = () => {
	// clamp for the load value to ensure it never exceeds 100 to prevent unintended styles in css
	load = Math.min(load + 1, 100);

	if (load > 99) return;

	loadText.innerText = `${load}%`;
	loadText.style.opacity = scale(load, 0, 100, 1, 0);
	bgImg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
	// instead of setInterval, using requestAnimationFrame recursively for smoother animations
	requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
