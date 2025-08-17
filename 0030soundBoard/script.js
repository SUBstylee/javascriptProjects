const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
const audioFragment = document.createDocumentFragment();
const btnFragment = document.createDocumentFragment();

const stopAudio = () => {
	document.querySelectorAll('audio').forEach((audio) => {
		audio.pause();
		audio.currentTime = 0;
	});
};

const createSoundItem = (sound) => {
	// audio element
	const audio = document.createElement('audio');
	audio.src = `sounds/${sound}.mp3`;
	audio.id = sound;
	audio.preload = 'auto';
	// button element
	const btn = document.createElement('button');
	btn.classList.add('btn');
	btn.innerText = sound;
	btn.addEventListener('click', () => {
		stopAudio();
		audio.play();
	});
	return { audio, btn };
};

sounds.forEach((sound) => {
	const { audio, btn } = createSoundItem(sound);
	audioFragment.appendChild(audio);
	btnFragment.appendChild(btn);
});

const btns = document.createElement('div');
btns.id = 'buttons';
document.body.appendChild(btns);

document.body.appendChild(audioFragment);
btns.appendChild(btnFragment);
