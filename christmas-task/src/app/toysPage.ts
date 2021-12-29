import data from '../data';
import { MESSAGE } from '../constants/messages.constants';
import { COUNT, YEAR, SHAPE, COLOR, SIZE, FAVORITE } from '../constants/toysPage.constants';
import Control from '../common/control';
export const openWindow = document.querySelector<HTMLDivElement>('.pop-up-window');
export const toysContainer = document.querySelector<HTMLTemplateElement>('.toys-page__container');
export const resetBtnToys = document.querySelector<HTMLButtonElement>('.reset-toys');

export class Window extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const Window = new Control(this.node, 'div', 'pop-up-window', MESSAGE);
    const closeBtn = new Control(this.node, 'div', 'close', ``);
    Window.node.append(closeBtn.node);
    return Window;
  }
}

export function createWindow(): void {
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
      if (resetBtnToys === null) throw Error;
      resetBtnToys.addEventListener('click', () => {
        openWindow?.classList.remove('open');
      });
    }
  }
}

export function createToysContainer(): void {
  if (toysContainer === null) {
    throw Error;
  } else {
    toysContainer.innerHTML = '';
    data.forEach((item, i) => {
      toysContainer.innerHTML += `<div class = "toys_item ${data[i].shape}">\n
    <div class="ribbon">
      <span></span>
    </div>
    <wrapper class = "card-wrapper">
      <div class="title">${data[i].name}</div>
    </wrapper>  
    <img src="assets/toys/${data[i].num}.png" alt="${data[i].name}">    
    <div class = "description">
      <div class="count"> ${COUNT} ${data[i].count}</div>
      <div class="year"> ${YEAR} ${data[i].year}</div>
      <div class="${SHAPE}"> ${SHAPE} ${data[i].shape}</div>
      <div class="color">${COLOR} ${data[i].color}</div>
      <div class="size">${SIZE} ${data[i].size}</div>
      <div class="favorite">${FAVORITE} ${data[i].favorite}</div>
    </div>
  </div>;
  `;
      const toysItem = document.querySelectorAll<HTMLDivElement>('.toys_item');
      const selectedSpan = document.querySelector<HTMLSpanElement>('.selected span');
      const selectedItems: string[] = [];

      toysItem.forEach((item: HTMLDivElement, i: number): void => {
        const selectedItem = data[i];

        const ribbon = item.querySelector<HTMLDivElement>('.ribbon');
        let countSelectedToys = 0;
        const maxCountToys = 20;

        function addToy(): void {
          if (selectedItems.length === maxCountToys) {
            createWindow();
            countSelectedToys = maxCountToys;
            countSelectedToys = selectedItems.length;
            if (selectedSpan !== null) selectedSpan.innerHTML = countSelectedToys.toString();
            return;
          }

          if (!item.classList.contains('selected-toy') && !ribbon?.classList.contains('ribbon-active')) {
            item.classList.add('selected-toy');
            ribbon?.classList.add('ribbon-active');
            selectedItems.push(JSON.stringify(selectedItem));
            countSelectedToys = selectedItems.length;
          } else {
            item.classList.remove('selected-toy');
            if (ribbon) ribbon.classList.remove('ribbon-active');
            selectedItems.pop();
            countSelectedToys = selectedItems.length;
          }

          function setLocalStorage() {
            localStorage.setItem('selectedToys', JSON.stringify(selectedItems));
          }
          setLocalStorage();
          window.addEventListener('beforeunload', setLocalStorage);

          if (selectedSpan !== null) selectedSpan.innerHTML = countSelectedToys.toString();
        }

        function removeAllToy(): void {
          if (ribbon !== null) ribbon.classList.remove('ribbon-active');
          item.classList.remove('selected-toy');
          if (selectedSpan !== null) selectedSpan.innerHTML = '0';
          selectedItems.length = 0;
          if (openWindow) {
            openWindow.classList.remove('open');
          }
          localStorage.clear();
        }

        item.addEventListener<'click'>('click', (): void => {
          addToy();
        });
        if (resetBtnToys === null) throw Error;
        resetBtnToys.addEventListener<'click'>('click', () => {
          removeAllToy();
        });
      });
    });
  }
}

createToysContainer();
