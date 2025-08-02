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
const displayTime = (time) => {
	const minutes = Math.floor(time / 60);
	let seconds = Math.floor(time % 60);
	seconds = seconds > 9 ? seconds : `0${seconds}`;
	return `${minutes}:${seconds}`;
};

const updateProgress = () => {
	progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
	currentTime.textContent = `${displayTime(video.currentTime)} / `;
	duration.textContent = `${displayTime(video.duration)}`;
};

// volume controls

// change playback speed

// fullscreen

playBtn.addEventListener('click', togglePlay);
video.addEventListener('ended', showPlayIcon);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
