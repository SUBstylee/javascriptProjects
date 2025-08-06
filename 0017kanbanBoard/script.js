const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
// item lists
const itemLists = document.querySelectorAll('.drag-item-list');
const backlogList = document.getElementById('backlog-list');
const progressList = document.getElementById('progress-list');
const completeList = document.getElementById('complete-list');
const onHoldList = document.getElementById('on-hold-list');

// items

// initialize arrays
let backlogListArray = [];
let progressListArray = [];
let completeListArray = [];
let onHoldListArray = [];
let listArrays = [];

// drag functionality

// get arrays from localStorage if available, set default values if not
function getSavedColumns() {
	if (localStorage.getItem('backlogItems')) {
		backlogListArray = JSON.parse(localStorage.backlogItems);
		progressListArray = JSON.parse(localStorage.progressItems);
		completeListArray = JSON.parse(localStorage.completeItems);
		onHoldListArray = JSON.parse(localStorage.onHoldItems);
	} else {
		backlogListArray = ['Release the course', 'Sit back and relax'];
		progressListArray = ['Work on projects', 'Listen to music'];
		completeListArray = ['Being cool', 'Getting stuff done'];
		onHoldListArray = ['Being uncool'];
	}
}

getSavedColumns();
updateSavedColumns();

// set localStorage arrays
function updateSavedColumns() {
	listArrays = [
		backlogListArray,
		progressListArray,
		completeListArray,
		onHoldListArray,
	];
	const arrayNames = ['backlog', 'progress', 'complete', 'onHold'];
	listArrays.forEach((arr, i) => {
		localStorage.setItem(`${arrayNames[i]}Items`, JSON.stringify(arr));
	});
}

// create dom elements for each list item
function createItemEl(columnEl, column, item, index) {
	console.log('columnEl:', columnEl);
	console.log('column:', column);
	console.log('item:', item);
	console.log('index:', index);
	// list item
	const listEl = document.createElement('li');
	listEl.classList.add('drag-item');
}

// update columns in dom - reset html, filter array, update localStorage
function updateDOM() {
	// check localStorage once
	// backlog column
	// progress column
	// complete column
	// on hold column
	// run getSavedColumns only once, update local storage
}
