const countToys = document.querySelectorAll<HTMLDivElement>('.count');
/* draggable element */
export const toys = document.querySelectorAll<HTMLImageElement>('.toy-image');

/* drop targets */
export const mainTree = document.querySelector<HTMLDivElement>('.main-tree__container');

export const pickToys = document.querySelectorAll<HTMLDivElement>('.pick-toys__item');

const handleDragStart = (e: DragEvent) => {
  (e.dataTransfer as DataTransfer).setData('id', (e.target as Element).id);
};

const handleDrop = (e: DragEvent) => {
  const id = (e.dataTransfer as DataTransfer).getData('id');
  const element = document.getElementById(id);
  if (element !== null)
    for (let i = 0; i < countToys.length; i++) {
      if (id === countToys[i].dataset.index) {
        let toysCount: number = parseInt(countToys[i].innerText);
        toysCount--;
        if (toysCount < 0) {
          if (element !== null) {
            return;
          }
        }
        countToys[i].innerText = toysCount.toString();
      }
    }

  toys.forEach((toy) => {
    for (let i = 0; i < countToys.length; i++) {
      if (countToys[i].innerText === '0' && countToys[i].dataset.index == toy.id) toy.remove();
    }
  });

  const copy = (element as HTMLElement).cloneNode(true);
  if (copy) {
    (copy as HTMLElement).style.position = 'absolute';
    (copy as HTMLElement).setAttribute('draggable', 'true');
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (copy as HTMLElement).style.left = e.x + 'px';
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    (copy as HTMLElement).style.top = e.y + 'px';
    (copy as HTMLElement).addEventListener('dragstart', handleDragStart);
    if (mainTree) {
      mainTree.appendChild(copy as HTMLElement);
    }
    if (pickToys) {
      pickToys.forEach((item) => {
        item.appendChild(copy as HTMLElement);
      });
    }
  }
};

const handleDragOver = (e: DragEvent) => e.preventDefault();

if (mainTree) mainTree.addEventListener('dragover', handleDragOver);
if (mainTree) mainTree.addEventListener('drop', handleDrop);

if (pickToys) {
  pickToys.forEach((item) => {
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('drop', handleDrop);
  });
}

toys.forEach((toy) => {
  toy.addEventListener('dragstart', handleDragStart);
});

// toys.forEach((toy) => {
//   toy.addEventListener('dragstart', dragStart);
//   //toy.addEventListener('dragend', dragEnd);
// });

// function dragStart(e: DragEvent) {
//   if (e !== null) {
//     (e.dataTransfer as DataTransfer).setData('text/plain', (e.target as Element).id);
//   }
//   setTimeout(() => {
//     //(e.target as Element).classList.add('hide');
//   }, 0);
// }

// if (mainTree) {
//   mainTree.addEventListener('dragover', dragOver);
//   mainTree.addEventListener('drop', drop);
// }

// function dragEnter(e: DragEvent) {
//   e.preventDefault();
//   (e.target as Element).classList.add('drag-enter');
// }

// function dragOver(e: DragEvent) {
//   e.preventDefault();
//   //(e.target as Element).classList.add('drag-over');
// }

// function dragLeave(e: DragEvent) {
//   (e.target as Element).classList.add('drag-leave');
// }
// function dragEnd(e: DragEvent) {
//   (e.target as Element).classList.remove('hide');
//   console.log('end');
// }

// function drop(e: DragEvent) {
//   // get the draggable element
//   const id = (e.dataTransfer as DataTransfer).getData('id');
//   const draggable = document.getElementById(id);

//   const copy = draggable?.cloneNode(true);
//   // add it to the drop target
//   if ((e.target as Element) && copy) {
//     (copy as HTMLElement).style.position = 'absolute';
//     // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
//     (copy as HTMLElement).style.left = e.x + 'px';
//     // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
//     (copy as HTMLElement).style.top = e.x + 'px';
//     (e.target as Element).appendChild(copy);
//   }
// display the draggable element
// if (draggable) draggable.classList.remove('hide');
// (e.target as Element).classList.remove('drag-enter');
// (e.target as Element).classList.add('drop');
//}
