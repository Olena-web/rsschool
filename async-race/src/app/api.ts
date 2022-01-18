const base = 'http://localhost:3000';

const garage = `${base}/garage`;
const engine = `${base}/engine`;

type BODY = {
  name: string;
  color: string | undefined;
};

export interface CAR {
  name: string;
  color: string;
  id: number;
}

export type respDrive = {
  velocity: number;
  distance: number;
};

export type GARAGE = {
  items: CAR[];
  count: number;
  // name: string;
  // color: string;
  // id: number;
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
//  for (let i = 1; i < 526; i += 1) {
//    void deleteCar(i);
//  }

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
  (await fetch(`${engine}?id=${id}&status=stopped`, { method: 'DELETE' })).json();

export const driveCar = async (id: number): Promise<respDrive> => {
  const res: Response = await fetch(`${engine}?id=${id}&status=drive`, { method: 'PATCH' });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const resp: respDrive = await res.json();
  if (res.status == 200) {
    return resp;
  }
  return resp;
  // return res.status !== 200 ? { success: false } : { ...(await res.json()) };
};
