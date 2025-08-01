const showModalBtn = document.getElementById('show-modal');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('close-modal');

const toggleModal = () => {
	modal.classList.toggle('show-modal');
};

showModalBtn.addEventListener('click', toggleModal);
closeModalBtn.addEventListener('click', toggleModal);
