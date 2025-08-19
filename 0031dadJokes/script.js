const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const fetchJoke = async () => {
	const config = {
		headers: { Accept: 'application/json' },
	};

	const res = await fetch('https://icanhazdadjoke.com', config);
	const data = await res.json();

	return data.joke;
};

const generateJoke = async () => {
	jokeEl.innerHTML = await fetchJoke();
};

jokeBtn.addEventListener('click', () => generateJoke());

generateJoke();
