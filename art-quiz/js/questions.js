import data from './data.js';
import shuffle from './category.js';
import choosePicture from './picture.js';
import { AUTHOR, NAME, NUMBER_QUESTION_BY_AUTHOR, firstNumberPicture, lastNumberPicture, numberQuestion } from './constants.js';
import { getImageUrl } from './helpers.js';
import { IMG_POSTFIX } from './constants.js';
choosePicture();

const answersWrapper = document.querySelector('.answers_wrapper');

const splitArr = (arr, chunks) => {
  [...Array(chunks)].map((_, c) => arr.filter((n, index) => index % chunks === c));
};

const questionsByAuthor = [];
const questionsByPicture = [];
data.forEach((item, index) => {
  if (index % 2 === 0) {
    questionsByAuthor.push({ ...item, type: AUTHOR });
  } else if (index % 2 !== 0) {
    questionsByPicture.push({ ...item, type: NAME });
  }
});

const uniqAnswersByAuthor = [...new Set(questionsByAuthor.map((item) => item.author))];
const uniqAnswersByPicture = [...new Set(questionsByPicture.map((item) => item.author))];
const newquestionsByAuthor = splitArr(questionsByAuthor, NUMBER_QUESTION_BY_AUTHOR);
const newquestionsByPicture = splitArr(questionsByPicture, NUMBER_QUESTION_BY_AUTHOR);

const answers = {
  uniqAnswersByAuthor,
  uniqAnswersByPicture
};
const questions = {
  questionsByAuthor,
  questionsByPicture
};

let randomNum;
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}
getRandomNum();
const pictureImg = document.querySelector('.picture_img');
let bgNum = getRandomNum(firstNumberPicture, lastNumberPicture);
function setBg() {
  const img = new Image();
  img.src = getImageUrl(bgNum += 1, IMG_POSTFIX.IMG);
  img.addEventListener('load', () => {
    pictureImg.style.backgroundImage = `url(${img.src})`;
  });
}
setBg();

function createAnswersPicture() {
  shuffle(uniqAnswersByPicture);
  for (let i = 0; i < numberQuestion; i += 1) {
    answersWrapper.innerHTML += `
  <li class="variant">"${data[(bgNum += 1)].author}"</li>
 `;
  }
}

createAnswersPicture();
