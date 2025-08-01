const showModalBtn = document.getElementById('show-modal');
const modal = document.getElementById('modal');

const showModal = () => {
	modal.classList.add('show-modal');
};

showModalBtn.addEventListener('click', showModal);
