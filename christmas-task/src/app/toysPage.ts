import data from '../data.js';

const toysContainer = document.querySelector<HTMLTemplateElement>('.toys-page__container');

function createToysContainer() {
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
      let count = parseInt(data[i].count);
      toysItem.forEach((item, i) => {
        const ribbon = item.querySelector<HTMLDivElement>('.ribbon');
        const selectedToy = document.querySelectorAll<HTMLDivElement>('.selected-toy');
        function addToy() {
          item.classList.toggle('selected-toy');
          if (ribbon) ribbon.classList.toggle('ribbon-active');
          selectedItems.push(JSON.stringify(selectedItem));
          count = selectedItems.length;
          if (selectedSpan !== null) selectedSpan.innerHTML = count.toString();
        }

        function removeToy() {
          count = selectedItems.length;
          if (selectedSpan !== null) selectedSpan.innerHTML = count.toString();
        }

        item.addEventListener('click', () => {
          addToy();
        });
        selectedToy.forEach((toy) => {
          toy.addEventListener('click', () => {
            removeToy();
          });
        });
        if (data[i].num == selectedItem.num) {
          selectedItems.toString().replace(selectedItem.toString(), '');
        }

        if (selectedSpan !== null) selectedSpan.innerHTML = selectedItems.length.toString();
      });
    });
  }
}
createToysContainer();
