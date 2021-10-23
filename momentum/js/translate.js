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

  //document.querySelector(".times").textContent = langArr.times${hash};
  for (let key in langArr) {
    let elem = document.querySelector(key);
    if (elem) {
      elem.innerHTML = langArr[key][hash];
    }
  }
}

changeLanguage();
