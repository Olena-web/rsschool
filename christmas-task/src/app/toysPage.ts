import data from '../data';
import { MESSAGE } from '../constants/messages.constants';
import { COUNT, YEAR, SHAPE, COLOR, SIZE, FAVORITE } from '../constants/toysPage.constants';
import Control from '../common/control';
const toysContainer = document.querySelector<HTMLTemplateElement>('.toys-page__container');

class Window extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const Window = new Control(this.node, 'div', 'pop-up-window', MESSAGE);
    const closeBtn = new Control(this.node, 'div', 'close', ``);
    Window.node.append(closeBtn.node);
    return Window;
  }
}
function createWindow() {
  if (toysContainer) {
    const window = new Window(toysContainer);
    toysContainer.prepend(window.node);
    const openWindow = document.querySelector<HTMLDivElement>('.pop-up-window');
    if (openWindow !== null) {
      openWindow.classList.add('open');
      const closeBtn = openWindow.querySelector<HTMLButtonElement>('.close');
      if (closeBtn)
        closeBtn.addEventListener('click', () => {
          openWindow?.classList.remove('open');
        });
    }
  }
}

export function createToysContainer(): void {
  if (toysContainer === null) {
    throw Error;
  } else {
    data.forEach((item, i) => {
      toysContainer.innerHTML += `<div class = "toys_item">\n
    <div class="ribbon">
      <span></span>
    </div>
    <div class="title">${data[i].name}</div>
    <img src="assets/toys/${data[i].num}.png" alt="${data[i].name}">
    <div class = "description">
      <div class="count"> ${COUNT} ${data[i].count}</div>
      <div class="year"> ${YEAR} ${data[i].year}</div>
      <div class="shape"> ${SHAPE} ${data[i].shape}</div>
      <div class="color">${COLOR} ${data[i].color}</div>
      <div class="size">${SIZE} ${data[i].size}</div>
      <div class="favorite">${FAVORITE} ${
        data[i].favorite.toString() === 'false' ? (data[i].favorite = 'нет') : 'да'
      }</div>
    </div>
  </div>;
  `;
      const toysItem = document.querySelectorAll<HTMLDivElement>('.toys_item');
      const selectedSpan = document.querySelector<HTMLSpanElement>('.selected span');
      const selectedItems: string[] = [];

      toysItem.forEach((item, i) => {
        const selectedItem = data[i];
        const ribbon = item.querySelector<HTMLDivElement>('.ribbon');
        const selectedToy = item.querySelectorAll<HTMLDivElement>('.selected-toy');
        const countDescr = item.querySelector<HTMLDivElement>('.count');
        let toysCount = parseInt(data[i].count);
        let countSelectedToys = 0;
        const maxCountToys = 5; //for test, after change to 20;

        function addToy() {
          if (toysCount === 0) return;

          if (selectedItems.length === maxCountToys) {
            createWindow();
            countSelectedToys = maxCountToys;
            countSelectedToys = selectedItems.length;
            if (selectedSpan !== null) selectedSpan.innerHTML = countSelectedToys.toString();

            return;
          }

          toysCount--;
          item.classList.add('selected-toy');
          if (ribbon) ribbon.classList.add('ribbon-active');
          selectedItems.push(JSON.stringify(selectedItem));
          countSelectedToys = selectedItems.length;
          console.log(selectedItems);
          if (selectedSpan !== null) selectedSpan.innerHTML = countSelectedToys.toString();
          if (countDescr) countDescr.innerText = `Количество: ${toysCount.toString()}`;
        }

        function removeAllToy(): void {
          if (ribbon !== null) ribbon.classList.remove('ribbon-active');
          if (selectedSpan !== null) selectedSpan.innerHTML = '0';
          if (countDescr !== null) countDescr.innerText = `Количество: ${data[i].count}`;
          selectedItems.length = 0;
        }

        item.addEventListener('click', () => {
          addToy();
        });
        // selectedToy.forEach((toy) => {
        //   toy.addEventListener('click', () => {
        //     removeToy();
        //   });
        // });
        if (data[i].num == selectedItem.num) {
          selectedItems.toString().replace(selectedItem.toString(), '');
        }

        if (selectedSpan !== null) selectedSpan.innerHTML = selectedItems.length.toString();

        const resetBtnToys = document.querySelector<HTMLButtonElement>('.reset-toys');
        if (resetBtnToys === null) throw Error;
        resetBtnToys.addEventListener('click', () => {
          removeAllToy();
        });
      });
    });
  }
}
createToysContainer();
