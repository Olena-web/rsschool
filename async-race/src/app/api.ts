import {carColor} from './color-move-car';
const carsNumber = document.querySelector<HTMLSpanElement>('.cars-number');
const base = 'http://localhost:3000';

const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

export const getCars = async () => {
  const response = await fetch(garage);
  return {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };
};
getCars();

 export const carsInGarage = async()=>{
   const a = await getCars();
   if (carsNumber && a.items) return carsNumber.innerText = (a.items.length-1).toString();
     
 }
carsInGarage();
export const getCar = async (id: number) => (await fetch(`${garage}/${id}`)).json();

const carName = document.querySelector<HTMLSpanElement>('.car-name');

export const newCar = async () => {
  const a = await getCar(4);
  if (carName) carName.innerText = a.name;
  if (carColor) carColor.style.fill = a.color;
  
};
newCar();


export const deleteCar = async (id: number) => (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();
//deleteCar(11);

// export default {
//   getCar, getCars, newCar, deleteCar,
// };
