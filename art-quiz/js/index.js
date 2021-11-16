// import image from './img/0.webp';

// const createImage = (src) =>
//   new Promise((res, rej) => {
//     const img = new Image();
//     img.onload = () => res(img);
//     img.onerror = rej;
//     img.src = src;
//   });
// async function render() {
//   const subHeader = document.createElement('h2');
//   subHeader.innerHTML = 'This elements was created by js';
//   const myImage = await createImage(image);
//   document.body.appendChild(subHeader);
//   document.body.appendChild(myImage);
// }
// render();

import { settingsPage } from './settings.js';
import { playBtn } from './settings.js';
settingsPage();
document.addEventListener('DOMContentLoaded', () => {
  const settingsBtn = document.querySelectorAll('.settings_button');
  const startPage = document.querySelector('.start_page');
  const settingPage = document.querySelector('.settings_page');

  const pickArtist = document.querySelector('.artists_quiz');
  const pickPicture = document.querySelector('.picture_quiz');
  const artistPage = document.querySelector('.artists_page');
  const picturePage = document.querySelector('.picture_page');
  const homeBtn = document.querySelectorAll('.home_button');

  settingsBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      startPage.classList.toggle('hide');
      settingPage.classList.toggle('hide');
    });
  });
  pickArtist.addEventListener('click', () => {
    startPage.classList.add('hide');
    artistPage.classList.remove('hide');
    playBtn();
  });
  pickPicture.addEventListener('click', () => {
    startPage.classList.add('hide');
    picturePage.classList.remove('hide');
    playBtn();
  });
  homeBtn.forEach((btn) =>
    btn.addEventListener('click', () => {
      startPage.classList.remove('hide');
      artistPage.classList.add('hide');
      picturePage.classList.add('hide');
      playBtn();
    })
  );
});
