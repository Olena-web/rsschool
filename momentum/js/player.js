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
  if (isPlay) {
    audio.pause();
  }
  if (playNum == 3) {
    playNum = 0;
  } else {
    playNum++;
  }
  audio.play();
});
playPrev.addEventListener("click", () => {
  if (playNum == 0) {
    playNum = 3;
  } else {
    playNum--;
  }
  audio.src = playList[playNum].src;
  audio.currentTime = 0;
});
