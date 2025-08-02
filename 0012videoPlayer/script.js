const video = document.querySelector('video');
const progressRange = document.querySelector('.progress-range');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = document.querySelector('.volume-range');
const volumeBar = document.querySelector('.volume-bar');
const currentTime = document.querySelector('.time-elapsed');
const duration = document.querySelector('.time-duration');
const fullscreenBtn = document.querySelector('.fullscreen');

// play & pause
const showPlayIcon = () => {
	playBtn.classList.replace('fa-pause', 'fa-play');
	playBtn.title = 'Play';
};

const togglePlay = () => {
	video.paused
		? (video.play(),
		  playBtn.classList.replace('fa-play', 'fa-pause'),
		  (playBtn.title = 'Pause'))
		: (video.pause(), showPlayIcon());
};
// progress bar

// volume controls

// change playback speed

// fullscreen

playBtn.addEventListener('click', togglePlay);
video.addEventListener('ended', showPlayIcon);
