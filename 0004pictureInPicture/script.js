const videoElement = document.getElementById('video');
const btn = document.getElementById('btn');

const selectMediaStream = async () => {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		};
	} catch (error) {
		// error catching
	}
};

btn.addEventListener('click', async () => {
	btn.disabled = true;
	await videoElement.requestPictureInPicture();
	btn.disabled = false;
});

selectMediaStream();
