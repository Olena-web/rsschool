import { getRandomNum } from '../app/snow';

/* draggable element */
const toys = document.querySelectorAll<HTMLImageElement>('.toy-image');
/* drop targets */
const mainTree = document.querySelector<HTMLImageElement>('.main-tree__container');
console.log(mainTree);

toys.forEach((toy) => {
  toy.addEventListener('dragstart', dragStart);
  toy.addEventListener('dragend', dragEnd);
});

function dragStart(e: DragEvent) {
  if (e !== null) {
    (e.dataTransfer as DataTransfer).setData('text/plain', (e.target as Element).id);
  }
  setTimeout(() => {
    (e.target as Element).classList.add('hide');
  }, 0);
}

if (mainTree) {
  mainTree.addEventListener('dragenter', dragEnter);
  mainTree.addEventListener('dragover', dragOver);
  mainTree.addEventListener('dragleave', dragLeave);
  mainTree.addEventListener('drop', drop);
}

function dragEnter(e: DragEvent) {
  e.preventDefault();
  (e.target as Element).classList.add('drag-over');
}

function dragOver(e: DragEvent) {
  e.preventDefault();
  (e.target as Element).classList.add('drag-over');
}

function dragLeave(e: DragEvent) {
  (e.target as Element).classList.remove('drag-over');
}
function dragEnd(e: DragEvent) {
  (e.target as Element).classList.remove('hide');
  console.log('end');
}

function drop(e: DragEvent) {
  (e.target as Element).classList.remove('drag-over');
  // get the draggable element
  const id = (e.dataTransfer as DataTransfer).getData('text/plain');
  const draggable = document.getElementById(id);
  console.log(id);
  // add it to the drop target
  if ((e.target as Element) && draggable) {
    //draggable.style.bottom = `${getRandomNum(1, 550)}px`;
    //draggable.style.marginLeft = `${getRandomNum(1, 600)}px`;
    const img = new Image();
    img.src = `${id}`;
    console.log(e.target);
    (e.target as Element).appendChild(img);
  }
  // display the draggable element
  if (draggable) draggable.classList.remove('hide');
  console.log('drop');
}
