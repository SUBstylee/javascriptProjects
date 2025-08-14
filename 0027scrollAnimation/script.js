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

// make an array containing all the boxes
const boxes = document.querySelectorAll('.box');

const checkBoxes = () => {
	// set the triggerBottom to be less than innerHeight of window, so user can see the transition animation clearly
	const triggerBottom = (window.innerHeight / 5) * 4;
	boxes.forEach((box) => {
		// get the top of box rectangle to compare with triggerBottom
		const boxTop = box.getBoundingClientRect().top;
		// add show, box animates into viewport. remove show, box animates out of viewport
		boxTop < triggerBottom
			? box.classList.add('show')
			: box.classList.remove('show');
	});
};

window.addEventListener('scroll', checkBoxes);
