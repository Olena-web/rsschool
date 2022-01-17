/* eslint-disable @typescript-eslint/no-misused-promises */
import { startEngine, stopEngine, driveCar } from './api';
import { animation } from './utils';
const id = 0;
const startButton = document.getElementById(`startbutton-${id}`) as HTMLButtonElement;
const stopButton = document.getElementById(`stopbutton-${id}`) as HTMLButtonElement;

export const flag = document.getElementById(`flag-${id}`) as HTMLDivElement;

// const startDriving = async (id: number) => {
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
//   const { velocity, distance } = await startEngine(id);
//   const time = Math.round(distance / velocity);
//   if (stopButton) stopButton.disabled = false;
//   return time;
// };
document.body.addEventListener('click', async (event: MouseEvent) => {
  if (event.target) {
    if ((event.target as HTMLElement).classList.contains('start-button')) {
      const id = +(event.target as HTMLElement).id.split('start-button-')[1];
      const startDriving = async (id: number) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { velocity, distance } = await startEngine(id);
        const time = Math.round(distance / velocity);
        if (stopButton) stopButton.disabled = false;
        (event.target as HTMLElement).classList.add('started');
        return time;
      };
      const time = await startDriving(id);
      if ((event.target as HTMLElement).classList.contains('started')) {
        const distance1 = window.innerWidth * 0.85;
        const car = document.getElementById(`car-${id}`) as HTMLDivElement;
        await driveCar(id);
        animation(car, distance1, time);
      }
    }
  }
});
