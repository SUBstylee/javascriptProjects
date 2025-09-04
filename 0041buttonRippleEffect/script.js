const RIPPLE_DURATION = 500;
// although there is currently only one button, select as if there are multiple on the page
const buttons = document.querySelectorAll('.ripple');

buttons.forEach((btn) => {
	btn.addEventListener('click', ({ offsetY, offsetX }) => {
		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = offsetY + 'px';
		circle.style.left = offsetX + 'px';

		btn.appendChild(circle);

		circle.addEventListener('animationend', () => circle.remove());
	});
});
