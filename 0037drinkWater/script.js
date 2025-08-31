const smallCups = document.querySelectorAll('.cup');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remaining');

const highlightCups = (idx) => {
	console.log('clicked');
	if (
		smallCups[idx].classList.contains('full') &&
		(idx === smallCups.length - 1 ||
			!smallCups[idx + 1].classList.contains('full'))
	) {
		idx--;
	}
	smallCups.forEach((cup, idx2) => {
		if (idx2 <= idx) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
		console.log(cup.classList);
	});
};

smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highlightCups(idx));
});
