import { settingsPage } from './settings.js';
import { playBtn } from './settings.js';
import startTimer from './timer.js';
import { fiveMinutes } from './constants.js';

settingsPage();
document.addEventListener('DOMContentLoaded', () => {
  const settingsBtn = document.querySelectorAll('.settings_button');
  const startPage = document.querySelector('.start_page');
  const settingPage = document.querySelector('.settings_page');
  const pickArtist = document.querySelector('.pick_artists_quiz');
  const pickPicture = document.querySelector('.pick_picture_quiz');
  const artistPage = document.querySelector('.artists_page');
  const picturePage = document.querySelector('.picture_page');
  const artistsQuiz = document.querySelector('.artists_quiz');
  const pictureQuiz = document.querySelector('.picture_quiz');
  const homeBtn = document.querySelectorAll('.home_button');
  const itemPicture = document.querySelectorAll('.item_picture');
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
      artistsQuiz.classList.add('hide');
      pictureQuiz.classList.add('hide');
      playBtn();
    })
  );

  itemPicture.forEach((elem) => {
    elem.addEventListener('click', () => {
      artistsQuiz.classList.remove('hide');
      artistPage.classList.add('hide');
      playBtn();
    });
  });
  const artistsContainer = document.querySelector('.artists_container');
  let itemArtists = artistsContainer.children;
  for (let i = 1; i < itemArtists.length; i++) {
    itemArtists[i].addEventListener('click', () => {
      pictureQuiz.classList.remove('hide');
      picturePage.classList.add('hide');
      playBtn();
    });
  }

  const display = document.querySelector('.timerdown');
  startTimer(fiveMinutes, display);
});
