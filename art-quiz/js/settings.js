import { getLinearGradient } from './helpers.js';
import { MIN_OPACITY, MAX_OPACITY } from './constants.js';

const labelVolume = document.querySelector('.label-volume');
const labelTime = document.querySelector('.label-time');
const volumeRange = document.querySelector('.volume_range');
const timeRange = document.querySelector('.time_range');
const muteButton = document.querySelector('.volume_off');
const audioElement = document.createElement('audio');

function playBtn() {
  audioElement.setAttribute('src', 'sounds/button.wav');
  audioElement.play();
}
function forInput() {
  let volume = audioElement.volume;
  const value = this.value;
  volume = value;
  this.style.background = getLinearGradient(value);
  if (volume === 0) {
    muteButton.style.opacity = MIN_OPACITY;
  } else {
    muteButton.style.opacity = MAX_OPACITY;
  }
}
function settingsPage() {
  document.addEventListener('DOMContentLoaded', () => {
    let progress = document.querySelectorAll('.progress');
    progress.forEach((elem) => {
      elem.addEventListener('input', forInput);
    });

    labelVolume.addEventListener('click', () => {
      progress[0].classList.toggle('non-active');
      playBtn();
    });
    labelTime.addEventListener('click', () => {
      timeRange.classList.toggle('non-active');
      playBtn();
    });

    muteButton.addEventListener('click', () => {
      volumeRange.classList.toggle('non-active');
    });
  });
}

export { settingsPage };
export { playBtn };
