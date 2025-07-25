const videoElement = document.getElementById('video');
const btn = document.getElementById('btn');

const selectMediaStream = async () => {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
	} catch (error) {
		// error catching
	}
};

selectMediaStream();
