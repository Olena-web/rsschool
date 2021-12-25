//import Control from '../common/control';
const treeItem = document.querySelectorAll<HTMLDivElement>('.menu-tree_item');
const bgItem = document.querySelectorAll<HTMLDivElement>('.menu-bg__item');
const mainTree = document.querySelector<HTMLDivElement>('.tree-page__main');
const treeConytainer = document.querySelector<HTMLDivElement>('.main-tree__container');
let bgNum;

const img = new Image();
img.src = `../assets/bg/5.jpg`;
img.addEventListener('load', () => {
  if (mainTree) mainTree.style.backgroundImage = `url(${img.src})`;
});

if (bgItem !== null && mainTree !== null) {
  for (let i = 0; i < bgItem.length; i++) {
    bgNum = i + 1;
    const img = new Image();
    img.src = `../assets/bg/${bgNum}.jpg`;
    bgItem[i].addEventListener('click', () => {
      if (mainTree) mainTree.style.backgroundImage = `url(${img.src})`;
    });
  }
}

if (treeItem !== null && mainTree !== null) {
  for (let i = 0; i < treeItem.length; i++) {
    bgNum = i + 1;
    const img = new Image();
    img.src = `../assets/tree/${bgNum}.png`;
    treeItem[i].addEventListener('click', () => {
      if (treeConytainer !== null) {
        //treeConytainer.style.backgroundImage = `url(${img.src})`;
        treeConytainer.innerHTML = '';
        treeConytainer.appendChild(img);
      }
    });
  }
}
