import { HOUR, MINUTES } from './constants.js';

function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / HOUR, MINUTES);
    seconds = parseInt(timer % HOUR, MINUTES);

    minutes = minutes < MINUTES ? '0' + minutes : minutes;
    seconds = seconds < MINUTES ? '0' + seconds : seconds;

    display.textContent = minutes + ':' + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

export default startTimer;
