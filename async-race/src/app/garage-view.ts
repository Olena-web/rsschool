import { getCars, startEngine, driveCar, stopEngine, deleteCar, deleteWinner } from './api';
import { createFlag, createCarImg } from './svg';
import { road } from './store';
import { carOnPage, currentPage } from './pagination';
import { stopButton } from './race';
import { animation, cancelAnimation } from './animation';
import { createListWinners } from './winner-view';
import { toggleModal } from './modal';

const pageNumber = document.querySelector<HTMLElement>('.page-number');
export const carsNumber = document.querySelector<HTMLSpanElement>('.cars-number');
const raceButton = document.querySelector<HTMLButtonElement>('.race');
const resetButton = document.querySelector<HTMLButtonElement>('.reset');

const message = document.querySelector<HTMLElement>('.message');
export interface RESULT_RACE {
  time: number;
  id: number;
  name: string;
  color: string;
}

export interface CAR_IN_PAGE {
  id: number;
  name: string;
  color: string;
}

export const resultRace: Array<RESULT_RACE> = [];
export const carOnThisPage: Array<CAR_IN_PAGE> = [];
export const carsInGarage = async (page: number) => {
  const a = await getCars(page, carOnPage);
  if (carsNumber && a) {
    carsNumber.innerText = a.count.toString();
  }
  if (road) road.innerHTML = '';

  a.items.forEach((car) => {
    const id = car.id;
    const name = car.name;
    const color = car.color;
    carOnThisPage.push(car);
    if (road)
      road.innerHTML += `
      <div class="roadtrack-${id}">
        <div class="general-buttons">
        <button class="select-button" id='select-car-${id}'>select</button>
        <button class="remove-button" id='remove-car-${id}'>remove</button>
        <span class="car-name-${id}">${name}</span>
      </div>
      <div class="control-panel">
        <button class="start-button" id='start-button-${id}'>A</button>
        <button class="stop-button" id="stop-button-${id}">B</button>
      </div>
      <div class="wrapper-road">
        <div id="car-${id}" class="race-car">
          ${createCarImg(color)}
        </div>
        <div class="flag" id="flag-${id}">
          ${createFlag()}
          </div>
    	  <div class="road-race">
      </div>
    </div>
     `;
    if (pageNumber) {
      pageNumber.innerHTML = '<h4  id = "number-current-page' + `${page}` + '"> Page #' + `${page}` + '</h4>';
    }
    if (raceButton)
      raceButton.addEventListener('click', (): void => {
        const startDriving = async (id: number): Promise<number> => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const { velocity, distance } = await startEngine(id);
          const time = Math.round(distance / velocity);
          if (stopButton) stopButton.disabled = false;
          return time;
        };
        async function driveAll() {
          const car = document.getElementById(`car-${id}`) as HTMLDivElement;
          car.classList.add('started');
          const time = await startDriving(id);
          const racingCar = {
            time: time / 1000,
            id: id,
            name: name,
            color: color,
          };

          if (car.classList.contains('started')) {
            let distance1 = window.innerWidth * 0.8;
            if (window.innerWidth < 930) distance1 = window.innerWidth * 0.7;
            if (window.innerWidth < 700) distance1 = window.innerWidth * 0.65;
            await driveCar(id)
              .then(() => {
                animation(car, distance1, time);
              })
              .catch((err) => {
                if (err === 500) cancelAnimation();
                console.log(`Car ${racingCar.name} has been stopped suddenly. It's engine was broken down.`);
              })

              .then(() => {
                resultRace.push(racingCar);
                resultRace.sort((x, y) => x.time - y.time);
                const winnerName = resultRace[0].name;
                const winnerTime = resultRace[0].time;
                if (message) message.innerHTML = `Winner is ${winnerName} with time ${winnerTime} s`;
              });
            setTimeout(toggleModal, 10000);
            void createListWinners();
          }
        }

        void driveAll();

        if (resetButton)
          resetButton.addEventListener('click', () => {
            resultRace.length = 0;
            const car = document.getElementById(`car-${id}`) as HTMLDivElement;
            if (car.classList.contains('started')) {
              void stopEngine(id);
              if (car) {
                cancelAnimation();
                car.style.transform = `translateX(0)`;
                car.classList.remove('started');
                car.classList.add('stopped');
              }
            }
          });
      });
  });
};
void carsInGarage(currentPage);
// delete car
document.body.addEventListener('click', (event: MouseEvent) => {
  if (event.target) {
    if ((event.target as HTMLElement).classList.contains('remove-button')) {
      const id = +(event.target as HTMLElement).id.split('remove-car-')[1];
      void deleteCar(id);
      void deleteWinner(id);
      void carsInGarage(currentPage);
    }
  }
});
