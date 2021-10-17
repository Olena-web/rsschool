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

city.value = localStorage.getItem("Location");

//weather
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=bcc33196cdb4397674f34d818b09afee&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  weatherIcon.className = "weather-icon owf";

  console.log(
    data.weather[0].id,
    data.weather[0].description,
    data.main.temp,
    data.main.humidity,
    data.wind.speed
  );
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)} °C`;
  weatherDescription.textContent = data.weather[0].description;
  humidity.textContent = `humidity ${Math.round(data.main.humidity)} %`;
  wind.textContent = `wind speed  ${Math.round(data.wind.speed)}  m/c `;
}
getWeather();

//city

city.addEventListener("change", () => {
  localStorage.setItem("Location", city.value);
  city.textContent = city.value;
  getWeather();
  if (city.value == "" || city.value.validity.badInput) {
    city.value = "Minsk";
  }
});

function setBg() {
  const timeOfDay = getTimeOfDay();
  let bgNum = getRandomNum(1, 20).toString();
  bgNum = bgNum.padStart(2, "0");
  body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;
  randomSlideNum = (randomSlideNum - 1) % 20;
}

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
console.log(hours);
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

const timeOfDay = getTimeOfDay();
const greetingText = `Good ${timeOfDay}, `;
greeting.innerHTML = greetingText;
