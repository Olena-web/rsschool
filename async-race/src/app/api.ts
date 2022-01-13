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

 
export const getCar = async (id: number) => (await fetch(`${garage}/${id}`)).json();

export const deleteCar = async (id: number) => (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();
//deleteCar(11);

