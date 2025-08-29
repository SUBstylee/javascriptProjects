const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

let isSelecting = false;

const HIGHLIGHT_COUNT = 30;
const INTERVAL_MS = 100;

const pickRandomTag = () => {
	const tags = document.querySelectorAll('.tag');
	if (tags.length === 0) return null;
	return tags[Math.floor(Math.random() * tags.length)];
};

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

const highlightTag = (tag) => {
	tag.classList.add('highlight');
};

const removeHighlightTag = (tag) => {
	tag.classList.remove('highlight');
};

const randomSelect = () => {
	isSelecting = true;

	const interval = setInterval(() => {
		const randomTag = pickRandomTag();
		if (!randomTag) return;
		highlightTag(randomTag);
		setTimeout(() => {
			removeHighlightTag(randomTag);
		}, INTERVAL_MS);
	}, INTERVAL_MS);

	setTimeout(() => {
		clearInterval(interval);
		setTimeout(() => {
			const randomTag = pickRandomTag();
			if (randomTag) highlightTag(randomTag);
			isSelecting = false;
		}, INTERVAL_MS);
	}, HIGHLIGHT_COUNT * INTERVAL_MS);
};

textarea.addEventListener('keyup', (e) => {
	if (isSelecting) return;
	createTags(e.target.value);

	if (e.key === 'Enter') {
		setTimeout(() => {
			e.target.value = '';
		}, 10);
		randomSelect();
	}
});
