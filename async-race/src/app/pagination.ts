// if you have any suggestion of questions, pleasse feel free to send me an email to chiholiu10@gmail.com
import { getCars } from './api';
import { road } from './store';
import { createFlag } from './svg';
import { carsInGarage } from './garage-view';

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
// const numberCurrentPage = document.querySelectorAll('.number-current-page');
export let currentPage = 1;
export const carOnPage = 3;

export const numPages = async () => {
  const a = await getCars(currentPage, carOnPage);
  if (a) {
    const carsNumber = a.count;
    const totalPages = Math.ceil(carsNumber / carOnPage);

    const prevPage = async function () {
      if (currentPage > 1) {
        currentPage--;
        await carsInGarage(currentPage);
      }
    };

    const nextPage = async function () {
      if (currentPage < totalPages) {
        currentPage++;
        await carsInGarage(currentPage);
      }
    };

    const checkButtonOpacity = function () {
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
