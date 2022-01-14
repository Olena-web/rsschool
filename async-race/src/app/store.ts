/* eslint-disable max-len */
import { createCar } from './api';
import { carsInGarage } from './garage-view';
import brandsCars from './brands-cars';
import modelsCars from './models-cars';

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

function createNewGarage() {
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
  return newGarage;
}

if (generateBtn) {
  generateBtn.addEventListener('click', () => {
    createNewGarage();
    void carsInGarage();
  });
}
