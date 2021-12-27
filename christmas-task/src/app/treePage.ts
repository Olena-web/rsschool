import data from '../data';
const treeItem = document.querySelectorAll<HTMLDivElement>('.menu-tree_item');
const bgItem = document.querySelectorAll<HTMLDivElement>('.menu-bg__item');
const treePageMain = document.querySelector<HTMLDivElement>('.tree-page__main');
const treeConytainer = document.querySelector<HTMLDivElement>('.main-tree__container');
const pickToys = document.querySelector<HTMLDivElement>('.pick-toys');
const mainTree = document.querySelector<HTMLImageElement>('.main-tree');

let bgNum;

const img = new Image();
img.src = `../assets/bg/2.jpg`;
img.addEventListener('load', () => {
  if (treePageMain) treePageMain.style.backgroundImage = `url(${img.src})`;
});

if (bgItem !== null && treePageMain !== null) {
  for (let i = 0; i < bgItem.length; i++) {
    bgNum = i + 1;
    const img = new Image();
    img.src = `../assets/bg/${bgNum}.jpg`;
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
    img.src = `../assets/tree/${bgNum}.png`;
    treeItem[i].addEventListener('click', () => {
      if (treeConytainer !== null) {
        treeConytainer.style.backgroundImage = `url(${img.src})`;

        // treeConytainer.innerHTML = '';
        // treeConytainer.appendChild(img);
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

const selectedToys = getLocalStorage();

//console.log(selectedToys);
export function createPickToysContainer() {
  if (pickToys === null) {
    throw Error;
  } else {
    pickToys.innerHTML = '';
    data.length = 20;
    data.forEach((item, i) => {
      pickToys.innerHTML += `<div class = "pick-toys__item ${item.shape}">
         <img id = "${i}" class = "toy-image" draggable = "true" src="assets/toys/${item.num}.png" alt="${item.name}">
         <div class="count"> ${item.count}</div>
       </div>;
     `;
    });
  }
}

createPickToysContainer();

// const dragAndDrop = () => {
//   if (toys !== null) {
//     toys.forEach((toy) => {
//       const dragStart = function () {
//         setTimeout(() => {
//           toy.classList.add('hide');
//         }, 0);
//       };

//       const dragEnd = function () {
//         toy.classList.remove('hide');
//       };
//       const dragOver = function (e: Event) {
//         e.preventDefault();
//       };
//       const dragEnter = function (e: Event) {
//         e.preventDefault();
//       };
//       // const dragLeave = function () {
//       //   console.log('leave');
//       // };
//       const dragDrop = function () {
//         if (mainTree !== null) mainTree.appendChild(toy);
//         console.log('drop');
//       };
//       toy.addEventListener('dragstart', dragStart);
//       toy.addEventListener('dragend', dragEnd);
//       if (mainTree !== null) mainTree.addEventListener('dragover', dragOver);
//       if (mainTree !== null) mainTree.addEventListener('dragenter', dragEnter);
//       //treeConytainer?.addEventListener('dragleave', dragLeave);
//       if (mainTree !== null) mainTree.addEventListener('drop', dragDrop);
//     });
//   }
// };
// dragAndDrop();
