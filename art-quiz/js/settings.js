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
  this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
  if (volume === 0) {
    muteButton.style.opacity = 0.4;
  } else {
    muteButton.style.opacity = 1;
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

    // stop audio
    // audioElement.stop();

    // soundVolume.addEventListener("input", function () {
    //   AUDIO.volume = soundVolume.value;
    //   if (AUDIO.volume == 0) {
    //     muteButton.style.opacity = 0.4;
    //   } else {
    //     muteButton.style.opacity = 1;
    //   }
    // });
    muteButton.addEventListener('click', () => {
      // if (soundVolume.value == 0) {
      // AUDIO.volume = restoreValue;
      volumeRange.classList.toggle('non-active');
      // } else {
      // AUDIO.volume = 0;
      // restoreValue = soundVolume.value;
      // volumeRange.classList.remove("non-active");
    });
  });
}

export { settingsPage };
export { playBtn };
