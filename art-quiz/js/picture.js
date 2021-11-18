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
  let bgNum = getRandomNum(0, 119);
  function setBg() {
    const img = new Image();
    img.src = `https://github.com/Olena-web/image-data/blob/master/full/${bgNum}full.jpg`;
    img.addEventListener('load', () => {
      pictureImg.style.backgroundImage = `url(${img.src})`;
    });
  }
  setBg();
}
export default choosePicture;
