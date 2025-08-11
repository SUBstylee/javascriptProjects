const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

prev.addEventListener('click', () => moveStep('prev'));
next.addEventListener('click', () => moveStep('next'));
