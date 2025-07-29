const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

let isPlaying = false;

const playSong = () => {
	isPlaying = true;
	playBtn.classList.replace('fa-play-circle', 'fa-pause');
	playBtn.setAttribute('title', 'Pause');
	music.play();
};

const pauseSong = () => {
	isPlaying = false;
	playBtn.classList.replace('fa-pause', 'fa-play-circle');
	playBtn.setAttribute('title', 'Play');
	music.pause();
};

playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));
