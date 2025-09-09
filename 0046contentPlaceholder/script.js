const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const profile_name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

const getData = () => {
	header.innerHTML =
		'<img src="https://picsum.photos/350/200" alt="header image" />';
	title.innerHTML = 'Lorem ipsum dolor sit amet.';
	excerpt.innerHTML =
		'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nostrum!';
	profile_img.innerHTML =
		'<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile image"/>';
	profile_name.innerHTML = 'Jane Doe';
	date.innerHTML = 'Sep 09, 2025';
};
