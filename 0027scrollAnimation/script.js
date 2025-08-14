// number of boxes to make
const numBoxes = 50;

// create the h1 heading and append to body
const heading = document.createElement('h1');
heading.textContent = 'Scroll to see the animation';
document.body.appendChild(heading);

// create numBoxes boxes, and append to body
for (let i = 1; i <= numBoxes; i++) {
	const box = document.createElement('div');
	box.classList.add('box');
	const boxText = document.createElement('h2');
	boxText.textContent = `Content ${i}`;
	box.appendChild(boxText);
	document.body.appendChild(box);
}
