const loadText = document.querySelector('.loading-text');
const bgImg = document.querySelector('.bg');

let load = 0;
const MAX_LOAD = 100;
const MAX_BLUR = 30;

// takes in a number and its min and max values, then balances the transition for a range
const scale = (num, in_min = 0, in_max = MAX_LOAD, out_min = 0, out_max = 1) =>
	((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;

const animate = () => {
	// clamp for the load value to ensure it never exceeds MAX_LOAD to prevent unintended styles in css
	load = Math.min(load + 1, MAX_LOAD);

	// set load text to empty string then remove from page when load reaches MAX_LOAD, and stop recurssion
	if (load === MAX_LOAD) {
		// this could be expanded to use a callback for displaying other elements on the page when load completes
		setTimeout(() => {
			loadText.innerText = '';
			loadText.style.display = 'none';
		}, 500);
		return;
	}

	loadText.innerText = `${load}%`;
	loadText.style.opacity = scale(load, 0, MAX_LOAD, 1, 0);
	bgImg.style.filter = `blur(${scale(load, 0, MAX_LOAD, MAX_BLUR, 0)}px)`;
	// instead of setInterval, using requestAnimationFrame recursively for smoother animations
	requestAnimationFrame(animate);
};

requestAnimationFrame(animate);
