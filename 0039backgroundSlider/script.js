const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const slides = document.querySelectorAll('.slide');

slides[0].classList.add('active');

leftArrow.addEventListener('click', changeActive('left'));
rightArrow.addEventListener('click', changeActive('right'));
