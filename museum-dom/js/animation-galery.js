//animation-gallery
const windowOnloadAdd = function (event) {
  if (window.onload) {
    window.onload = window.onload + event;
  } else {
    window.onload = event;
  }
};
windowOnloadAdd(function () {
const animItems = pictureInnerContainer.querySelectorAll("img");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(param) {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;
      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - animItemHeight / animStart;
      }

      if (
        window.pageYOffset > animItemOffset - animItemPoint &&
        window.pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("fade");
      } else {
        animItem.classList.remove("fade");
      }
    }
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  animOnScroll();
}
});
