// https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
const count = 3;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

const getNasaPictures = async () => {
	try {
		const res = await fetch(apiUrl);
		resultsArray = await res.json();
		console.log(resultsArray);
	} catch (error) {
		console.log('Something went wrong: ', error);
	}
};

// getNasaPictures();
