import data from './data.js';

const pictureQuestion = document.querySelectorAll('.picture_question');
const pictureQuizName = document.getElementById('author');
let randomNum;
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}
getRandomNum();

let bgNum = getRandomNum(0, 119);

function setPictures() {
  for (let i = 0; i < 4; i += 1) {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/Olena-web/image-data/master/img/${(bgNum += 1)}.jpg`;
    img.addEventListener('load', () => {});
    pictureQuestion[i].style.backgroundImage = `url(${img.src})`;
  }
}
setPictures();
function setAuthor() {
  pictureQuizName.innerHTML = `Kакую картину написал ${data[bgNum].author} `;
}

setAuthor();
