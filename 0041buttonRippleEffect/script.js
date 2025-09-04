// although there is currently only one button, select as if there are multiple on the page
const buttons = document.querySelectorAll('.ripple');

buttons.forEach((btn) => {
	btn.addEventListener('click', (e) => {
		const x = e.clientX;
		const y = e.clientY;
		console.log(x, y);

		const btnTop = e.target.offsetTop;
		const btnLeft = e.target.offsetLeft;
		console.log(btnTop, btnLeft);

		const btnInnerY = y - btnTop;
		const btnInnerX = x - btnLeft;
		console.log(btnInnerY, btnInnerX);

		const circle = document.createElement('span');
		circle.classList.add('circle');
		circle.style.top = btnInnerY + 'px';
		circle.style.left = btnInnerX + 'px';

		btn.appendChild(circle);
	});
});
