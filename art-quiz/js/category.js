import data from './data.js';
import images from './constants.js';

const NUMBER_PICTURES = 5;


const pictureContainer = document.querySelector('.picture_container');
const artistsContainer = document.querySelector('.artists_container');

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [[array[j]], array[i]];
  }
}

function createGalleryPicture() {
  shuffle(images);
  images.forEach((img, i) => {
    pictureContainer.innerHTML += `
    <div class="item_picture">
      <div class="wrapper">
        <div class="title">${data[images[i].toString().slice(4, -5)].category}</div>
        <div class="counter">${NUMBER_PICTURES}</div>
      </div>
      <img src = "${images[i]}"></img>
    </div>`;
  });
}
createGalleryPicture();

function createGalleryArtists() {
  shuffle(images);
  images.forEach((img, i) => {
    artistsContainer.innerHTML += `
    <div class="item_picture_artists">
      <div class="wrapper">
        <div class="title">${data[images[i].toString().slice(4, -5)].category}</div>
        <div class="counter">${NUMBER_PICTURES}</div>
      </div>
      <img src = "${images[i]}"></img>
    </div>`;
  });
}
createGalleryArtists();

export default shuffle;
