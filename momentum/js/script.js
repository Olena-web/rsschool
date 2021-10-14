"use strict";
const time = document.querySelector(".time");
const dayOfWeek = document.querySelector(".date");
const date = new Date();
const currentTime = date.toLocaleTimeString();
const options = {
  month: "long",
  day: "numeric",
};
const currentDate = date.toLocaleDateString("en-US", options);

function getWeekDay(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date.getDay()];
}
getWeekDay(date);
const currentDayOfWeek = getWeekDay(date);
function showTime() {
  time.textContent = currentTime;

  function showTime() {
    dayOfWeek.textContent = currentDayOfWeek + "," + " " + currentDate;
  }
  setTimeout(showTime, 1000);
}
showTime();

console.log(date);
console.log(currentTime);
console.log(currentDate);
console.log(getWeekDay(date));
