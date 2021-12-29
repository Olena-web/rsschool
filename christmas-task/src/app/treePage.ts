import data from '../data';
const treeItem = document.querySelectorAll<HTMLDivElement>('.menu-tree_item');
const bgItem = document.querySelectorAll<HTMLDivElement>('.menu-bg__item');
const treePageMain = document.querySelector<HTMLDivElement>('.tree-page__main');
const treeConytainer = document.querySelector<HTMLDivElement>('.main-tree__container');
const pickToys = document.querySelector<HTMLDivElement>('.pick-toys');

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
function getLocalStorage() {
  if (localStorage.getItem('selectedToys')) {
    const selectedToysForTree = localStorage.getItem('selectedToys');
    if (selectedToysForTree) {
      //selectedItems = JSON.parse(selectedToysForTree);
    }
  }
}

window.addEventListener('load', getLocalStorage);

//console.log(getLocalStorage());

//console.log(selectedToys);
export function createPickToysContainer() {
  if (pickToys === null) {
    throw Error;
  } else {
    pickToys.innerHTML = '';
    data.splice(0, 20).forEach((item, i) => {
      pickToys.innerHTML += `<div class = "pick-toys__item ${item.shape}">
         <img id = "${i}" class = "toy-image" draggable = "true" src="assets/toys/${item.num}.png" alt="${item.name}">
         <div data-index = "${i}" class="count"> ${item.count}</div>
       </div>;
     `;
    });
  }
}

createPickToysContainer();
