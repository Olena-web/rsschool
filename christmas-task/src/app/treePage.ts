import data from '../data';
const treeItem = document.querySelectorAll<HTMLDivElement>('.menu-tree_item');
const bgItem = document.querySelectorAll<HTMLDivElement>('.menu-bg__item');
const treePageMain = document.querySelector<HTMLDivElement>('.tree-page__main');
const treeConytainer = document.querySelector<HTMLDivElement>('.main-tree__container');
const pickToys = document.querySelector<HTMLDivElement>('.pick-toys');
const clearStorage = document.querySelector<HTMLButtonElement>('.clear');
import { filteredData } from './filters';
import { tree } from './startPage';
import './toysPage';
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

// window.addEventListener('load', () => {
//   localStorage.getItem('selectedToys');
// });

tree?.addEventListener('click', () => {
  localStorage.setItem('selectedToys', JSON.stringify(selectedItems));
  if (localStorage['selectedToys']) {
    localStorage.getItem('selectedToys');
    toysOnTree = toysOnTreeSelect === [] ? toysOnTreeDefault : toysOnTreeSelect;
    //createPickToysContainer();
  }
});
if (clearStorage)
  clearStorage.addEventListener('click', () => {
    localStorage.clear();
  });

let selectedItems = [] as filteredData[];
if (localStorage['selectedToys']) {
  const newData = localStorage.getItem('selectedToys') || '';
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  selectedItems = JSON.parse(newData);
}
const toysOnTreeDefault = data.splice(0, 20);
const toysOnTreeSelect = selectedItems;
let toysOnTree: filteredData[] = [];
toysOnTree = toysOnTreeSelect === [] ? toysOnTreeDefault : toysOnTreeSelect;

export function createPickToysContainer() {
  if (pickToys === null) {
    throw Error;
  } else {
    toysOnTree = toysOnTreeDefault;
    if (toysOnTree !== null)
      toysOnTree.forEach((item, i) => {
        pickToys.innerHTML += `<div class = "pick-toys__item ${item.shape}">
         <img id = "${item.num}" class = "toy-image" draggable = "true" src="assets/toys/${item.num}.png" alt="${item.name}">
         <div data-index = "${item.num}" class="count"> ${item.count}</div>
       </div>
     `;
      });
  }
}

createPickToysContainer();

// window.addEventListener('load', () => {
//   toysOnTree = toysOnTreeDefault;
//   createPickToysContainer();
// });
