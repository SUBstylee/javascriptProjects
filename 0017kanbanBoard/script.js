const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
// item lists
const listColumns = document.querySelectorAll('.drag-item-list');
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
let draggedItem;
let currentColumn;

// get arrays from localStorage if available, set default values if not
const getSavedColumns = () => {
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
};

// set localStorage arrays
const updateSavedColumns = () => {
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
};

// create dom elements for each list item
const createItemEl = (columnEl, column, item, index) => {
	// list item
	const listEl = document.createElement('li');
	listEl.classList.add('drag-item');
	listEl.textContent = item;
	listEl.draggable = true;
	columnEl.appendChild(listEl);
	listEl.setAttribute('ondragstart', 'drag(event)');
};

// update columns in dom - reset html, filter array, update localStorage
const updateDOM = () => {
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
	updatedOnLoad = true;
	updateSavedColumns();
};

// show add item input box
const showInputBox = (col) => {
	addBtns[col].style.visibility = 'hidden';
	saveItemBtns[col].style.display = 'flex';
	addItemContainers[col].style.display = 'flex';
};

// item input box
const hideInputBox = (col) => {
	addBtns[col].style.visibility = 'visible';
	saveItemBtns[col].style.display = 'none';
	addItemContainers[col].style.display = 'none';
};

// update arrays to reflect drag and drop changes
const rebuildArrays = () => {
	const listMap = [
		{ list: backlogList, array: backlogListArray },
		{ list: progressList, array: progressListArray },
		{ list: completeList, array: completeListArray },
		{ list: onHoldList, array: onHoldListArray },
	];
	listMap.forEach(({ list, array }) => {
		array.length = 0;
		[...list.children].forEach((item) => {
			array.push(item.textContent);
		});
	});
	updateDOM();
};

// when item starts dragging
const drag = (e) => {
	draggedItem = e.target;
};

// column allows item to be dropped
const allowDrop = (e) => {
	e.preventDefault();
};

// item enters column area
const dragEnter = (col) => {
	listColumns[col].classList.add('over');
	currentColumn = col;
};

// dropping item in column
const drop = (e) => {
	e.preventDefault();
	// remove background color and padding
	listColumns.forEach((col) => {
		col.classList.remove('over');
	});
	// add item to column
	const parent = listColumns[currentColumn];
	parent.appendChild(draggedItem);
	rebuildArrays();
};

updateDOM();
