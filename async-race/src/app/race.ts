import { startEngine } from './api';
//import { getDistanceBetweenElements } from './utils';
const id = 0;
const startButton = document.getElementById(`startbutton-${id}`) as HTMLButtonElement;
const stopButton = document.getElementById(`stopbutton-${id}`) as HTMLButtonElement;
const raceCar = document.querySelector<HTMLDivElement>('.race-car');
const car = document.getElementById(`car-${id}`) as HTMLDivElement;
const flag = document.getElementById(`flag-${id}`) as HTMLDivElement;
//const htmlDistance = Math.floor(getDistanceBetweenElements(car, flag)) + 100;
let moving = false;

if (raceCar && startButton) {
  startButton.onclick = (): void => {
    moving = !moving;
    const start = Date.now();
    const timer = setInterval(() => {
      const timePassed = Date.now() - start;
      if (moving) {
        raceCar.style.left = `${timePassed / 2.5}px`;
        if (timePassed > 2000) clearInterval(timer);
      }
      if (!moving) {
        raceCar.style.left = `${0}px`;
        clearInterval(timer);
      }
    }, 20);
  };
}

if (raceCar && stopButton) {
  stopButton.onclick = (): void => {
    raceCar.style.left = `${0}px`;
  };
}

// const startDriving = async (id: number) => {
//   if (startButton) startButton.disabled = true;
//   startButton.classList.toggle('enabling', true);

//   const { velocity, distance } = await startEngine(id);
//   const time = Math.round(distance / velocity);

//   startButton.classList.toggle('enabling', false);
//   if (stopButton) stopButton.disabled = false;
// };
// document.body.addEventListener('click', async (event) => {
//   if (event.target.classList.contains('start-button')) {
//     const id = +event.target.id.split('start-engine-car-')[1];
//     startDriving(id);
//   }
// });
