const slider = document.querySelector(".img-comp-slider");
const afterImg = document.querySelector(".img-comp-img");
const beforeImg = document.querySelector(".img-comp-overlay");
const photoContainer = document.querySelector(".explore-slider");
let flag = false;

slider.addEventListener(
  "mousedown",
  function (evt) {
    evt.preventDefault();
    flag = true;
  },
  false
);

document.addEventListener(
  "mouseup",
  function () {
    flag = false;
  },
  false
);

photoContainer.addEventListener(
  "mousemove",
  function (evt) {
    const res = evt.pageX - this.offsetLeft;

    if (flag && res > 0 && res < beforeImg.offsetWidth) {
      slider.style.left = res + "px";
      afterImg.style.width = res + "px";
    }
  },
  false
);
