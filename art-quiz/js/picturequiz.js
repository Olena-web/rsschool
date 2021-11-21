const pictureImages = document.querySelector('.picture_images');

let randomNum;
function getRandomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}
getRandomNum();

let bgNum = getRandomNum(0, 119);

function setPictures() {
  const img = new Image();
  img.src = `https://raw.githubusercontent.com/Olena-web/image-data/master/img/${bgNum}full.jpg`;
  img.addEventListener('load', () => {
    for (let i = 0; i < 4; i += 1) {
      pictureImages.innerHTML += `
            <div class="picture_question>"></div>
            `;
    }
  });
  const pictureQuestion = document.querySelectorAll('.picture_question');
  let elem;
  pictureQuestion.forEach(elem, () => {
    elem.addEventListener('load', () => {
      elem.style.backgroundImage = `url(${img.src})`;
    });
  });
}

setPictures();
