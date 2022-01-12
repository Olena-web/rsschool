const colorWell = document.querySelector<HTMLInputElement>('#colorWell');
const defaultColor = '#0000ff';

export const carColor = document.querySelector<HTMLElement>('#Capa_1 > g:nth-child(1) > path:nth-child(2)');


function updateFirst(ev: Event) {
  if (carColor) {
    carColor.style.fill = (ev.target as HTMLInputElement).value;
  }
}
function updateAll(ev: Event) {
  if (carColor) carColor.style.fill = (<HTMLInputElement>ev.target).value;
}

function startup(): void {
  if (colorWell) {
    colorWell.value = defaultColor;
    colorWell.addEventListener('input', updateFirst, false);
    colorWell.addEventListener('change', updateAll, false);
    colorWell.select();
  }
}
window.addEventListener('load', startup, false);


