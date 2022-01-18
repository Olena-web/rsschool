import { updateCar } from './api';
const colorNew = document.querySelector<HTMLInputElement>('#color-new-Well');
const defaultColor = '#0000ff';

export const carColor = document.querySelector<HTMLElement>('#car-17 > #Capa_1 > g:nth-child(1) > path:nth-child(2)');

function updateFirst(ev: Event) {
  if (carColor) {
    carColor.style.fill = (ev.target as HTMLInputElement).value;
  }
}
function updateAll(ev: Event) {
  if (carColor) carColor.style.fill = (<HTMLInputElement>ev.target).value;
}

function startup() {
  if (colorNew) {
    colorNew.value = defaultColor;
    colorNew.addEventListener('input', updateFirst, false);
    colorNew.addEventListener('change', updateAll, false);
    colorNew.select();
  }
  if (colorNew) return colorNew.value;
}
window.addEventListener('load', startup, false);

document.body.addEventListener('click', (event: MouseEvent) => {
  if (event.target) {
    if ((event.target as HTMLElement).classList.contains('select-button')) {
      const id = +(event.target as HTMLElement).id.split('select-car-')[1];
      const body = {
        color: 'green',
        name: 'car',
      };
      console.log(carColor);
      console.log(startup());
      void updateCar(id, body);
    }
  }
});
