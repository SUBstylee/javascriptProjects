const proverbContainer = document.getElementById('proverb-container');
const proverbEnglish = document.getElementById('english');
const proverbChinese = document.getElementById('chinese');
const xBtn = document.getElementById('x');
const newProverbBtn = document.getElementById('new-proverb');
const loader = document.getElementById('loader');

const showLoadingSpinner = () => {
	loader.hidden = false;
	proverbContainer.hidden = true;
};

const hideLoadingSpinner = () => {
	loader.hidden = true;
	proverbContainer.hidden = false;
};

const newProverb = () => {
	showLoadingSpinner();
	const proverb = proverbs[Math.floor(Math.random() * proverbs.length)];
	proverbChinese.textContent = proverb.chinese;
	proverbEnglish.textContent = proverb.english;
	hideLoadingSpinner();
};

const tweetQuote = () => {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${proverbEnglish.textContent} - ${proverbChinese.textContent}`;
	window.open(twitterUrl, '_blank');
};

newProverbBtn.onclick = () => {
	newProverb();
};
xBtn.onclick = () => {
	tweetQuote();
};

newProverb();
