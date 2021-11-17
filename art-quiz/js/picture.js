// picture from github
function choosePicture() {
  let randomNum;
  function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
  }
  getRandomNum();
  const pictureImg = document.querySelector('.picture_img');
  let bgNum = getRandomNum(1, 20).toString().padStart(2, '0');
  async function setBg() {
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/Olena-web/image-data/master/full/${bgNum}full.webp`;
    img.addEventListener('load', () => {
      pictureImg.style.backgroundImage = `url(${img.src})`;
    });
    console.log(`url(${img.src})`);
  }
  setBg(bgNum);
}
export default choosePicture;
