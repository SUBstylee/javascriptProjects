const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

const createTags = (input) => {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());
	console.log(tags);
};

textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value);
});
