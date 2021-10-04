"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu-aside"),
    welcome = document.querySelector(".welcome-container"),
    menuBlock = menu.querySelector(".menu-block");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("active");
    welcome.classList.toggle("invisible");
  });

  setTimeout(
    menuBlock.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("active");
      welcome.classList.toggle("invisible");
    }),
    500
  );
});
