const showModalBtn = document.getElementById('show-modal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

const toggleModal = () => {
	modal.classList.toggle('show-modal');
	if (modal.classList.contains('show-modal')) websiteNameEl.focus();
};

showModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
window.addEventListener('click', (e) => {
	e.target === modal ? modal.classList.remove('show-modal') : false;
});
