const container = document.querySelector('.container');
document
	.getElementById('open')
	.addEventListener('click', () => container.classList.add('show-nav'));
document
	.getElementById('close')
	.addEventListener('click', () => container.classList.remove('show-nav'));
