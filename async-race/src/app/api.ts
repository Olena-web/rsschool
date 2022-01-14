const base = 'http://localhost:3000';

const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

type BODY = {
  name: string;
  color: string;
};

export interface CAR {
  name: string;
  color: string;
  id: number;
}

export type GARAGE = {
  items: CAR;
  count: number;
  name: string;
  color: string;
  id: number;
}[];

export const getCars = async (): Promise<GARAGE | null> => {
  const response: Response = await fetch(garage);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const items: GARAGE = await response.json();
  return items;
};
void getCars();
export const getCar = async (id: number) => (await fetch(`${garage}/${id}`)).json();

export const updateCar = async (id: number, body: BODY) =>
  (
    await fetch(`${garage}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const deleteCar = async (id: number) => (await fetch(`${garage}/${id}`, { method: 'DELETE' })).json();
// for (let i = 10; i < 67; i += 1) {
//   deleteCar(i);
// }

export const createCar = async (body: BODY) =>
  (
    await fetch(garage, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const startEngine = async (id: number) => (await fetch(`${engine}?id = {id}&status = started`)).json();

export const stopEngine = async (id: number) => (await fetch(`${engine}?id = {id}&status = stopped`)).json();

export const drive = async (id: number) => {
  const res = await fetch(`${engine}?id = {id}&status=drive`).catch();
  return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};
