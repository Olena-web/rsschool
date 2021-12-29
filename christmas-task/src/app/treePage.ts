import data from '../data';
const treeItem = document.querySelectorAll<HTMLDivElement>('.menu-tree_item');
const bgItem = document.querySelectorAll<HTMLDivElement>('.menu-bg__item');
const treePageMain = document.querySelector<HTMLDivElement>('.tree-page__main');
const treeConytainer = document.querySelector<HTMLDivElement>('.main-tree__container');
const pickToys = document.querySelector<HTMLDivElement>('.pick-toys');
import { filteredData } from './filters';
import { tree } from './startPage';
let bgNum;

const img = new Image();
img.src = `./assets/bg/2.jpg`;
img.addEventListener('load', () => {
  if (treePageMain) treePageMain.style.backgroundImage = `url(${img.src})`;
});

if (bgItem !== null && treePageMain !== null) {
  for (let i = 0; i < bgItem.length; i++) {
    bgNum = i + 1;
    const img = new Image();
    img.src = `./assets/bg/${bgNum}.jpg`;
    bgItem[i].addEventListener('click', () => {
      if (treePageMain) treePageMain.style.backgroundImage = `url(${img.src})`;
    });
  }
}

if (treeItem !== null && treePageMain !== null) {
  for (let i = 0; i < treeItem.length; i++) {
    bgNum = i + 1;
    const img = new Image();
    img.classList.add('main-tree');
    img.src = `./assets/tree/${bgNum}.png`;
    treeItem[i].addEventListener('click', () => {
      if (treeConytainer !== null) {
        treeConytainer.style.backgroundImage = `url(${img.src})`;
      }
    });
  }
}

// function getLocalStorage() {
//   if (localStorage.getItem('selectedToys')) {

//     if (selectedToysForTree) {

//       const selectedItems = JSON.parse(selectedToysForTree);

//     }
//   }

window.addEventListener('load', () => {
  localStorage.getItem('selectedToys');
});

tree?.addEventListener('click', () => {
  localStorage.getItem('selectedToys');
});

let selectedItems = [] as filteredData[];
if (localStorage['selectedToys']) {
  const newData = localStorage.getItem('selectedToys') || '';
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  selectedItems = JSON.parse(newData);
}
const toysOnTreeDefault = data.splice(0, 20);
export function createPickToysContainer(x = toysOnTreeDefault) {
  if (pickToys === null) {
    throw Error;
  } else {
    const toysOnTreeSelect = selectedItems;
    let toysOnTree = toysOnTreeSelect;
    window.addEventListener('load', () => {
      toysOnTree = x;
    });
    if (toysOnTree !== null)
      toysOnTree.forEach((item, i) => {
        pickToys.innerHTML += `<div class = "pick-toys__item ${item.shape}">
         <img id = "${i}" class = "toy-image" draggable = "true" src="assets/toys/${item.num}.png" alt="${item.name}">
         <div data-index = "${i}" class="count"> ${item.count}</div>
       </div>
     `;
      });
  }
}

createPickToysContainer();
