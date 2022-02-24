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
enum Methods {
  PUT = 'PUT',
  DELETE = 'DELETE',
  POST = 'POST',
  PATCH = 'PATCH',
}
enum Statuses {
  DRIVE = 'drive',
  STOPPED = 'stopped',
  STARTED = 'started',
}

type Body = {
  name: string;
  color: string | undefined;
};
export type RACING_CAR = {
  name: string;
  color: string;
  id: number;
  time: number;
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

export type RespDrive = {
  velocity: number;
  distance: number;
};

export type WinnerParams = {
  id: number;
  wins: number;
  time: number;
  name?: string;
};

export type ListWinners = {
  items: WinnerParams[];
  count: number;
};

export type UpdateWinner = {
  wins: number;
  time: number;
};

const getEngineUrl = (id: number, status: Statuses) => {
  return `${engine}?id=${id}&status=${status}`;
};
const getWinnerUrl = (id: number) => {
  return `${winners}/${id}`;
};
const getWinnersList = (page: number, limit: number) => {
  return `${winners}?_page=${page}&_limit=${limit}`;
};
const getCarUrl = (id: number) => {
  return `${garage}/${id}`;
};
const getGaragePage = (page: number, limit: number) => {
  return garage + `?_limit=${limit}&_page=${page}`;
};

export const getCars = async (page: number, limit: number): Promise<GARAGE> => {
  const response: Response = await fetch(getGaragePage(page, limit));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const items: CAR[] = await response.json();
  const count = response.headers.get('X-Total-Count') || 0;
  const garageList = {
    items,
    count: Number(count),
  };
  return garageList;
};

export const getCar = async (id: number) => (await fetch(getCarUrl(id))).json();

export const updateCar = async (id: number, body: Body) =>
  (
    await fetch(getCarUrl(id), {
      method: Methods.PUT,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const deleteCar = async (id: number) => (await fetch(getCarUrl(id), { method: Methods.DELETE })).json();

export const createCar = async (body: Body) =>
  (
    await fetch(garage, {
      method: Methods.POST,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const startEngine = async (id: number) =>
  (await fetch(getEngineUrl(id, Statuses.STARTED), { method: Methods.PATCH })).json();

export const stopEngine = async (id: number) =>
  (await fetch(getEngineUrl(id, Statuses.STOPPED), { method: Methods.PATCH })).json();

export const driveCar = async (id: number): Promise<RespDrive> => {
  const res: Response = await fetch(getEngineUrl(id, Statuses.DRIVE), { method: Methods.PATCH });
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const result: RespDrive = await res.json();
  if (res.status === 200) {
    return result;
  } else if (Errors) {
    console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
  }
  throw Error(res.statusText);
};
export const createWinner = async (body: WinnerParams) =>
  (
    await fetch(winners, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();

export const getWinner = async (id: number) => (await fetch(getWinnerUrl(id))).json();

export const deleteWinner = async (id: number) => (await fetch(getWinnerUrl(id), { method: Methods.DELETE })).json();

export const updateWinners = async (id: number, body: UpdateWinner) =>
  (
    await fetch(getWinnerUrl(id), {
      method: Methods.PUT,
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

export const getWinners = async (page: number, limit = 10, sort: string, order: string): Promise<ListWinners> => {
  const response: Response = await fetch(getWinnersList(page, limit) + sortOrder(sort, order));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const items: WinnerParams[] = await response.json();
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
