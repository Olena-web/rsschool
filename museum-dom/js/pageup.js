//smooth scroll and pageup
"use strict";
document.addEventListener("DOMContentLoaded", () => {
  const pageUp = document.querySelector(".pageup");

  // When the user scrolls down 1200px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 1200 ||
      document.documentElement.scrollTop > 1200
    ) {
      pageUp.style.display = "block";
    } else {
      pageUp.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  pageUp.addEventListener("click", () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
});
