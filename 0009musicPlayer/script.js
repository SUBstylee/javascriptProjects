const img = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

const songs = [
	{
		name: 'song-1',
		displayName: 'Electric Chill Machine',
		artist: 'Jacinto Design',
	},
	{
		name: 'song-2',
		displayName: 'Seven Nation Army (Remix)',
		artist: 'Jacinto Design',
	},
	{
		name: 'song-3',
		displayName: 'Goodnight, Disco Queen',
		artist: 'Jacinto Design',
	},
	{
		name: 'metric-1',
		displayName: 'Front Row (Remix)',
		artist: 'Metric/Jacinto Design',
	},
];

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

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
