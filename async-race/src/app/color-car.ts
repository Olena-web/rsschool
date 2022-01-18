import { updateCar } from './api';
export const color = document.getElementById('#color-Well') as HTMLInputElement;
const colorNew = document.querySelector<HTMLInputElement>('#color-new-Well');
const carNewName = document.getElementById('car-new-name') as HTMLInputElement;
const updateButton = document.querySelector<HTMLButtonElement>('.update-cars__button');
const carName = document.getElementById('car-name-${id}') as HTMLSpanElement;
export const defaultColor = '#0000ff';

export const carColor = document.querySelector<HTMLElement>('#Capa_1 > g:nth-child(1) > path:nth-child(2)');

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
      if (updateButton)
        updateButton.addEventListener('click', () => {
          const body = {
            color: 'green',
            name: carNewName.value,
          };
          if (carName) carName.innerText = carNewName.value;
          void updateCar(id, body);
          window.location.reload();
        });
    }
  }
});
