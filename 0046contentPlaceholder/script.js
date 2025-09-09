const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const profile_name = document.getElementById('profile_name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

const getData = () => {
	const imgSrc = 'https://picsum.photos/350/200';
	header.innerHTML = `<img src="${imgSrc}" alt="header image" />`;
	title.innerHTML = 'Lorem ipsum dolor sit amet.';
	excerpt.innerHTML =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nostrum!';
	profile_img.innerHTML =
		'<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile image"/>';
	profile_name.innerHTML = 'Jane Doe';
	date.innerHTML = 'Sep 09, 2025';

	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
	animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
};

setTimeout(getData, 2500);
