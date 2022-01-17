/* eslint-disable @typescript-eslint/no-misused-promises */
import { startEngine, stopEngine, driveCar } from './api';
import { getDistanceBetweenElements } from './utils';
const id = 0;
const startButton = document.getElementById(`startbutton-${id}`) as HTMLButtonElement;
const stopButton = document.getElementById(`stopbutton-${id}`) as HTMLButtonElement;
const raceCar = document.querySelector<HTMLDivElement>('.race-car');
export const car = document.getElementById(`car-${id}`) as HTMLDivElement;
export const flag = document.getElementById(`flag-${id}`) as HTMLDivElement;
//const htmlDistance = Math.floor(getDistanceBetweenElements(car, flag)) + 100;
//console.log(htmlDistance);
//getDistanceBetweenElements(car, flag);
//console.log(getDistanceBetweenElements(car, flag));
let moving = false;

// if (raceCar && startButton) {
//   startButton.onclick = (): void => {
//     moving = !moving;
//     const start = Date.now();
//     const timer = setInterval(() => {
//       const timePassed = Date.now() - start;
//       if (moving) {
//         raceCar.style.left = `${timePassed / 2.5}px`;
//         if (timePassed > 2000) clearInterval(timer);
//       }
//       if (!moving) {
//         raceCar.style.left = `${0}px`;
//         clearInterval(timer);
//       }
//     }, 20);
//   };
// }

// if (raceCar && stopButton) {
//   stopButton.onclick = (): void => {
//     raceCar.style.left = `${0}px`;
//   };
// }

const startDriving = async (id: number) => {
  //if (startButton) startButton.disabled = true;
  //startButton.classList.toggle('enabling', true);

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { velocity, distance } = await startEngine(id);
  console.log(velocity, distance);
  const time = Math.round(distance / velocity);
  console.log(time);

  if (raceCar && startButton) {
    moving = !moving;
    const start = Date.now();
    const timer = setInterval(() => {
      //const timePassed = Date.now() - start;
      const timePassed = time - start;
      if (moving) {
        raceCar.style.left = `${time / 2.5}px`;
        if (time > 2000) clearInterval(timer);
      }
      if (!moving) {
        raceCar.style.left = `${0}px`;
        clearInterval(timer);
      }
    }, 20);
  }

  //startButton.classList.toggle('enabling', false);
  if (stopButton) stopButton.disabled = false;
};
document.body.addEventListener('click', async (event: MouseEvent) => {
  if (event.target) {
    if ((event.target as HTMLElement).classList.contains('start-button')) {
      const id = +(event.target as HTMLElement).id.split('start-button-')[1];
      const startCarEngine = async () => {
        await startEngine(id);
        (event.target as HTMLElement).classList.add('started');
      };
      await startCarEngine();
      await driveCar(id);
      if ((event.target as HTMLElement).classList.contains('started')) {
        await startDriving(id);
      }
    }
  }
});
