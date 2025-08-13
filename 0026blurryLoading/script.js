const loadText = document.querySelector('.loading-text');
const bgImg = document.querySelector('.bg');

let load = 0;

const blurring = () => {
	load++;

	if (load > 99) clearInterval(int);

	console.log(load);
};

let int = setInterval(blurring, 30);
