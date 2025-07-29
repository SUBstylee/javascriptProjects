const img = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
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

const loadSong = (song) => {
	title.textContent = song.displayName;
	artist.textContent = song.artist;
	music.src = `music/${song.name}.mp3`;
	img.src = `img/${song.name}.jpg`;
};

let currSongIndex = 0;

const prevSong = () => {
	currSongIndex === 0 ? (currSongIndex = songs.length - 1) : currSongIndex--;
	loadSong(songs[currSongIndex]);
	playSong();
};

const nextSong = () => {
	currSongIndex === songs.length - 1 ? (currSongIndex = 0) : currSongIndex++;
	loadSong(songs[currSongIndex]);
	playSong();
};

loadSong(songs[currSongIndex]);

const updateProgressBar = (e) => {
	if (isPlaying) {
		const { duration, currentTime } = e.srcElement;
		console.log(duration, currentTime);
		const progressPercent = (currentTime / duration) * 100;
		progress.style.width = `${progressPercent}%`;
		const durationMinutes = Math.floor(duration / 60);
		let durationSeconds = Math.floor(duration % 60);
		if (durationSeconds < 10) durationSeconds = `0${durationSeconds}`;
		if (durationSeconds)
			durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
		const currentMinutes = Math.floor(currentTime / 60);
		let currentSeconds = Math.floor(currentTime % 60);
		if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;
		currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
	}
};

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
