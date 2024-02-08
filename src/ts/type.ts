export interface Tours {
  name: string;
  place: string;
  price: [number, number];
  date: string;
  star: number;
  discount: number;
  country: string;
  region: string;
  img: { url: string; urlWebp: string };
}
