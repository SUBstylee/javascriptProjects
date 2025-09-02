const body = document.body;
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const slides = document.querySelectorAll('.slide');

slides[0].classList.add('active');
let activeSlide = 0;
const nSlides = slides.length;

const toggleActive = () => {
	slides[activeSlide].classList.toggle('active');
};

const setBodyBg = () => {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

const changeActive = (direction) => {
	toggleActive();
	if (direction === 'left') {
		if (activeSlide === 0) {
			activeSlide = nSlides - 1;
			toggleActive();
			return;
		}
		activeSlide--;
		toggleActive();
	} else {
		if (activeSlide === nSlides - 1) {
			activeSlide = 0;
			toggleActive();
			return;
		}
		activeSlide++;
		toggleActive();
	}
	setBodyBg();
};

leftArrow.addEventListener('click', () => changeActive('left'));
rightArrow.addEventListener('click', () => changeActive('right'));
