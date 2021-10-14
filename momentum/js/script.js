"use strict";
const time = document.querySelector(".time");

const date = new Date();
console.log(date);
const currentTime = date.toLocaleTimeString();
console.log(currentTime);
function showTime() {
  time.textContent = currentTime;
  setTimeout(showTime, 1000);
}
showTime();
