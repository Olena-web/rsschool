import { resultRace } from './garage-view';
import { root, garagePage } from './header-menu';

export const currentWinnersPage = 1;
export const winnersOnPage = 10;

const winnerPageButton = document.querySelector<HTMLButtonElement>('.winners-page__button');
const garagePageButton = document.querySelector<HTMLButtonElement>('.garage-page__button');

const winnerPage = document.createElement('div');
winnerPage.innerHTML = `
<h2>Winners (<span class = "winners-number">${resultRace.length / 3}</span>)</h2>
<h4 class = "page-number" >Page # ${currentWinnersPage}</h4>
<div class="pagination-buttons">
	<button id="prev">prev</button>
	<button id="next">next</button>
</div>
`;
winnerPage.classList.add('hide');
root.append(winnerPage);

[];

const table = document.createElement('table');
const tbody = document.createElement('tbody');
const thead = document.createElement('thead');
table.appendChild(thead);
table.appendChild(tbody);
const row = thead.insertRow();
// for (const key of data) {
//   const th = document.createElement('th');
//   const text = document.createTextNode(key);
//   th.appendChild(text);
//   row.appendChild(th);
// }

// function generateTable(data: WINNERS) {
//   for (const element of data) {
//     const row = table.insertRow();
//     for (key in element) {
//       const cell = row.insertCell();
//       const text = document.createTextNode(element[key]);
//       cell.appendChild(text);
//     }
//   }
// }

// generateTableHead(table, data);
// generateTable(table, mountains);

// Adding the entire table to the body tag
winnerPage.appendChild(table);

if (winnerPageButton)
  winnerPageButton.addEventListener('click', (): void => {
    garagePage.classList.add('hide');
    winnerPage.classList.remove('hide');
  });

if (garagePageButton)
  garagePageButton.addEventListener('click', (): void => {
    winnerPage.classList.add('hide');
    garagePage.classList.remove('hide');
  });
