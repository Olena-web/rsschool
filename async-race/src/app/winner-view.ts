import { resultRace } from './garage-view';
import { root, garagePage } from './header-menu';
import { createWinner, getWinner, updateWinners, getWinners, Sort, Order, getCar } from './api';
import { createCarImg } from './svg';

export const currentWinnersPage = 1;
export const winnersOnPage = 10;

const winnerPageButton = document.querySelector<HTMLButtonElement>('.winners-page__button');
const garagePageButton = document.querySelector<HTMLButtonElement>('.garage-page__button');
const winnersNumber = document.querySelector<HTMLElement>('.winners-number');

const winnerPage = document.createElement('div');
winnerPage.classList.add('hide');
root.append(winnerPage);

export async function createTable() {
  const getListWinners = async () => {
    const a = await getWinners(currentWinnersPage, winnersOnPage, Sort[0], Order[1]);
    winnerPage.innerHTML = `
    <h2 class ="winners-number">Winners ${a.count.toString()}</h2>
    <h4 class ="page-number" >Page # ${currentWinnersPage}</h4>
    <div class="pagination-buttons">
      <button id="prev">prev</button>
      <button id="next">next</button>
    </div>
    `;

    if (winnersNumber) winnersNumber.innerHTML = `Winners ${a.count.toString()}`;

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    thead.innerHTML = `<tr><td> # </td><td>Car</td><td> ID </tdr><td> Time </td><td> Wins </td></tr>`;
    const tbody = document.createElement('tbody');
    table.appendChild(thead);
    table.appendChild(tbody);
    winnerPage.append(table);

    a.items.forEach((winner) => {
      const id = winner.id;
      const time = winner.time;
      const wins = winner.wins;
      thead.insertAdjacentHTML(
        'afterend',
        `<tr><td>${id}</td><td>${createCarImg()}</td><td>${id}</tdr><td>${time} s</td><td>${wins}</td></tr>`
      );
    });
  };
  await getListWinners();
}
//void createTable();

export async function createListWinners() {
  //resultRace.sort((x, y) => x.time - y.time);
  const winnerId = resultRace[resultRace.length - 1].id;
  await getWinner(winnerId);
  if (Response.error()) {
    const body = {
      id: resultRace[0].id,
      time: resultRace[0].time,
      wins: 1,
    };
    await createWinner(body);
  }
  // else {
  //   const bodyUpdated = {
  //     id: winnerId,
  //     time: resultRace[0].time,
  //     wins: 2,
  //   };
  //   await updateWinners(winnerId, bodyUpdated);
  // }
  await getWinners(currentWinnersPage, winnersOnPage, Sort[0], Order[0]);
}

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
