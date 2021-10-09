"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu-aside"),
    welcome = document.querySelector(".welcome-container"),
    sliderControl = document.querySelector(".slider-control"),
    menuBlock = menu.querySelector(".menu-block");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("active");
    welcome.classList.toggle("invisible");
    if (window.matchMedia("(max-width:420px)")) {
      sliderControl.classList.add("hide");
    }
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
