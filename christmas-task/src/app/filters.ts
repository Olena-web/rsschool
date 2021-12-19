import data from '../data';

function sortNameAZ() {
  const sortAz = data.sort((a, b) => a.name.localeCompare(b.name));
  return sortAz;
}
console.log(sortNameAZ());

function sortNameZA() {
  const sortZa = data.sort((a, b) => b.name.localeCompare(a.name));
  return sortZa;
}
console.log(sortNameZA());
// const sortZa = () => data.sort((a, b) => b.name.localeCompare(a.name));
// console.log(sortZa());

// export default interface IDataItem {
//   num: string;
//   name: string;
//   count: string;
//   year: string;
//   shape: string;
//   color: string;
//   size: string;
//   favorite: string;
//   isChecked?: boolean;
// }
// interface data {
//   data: IDataItem[];
// }
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
