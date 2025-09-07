const toasts = document.getElementById('toasts');
const button = document.getElementById('button');

const messageTimeout = 5000;

const messageType = ['regular', 'success', 'error', 'info', 'warning'];

const messages = [
	'Banana phones ring only on Tuesdays.',
	'Unicorns love pizza with extra cheese.',
	'My socks are plotting a revolution.',
	"Don't trust ducks with sunglasses.",
	"Time flies when you're a potato.",
	'Cows do calculus at midnight.',
	'Rainbows taste like bubblegum.',
	'The moon is made of pancakes.',
	'Cats secretly run the government.',
	'Donuts have feelings too.',
	'Penguins invented the internet.',
	'Broccoli sings in the shower.',
	'Coffee mugs dream of tea.',
	'My shoes can speak French.',
	'Tacos are afraid of Mondays.',
];

const getRandomMessageData = (array) => {
	return array[Math.floor(Math.random() * array.length)];
};

const createNotification = (message = null, type = null) => {
	const notification = document.createElement('div');
	notification.classList.add('toast');
	notification.classList.add(type ? '' : getRandomMessageData(messageType));
	notification.innerText = message ? message : getRandomMessageData(messages);
	toasts.appendChild(notification);
	setTimeout(() => {
		notification.remove();
	}, messageTimeout);
};

button.addEventListener('click', () => createNotification());
