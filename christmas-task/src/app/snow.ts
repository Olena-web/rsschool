const snowContainer = document.querySelector<HTMLDivElement>('.countdown-container');
export const snowBtn = document.querySelector<HTMLButtonElement>('.snow-flake');
let isSnow = false;

function createSnowFlake() {
  const snow_flake = document.createElement('i');
  snow_flake.classList.add('far');
  snow_flake.classList.add('fa-snowflake');
  snow_flake.style.left = `${getRandomNum(1, 770)}px`;
  snow_flake.style.animationDuration = `${getRandomNum(2, 4)}s`;
  snow_flake.style.opacity = `${getRandomNum(0, 10) / 10}`;
  snow_flake.style.fontSize = `${getRandomNum(10, 30)}px`;
  if (snowContainer && !isSnow) snowContainer.appendChild(snow_flake);

  setTimeout(() => {
    snow_flake.remove();
  }, 5000);
}

if (snowBtn)
  snowBtn.addEventListener('click', () => {
    if (!isSnow) {
      snowBtn.classList.remove('pick');
      setInterval(createSnowFlake, 100);
      isSnow = true;
    } else {
      snowBtn.classList.add('pick');
      isSnow = false;
    }
  });

export function getRandomNum(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}
