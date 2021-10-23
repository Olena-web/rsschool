"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const settingsIcon = document.querySelector(".settings-icon");
  const settings = document.querySelector(".settings");
  const toDoBtn = document.getElementById("todo");
  const toDo = document.querySelector(".container-todo");
  const player = document.querySelector(".player");
  const audioBtn = document.getElementById("audio");
  const weatherBtn = document.getElementById("weather");
  const weather = document.querySelector(".weather");
  const quotesBtn = document.getElementById("quotes");
  const quotes = document.querySelector(".footer");
  const greetingBtn = document.getElementById("greeting");
  const greeting = document.querySelector(".greeting-container");
  const dateBtn = document.getElementById("date");
  const date = document.querySelector(".date");
  const timeBtn = document.getElementById("times");
  console.log(timeBtn);
  console.log(dateBtn);
  const time = document.querySelector(".time");

  settingsIcon.addEventListener("click", () => {
    settings.classList.toggle("active");
  });

  setTimeout(
    settingsIcon.addEventListener("click", () => {}),
    500
  );
  toDoBtn.addEventListener("click", () => {
    toDo.classList.toggle("hidden");
  });
  audioBtn.addEventListener("click", () => {
    player.classList.toggle("hidden");
  });
  timeBtn.addEventListener("click", () => {
    time.classList.toggle("hidden");
  });
  dateBtn.addEventListener("click", () => {
    date.classList.toggle("hidden");
  });
  weatherBtn.addEventListener("click", () => {
    weather.classList.toggle("hidden");
  });
  greetingBtn.addEventListener("click", () => {
    greeting.classList.toggle("hidden");
  });
  quotesBtn.addEventListener("click", () => {
    quotes.classList.toggle("hidden");
  });
});

// function save() {
//   var list = document.querySelectorAll(`[type*="checkbox"]`);
//   list.forEach((el) => {
//     localStorage.setItem(el.id, el.checked);
//   });
// }
// save();

// window.onload = function () {
//   var list = document.querySelectorAll(`[type*="checkbox"]`);
//   list.forEach((el) => {
//     var checked = JSON.parse(localStorage.getItem(el.id));
//     document.getElementById(el.id).checked = checked;
//   });
// };

// function save() {
//   localStorage.setItem("todo", toDoBtn.checked);
//   localStorage.setItem("audio", audio.checked);
// }

// save();
// window.onload = function () {
//   let checked = JSON.parse(localStorage.getItem("todo"));
//   toDoBtn.checked = checked;

//   let checked1 = JSON.parse(localStorage.getItem("audio"));
//   audio.checked = checked1;
// };
