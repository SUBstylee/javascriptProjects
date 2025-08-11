const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;
const maxSteps = circles.length;
const splitPercent = 100 / (circles.length - 1);

prev.addEventListener('click', () => moveStep('prev'));
next.addEventListener('click', () => moveStep('next'));
