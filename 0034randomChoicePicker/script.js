const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

const HIGHLIGHT_COUNT = 30;
const INTERVAL_MS = 100;

const createTags = (input) => {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());

	tagsEl.innerHTML = '';
	tags.forEach((tag) => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
};

const pickRandomTag = () => {
	const tags = document.querySelectorAll('.tag');
	return tags[Math.floor(Math.random() * tags.length)];
};

const highlightTag = (tag) => {
	tag.classList.add('highlight');
};

const removeHighlightTag = (tag) => {
	tag.classList.remove('highlight');
};

const randomSelect = () => {
	textarea.disabled = true;
	const interval = setInterval(() => {
		const randomTag = pickRandomTag();
		highlightTag(randomTag);
		setTimeout(() => {
			removeHighlightTag(randomTag);
		}, INTERVAL_MS);
	}, INTERVAL_MS);

	setTimeout(() => {
		clearInterval(interval);
		setTimeout(() => {
			const randomTag = pickRandomTag();
			highlightTag(randomTag);
			textarea.disabled = false;
		}, INTERVAL_MS);
	}, HIGHLIGHT_COUNT * INTERVAL_MS);
};

textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value);

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10);
		randomSelect();
	}
});
