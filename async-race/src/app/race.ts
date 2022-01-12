const startButton = document.querySelector<HTMLButtonElement>('.start-button');
const stopButton = document.querySelector<HTMLButtonElement>('.stop-button');
const raceCar = document.querySelector<HTMLDivElement>('.race-car');
let moving = false;

if (raceCar && startButton) {
    startButton.onclick = ():void => {
    moving = !moving;
    const start = Date.now();
    const timer = setInterval(() => {
      const timePassed = Date.now() - start;
      if (moving) {
        raceCar.style.left = `${timePassed / 2.5}px`;
        if (timePassed > 2000) clearInterval(timer);
      }
      if (!moving) {
        raceCar.style.left = `${0}px`;
        clearInterval(timer);
      }
    }, 20);
  };
}

if (raceCar && stopButton) {
  stopButton.onclick = ():void => {
    raceCar.style.left = `${0}px`; 
  }
}