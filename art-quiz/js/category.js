// const createImage = (src) =>
//   new Promise((res, rej) => {
//     const img = new Image();
//     img.onload = () => res(img);
//     img.onerror = rej;
//     img.src = src;
//   });
// async function render() {
//   const subHeader = document.createElement("item-title");
//   subHeader.innerHTML = `${itemTitles[1]}`;
//   //const myImage = await createImage(`/img/${1}`);
//   document.body.appendChild(subHeader);
//   // document.body.appendChild(myImage);
// }
// render();
("use strict");
let images = [
  "img/0.webp",
  "img/10.webp",
  "img/20.webp",
  "img/30.webp",
  "img/40.webp",
  "img/50.webp",
  "img/60.webp",
  "img/70.webp",
  "img/80.webp",
  "img/90.webp",
  "img/100.webp",
  "img/110.webp",
];
let titles = [
  "portrait",
  "landscape",
  "still life",
  "graphic",
  "antique",
  "avangard",
  "renaissance",
  "surrealism",
  "kitsch",
  "minimalism",
  "industrial",
  "religion",
];
const pictureContainer = document.querySelector(".picture_container");

let array = [];
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [[array[j]], array[i]];
  }
}

function createGallery(parent, images, titles) {
  parent = pictureContainer;
  parent.innerHTML = "";
  shuffle(images);
  let j = 0;
  j < titles.length + 1;

  images.forEach((img, i) => {
    parent.innerHTML += `<div class = "item">
  <div class = "wrapper">
  <div class="title">${titles[j++]}</div>
  <div class = "counter">5</div>
  </div>
  <img src = "${images[i]}"></img>
  </div>`;
  });
}

// setTimeout(() => {
//   createGallery();
// }, 400);

createGallery(pictureContainer, images, titles);

// let i = 0,
//   L = images.length,
//   docFrag = document.createDocumentFragment(),
//   img;

// if (L) {
//   for (
//     docFrag.appendChild((img = document.createElement("img"))).src =
//       images[i];
//     ++i < L;
//     docFrag.appendChild(img.cloneNode(false)).src = images[i]
//   );
