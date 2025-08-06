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
let updatedOnLoad = false;

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
	// console.log('columnEl:', columnEl);
	// console.log('column:', column);
	// console.log('item:', item);
	// console.log('index:', index);
	// list item
	const listEl = document.createElement('li');
	listEl.classList.add('drag-item');
	listEl.textContent = item;
	columnEl.appendChild(listEl);
}

// update columns in dom - reset html, filter array, update localStorage
function updateDOM() {
	// check localStorage once
	if (!updatedOnLoad) getSavedColumns();
	// backlog column
	backlogList.textContent = '';
	backlogListArray.forEach((backlogItem, i) => {
		createItemEl(backlogList, 0, backlogItem, i);
	});
	// progress column
	progressList.textContent = '';
	progressListArray.forEach((progressItem, i) => {
		createItemEl(progressList, 0, progressItem, i);
	});
	// complete column
	completeList.textContent = '';
	completeListArray.forEach((completeItem, i) => {
		createItemEl(completeList, 0, completeItem, i);
	});
	// on hold column
	onHoldList.textContent = '';
	onHoldListArray.forEach((onHoldItem, i) => {
		createItemEl(onHoldList, 0, onHoldItem, i);
	});
	// run getSavedColumns only once, update local storage
}

updateDOM();
