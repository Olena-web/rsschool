"use strict";
const time = document.querySelector(".time");
const dayOfWeek = document.querySelector(".date");
let date;

const weatherIcon = document.querySelector(".weather-icon");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherDescription = document.querySelector(".weather-description");
const city = document.querySelector(".city");
const nameEl = document.querySelector(".name");
const greeting = document.querySelector(".greeting");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const body = document.querySelector("body");
const changeQuote = document.querySelector(".change-quote");
const weatherError = document.querySelector(".weather-error");
body.style.backgroundImage =
  "url('https://raw.githubusercontent.com/Olena-web/stage1-tasks/assets/images/evening/16.jpg')";
const slidePrev = document.querySelector(".slide-prev");
const slideNext = document.querySelector(".slide-next");
let randomNum;
let bgNum;

let playNum = 0;

const options = {
  month: "long",
  day: "numeric",
};
// const currentDate = date.toLocaleDateString("en-US", options);

function getWeekDay(date) {
  date = new Date();
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
function showTime() {
  date = new Date();
  let currentDate = date.toLocaleDateString("en-US", options);
  let currentDayOfWeek = getWeekDay(date);
  const currentTime = date.toLocaleTimeString();
  time.innerHTML = currentTime;
  dayOfWeek.textContent = currentDayOfWeek + "," + " " + currentDate;
  showGreeting();
  setTimeout(showTime, 1000);
}

showTime();

// function showTime() {// second option
//   date = new Date();
//   let h = date.getHours();
//   let m = date.getMinutes();
//   let s = date.getSeconds();

//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   let timeNow = h + ":" + m + ":" + s;

//   time.textContent = timeNow;

//   setTimeout(showTime, 1000);
// }

// showTime();

city.value = localStorage.getItem("Location");

//weather
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=bcc33196cdb4397674f34d818b09afee&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)} °C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `humidity ${Math.round(data.main.humidity)} %`;
    wind.textContent = `wind speed  ${Math.round(data.wind.speed)}  m/c `;
  } catch (err) {
    weatherError.textContent = "Error, enter city";
    weatherIcon.className = "";
    weatherIcon = "";
    temperature.textContent = "";
    weatherDescription.textContent = "";
    humidity.textContent = "";
    wind.textContent = "";
  }
}

getWeather();

//city

city.addEventListener("change", () => {
  localStorage.setItem("Location", city.value);
  city.textContent = city.value;
  getWeather();
  if (
    localStorage.getItem("Location") == null ||
    localStorage.getItem("Location") == ""
  ) {
    city.value = "Minsk";
    getWeather();
  }
});

// local storage and name
function setLocalStorage() {
  localStorage.setItem("name", nameEl.value);
}
window.addEventListener("beforeunload", setLocalStorage);
function getLocalStorage() {
  if (localStorage.getItem("name")) {
    nameEl.value = localStorage.getItem("name");
  }
}
window.addEventListener("load", getLocalStorage);
//greeting

function getTimeOfDay() {
  date = new Date();
  let hours = date.getHours();
  let message = "";
  if (hours < 6) {
    message = "night";
  } else if (hours < 12) {
    message = "morning";
  } else if (hours < 18) {
    message = "afternoon";
  } else {
    message = "evening";
  }
  return message;
}
function showGreeting() {
  const timeOfDay = getTimeOfDay();
  const greetingText = `Good ${timeOfDay}, `;
  greeting.innerHTML = greetingText;
}
showGreeting();

//picture from unsplash
window.addEventListener("load", getLinkToUnsplash);
async function getLinkToUnsplash() {
  const url =
    "https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=Byn5HXTV7irw_GKyvddJTxKBS-TJk4b-QCizSKjsxlg";
  const res = await fetch(url);
  const data = await res.json();

  body.style.backgroundImage = `url(${data.urls.regular}) `;
  body.classList.add("fromApi");
}

//getLinkToUnsplash();

//picture from flickr

//window.addEventListener("load", getLinkToFlickr);
async function getLinkToFlickr() {
  const res = await fetch(url);
  const data = await res.json();
  let pick = Math.floor(Math.random() * data.photos.photo.length);
  const img = new Image();
  img.src = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=967601ec97e7827f2af51bc844b8eaca&tags=nature&extras=url_l&format=json&nojsoncallback=1`;
  img.addEventListener("load", () => {
    body.style.backgroundImage = `url(${data.photos.photo[pick].url_l}) `;
    body.classList.add("fromApi");
  });
}
//getLinkToFlickr();

//picture from github

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}
getRandomNum();

const timeOfDay = getTimeOfDay();

function setBg() {
  const img = new Image();
  bgNum = getRandomNum(1, 20).toString().padStart(2, "0");
  img.src = `https://raw.githubusercontent.com/Olena-web/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.addEventListener("load", () => {
    body.style.backgroundImage = `url(${img.src})`;
  });
}
setBg();

function getSlideNext() {
  randomNum++;
  randomNum == 20 ? (randomNum = 1) : randomNum;
  setBg(randomNum);
  slideNext.disabled = true;
  setTimeout(function () {
    slideNext.disabled = false;
  }, 1000);
}
function getSlidePrev() {
  randomNum--;
  randomNum == 1 ? (randomNum = 20) : randomNum;
  setBg(randomNum);
}
slidePrev.disabled = true;
setTimeout(function () {
  slidePrev.disabled = false;
}, 1000);
slideNext.addEventListener("click", getSlideNext);
slidePrev.addEventListener("click", getSlidePrev);
//slideNext.addEventListener("click", getLinkToUnsplash);
//slidePrev.addEventListener("click", getLinkToUnsplash);
//slideNext.addEventListener("click", getLinkToFlickr);
//slidePrev.addEventListener("click", getLinkToFlickr);

//quotes

window.addEventListener("load", getQuotes);
changeQuote.addEventListener("click", getQuotes);
async function getQuotes() {
  let quotes = "data_en.json";
  const res = await fetch(quotes);
  const data = await res.json();
  let pick = Math.floor(Math.random() * data.length);
  quote.innerHTML = `${data[pick].text}`;
  author.innerHTML = `${data[pick].author}`;
}
getQuotes();
