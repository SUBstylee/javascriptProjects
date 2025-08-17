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

sounds.forEach((sound) => {
	const audio = document.createElement('audio');
	audio.src = `sounds/${sound}.mp3`;
	audio.id = sound;
	document.body.appendChild(audio);
	audioElements.push(audio);
	const btn = document.createElement('button');
	btn.classList.add('btn');
	btn.innerText = sound;
	btn.addEventListener('click', () => {
		stopAudio();
		audio.play();
	});
	document.getElementById('buttons').appendChild(btn);
});
