"use strict";
let images = [
  "assets/img/galery/galery1.jpg",
  "assets/img/galery/galery2.jpg",
  "assets/img/galery/galery3.jpg",
  "assets/img/galery/galery4.jpg",
  "assets/img/galery/galery5.jpg",
  "assets/img/galery/galery6.jpg",
  "assets/img/galery/galery7.jpg",
  "assets/img/galery/galery8.jpg",
  "assets/img/galery/galery9.jpg",
  "assets/img/galery/galery10.jpg",
  "assets/img/galery/galery11.jpg",
  "assets/img/galery/galery12.jpg",
  "assets/img/galery/galery13.jpg",
  "assets/img/galery/galery14.jpg",
  "assets/img/galery/galery15.jpg",
];
const pictureInnerContainer = document.querySelector(
  ".picture-inner-container"
);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [[array[j]], array[i]];
  }
}
shuffle(images);

function createGallery(container, images) {
  let i = 0,
    L = images.length,
    docFrag = document.createDocumentFragment(),
    img;

  if (L) {
    for (
      docFrag.appendChild((img = document.createElement("img"))).src =
        images[i];
      ++i < L;
      docFrag.appendChild(img.cloneNode(false)).src = images[i]
    );

    setTimeout(() => {
      container.appendChild(docFrag);
    }, 400);
  }
}

createGallery(pictureInnerContainer, images);
