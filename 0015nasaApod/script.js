const resNav = document.getElementById('results-nav');
const favNav = document.getElementById('favorites-nav');
const imgsContainer = document.querySelector('.images-container');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];
let favorites = {};

const showContent = () => {
	loader.classList.add('hidden');
};

const createDOMNodes = (page) => {
	const currentArray =
		page === 'results' ? resultsArray : Object.values(favorites);
	currentArray.forEach((res) => {
		// card container
		const card = document.createElement('div');
		card.classList.add('card');
		// link
		const link = document.createElement('a');
		link.href = res.hdurl;
		link.title = 'View Full Image';
		link.target = '_blank';
		// img
		const image = document.createElement('img');
		image.src = res.url;
		image.alt = 'NASA Picture of the Day';
		image.loading = 'lazy';
		image.classList.add('card-img-top');
		// card body
		const cardBody = document.createElement('div');
		cardBody.classList.add('card-body');
		// card title
		const cardTitle = document.createElement('h5');
		cardTitle.classList.add('card-title');
		cardTitle.textContent = res.title;
		// save text
		const saveText = document.createElement('p');
		saveText.classList.add('clickable');
		if (page === 'results') {
			saveText.textContent = 'Add to Favorites';
			saveText.setAttribute('onclick', `saveFavorite('${res.url}')`);
		} else {
			saveText.textContent = 'Remove From Favorites';
			saveText.setAttribute('onclick', `removeFavorite('${res.url}')`);
		}
		// card text
		const cardText = document.createElement('p');
		cardText.classList.add('card-text');
		cardText.textContent = res.explanation;
		// footer container
		const footer = document.createElement('small');
		footer.classList.add('text-muted');
		// strong
		const date = document.createElement('strong');
		date.textContent = res.date;
		// copyright
		const copyright = document.createElement('span');
		const copyrightRes = res.copyright ? ` ${res.copyright}` : '';
		copyright.textContent = copyrightRes;
		// append
		footer.append(date, copyright);
		cardBody.append(cardTitle, saveText, cardText, footer);
		link.appendChild(image);
		card.append(link, cardBody);
		imgsContainer.appendChild(card);
	});
};

const updateDOM = (page) => {
	if (localStorage.getItem('nasaFavorites'))
		favorites = JSON.parse(localStorage.getItem('nasaFavorites'));
	imgsContainer.textContent = '';
	createDOMNodes(page);
	showContent();
};

const getNasaPictures = async () => {
	loader.classList.remove('hidden');
	try {
		const res = await fetch(apiUrl);
		resultsArray = await res.json();
		updateDOM('results');
	} catch (error) {
		console.log('Something went wrong: ', error);
	}
};

const saveFavorite = (itemUrl) => {
	resultsArray.forEach((item) => {
		if (item.url.includes(itemUrl) && !favorites[itemUrl]) {
			favorites[itemUrl] = item;
			saveConfirmed.hidden = false;
			setTimeout(() => {
				saveConfirmed.hidden = true;
			}, 3000);
			localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
		}
	});
};

const removeFavorite = (itemUrl) => {
	if (favorites[itemUrl]) {
		delete favorites[itemUrl];
		localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
		updateDOM('favorites');
	}
};

getNasaPictures();
