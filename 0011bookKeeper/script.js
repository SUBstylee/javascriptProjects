const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [];

const toggleModal = () => {
	modal.classList.toggle('show-modal');
	if (modal.classList.contains('show-modal')) websiteNameEl.focus();
};

const validateFormInputs = (nameVal, urlVal) => {
	const expression =
		/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
	const regex = new RegExp(expression);
	if (!nameVal || !urlVal) {
		alert('Please fill out all fields!');
		return false;
	}
	if (!urlVal.match(regex)) {
		alert('Invalid URL! \n Please try again.');
		return false;
	}
	return true;
};

const fetchBookmarks = () => {
	if (localStorage.getItem('bookmarks'))
		bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	return;
};

const storeBookmark = (e) => {
	e.preventDefault();
	const nameVal = websiteNameEl.value;
	let urlVal = websiteUrlEl.value;
	if (!urlVal.includes('https://') && !urlVal.includes('http://'))
		urlVal = `https://${urlVal}`;
	if (!validateFormInputs(nameVal, urlVal)) return false;
	const bookmark = {
		name: nameVal,
		url: urlVal,
	};
	bookmarks.push(bookmark);
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	bookmarkForm.reset();
	websiteNameEl.focus();
};

modalShow.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);
window.addEventListener('click', (e) => {
	e.target === modal ? modal.classList.remove('show-modal') : false;
});
bookmarkForm.addEventListener('submit', storeBookmark);

fetchBookmarks();
