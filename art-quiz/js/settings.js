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
  });
  const audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "sounds/button.wav");
  // play audio
  // audioElement.play();
  // stop audio
  //audioElement.stop();
}

export default settingsPage;
