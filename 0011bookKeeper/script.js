const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

const toggleModal = () => {
	modal.classList.toggle('show-modal');
	if (modal.classList.contains('show-modal')) websiteNameEl.focus();
};

const storeBookmark = (e) => {
	e.preventDefault();
	const nameVal = websiteNameEl.value;
	let urlVal = websiteUrlEl.value;
	if (!urlValue.includes('https://') && !urlValue.includes('http://'))
		urlValue = `https://${urlValue}`;
};

modalShow.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);
window.addEventListener('click', (e) => {
	e.target === modal ? modal.classList.remove('show-modal') : false;
});
bookmarkForm.addEventListener('submit', storeBookmark);
