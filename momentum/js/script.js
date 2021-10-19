"use strict";
const time = document.querySelector(".time");
const dayOfWeek = document.querySelector(".date");
const date = new Date();
const currentTime = date.toLocaleTimeString();
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
    showGreeting();
  }
  setTimeout(showTime, 100);
}
showTime();

city.value = localStorage.getItem("Location");

//weather
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=bcc33196cdb4397674f34d818b09afee&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.className = "weather-icon owf";
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)} °C`;
  weatherDescription.textContent = data.weather[0].description;
  humidity.textContent = `humidity ${Math.round(data.main.humidity)} %`;
  wind.textContent = `wind speed  ${Math.round(data.wind.speed)}  m/c `;
  if (res.status == 404 || res == undefined) {
    weatherError.textContent = "Error";
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
const hours = date.getHours();

function getTimeOfDay() {
  let message = "";
  if (hours < 6) {
    message = "night";
  } else if (hours < 12) {
    message = "morning";
  } else if (hours < 18) {
    message = "day";
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

// picture from unsplash
async function getLinkToImage() {
  const url =
    "https://api.unsplash.com/photos/random?orientation=landscape&query=nature&client_id=Byn5HXTV7irw_GKyvddJTxKBS-TJk4b-QCizSKjsxlg";
  const res = await fetch(url);
  const data = await res.json();
}
getLinkToImage();

function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}
getRandomNum();
const timeOfDay = getTimeOfDay();

function setBg() {
  let bgNum = getRandomNum(1, 20).toString().padStart(2, "0");
  body.style.backgroundImage = `url('https://raw.githubusercontent.com/Olena-web/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
}
setBg();

const getSlideNext = (number) => {
  setBg(++number > 20 ? (randomNum = 1) : number);
  slideNext.disabled = true;
  setTimeout(function () {
    slideNext.disabled = false;
  }, 1000);
};
const getSlidePrev = (number) => {
  setBg(--number < 1 ? (randomNum = 20) : number);
};
slidePrev.disabled = true;
setTimeout(function () {
  slidePrev.disabled = false;
}, 1000);

slideNext.onclick = () => getSlideNext(randomNum++);
slidePrev.onclick = () => getSlidePrev(randomNum--);

//quotes

window.addEventListener("load", getQuotes);
changeQuote.addEventListener("click", getQuotes);
async function getQuotes() {
  const quotes = "data.json";
  const res = await fetch(quotes);
  const data = await res.json();
  let pick = Math.floor(Math.random() * data.length);
  quote.innerHTML = `${data[pick].text}`;
  author.innerHTML = `${data[pick].author}`;
}
getQuotes();
