//import image from "./img/0.webp";

// const createImage = (src) =>
//   new Promise((res, rej) => {
//     const img = new Image();
//     img.onload = () => res(img);
//     img.onerror = rej;
//     img.src = src;
//   });
// async function render() {
//   const subHeader = document.createElement("h2");
//   subHeader.innerHTML = "This elements was created by js";
//   const myImage = await createImage(image);
//   document.body.appendChild(subHeader);
//   document.body.appendChild(myImage);
// }
//render();
"use strict";

import { settingsPage } from "./settings.js";
import { playBtn } from "./settings.js";
settingsPage();
document.addEventListener("DOMContentLoaded", () => {
  const settingsBtn = document.querySelectorAll(".settings_button");
  const startPage = document.querySelector(".start_page");
  const settingsPage = document.querySelector(".settings_page");

  const pickArtist = document.querySelector(".artists_quiz");
  const artistPage = document.querySelector(".artists_page");
  const homeBtn = document.querySelector(".home_button");

  settingsBtn.forEach(function (btn) {
    btn.addEventListener("click", () => {
      startPage.classList.toggle("hide");
      settingsPage.classList.toggle("hide");
    });
  });
  pickArtist.addEventListener("click", function () {
    startPage.classList.add("hide");
    artistPage.classList.remove("hide");
    playBtn();
  });
  homeBtn.addEventListener("click", function () {
    startPage.classList.remove("hide");
    artistPage.classList.add("hide");
    playBtn();
  });
});
