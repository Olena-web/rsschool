"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu-aside"),
    welcome = document.querySelector(".welcome-container"),
    menuBlock = menu.querySelector(".menu-block");

  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
    welcome.classList.add("invisible");
  });

  setTimeout(
    menuBlock.addEventListener("click", () => {
      menu.classList.remove("active");
      welcome.classList.remove("invisible");
    }),
    500
  );
});
