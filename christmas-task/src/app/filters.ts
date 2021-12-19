import data from '../data';
import { createToysContainer } from './toysPage';
const favoriteBtn = document.querySelector<HTMLButtonElement>('.lovely');
if (favoriteBtn)
  favoriteBtn.addEventListener('click', () => {
    favoriteBtn.classList.toggle('active');
    //findFavorite();
    //createToysContainer();
  });

export function findFavorite() {
  const favoriteToys = data;
  for (let i = 0; i < data.length; i++) {
    const favoriteToyAnswer = data[i].favorite;
    const favoriteToy = data[i];
    if (favoriteToyAnswer === 'да') {
      favoriteToys.push(favoriteToy);
    }
  }
  console.log(favoriteToys);
  return favoriteToys;
}
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
// const filterForm = {
//   color: string = data[i].color,
//   shape: 'снежинка',
//   size: 'большой',
//   year: '2020',
// };

// const filters = [
//   (_data, _filterForm) => (_filterForm.favorite ? _data.filter((obj) => obj.favorite) : _data),
//   (_data, _filterForm) => _data.filter((obj) => obj.name.includes(_filterForm.name)),
//   (_data, _filterForm) => _data.filter((obj) => obj.shape.includes(_filterForm.shape)),
//   (_data, _filterForm) => _data.filter((obj) => obj.year.includes(_filterForm.year)),
//   (_data, _filterForm) => _data.filter((obj) => obj.color.includes(_filterForm.color)),
//   (_data, _filterForm) => _data.filter((obj) => obj.size.includes(_filterForm.size)),
//   (_data, _filterForm) => _data.filter((obj:) => obj.year >= _filterForm.minYear && obj.year <= _filterForm.maxYear),
// ];

// const filter = () => {
//   let displayedItems = data;
//   for (let i = 0; i < filters.length; i++) {
//     displayedItems = filters[i](displayedItems, filterForm);
//   }
//   return displayedItems;
// };

// console.log(filter());
