const audio = new Audio();
const playBtn = document.querySelector(".play-main");
const playNext = document.querySelector(".play-next");
const playPrev = document.querySelector(".play-prev");
import playList from "./playList.js";
let playNum = 0;
console.log(playList);
let isPlay = false;
function playAudio() {
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
  if (!isPlay) {
    audio.play();
    isPlay = true;
    toggleBtn();
  } else {
    audio.pause();
    isPlay = false;
    toggleBtn();
  }
}

function toggleBtn() {
  playBtn.classList.toggle("pause");
}

playBtn.addEventListener("click", playAudio);

playNext.addEventListener("click", () => {
  if (playNum > 2) {
    playNum = 0;
  } else {
    playNum++;
  }
  playAudio();
});
playPrev.addEventListener("click", () => {
  if (playNum < 1) {
    playNum = 3;
  } else {
    playNum--;
  }
  playAudio();
});
