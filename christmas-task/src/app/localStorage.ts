import { snowBtn } from './snow';

function saveSnow(): void {
  if (snowBtn !== null) {
    snowBtn.addEventListener('click', () => {
      if (snowBtn !== null && snowBtn.classList !== null) {
        if (snowBtn.classList.contains('pick')) localStorage.setitem('snow', true);
      }
    });
  }
}

saveSnow();
