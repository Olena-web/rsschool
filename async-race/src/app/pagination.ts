// if you have any suggestion of questions, pleasse feel free to send me an email to chiholiu10@gmail.com
import { getCars, getWinners, Sort, Order } from './api';
import { carsInGarage } from './garage-view';
import { createTable } from './winner-view';

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
export const prevWinnersButton = document.getElementById('prev-winners');
const nextWinnersButton = document.getElementById('next-winners');

export let currentPage = 1;
export const carOnPage = 7;
export let currentWinnersPage = 1;
export const winnersOnPage = 10;

export const numPages = async (): Promise<void> => {
  const a = await getCars(currentPage, carOnPage);
  if (a) {
    const carsNumber = a.count;
    const totalPages = Math.ceil(carsNumber / carOnPage);

    const prevPage = async function (): Promise<void> {
      if (currentPage > 1) {
        currentPage--;
        await carsInGarage(currentPage);
      }
    };

    const nextPage = async function (): Promise<void> {
      if (currentPage < totalPages) {
        currentPage++;
        await carsInGarage(currentPage);
      }
    };

    const checkButtonOpacity = function (): void {
      if (prevButton) currentPage == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
      if (nextButton)
        currentPage == totalPages ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
    };

    if (prevButton)
      prevButton.addEventListener('click', () => {
        void prevPage(), checkButtonOpacity();
      });
    if (nextButton)
      nextButton.addEventListener('click', () => {
        void nextPage(), checkButtonOpacity();
      });
  }
};
void numPages();

export const numWinnerPages = async (): Promise<void> => {
  const a = await getWinners(currentWinnersPage, winnersOnPage, Sort[0], Order[0]);
  if (a) {
    const winnersNumber = a.count;
    const totalWinnersPages = Math.ceil(winnersNumber / winnersOnPage);

    const prevWinnersPage = async function (): Promise<void> {
      if (currentWinnersPage > 1) {
        currentWinnersPage--;
        await createTable(currentWinnersPage);
      }
    };

    const nextWinnersPage = async function (): Promise<void> {
      if (currentWinnersPage < totalWinnersPages) {
        currentWinnersPage++;
        await createTable(currentWinnersPage);
      }
    };

    const checkButtonOpacity = function (): void {
      if (prevWinnersButton)
        currentWinnersPage == 1
          ? prevWinnersButton.classList.add('opacity')
          : prevWinnersButton.classList.remove('opacity');
      if (nextWinnersButton)
        currentWinnersPage == totalWinnersPages
          ? nextWinnersButton.classList.add('opacity')
          : nextWinnersButton.classList.remove('opacity');
    };

    if (prevWinnersButton)
      prevWinnersButton.addEventListener('click', () => {
        console.log('click');
        void prevWinnersPage(), checkButtonOpacity();
      });
    if (nextWinnersButton)
      nextWinnersButton.addEventListener('click', () => {
        console.log(prevWinnersButton);
        console.log('click');
        void nextWinnersPage(), checkButtonOpacity();
      });
  }
};
void numWinnerPages();
