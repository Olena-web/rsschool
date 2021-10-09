"use strict";
let progress = document.querySelectorAll(".progress");

progress.forEach((elem) => {
  elem.addEventListener("input", function () {
    const value = this.value;
    this.style.background = `linear-gradient(to right, var(--dark-red--color) 0%, var(--dark-red--color) ${value}%, var(--color-progress-before) ${value}%, var(--color-progress-before) 100%)`;
  });
  let docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function (el) {
    if (
      el.offsetWidth > docWidth ||
      (el.parentElement && el.offsetWidth > el.parentElement.offsetWidth)
    ) {
      console.log(el);
    }
  });
});
