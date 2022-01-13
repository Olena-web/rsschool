import { getCars, getCar} from './api';
import {carColor} from './color-car';

const carsNumber = document.querySelector<HTMLSpanElement>('.cars-number');
const carName = document.querySelector<HTMLSpanElement>('.car-name');

export const carsInGarage = async()=>{
    const a = await getCars();
    if (carsNumber && a.items) return carsNumber.innerText = (a.items.length-1).toString();
      
  }
 carsInGarage();

export const newCar = async () => {
  const a = await getCar(4);
  if (carName) carName.innerText = a.name;
  if (carColor) carColor.style.fill = a.color;
  
};
newCar();