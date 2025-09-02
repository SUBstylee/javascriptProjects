const body = document.body;
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const slides = document.querySelectorAll('.slide');

slides[0].classList.add('active');
let activeSlide = 0;
const nSlides = slides.length;

const setActive = (idx) => {
	slides.forEach((slide) => slide.classList.remove('active'));
	slides[idx].classList.add('active');
	body.style.backgroundImage = slides[idx].style.backgroundImage;
	activeSlide = idx;
};

const changeActive = (direction) => {
	const offset = direction === 'left' ? -1 : 1;
	const newIdx = (activeSlide + offset + nSlides) % nSlides;
	setActive(newIdx);
};

leftArrow.addEventListener('click', () => changeActive('left'));
rightArrow.addEventListener('click', () => changeActive('right'));
