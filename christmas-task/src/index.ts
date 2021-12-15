import './css/style.min.css';
import './nouislider';
import Control from './common/control';

// export class App extends Control{
//     constructor(parentNode:HTMLElement){
//         super(parentNode);
//         const startPage = new startPage(this.node);
//         return startPage;
// }
// }
// const app = new App(document.body);
import data from './data.js';

interface dataItem {
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

//const sortedData = ;
const toysContainer = document.querySelector<HTMLTemplateElement>('.toys-page__container');

function createToysContainer() {
  if (toysContainer === null) {
    throw Error;
  } else {
    data.forEach((item, i) => {
      toysContainer.innerHTML += `<div class = "toys_item">
    <div class="ribbon ribbon-bottom-right ribbon-active">
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

      toysItem.forEach((item) => {
        item.addEventListener('click', () => {
          const ribbon = item.querySelector<HTMLDivElement>('.ribbon span');
          if (ribbon) ribbon.classList.toggle('active');
        });
      });
    });
  }
}
createToysContainer();
