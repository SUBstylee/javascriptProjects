const activeToolEl = document.getElementById('active-tool');
const brushColorBtn = document.getElementById('brush-color');
const brushIcon = document.getElementById('brush');
const brushSize = document.getElementById('brush-size');
const brushSlider = document.getElementById('brush-slider');
const bucketColorBtn = document.getElementById('bucket-color');
const eraser = document.getElementById('eraser');
const clearCanvasBtn = document.getElementById('clear-canvas');
const saveStorageBtn = document.getElementById('save-storage');
const loadStorageBtn = document.getElementById('load-storage');
const clearStorageBtn = document.getElementById('clear-storage');
const downloadBtn = document.getElementById('download');
const { body } = document;

// global variables
const TIMEOUT_TIME = 1500;
const canvas = document.createElement('canvas');
canvas.id = 'canvas';
const context = canvas.getContext('2d');
let currentSize = 10;
let bucketColor = '#FFFFFF';
let currentColor = '#A51DAB';
let isEraser = false;
let isMouseDown = false;
let drawnArray = [];

// formatting brush size
const displayBrushSize = () => {
	brushSlider.value < 10
		? (brushSize.textContent = `0${brushSlider.value}`)
		: (brushSize.textContent = brushSlider.value);
};

// setting brush size
brushSlider.addEventListener('change', () => {
	currentSize = brushSlider.value;
	displayBrushSize();
});

// setting brush color
brushColorBtn.addEventListener('change', () => {
	isEraser = false;
	currentColor = `#${brushColorBtn.value}`;
});

// setting background color
bucketColorBtn.addEventListener('change', () => {
	bucketColor = `#${bucketColorBtn.value}`;
	createCanvas();
	restoreCanvas();
});

// display active tool message and switch to brush if timeout included
const activeTool = (msg, timeout) => {
	activeToolEl.textContent = msg;
	timeout && setTimeout(switchToBrush, timeout);
};

// eraser
eraser.addEventListener('click', () => {
	isEraser = true;
	brushIcon.style.color = 'white';
	eraser.style.color = 'black';
	activeTool('Eraser');
	currentColor = bucketColor;
	currentSize = 50;
	brushSlider.value = 50;
	displayBrushSize();
});

// switch back to brush
const switchToBrush = () => {
	isEraser = false;
	activeTool('Brush');
	brushIcon.style.color = 'black';
	eraser.style.color = 'white';
	currentColor = `#${brushColorBtn.value}`;
	currentSize = 10;
	brushSlider.value = 10;
	displayBrushSize();
};

// create canvas
const createCanvas = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight - 50;
	context.fillStyle = bucketColor;
	context.fillRect(0, 0, canvas.width, canvas.height);
	body.appendChild(canvas);
	switchToBrush();
};

// clear canvas
clearCanvasBtn.addEventListener('click', () => {
	createCanvas();
	drawnArray = [];
	activeTool('Canvas Cleared', TIMEOUT_TIME);
});

// draw what is stored in drawnArray
const restoreCanvas = () => {
	for (let i = 1; i < drawnArray.length; i++) {
		context.beginPath();
		context.moveTo(drawnArray[i - 1].x, drawnArray[i - 1].y);
		context.lineWidth = drawnArray[i].size;
		context.lineCap = 'round';
		if (drawnArray[i].eraser) {
			context.strokeStyle = bucketColor;
		} else {
			context.strokeStyle = drawnArray[i].color;
		}
		context.lineTo(drawnArray[i].x, drawnArray[i].y);
		context.stroke();
	}
};

// store drawn lines in drawnArray
const storeDrawn = (x, y, size, color, erase) => {
	const line = {
		x,
		y,
		size,
		color,
		erase,
	};
	drawnArray.push(line);
};

// get mouse position
const getMousePosition = (event) => {
	const boundaries = canvas.getBoundingClientRect();
	return {
		x: event.clientX - boundaries.left,
		y: event.clientY - boundaries.top,
	};
};

// mouse down
canvas.addEventListener('mousedown', (event) => {
	isMouseDown = true;
	const currentPosition = getMousePosition(event);
	context.moveTo(currentPosition.x, currentPosition.y);
	context.beginPath();
	context.lineWidth = currentSize;
	context.lineCap = 'round';
	context.strokeStyle = currentColor;
});

// mouse move
canvas.addEventListener('mousemove', (event) => {
	if (isMouseDown) {
		const currentPosition = getMousePosition(event);
		context.lineTo(currentPosition.x, currentPosition.y);
		context.stroke();
		storeDrawn(
			currentPosition.x,
			currentPosition.y,
			currentSize,
			currentColor,
			isEraser,
		);
	} else {
		storeDrawn(undefined);
	}
});

// mouse up
canvas.addEventListener('mouseup', () => {
	isMouseDown = false;
});

// save to local storage
saveStorageBtn.addEventListener('click', () => {
	localStorage.setItem('savedCanvas', JSON.stringify(drawnArray));
	activeTool('Canvas Saved', TIMEOUT_TIME);
});

// load from local storage
loadStorageBtn.addEventListener('click', () => {
	if (localStorage.getItem('savedCanvas')) {
		drawnArray = JSON.parse(localStorage.getItem('savedCanvas'));
		restoreCanvas();
		activeTool('Canvas Loaded', TIMEOUT_TIME);
		return;
	}
	activeTool('No Saved Canvas Found', TIMEOUT_TIME);
});

// clear local storage
clearStorageBtn.addEventListener('click', () => {
	localStorage.removeItem('savedCanvas');
	activeTool('Local Storage Cleared', TIMEOUT_TIME);
});

// download image
downloadBtn.addEventListener('click', () => {
	downloadBtn.href = canvas.toDataURL('image/jpeg', 1);
	downloadBtn.download = 'paint.jpg';
	activeTool('Image File Saved', TIMEOUT_TIME);
});

brushIcon.addEventListener('click', switchToBrush);

createCanvas();
