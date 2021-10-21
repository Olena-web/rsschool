"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const settingsIcon = document.querySelector(".settings-icon");
  const settings = document.querySelector(".settings");

  settingsIcon.addEventListener("click", () => {
    settings.classList.toggle("active");
  });

  setTimeout(
    settingsIcon.addEventListener("click", () => {}),
    500
  );
});
