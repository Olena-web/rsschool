const lightBtn = document.querySelector('#light-label');
const lightRope = document.querySelectorAll<HTMLElement>('.lightrope');
const multiColor = document.querySelector<HTMLButtonElement>('.multicolor-btn');
const redBtn = document.querySelector<HTMLButtonElement>('.red-btn');
const blueBtn = document.querySelector<HTMLButtonElement>('.blue-btn');
const greenBtn = document.querySelector<HTMLButtonElement>('.green-btn');
const yellowBtn = document.querySelector<HTMLButtonElement>('.yellow-btn');
const minimumLigths = 15;
const maximumLights = 45;
let isActive = false;

function createLights(): void {
  lightRope[0].style.marginTop = '533px';
  lightRope[1].style.marginTop = '670px';
  lightRope[2].style.marginTop = '850px';

  if (lightBtn)
    lightBtn.addEventListener('click', () => {
      createMultiColor();
    });

  if (multiColor)
    multiColor.addEventListener('click', () => {
      createMultiColor();
    });

  if (redBtn)
    redBtn.addEventListener('click', () => {
      createRedColor();
    });
  if (blueBtn)
    blueBtn.addEventListener('click', () => {
      createBlueColor();
    });
  if (greenBtn)
    greenBtn.addEventListener('click', () => {
      createGreenColor();
    });
  if (yellowBtn)
    yellowBtn.addEventListener('click', () => {
      createYellowColor();
    });
}

createLights();

function createMultiColor() {
  if (!isActive) {
    for (let amountLights = minimumLigths; amountLights < maximumLights; amountLights++) {
      lightRope[0].innerHTML += '<li class = "li"></li>';
      lightRope[1].innerHTML += '<li class = "li"></li>';
      lightRope[2].innerHTML += '<li class = "li"></li>';
    }
    lightRope.forEach((rope) => {
      rope.classList.remove('hidden');
      isActive = true;
    });
  } else {
    lightRope.forEach((rope) => {
      rope.classList.add('hidden');
      lightRope[0].innerHTML = '';
      lightRope[1].innerHTML = '';
      lightRope[2].innerHTML = '';
      isActive = false;
    });
  }
}

function createRedColor() {
  if (!isActive) {
    for (let amountLights = minimumLigths; amountLights < maximumLights; amountLights++) {
      lightRope[0].innerHTML += '<li class = "red-light"></li>';
      lightRope[1].innerHTML += '<li class = "red-light"></li>';
      lightRope[2].innerHTML += '<li class = "red-light"></li>';
    }
    lightRope.forEach((rope) => {
      rope.classList.remove('hidden');
      isActive = true;
    });
  } else {
    lightRope.forEach((rope) => {
      rope.classList.add('hidden');
      lightRope[0].innerHTML = '';
      lightRope[1].innerHTML = '';
      lightRope[2].innerHTML = '';
      isActive = false;
    });
  }
}
function createBlueColor() {
  if (!isActive) {
    for (let amountLights = minimumLigths; amountLights < maximumLights; amountLights++) {
      lightRope[0].innerHTML += '<li class = "blue-light"></li>';
      lightRope[1].innerHTML += '<li class = "blue-light"></li>';
      lightRope[2].innerHTML += '<li class = "blue-light"></li>';
    }
    lightRope.forEach((rope) => {
      rope.classList.remove('hidden');
      isActive = true;
    });
  } else {
    lightRope.forEach((rope) => {
      rope.classList.add('hidden');
      lightRope[0].innerHTML = '';
      lightRope[1].innerHTML = '';
      lightRope[2].innerHTML = '';
      isActive = false;
    });
  }
}
function createGreenColor() {
  if (!isActive) {
    for (let amountLights = minimumLigths; amountLights < maximumLights; amountLights++) {
      lightRope[0].innerHTML += '<li class = "green-light"></li>';
      lightRope[1].innerHTML += '<li class = "green-light"></li>';
      lightRope[2].innerHTML += '<li class = "green-light"></li>';
    }
    lightRope.forEach((rope) => {
      rope.classList.remove('hidden');
      isActive = true;
    });
  } else {
    lightRope.forEach((rope) => {
      rope.classList.add('hidden');
      lightRope[0].innerHTML = '';
      lightRope[1].innerHTML = '';
      lightRope[2].innerHTML = '';
      isActive = false;
    });
  }
}
function createYellowColor() {
  if (!isActive) {
    for (let amountLights = minimumLigths; amountLights < maximumLights; amountLights++) {
      lightRope[0].innerHTML += '<li class = "yellow-light"></li>';
      lightRope[1].innerHTML += '<li class = "yellow-light"></li>';
      lightRope[2].innerHTML += '<li class = "yellow-light"></li>';
    }
    lightRope.forEach((rope) => {
      rope.classList.remove('hidden');
      isActive = true;
    });
  } else {
    lightRope.forEach((rope) => {
      rope.classList.add('hidden');
      lightRope[0].innerHTML = '';
      lightRope[1].innerHTML = '';
      lightRope[2].innerHTML = '';
      isActive = false;
    });
  }
}
