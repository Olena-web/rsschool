import { resultRace } from './garage-view';
import { root, garagePage } from './header-menu';
import { createWinner, getWinner, updateWinners, getWinners, Sort, Order, getCar } from './api';
import { createCarImg } from './svg';
import { currentWinnersPage, winnersOnPage } from './pagination';

const winnerPageButton = document.querySelector<HTMLButtonElement>('.winners-page__button');
const garagePageButton = document.querySelector<HTMLButtonElement>('.garage-page__button');
const winnersNumber = document.querySelector<HTMLElement>('.winners-number');

const winnerPage = document.createElement('div');
winnerPage.classList.add('hide');
root.append(winnerPage);

export async function createTable(page: number) {
  const getListWinners = async () => {
    const a = await getWinners(currentWinnersPage, winnersOnPage, Sort[0], Order[0]);
    winnerPage.innerHTML =
      `
    <div class="titles">
      <h2 class ="winners-number">Winners (${a.count.toString()})</h2>
      <h4 class ="page-number" >Page #` +
      `${page}` +
      `</h4>
    </div>
    <div class="pagination-buttons pagination-winners">
      <button id="prev prev-winners">prev</button>
      <button id="next next-winners">next</button>
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

export async function createListWinners() {
  resultRace.sort((x, y) => x.time - y.time);
  const winnerId = resultRace[0].id;
  const winnerName = resultRace[0].name;
  const winnerTime = resultRace[0].time.toString();
  console.log(winnerName, winnerTime);
  await getWinner(winnerId)
    .then(async () => {
      if (Response.error()) {
        console.log('Code: 404 NOT FOUND, CAR IS NOT IN THE WINNERS TABLE');
        const body = {
          id: resultRace[0].id,
          time: resultRace[0].time,
          wins: 1,
        };
        await createWinner(body);
      }
    })
    .then(async () => {
      const bodyUpdated = {
        id: winnerId,
        time: resultRace[0].time,
        wins: 2,
      };
      await updateWinners(winnerId, bodyUpdated);
    })
    .catch((err) => {
      throw err;
    });

  await getWinners(currentWinnersPage, winnersOnPage, Sort[0], Order[0]);
}

if (winnerPageButton)
  winnerPageButton.addEventListener('click', (): void => {
    garagePage.classList.add('hide');
    winnerPage.classList.remove('hide');
    void createTable(currentWinnersPage);
    winnerPage.setAttribute('style', 'display: flex; flex-direction: column; align-items: center;');
  });

if (garagePageButton)
  garagePageButton.addEventListener('click', (): void => {
    winnerPage.setAttribute('style', 'display: none');
    garagePage.classList.remove('hide');
  });
