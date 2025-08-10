const cards = document.querySelectorAll('.panel');

const showSelectedCard = (i) => {
	cards.forEach((card, index) => {
		index === i
			? card.classList.add('active')
			: card.classList.remove('active');
	});
};

cards.forEach((card, i) => {
	card.addEventListener('click', () => showSelectedCard(i));
});
