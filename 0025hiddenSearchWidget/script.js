const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

// change this value based on css transition speed
const FOCUS_DELAY = 300;

// toggle search active class, and optionally reset input
const toggleSearch = (resetInput) => {
	const isActive = search.classList.toggle('active');
	search.setAttribute('aria-expanded', isActive);
	if (resetInput) input.value = '';
	// focus on input if not already focused
	if (document.activeElement !== input) {
		setTimeout(() => input.focus(), FOCUS_DELAY);
	}
};

btn.addEventListener('click', () => toggleSearch(false));
// handle enter key when input is focused, this will also clear input, toggle active class, and unfocus/blur input
input.addEventListener('keydown', (e) => {
	if (document.activeElement === input) {
		if (e.key === 'Enter') {
			e.preventDefault();
			toggleSearch(true);
			input.blur();
		}
	}
});
