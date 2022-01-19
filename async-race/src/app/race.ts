/* eslint-disable @typescript-eslint/no-misused-promises */
import { startEngine, stopEngine, driveCar } from './api';
import { animation, cancelAnimation } from './animation';

const id = 0;

export const stopButton = document.getElementById(`stopbutton-${id}`) as HTMLButtonElement;
export const flag = document.getElementById(`flag-${id}`) as HTMLDivElement;

export let time = 0;

document.body.addEventListener('click', async (event: MouseEvent) => {
  if (event.target) {
    if ((event.target as HTMLElement).classList.contains('start-button')) {
      const id = +(event.target as HTMLElement).id.split('start-button-')[1];
      const startDriving = async (id: number) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const { velocity, distance } = await startEngine(id);
        time = Math.round(distance / velocity);
        if (stopButton) stopButton.disabled = false;
        (event.target as HTMLElement).classList.add('started');
        return time;
      };
      time = await startDriving(id);

      if ((event.target as HTMLElement).classList.contains('started')) {
        const distance1 = window.innerWidth * 0.85;
        const car = document.getElementById(`car-${id}`) as HTMLDivElement;
        await driveCar(id);
        animation(car, distance1, time);
      }
    }

    if ((event.target as HTMLElement).classList.contains('stop-button')) {
      const id = +(event.target as HTMLElement).id.split('stop-button-')[1];
      await stopEngine(id);
      if (stopButton) stopButton.disabled = true;
      (event.target as HTMLElement).classList.remove('started');
      (event.target as HTMLElement).classList.add('stopped');
      const car = document.getElementById(`car-${id}`) as HTMLDivElement;
      cancelAnimation();
      if (car) car.style.transform = `translateX(0)`;
    }
  }
});
