const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

const fetchJoke = async () => {
	const config = {
		headers: { Accept: 'application/json' },
	};

	try {
		const res = await fetch('https://icanhazdadjoke.com', config);
		const data = await res.json();
		return data.joke;
	} catch (error) {
		console.error(error);
		return null;
	}
};

const generateJoke = async () => {
	jokeEl.textContent = 'Loading joke...';
	const joke = await fetchJoke();
	jokeEl.textContent = joke ?? 'Something went wrong, try again later...';
};

jokeBtn.addEventListener('click', generateJoke);

generateJoke();
