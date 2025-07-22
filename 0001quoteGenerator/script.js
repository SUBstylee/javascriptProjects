const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const xBtn = document.getElementById('x');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

const showLoadingSpinner = () => {
	loader.hidden = false;
	quoteContainer.hidden = true;
};

const hideLoadingSpinner = () => {
	loader.hidden = true;
	quoteContainer.hidden = false;
};

const newQuote = () => {
	showLoadingSpinner();
	const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
	authorText.textContent = !quote.author ? 'Unknown' : quote.author;
	quote.text.length > 120
		? quoteText.classList.add('long-quote')
		: quoteText.classList.remove('long-quote');
	quoteText.textContent = quote.text;
	hideLoadingSpinner();
};

const getQuotes = async () => {
	showLoadingSpinner();
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

const tweetQuote = () => {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterUrl, '_blank');
};

newQuoteBtn.onclick = () => {
	newQuote();
};
xBtn.onclick = () => {
	tweetQuote();
};

getQuotes();
