const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const profile_name = document.getElementById('profile_name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

// picsum image does take a moment to actually load in, so this helper function will account for that delay
const loadImg = (src) => {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.src = src;
		img.onload = () => resolve(img);
		img.onerror = reject;
	});
};

// changed to async function to load in image. this will make sure the image is loaded in before the rest of the function runs. this is done since picsum actually does take a moment to load in. it does not take long enough to showcase the placeholder animations though (around a second), so still using the set timeout to call this function so the placeholder animation shows a little longer.
const getData = async () => {
	try {
		const imgSrc = 'https://picsum.photos/350/200';
		const loadedImg = await loadImg(imgSrc);
		header.innerHTML = `<img src="${loadedImg.src}" alt="header image" />`;
		title.innerHTML = 'Lorem ipsum dolor sit amet.';
		excerpt.innerHTML =
			'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus, nostrum!';
		profile_img.innerHTML =
			'<img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile image"/>';
		profile_name.innerHTML = 'Jane Doe';
		date.innerHTML = 'Sep 09, 2025';

		animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
		animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
	} catch (error) {
		console.error('Image failed to load ', error);
	}
};

setTimeout(getData, 2000);
