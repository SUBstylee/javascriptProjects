const API_KEY = '86a54af6e748c78d4084c2c684eebc58';
const PAGE_COUNT = 1;
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=${PAGE_COUNT}`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';
const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query="`;

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

const getClassByRate = (rate) => {
	if (rate >= 8) {
		return 'good';
	} else if (rate >= 5) {
		return 'ok';
	} else {
		return 'bad';
	}
};

const showMovies = (movies) => {
	main.innerHTML = '';
	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;

		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');
		movieEl.innerHTML = `
		<img src="${IMG_PATH + poster_path}" alt="Poster for ${title}" />
		<div class="movie-info">
			<h3>${title}</h3>
			<span class="${getClassByRate(vote_average)}">${vote_average}</span>
		</div>
		<div class="overview">
			<h3>Overview</h3>
			<p>
				${overview}
			</p>
		</div>
        `;
		main.appendChild(movieEl);
	});
};

const getMovies = async (url) => {
	const res = await fetch(url);
	const data = await res.json();

	showMovies(data.results);
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
