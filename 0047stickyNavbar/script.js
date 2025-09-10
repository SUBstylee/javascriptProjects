const nav = document.querySelector('.nav');

const additionalSpace = 50;

const fixNav = () => {
	window.scrollY > nav.offsetHeight + additionalSpace
		? nav.classList.add('active')
		: nav.classList.remove('active');
};

window.addEventListener('scroll', fixNav);
