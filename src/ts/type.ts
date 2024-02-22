export interface Tours {
  name: string;
  place: string;
  price: [number, number];
  date: string;
  star: number;
  discount: number;
  country: string;
  region: string;
  work: [string, string];
  img: { url: string; urlWebp: string };
}

export interface Users {
  date: string;
  email: string;
  idOrder: number;
  payStatus: boolean;
  price: number;
}
