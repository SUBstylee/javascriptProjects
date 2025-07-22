// api: https://jacintodesign.github.io/quotes-api/data/quotes.json
let apiQuotes = [];

const newQuote = () => {
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	console.log(quote);
};

const getQuotes = async () => {
	const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
	try {
		const response = await fetch(apiUrl);
		apiQuotes = await response.json();
		newQuote();
	} catch (error) {
		// fallback on localQuotes if the api is down or stops working.
		apiQuotes = localQuotes;
	}
};

getQuotes();
