/* eslint-disable max-len */
import { createCar, getCars } from './api';
import { carsNumber, carsInGarage } from './garage-view';
import brandsCars from './brands-cars';
import modelsCars from './models-cars';
import { numPages } from './pagination';
import { currentPage, carOnPage } from './pagination';

const generateBtn = document.querySelector<HTMLButtonElement>('.generate');
export const road = document.querySelector<HTMLDivElement>('.road');
const maxCreateNumber = 5;

export function getRandomNum(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

function createRandomCars(): string {
  const carBrand = brandsCars[getRandomNum(1, brandsCars.length - 1)];
  const carModel = modelsCars[getRandomNum(1, modelsCars.length - 1)];
  const carName = `${carBrand} ${carModel}`;
  return carName;
}

function createRandomColor(): string {
  const colorR = getRandomNum(20, 255);
  const colorG = getRandomNum(20, 255);
  const colorB = getRandomNum(20, 255);
  const style = `rgb(${colorR}, ${colorG}, ${colorB})`;
  return style;
}

async function createNewGarage() {
  const newGarage = [];
  for (let i = 0; i < maxCreateNumber; i += 1) {
    const newCarName = createRandomCars();
    const newCarColor = createRandomColor();
    const body = {
      name: newCarName,
      color: newCarColor,
    };
    void createCar(body);
    newGarage.push(body);
  }
  const a = await getCars(currentPage, carOnPage);
  if (carsNumber && a) {
    carsNumber.innerText = (a.count + newGarage.length).toString();
    return newGarage;
  }
}
if (generateBtn) {
  generateBtn.addEventListener('click', () => {
    void createNewGarage();
    void numPages();
    void carsInGarage(currentPage);
    window.location.reload();
  });
}
