const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

function dragStart() {
	this.className += ' hold';
	setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
	this.className = 'fill';
}

function dragOver() {
	console.log('drag over');
}

function dragEnter() {
	console.log('drag enter');
}

function dragLeave() {
	console.log('drag leave');
}

function dragDrop() {
	console.log('drag drop');
}
