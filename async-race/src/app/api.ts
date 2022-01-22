const base = 'http://localhost:3000';

const garage = `${base}/garage`;
const engine = `${base}/engine`;
const winners = `${base}/winners`;

enum Errors {
  'res.status === 400' = 0,
  'res.status === 404' = 1,
  'res.status === 429' = 2,
  'res.status === 500' = 3,
}

export enum Sort {
  'id' = 0,
  'wins' = 1,
  'time' = 2,
}

export enum Order {
  'ASC' = 0,
  'DESC' = 1,
}

type BODY = {
  name: string;
  color: string | undefined;
};

export type CAR = {
  classList: string;
  name: string;
  color: string;
  id: number;
};

export type GARAGE = {
  items: CAR[];
  count: number;
};

export type respDrive = {
  velocity: number;
  distance: number;
};

export type winnerParams = {
  id: number;
  wins: number;
  time: number;
  name?: string;
};

export type listWinners = {
  items: winnerParams[];
  count: number;
};

type updateWinner = {
  wins: number;
  time: number;
};

export const getCars = async (page: number, limit: number): Promise<GARAGE> => {
  const response: Response = await fetch(garage + `?_limit=${limit}&_page=${page}`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const items: CAR[] = await response.json();
  const count = response.headers.get('X-Total-Count');
  if (count)
    return {
      items,
      count: Number(count),
    };
  else {
    return {
      items,
      count: 0,
    };
  }
};

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

export const startEngine = async (id: number) =>
  (await fetch(`${engine}?id=${id}&status=started`, { method: 'PATCH' })).json();

export const stopEngine = async (id: number) =>
  (await fetch(`${engine}?id=${id}&status=stopped`, { method: 'PATCH' })).json();

export const driveCar = async (id: number): Promise<respDrive> => {
  const res: Response = await fetch(`${engine}?id=${id}&status=drive`, { method: 'PATCH' });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const result: respDrive = await res.json();
  if (res.status === 200) {
    return result;
  } else if (Errors) {
    console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
  }
  throw Error(res.statusText);
};
export const createWinner = async (body: winnerParams) =>
  (
    await fetch(winners, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const getWinner = async (id: number) => (await fetch(`${winners}/${id}`)).json();

export const deleteWinner = async (id: number) => (await fetch(`${winners}/${id}`, { method: 'DELETE' })).json();

export const updateWinners = async (id: number, body: updateWinner) =>
  (
    await fetch(`${winners}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

const sortOrder = (sort: string, order: string) => {
  if (sort && order) return `&_sort=${sort}&_order=${order}`;
  return '';
};

export const getWinners = async (page: number, limit = 10, sort: string, order: string): Promise<listWinners> => {
  const response: Response = await fetch(`${winners}?_page=${page}&_limit=${limit}${sortOrder(sort, order)}`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const items: winnerParams[] = await response.json();
  const count = response.headers.get('X-Total-Count');
  if (count)
    return {
      items,
      count: Number(count),
    };
  else {
    return {
      items,
      count: 0,
    };
  }
};
