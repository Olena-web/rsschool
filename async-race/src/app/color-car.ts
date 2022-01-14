const colorNew = document.querySelector<HTMLInputElement>('#color-new-Well');
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
  if (colorNew) {
    colorNew.value = defaultColor;
    colorNew.addEventListener('input', updateFirst, false);
    colorNew.addEventListener('change', updateAll, false);
    colorNew.select();
  }
}
window.addEventListener('load', startup, false);
