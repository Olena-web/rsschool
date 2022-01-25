import { updateCar, getCars } from './api';
import { carOnPage, currentPage } from './pagination';

export const color = document.querySelector<HTMLInputElement>('#colorWell');
const colorNew = document.querySelector<HTMLInputElement>('#color-new-Well');
const carNewName = document.getElementById('car-new-name') as HTMLInputElement;
const updateButton = document.querySelector<HTMLButtonElement>('.update-cars__button');
const carName = document.getElementById('car-name-${id}') as HTMLSpanElement;
export const defaultColor = '#0000ff';

export const carColor = document.getElementById('#svg-${id} > g:nth-child(1) > path:nth-child(2)') as HTMLElement;

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
      if (updateButton && colorNew)
        updateButton.addEventListener('click', () => {
          const body = {
            color: colorNew.value,
            name: carNewName.value,
          };
          if (carName) carName.innerText = carNewName.value;
          if (colorNew)
            colorNew.addEventListener('input', (e) => {
              if (carColor) carColor.style.fill = (<HTMLInputElement>e.target).value;
            });
          void updateCar(id, body);
          window.location.reload();
        });
    }
  }
});

function createColor() {
  if (color) {
    color.value = defaultColor;
    color.addEventListener('input', updateFirst, false);
    color.addEventListener('change', updateAll, false);
    color.select();
  }
  if (color) return color.value;
}
window.addEventListener('load', createColor, false);

// async function changeColorDynamically() {
//   if (colorNew) {
//     const a = await getCars(currentPage, carOnPage);
//     colorNew.addEventListener('input', function (e: Event) {
//       a.items.forEach((car) => {
//         const color = car.color;
//         (<HTMLInputElement>e.target).value = color;
//       });
//     });
//   }
// }
// void changeColorDynamically();
