const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

const validateForm = () => {
	isValid = form.checkValidity();
	if (!isValid) {
		message.textContent = 'Please fill out all fields!';
		message.style.color = '#f00';
		messageContainer.style.borderColor = '#f00';
		return;
	}
	if (password1El.value === password2El.value) {
		passwordsMatch = true;
		password1El.style.borderColor = '#080';
		password2El.style.borderColor = '#080';
	} else {
		passwordsMatch = false;
		message.textContent = 'Make sure passwords match!';
		message.style.color = '#f00';
		messageContainer.style.borderColor = '#f00';
		password1El.style.borderColor = '#f00';
		password2El.style.borderColor = '#f00';
		return;
	}
	if (isValid && passwordsMatch) {
		message.textContent = 'Successfully Registered!';
		message.style.color = '#080';
		messageContainer.style.borderColor = '#080';
	}
};

const storeFormData = () => {
	const user = {
		name: form.name.value,
		phone: form.phone.value,
		email: form.email.value,
		website: form.website.value,
		password: form.password.value,
	};
	// would do something with this data, but only for testing out validation, just show it in console.
	console.log(user);
};

const processFormData = (e) => {
	e.preventDefault();
	validateForm();
	isValid && passwordsMatch ? storeFormData() : null;
};

form.addEventListener('submit', processFormData);
