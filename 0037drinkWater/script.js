const bigCup = document.querySelector('.cup-big');
const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remaining = document.getElementById('remaining');

const updateBigCup = () => {
	const fullCups = document.querySelectorAll('.cup-small.full').length;
	console.log(fullCups);
	const totalCups = smallCups.length;
	console.log(totalCups);
	const bigCupHeight = bigCup.offsetHeight;

	if (fullCups === 0) {
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / totalCups) * bigCupHeight}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}

	if (fullCups === totalCups) {
		remaining.style.visibility = 'hidden';
		remaining.style.height = 0;
	} else {
		remaining.style.visibility = 'visible';
		liters.textContent = `${2 - fullCups * 0.25}L`;
	}
};

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

	updateBigCup();
};

smallCups.forEach((cup, idx) => {
	cup.addEventListener('click', () => highlightCups(idx));
});

updateBigCup();
