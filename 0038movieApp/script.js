const API_KEY = '86a54af6e748c78d4084c2c684eebc58';
const PAGE_COUNT = 1;
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${PAGE_COUNT}`;
const IMG_PATH = 'https://image.tbdb.org/t/p.w1280';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const form = document.getElementById('form');
const search = document.getElementById('search');

const getMovies = async (url) => {
	const res = await fetch(url);
	const data = await res.json();

	console.log(data.results);
};

getMovies(API_URL);

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const searchTerm = search.value;

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_URL + searchTerm + '"');
		search.value = '';
	} else {
		window.location.reload();
	}
});
