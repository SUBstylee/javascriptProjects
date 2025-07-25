const videoElement = document.getElementById('video');
const btn = document.getElementById('btn');

const selectMediaStream = async () => {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		return new Promise((resolve) => {
			videoElement.onloadedmetadata = async () => {
				await videoElement.play();
				resolve();
			};
		});
	} catch (error) {
		console.log('Something went wrong: ', error);
	}
};

btn.addEventListener('click', async () => {
	btn.disabled = true;
	btn.innerText = 'Loading...';
	await selectMediaStream();
	if (videoElement.readyState < 2) {
		btn.disabled = false;
		btn.innerText = 'Start';
		return;
	}
	await videoElement.requestPictureInPicture();
	btn.disabled = false;
	btn.innerText = 'Start';
});
