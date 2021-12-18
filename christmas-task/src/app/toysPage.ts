import data from '../data.js';
import Control from '../common/control';
const toysContainer = document.querySelector<HTMLTemplateElement>('.toys-page__container');

class Window extends Control {
  constructor(parentNode: HTMLElement) {
    super(parentNode);
    const Window = new Control(this.node, 'div', 'pop-up-window', `Извините, все слоты заполнены`);
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
      toysContainer.innerHTML += `<div class = "toys_item">
    <div class="ribbon">
      <span></span>
    </div>
    <div class="title">${data[i].name}</div>
    <img src="assets/toys/${data[i].num}.png" alt="toy">
    <div class = "description">
      <div class="count"> Количество: ${data[i].count}</div>
      <div class="year"> Год покупки: ${data[i].year}</div>
      <div class="shape"> Форма: ${data[i].shape}</div>
      <div class="color">Цвет: ${data[i].color}</div>
      <div class="size">Размер: ${data[i].size}</div>
      <div class="favorite">Любимая: ${
        data[i].favorite.toString() === 'false' ? (data[i].favorite = 'нет') : 'да'
      }</div>
    </div>
  </div>;
  `;
      const toysItem = document.querySelectorAll<HTMLDivElement>('.toys_item');
      const selectedSpan = document.querySelector<HTMLSpanElement>('.selected span');
      const selectedItems: string[] = [];
      const selectedItem = data[i];

      toysItem.forEach((item, i) => {
        const ribbon = item.querySelector<HTMLDivElement>('.ribbon');
        const selectedToy = item.querySelectorAll<HTMLDivElement>('.selected-toy');
        const countDescr = item.querySelector<HTMLDivElement>('.count');
        let countToys = parseInt(data[i].count);
        let countSelectedToys = 0;

        function addToy() {
          if (countToys == 0) return;

          if (selectedItems.length == 5) {
            createWindow();
            countSelectedToys = 5;
            countSelectedToys = selectedItems.length;
            if (selectedSpan !== null) selectedSpan.innerHTML = countSelectedToys.toString();
            return;
          }

          countToys--;
          item.classList.add('selected-toy');
          if (ribbon) ribbon.classList.add('ribbon-active');
          selectedItems.push(JSON.stringify(selectedItem));
          countSelectedToys = selectedItems.length;
          if (selectedSpan !== null) selectedSpan.innerHTML = countSelectedToys.toString();
          if (countDescr) countDescr.innerText = `Количество: ${countToys.toString()}`;
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

        const resetBtn = document.querySelector<HTMLButtonElement>('.reset');
        if (resetBtn === null) throw Error;
        resetBtn.addEventListener('click', () => {
          removeAllToy();
        });
      });
    });
  }
}
createToysContainer();
