const select = document.querySelector(".settings-language");

import langArr from "./lang.js";

const allLang = ["en", "ru", "ua"];
select.addEventListener("change", changeUrlLanguage);
function changeUrlLanguage() {
  let lang = select.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
}
function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substr(1);
  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  select.value = hash;

  for (let key in langArr) {
    let elem = document.querySelector(key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
  document.getElementById("times").textContent = langArr.timeset[hash];
  document.getElementById("chooselang").textContent = langArr.chooselang[hash];
  document.getElementById("choosepict").textContent = langArr.choosepict[hash];
  document.getElementById("dates").textContent = langArr.dates[hash];
  document.getElementById("greetingset").textContent =
    langArr.greetingset[hash];
  document.getElementById("quoteset").textContent = langArr.quoteset[hash];
  document.getElementById("weatherset").textContent = langArr.weatherset[hash];
  document.getElementById("audioset").textContent = langArr.audioset[hash];
  document.getElementById("todos").textContent = langArr.todos[hash];
  document.getElementById("save").value = langArr.save[hash];
  document.querySelector(".namevalue").value = langArr.namevalue[hash];
  document.querySelector(".city").value = langArr.city[hash];
}

changeLanguage();
