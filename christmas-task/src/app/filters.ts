/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import data from '../data';
import { createToysContainer, toysContainer } from './toysPage';
import { COUNT, YEAR, SHAPE, COLOR, SIZE, FAVORITE } from '../constants/toysPage.constants';
const favoriteBtn = document.querySelector<HTMLButtonElement>('.lovely');

const buttonShape = document.querySelectorAll<HTMLButtonElement>('.shape');

if (favoriteBtn)
  favoriteBtn.addEventListener('click', () => {
    favoriteBtn.classList.toggle('active');
  });

// export function findFavorite() {
//   const favoriteToys = data;
//   for (let i = 0; i < data.length; i++) {
//     const favoriteToyAnswer = data[i].favorite;
//     const favoriteToy = data[i];
//     if (favoriteToyAnswer === true) {
//       favoriteToys.push(favoriteToy);
//     }
//   }
//   console.log(favoriteToys);
//   return favoriteToys;
// }
//findFavorite();

function sortNameAZ() {
  const sortAz = data.sort((a, b) => a.name.localeCompare(b.name));
  return sortAz;
}

function sortNameZA() {
  const sortZa = data.sort((a, b) => b.name.localeCompare(a.name));
  return sortZa;
}
function sortMax() {
  const sortFromMax = data.sort((a, b) => b.year.localeCompare(a.year));
  return sortFromMax;
}
function sortMin() {
  const sortFromMin = data.sort((a, b) => a.year.localeCompare(b.year));
  return sortFromMin;
}
function changeOption() {
  const select = document.querySelector<HTMLSelectElement>('.select');
  if (select) {
    select.addEventListener('change', () => {
      const index = select.selectedIndex;
      if (index === 0) {
        sortNameAZ();
        createToysContainer();
      }
      if (index === 1) {
        sortNameZA();
        createToysContainer();
      }
      if (index === 2) {
        sortMin();
        createToysContainer();
      }
      if (index === 3) {
        sortMax();
        createToysContainer();
      }
    });
  }
}

changeOption();

//TO-DO  filters and filterForm  must get the same argument's value
interface filterForm {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  //favorite: string;
  //maxYear: string;
  // minYear: string;
}

//class Data {Array<IDataItem>};

// const filterForm = {
//   num: '9',
//   name: 'Колокольчик старинный',
//   count: '2',
//   year: '1950',
//   shape: 'колокольчик',
//   color: 'белый',
//   size: 'большой',
//   //favorite: 'нет',
// };

// const filters = [
//   //(_data:IData , _filterForm:filterForm) => (_filterForm.favorite ? _data.filter((obj) => obj.favorite?) : data),
//   //(_data: IData, _filterForm: filterForm) => _data.filter((obj) => obj.name.includes(_filterForm.name?)),
//   (_data: IDataItem[], _filterForm: filterForm) => _data.filter((obj) => obj.shape.includes(_filterForm.shape)),
//   (_data: IDataItem[], _filterForm: filterForm) => _data.filter((obj) => obj.year.includes(_filterForm.year)),
//   (_data: IDataItem[], _filterForm: filterForm) => _data.filter((obj) => obj.color.includes(_filterForm.color)),
//   (_data: IDataItem[], _filterForm: filterForm) => _data.filter((obj) => obj.size.includes(_filterForm.size)),
//   //(_data:IDataItem[] , _filterForm:filterForm) => _data.filter((obj) => obj.year >= _filterForm.minYear && obj.year <= _filterForm.maxYear),
// ];

// const filter = () => {
//   let displayedItems = data;
//   for (let i = 0; i < filters.length; i++) {
//     displayedItems = filters[i](displayedItems, filterForm);
//   }
//   return displayedItems;
// };

type filterShape = {
  shape: string;
};
export type IDataItem = {
  num: string;
  name: string;
  count: string;
  year: string;
  shape: string;
  color: string;
  size: string;
  favorite: string;
};
export interface IData {
  items: IDataItem[];
}

let filterShape = { shape: 'шар' };
export function findShape() {
  const filters = [
    (_data: IDataItem[], _filterShape: filterShape) => _data.filter((obj) => obj.shape.includes(_filterShape.shape)),
  ];
  let displayedItems = data;
  for (let i = 0; i < filters.length; i++) {
    displayedItems = filters[i](displayedItems, filterShape);
  }
  return displayedItems;
}

function pickShape() {
  if (buttonShape) {
    buttonShape.forEach((btn) => {
      btn.addEventListener('click', (): void => {
        if (btn.classList.contains('pick')) {
          btn.classList.remove('pick');
          createToysContainer();
        } else if (btn.classList.contains('cone')) {
          btn.classList.add('pick');
          filterShape = { shape: 'шишка' };
          findShape();
          changeContainer();
        } else if (btn.classList.contains('ball')) {
          btn.classList.add('pick');
          filterShape = { shape: 'шар' };
          findShape();
          changeContainer();
        } else if (btn.classList.contains('bell')) {
          btn.classList.add('pick');
          filterShape = { shape: 'колокольчик' };
          findShape();
          changeContainer();
        } else if (btn.classList.contains('toy')) {
          btn.classList.add('pick');
          filterShape = { shape: 'фигурка' };
          findShape();
          changeContainer();
        } else if (btn.classList.contains('snowflake')) {
          btn.classList.add('pick');
          filterShape = { shape: 'снежинка' };
          findShape();
          changeContainer();
        }
      });
    });
  }
}
pickShape();
function changeContainer() {
  if (toysContainer) {
    toysContainer.innerHTML = '';
    const filteredData = findShape();
    filteredData.forEach((item, i) => {
      if (toysContainer)
        toysContainer.innerHTML += `<div class = "toys_item">\n
    <div class="ribbon">
      <span></span>
    </div>
    <wrapper class = "card-wrapper">
      <div class="title">${filteredData[i].name}</div>
      <button class="small minus-button"></button>
    </wrapper>  
    <img src="assets/toys/${filteredData[i].num}.png" alt="${filteredData[i].name}">    
    <div class = "description">
      <div class="count"> ${COUNT} ${filteredData[i].count}</div>
      <div class="year"> ${YEAR} ${filteredData[i].year}</div>
      <div class="shape"> ${SHAPE} ${filteredData[i].shape}</div>
      <div class="color">${COLOR} ${filteredData[i].color}</div>
      <div class="size">${SIZE} ${filteredData[i].size}</div>
      <div class="favorite">${FAVORITE} ${filteredData[i].favorite}</div>
    </div>
  </div>;
  `;
    });
  }
}

// if (buttonShape) {
//   buttonShape.forEach((btn) => {
//     btn.addEventListener('click', (e): void => {
//       if (e.target == e.currentTarget && e.target !== null) {
//         const cards = document.querySelectorAll('.toys_item');
//         const filter = e.target.dataset.filter;
//         if (filter === '*') {
//           cards.forEach((card) => card.classList.remove('hide'));
//         } else {
//           cards.forEach((card) => {
//             card.classList.contains(filter) ? card.classList.remove('hide') : card.classList.add('hide');
//           });
//         }
//       }
//     });
//   });
// }
