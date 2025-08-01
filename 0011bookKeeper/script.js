const showModalBtn = document.getElementById('show-modal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');

const toggleModal = () => {
	modal.classList.toggle('show-modal');
};

showModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
