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

const storeBookmark = (e) => {
	e.preventDefault();
	const nameVal = websiteNameEl.value;
	let urlVal = websiteUrlEl.value;
	if (!urlVal.includes('https://') && !urlVal.includes('http://'))
		urlVal = `https://${urlVal}`;
	console.log(nameVal, urlVal);
	if (!validateFormInputs(nameVal, urlVal)) return false;
};

modalShow.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);
window.addEventListener('click', (e) => {
	e.target === modal ? modal.classList.remove('show-modal') : false;
});
bookmarkForm.addEventListener('submit', storeBookmark);
