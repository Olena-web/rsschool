import data from './data.js';
import shuffle from './category.js';
import choosePicture from './picture.js';
choosePicture();

const answersWrapper = document.querySelector('.answers_wrapper');

const splitArr = (arr, chunks) => {
  [...Array(chunks)].map((_, c) => arr.filter((n, index) => index % chunks === c));
};

const questionsByAuthor = [];
const questionsByPicture = [];
data.forEach((item, index) => {
  if (index % 2 === 0) {
    questionsByAuthor.push({ ...item, type: 'author' });
  } else if (index % 2 !== 0) {
    questionsByPicture.push({ ...item, type: 'name' });
  }
});

const uniqAnswersByAuthor = [...new Set(questionsByAuthor.map((item) => item.author))];
const uniqAnswersByPicture = [...new Set(questionsByPicture.map((item) => item.author))];
const newquestionsByAuthor = splitArr(questionsByAuthor, 12);
const newquestionsByPicture = splitArr(questionsByPicture, 12);

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
let bgNum = getRandomNum(0, 119);
function setBg() {
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/Olena-web/image-data/master/full/${bgNum}full.jpg`;
  img.addEventListener('load', () => {
    pictureImg.style.backgroundImage = `url(${img.src})`;
  });
}
setBg();

function createAnswersPicture() {
  shuffle(uniqAnswersByPicture);
  for (let i = 0; i < 4; i += 1) {
    answersWrapper.innerHTML += `
  <li class="variant">"${data[(bgNum += 1)].author}"</li>
 `;
  }
}

createAnswersPicture();
