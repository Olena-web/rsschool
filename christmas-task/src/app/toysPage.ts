import data from '../data.js';
const isSelected = false;
interface selectedItem {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: string;
  isChecked?: boolean;
}
interface selectedItems {
  [index: number]: string;
  selectedItem?: selectedItem[];
}
const toysContainer = document.querySelector<HTMLTemplateElement>('.toys-page__container');

function createToysContainer() {
  if (toysContainer === null) {
    throw Error;
  } else {
    data.forEach((item, i) => {
      toysContainer.innerHTML += `<div class = "toys_item">
    <div class="ribbon">
    <span></span></div>
  <div class="title">${data[i].name}</div>
  <img src="assets/toys/${data[i].num}.png" alt="toy">
  <div class = "description">
  <div class="count"> Количество: ${data[i].count}</div>
  <div class="year"> Год покупки: ${data[i].year}</div>
  <div class="shape"> Форма: ${data[i].shape}</div>
  <div class="color">Цвет: ${data[i].color}</div>
  <div class="size">Размер: ${data[i].size}</div>
  <div class="favorite">Любимая: ${data[i].favorite} </div>
  </div>;
  `;
      const toysItem = document.querySelectorAll<HTMLDivElement>('.toys_item');
      const selectedSpan = document.querySelector<HTMLSpanElement>('.selected span');
      const selectedItems: string[] = [];
      toysItem.forEach((item, i) => {
        const ribbon = item.querySelector<HTMLDivElement>('.ribbon');

        if (!isSelected) {
          item.addEventListener(
            'click',
            () => {
              if (ribbon) ribbon.classList.add('ribbon-active');
              const selectedItem = data[i];
              selectedItems.push(JSON.stringify(selectedItem));
              if (selectedSpan !== null) selectedSpan.innerHTML = selectedItems.length.toString();
              console.log(selectedItems);
            },
            { once: true }
          );
        } else {
          if (ribbon && ribbon.classList.contains('ribbon-active')) {
            item.addEventListener('click', () => {
              ribbon.classList.remove('ribbon-active');
              selectedItems.pop();
              if (selectedSpan !== null) selectedSpan.innerHTML = selectedItems.length.toString();
            });
          }
        }
      });
    });
  }
}

createToysContainer();
