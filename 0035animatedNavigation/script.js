// const toggle = document.getElementById('toggle');
// const nav = document.getElementById('nav');

// toggle.addEventListener('click', () => nav.classList.toggle('active'));

// document
// 	.getElementById('toggle')
// 	.addEventListener('click', () =>
// 		document.getElementById('nav').classList.toggle('active'),
// 	);

document
	.querySelector('#toggle')
	.addEventListener('click', () =>
		document.querySelector('#nav').classList.toggle('active'),
	);
