const btn = document.getElementById('button');
const audioElement = document.getElementById('audio');

// VoiceRSS Javascript SDK located in 'voice.js'

const toggleBtn = () => {
	btn.disabled = !btn.disabled;
	btn.innerText === 'Wait...'
		? (btn.innerText = 'Tell Me A Joke')
		: (btn.innerText = 'Wait...');
};

const tellMe = (joke) => {
	VoiceRSS.speech({
		key: '10a93fc939e649ba8ae35bade4934c99',
		src: joke,
		hl: 'en-us',
		r: 0,
		c: 'mp3',
		f: '44khz_16bit_stereo',
		ssml: false,
	});
};

const getJokes = async () => {
	toggleBtn();
	let joke = '';
	const apiUrl = 'https://v2.jokeapi.dev/joke/Any';
	try {
		const res = await fetch(apiUrl);
		const data = await res.json();
		if (data.setup) {
			joke = `${data.setup} ... ${data.delivery}`;
		} else {
			joke = data.joke;
		}
		tellMe(joke);
	} catch (error) {
		console.log('Something went wrong: ', error);
	}
};

btn.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleBtn);
