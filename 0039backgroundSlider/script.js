const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const slides = document.querySelectorAll('.slide');

slides[0].classList.add('active');
let selectedSlide = 0;
const nSlides = slides.length;

const toggleActive = () => {
	slides[selectedSlide].classList.toggle('active');
};

const changeActive = (direction) => {
	toggleActive();
	if (direction === 'left') {
		if (selectedSlide === 0) {
			selectedSlide = nSlides - 1;
			toggleActive();
			return;
		}
		selectedSlide--;
		toggleActive();
	} else {
		if (selectedSlide === nSlides - 1) {
			selectedSlide = 0;
			toggleActive();
			return;
		}
		selectedSlide++;
		toggleActive();
	}
};

leftArrow.addEventListener('click', () => changeActive('left'));
rightArrow.addEventListener('click', () => changeActive('right'));
