"use strict";
function settingsPage() {
  document.addEventListener("DOMContentLoaded", () => {
    let progress = document.querySelectorAll(".progress");
    progress.forEach((elem) => {
      elem.addEventListener("input", function () {
        const value = this.value;
        this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #c4c4c4 ${value}%, #c4c4c4 100%)`;
      });
    });

    const labelVolume = document.querySelector(".label-volume");
    const labelTime = document.querySelector(".label-time");
    const volumeRange = document.querySelector(".volume_range");
    const timeRange = document.querySelector(".time_range");

    labelVolume.addEventListener("click", function () {
      volumeRange.classList.toggle("non-active");
      audioElement.play();
    });
    labelTime.addEventListener("click", function () {
      timeRange.classList.toggle("non-active");
      audioElement.play();
    });
    const audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "sounds/button.wav");
    // play audio
    // audioElement.play();
    // stop audio
    //audioElement.stop();

    // soundVolume.addEventListener("input", function () {
    //   AUDIO.volume = soundVolume.value;
    //   if (AUDIO.volume == 0) {
    //     muteButton.style.opacity = 0.4;
    //   } else {
    //     muteButton.style.opacity = 1;
    //   }
    // });
    const muteButton = document.querySelector(".volume_off");
    muteButton.addEventListener("click", () => {
      //if (soundVolume.value == 0) {
      // AUDIO.volume = restoreValue;
      volumeRange.classList.toggle("non-active");
      //} else {
      //AUDIO.volume = 0;
      //restoreValue = soundVolume.value;
      // volumeRange.classList.remove("non-active");
    });
  });
}

export default settingsPage;
