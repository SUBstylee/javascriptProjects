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
	audioElements.push(audio);
	const btn = document.createElement('button');
	btn.classList.add('btn');
	btn.innerText = sound;
	btn.addEventListener('click', () => {
		stopAudio();
		document.getElementById(sound).play();
	});
	document.getElementById('buttons').appendChild(btn);
});
