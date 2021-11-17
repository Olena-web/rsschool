import data from './data.js';

let images = [
  'img/0.webp',
  'img/10.webp',
  'img/20.webp',
  'img/30.webp',
  'img/40.webp',
  'img/51.webp',
  'img/59.webp',
  'img/64.webp',
  'img/68.webp',
  'img/76.webp',
  'img/81.webp',
  'img/95.webp'
];

let titles = [
  'realism',
  'landscape',
  'renaissance',
  'portrait',
  'romanticism',
  'painting',
  'avant-garde',
  'expressionism',
  'religion',
  'impressionism',
  'surrealism',
  'marine'
];
const pictureContainer = document.querySelector('.picture_container');
const artistsContainer = document.querySelector('.artists_container');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [[array[j]], array[i]];
  }
}

function createGallery(parent) {
  shuffle(images);
  images.forEach((img, i) => {
    parent.innerHTML += `<div class = "item_picture">
  <div class = "wrapper">
  <div class="title">${data[images[i].toString().slice(4, -5)].category}</div>
  <div class = "counter">5</div>
  </div>
  <img src = "${images[i]}"></img>
  </div>`;
  });
}

createGallery(pictureContainer, images, titles);
createGallery(artistsContainer, images, titles);
