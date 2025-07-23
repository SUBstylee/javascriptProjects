const count = 2;
const apiKey = 'sbf_CUzUiveoYxKocmpY29R_f0JveEBu3JqnJse-chk';

const displayPhotos = () => {};

const getPhotos = async () => {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		// Error handling
	}
};

getPhotos();
