import data from '../data';
const treeItem = document.querySelectorAll<HTMLDivElement>('.menu-tree_item');
const bgItem = document.querySelectorAll<HTMLDivElement>('.menu-bg__item');
const mainTree = document.querySelector<HTMLDivElement>('.tree-page__main');
const treeConytainer = document.querySelector<HTMLDivElement>('.main-tree__container');
const pickToys = document.querySelector<HTMLDivElement>('.pick-toys');
import { IDataItem } from './filters';

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
        treeConytainer.innerHTML = '';
        treeConytainer.appendChild(img);
      }
    });
  }
}
function getLocalStorage() {
  if (localStorage.getItem('selectedToys')) {
    localStorage.getItem('selectedToys');
  }
}
//const selectedItems: IDataItem[] = JSON.parse(getLocalStorage());
window.addEventListener('load', getLocalStorage);

export function createPickToysContainer(): void {
  if (pickToys === null) {
    throw Error;
  } else {
    //const data = selectedItems;
    pickToys.innerHTML = '';

    data.splice(0, 20).forEach((item, i) => {
      pickToys.innerHTML += `<div class = "pick-toys__item ${data[i].shape}">
         <img src="assets/toys/${data[i].num}.png" alt="${data[i].name}">
         <div class="count"> ${data[i].count}</div>
       </div>;
     `;
    });
  }
}

createPickToysContainer();
