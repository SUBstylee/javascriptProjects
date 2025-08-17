const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const audioElements = [];

const stopAudio = () => {
	audioElements.forEach((audio) => {
		audio.pause();
		audio.currentTime = 0;
	});
};

const btns = document.createElement('div');
btns.id = 'buttons';
document.body.appendChild(btns);

const createSoundItem = (sound) => {
	// audio element
	const audio = document.createElement('audio');
	audio.src = `sounds/${sound}.mp3`;
	audio.id = sound;
	audio.preload = 'auto';
	audioElements.push(audio);
	// button element
	const btn = document.createElement('button');
	btn.classList.add('btn');
	btn.innerText = sound;
	btn.addEventListener('click', () => {
		stopAudio();
		audio.play();
	});
};

sounds.forEach((sound) => {});
