const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20;
let isPressed = false;
let color = 'black';
let x;
let y;

const drawCircle = (x, y) => {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2, true);
	ctx.fillStyle = color;
	ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size;
	ctx.stroke();
};

canvas.addEventListener('mousedown', (e) => {
	isPressed = true;
	x = e.offsetX;
	y = e.offsetY;
});
