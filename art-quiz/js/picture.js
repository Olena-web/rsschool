import { firstNumberPicture, lastNumberPicture } from './constants.js';
import { getImageUrl } from './helpers.js';
import { IMG_POSTFIX } from './constants.js';

function choosePicture() {
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
}
export default choosePicture;
