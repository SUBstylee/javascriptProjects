const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

let bookmarks = [
	{
		name: 'Jeremy Threlfall Portfolio',
		url: 'https://www.jjthr.com/portfolio',
	},
];

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

const buildBookmarks = () => {
	bookmarksContainer.textContent = '';
	bookmarks.forEach((bookmark) => {
		const { name, url } = bookmark;
		// item
		const item = document.createElement('div');
		item.classList.add('item');
		// close icon
		const closeIcon = document.createElement('i');
		closeIcon.classList.add('fas', 'fa-times');
		closeIcon.setAttribute('title', 'Delete Bookmark');
		closeIcon.setAttribute('onclick', `deleteBookmark('${url}')`);
		// favicon / link container
		const linkInfo = document.createElement('div');
		linkInfo.classList.add('name');
		// favicon
		const favicon = document.createElement('img');
		favicon.setAttribute(
			'src',
			`https://s2.googleusercontent.com/s2/favicons?domain=${
				new URL(url).hostname
			}`,
		);
		favicon.setAttribute('alt', 'Favicon');
		// link
		const link = document.createElement('a');
		link.setAttribute('href', `${url}`);
		link.setAttribute('target', '_blank');
		link.textContent = name;
		// append to bookmarks container
		linkInfo.append(favicon, link);
		item.append(closeIcon, linkInfo);
		bookmarksContainer.appendChild(item);
	});
};

const fetchBookmarks = () => {
	localStorage.getItem('bookmarks')
		? (bookmarks = JSON.parse(localStorage.getItem('bookmarks')))
		: localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	buildBookmarks();
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

{
	/* 
<div class='item'>
	<i class='fas fa-times' id='delete-bookmark' title='Delete Bookmark'></i>
	<div class='name'>
		<img
			src='https://s2.googleusercontent.com/s2/favicons?domain=www.google.com'
			alt='favicon'
		/>
		<a href='https://www.google.com' target='_blank'>
			Google
		</a>
	</div>
</div>; 
*/
}
