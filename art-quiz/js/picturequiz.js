import data from './data.js';
import { firstNumberPicture, lastNumberPicture, numberQuestion } from './constants.js';
import { getImageUrl } from './helpers.js';
import { IMG_POSTFIX } from './constants.js';

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

let bgNum = getRandomNum(firstNumberPicture, lastNumberPicture);

function setPictures() {
  for (let i = 0; i < numberQuestion; i += 1) {
    const img = new Image();
    img.src = getImageUrl(bgNum += 1, IMG_POSTFIX.IMG);
    img.addEventListener('load', () => {
      pictureQuestion[i].style.backgroundImage = `url(${img.src})`;
    });
  }
}
setPictures();
function setAuthor() {
  pictureQuizName.innerHTML = `Kакую картину написал ${data[bgNum].author} `;
}

setAuthor();
