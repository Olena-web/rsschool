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
const selectSource = document.querySelector(".settings-picture");
console.log(selectSource);
let randomNum;
let playNum = 0;
let hash = window.location.hash;
hash = hash.substr(1);
const options = {
  month: "long",
  day: "numeric",
  weekday: "long",
};
import langArr from "./lang.js";

function showTime() {
  date = new Date();
  let currentDate = date.toLocaleDateString(`${hash}`, options);
  const currentTime = date.toLocaleTimeString();
  time.innerHTML = currentTime;
  dayOfWeek.textContent = currentDate;
  showGreeting();
  setTimeout(showTime, 1000);
}

showTime();

city.value = localStorage.getItem("Location");

//weather
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=${hash}&appid=bcc33196cdb4397674f34d818b09afee&units=metric`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.className = "weather-icon owf";
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)} °C`;
    weatherDescription.textContent = data.weather[0].description;
    if (hash == "en") {
      humidity.textContent = `humidity ${Math.round(data.main.humidity)} %`;
      wind.textContent = `wind speed  ${Math.round(data.wind.speed)}  m/c `;
    } else if (hash == "ru") {
      humidity.textContent = `влажность ${Math.round(data.main.humidity)} %`;
      wind.textContent = `скорость ветра  ${Math.round(data.wind.speed)}  м/c `;
    }
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
  if (timeOfDay == "night") {
    greeting.innerHTML = langArr.greeting[hash][3];
  } else if (timeOfDay == "morning") {
    greeting.innerHTML = langArr.greeting[hash][0];
  } else if (timeOfDay == "afternoon") {
    greeting.innerHTML = langArr.greeting[hash][1];
  } else {
    greeting.innerHTML = langArr.greeting[hash][2];
  }
}
showGreeting();

//picture from unsplash
//window.addEventListener("load", getLinkToUnsplash);
async function getLinkToUnsplash() {
  const url =
    "https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=Byn5HXTV7irw_GKyvddJTxKBS-TJk4b-QCizSKjsxlg";
  const res = await fetch(url);
  const data = await res.json();
  body.style.backgroundImage = `url(${data.urls.regular}) `;
  body.classList.add("fromApi");
}

//picture from flickr

//window.addEventListener("load", getLinkToFlickr);
async function getLinkToFlickr() {
  const url =
    "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=967601ec97e7827f2af51bc844b8eaca&tags=nature&extras=url_l&format=json&nojsoncallback=1";
  const res = await fetch(url);
  const data = await res.json();
  let pick = Math.floor(Math.random() * data.photos.photo.length);
  body.style.backgroundImage = `url(${data.photos.photo[pick].url_l}) `;
  body.classList.add("fromApi");
}

//picture from github

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}
getRandomNum();

const timeOfDay = getTimeOfDay();

let bgNum = getRandomNum(1, 20).toString().padStart(2, "0");

function setBg(bgNum) {
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/Olena-web/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
  img.addEventListener("load", () => {
    body.style.backgroundImage = `url(${img.src})`;
  });
}
//setBg(bgNum);

function getSlideNext() {
  let bgNumInit = parseInt(bgNum) + 1;
  if (bgNumInit == 20) {
    bgNum = "01";
    setBg(bgNum);
    return;
  }
  bgNum = bgNumInit.toString().padStart(2, "0");
  setBg(bgNum);
}
slideNext.disabled = true;
setTimeout(function () {
  slideNext.disabled = false;
}, 1000);

function getSlidePrev() {
  let bgNumInit = parseInt(bgNum) - 1;
  if (bgNumInit == 0) {
    bgNum = "20";
    setBg(bgNum);
    return;
  }
  bgNum = bgNumInit.toString().padStart(2, "0");
  setBg(bgNum);
}
slidePrev.disabled = true;
setTimeout(function () {
  slidePrev.disabled = false;
}, 1000);

//quotes

window.addEventListener("load", getQuotes);
changeQuote.addEventListener("click", getQuotes);
async function getQuotes() {
  let quotes = `data_${hash}.json`;
  const res = await fetch(quotes);
  const data = await res.json();
  let pick = Math.floor(Math.random() * data.length);
  quote.innerHTML = `${data[pick].text}`;
  author.innerHTML = `${data[pick].author}`;
}
getQuotes();

selectSource.addEventListener("change", showPicture);

function showPicture() {
  let picture = selectSource.value;
  console.log(picture);
  if (picture == "github") {
    picture = "github";
    setBg(bgNum);
    slideNext.addEventListener("click", getSlideNext);
    slidePrev.addEventListener("click", getSlidePrev);
  } else if (picture == "unsplash") {
    window.addEventListener("load", getLinkToUnsplash);
    picture = "unsplash";
    getLinkToUnsplash();
    slideNext.addEventListener("click", getLinkToUnsplash);
    slidePrev.addEventListener("click", getLinkToUnsplash);
  } else if (picture == "flickr") {
    window.addEventListener("load", getLinkToFlickr);
    picture = "flickr";
    getLinkToFlickr();
    slideNext.addEventListener("click", getLinkToFlickr);
    slidePrev.addEventListener("click", getLinkToFlickr);
  }
}
showPicture();
