const RIPPLE_DURATION = 500;
// although there is currently only one button, select as if there are multiple on the page
const buttons = document.querySelectorAll('.ripple');

buttons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const btnInnerY = e.clientY - e.target.offsetTop;
		const btnInnerX = e.clientX - e.target.offsetLeft;

		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = btnInnerY + 'px';
		circle.style.left = btnInnerX + 'px';

		btn.appendChild(circle);

		setTimeout(() => circle.remove(), RIPPLE_DURATION);
	});
});
