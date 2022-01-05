const lightBtn = document.querySelector('#light-label');
const lightRope = document.querySelectorAll<HTMLElement>('.lightrope');
const multiColor = document.querySelector<HTMLButtonElement>('.multicolor-btn');
const redBtn = document.querySelector<HTMLButtonElement>('.red-btn');
const li = document.querySelectorAll<HTMLElement>('.li');

function createLights(): void {
  const minimumLigths = 15;
  const maximumLights = 45;
  if (lightRope !== null) {
    for (let amountLights = minimumLigths; amountLights < maximumLights; amountLights++) {
      lightRope[0].innerHTML += '<li class = "li"></li>';
      lightRope[1].innerHTML += '<li class = "li"></li>';
      lightRope[2].innerHTML += '<li class = "li"></li>';
    }

    lightRope[0].style.marginTop = '533px';

    lightRope[1].style.marginTop = '670px';

    lightRope[2].style.marginTop = '850px';
  }
}
createLights();

if (lightBtn)
  lightBtn.addEventListener('click', () => {
    lightRope.forEach((li) => {
      if (li.classList.contains('hidden')) {
        li.classList.remove('hidden');
      } else {
        li.classList.add('hidden');
      }
    });
  });
if (multiColor)
  multiColor.addEventListener('click', () => {
    lightRope.forEach((rope) => {
      if (rope.classList.contains('hidden')) {
        rope.classList.remove('hidden');
      } else {
        rope.classList.add('hidden');
      }
    });
  });
if (redBtn)
  redBtn.addEventListener('click', () => {
    li.forEach((rope) => {
      if (!rope.classList.contains('red-light')) {
        rope.classList.add('red');
      } else {
        rope.classList.remove('red');
      }
    });
  });
