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

      toysItem.forEach((item, i) => {
        const ribbon = item.querySelector<HTMLDivElement>('.ribbon');
        const selectedToy = item.querySelectorAll<HTMLDivElement>('.selected-toy');
        const countDescr = item.querySelector<HTMLDivElement>('.count');
        let countToys = parseInt(data[i].count);
        let countSelectedToys = 0;
        function addToy() {
          if (countToys == 0) return;
          if (countSelectedToys == 20) return;
          countToys--;
          item.classList.add('selected-toy');
          if (ribbon) ribbon.classList.add('ribbon-active');
          selectedItems.push(JSON.stringify(selectedItem));
          countSelectedToys = selectedItems.length;
          if (selectedSpan !== null) selectedSpan.innerHTML = countSelectedToys.toString();
          if (countDescr) countDescr.innerText = `Количество: ${countToys.toString()}`;
        }

        function removeToy() {
          countSelectedToys--;
          if (selectedSpan !== null) selectedSpan.innerHTML = countSelectedToys.toString();
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
