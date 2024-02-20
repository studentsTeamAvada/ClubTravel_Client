export enum Destination {
  All = 0,
  Egypt = 1,
  AOE = 2,
  Thailand = 3,
  Bulgaria = 4,
  Chornogoria = 5,
  Indonesia = 6,
  Georgia = 7,
  Greece = 8,
  Turkey = 9,
  Cyprus = 10,
  Tunisia = 11,
  Spain = 12,
  Ukraine = 13,
}

export enum Regions {
  All = 0,
  SharmElSheikh = 1,
  Hurghada = 2,
  Dubai = 3,
  AbuDhabi = 4,
  Bangkok = 5,
  KuahHin = 6,
  SunnyBeach = 7,
  GoldenSands = 8,
  Budva = 9,
  StefanBridge = 10,
  Bali = 11,
  Batumi = 13,
  Rodos = 15,
  Marmaris = 17,
  Paphos = 19,
  Suss = 21,
  Tenerife = 23,
  Majorca = 24,
  Bukovyn = 25,
  Uldag = 27,
  Bansko = 28,
  Borovets = 29,
}

export enum Meals {
  all = 0,
  // Без питания
  ao = 1,
  // Завтрак
  bb = 2,
  // Завтрак и ужин
  hb = 3,
  //   Завтрак, обед, ужин
  fb = 4,
  // Всё включено
  ai = 5,
  // Ультра все включено
  uai = 6,
}

export enum Stars {
  all = 0,
  three = 2,
  four = 3,
  five = 4,
  apart = 5,
}

export enum Durations {
  all = 0,
  three = 1,
  seven = 2,
  ten = 3,
  fourteen = 4,
  twentyOne = 5,
}

export enum Departure {
  all = 0,
  kiev = 1,
  lviv = 2,
}

export interface Hotel {
  id: string;
  name: string;
  country: Destination;
  isCountry: number;
  region: Regions;
  isRegion: number;
  meal: Meals;
  isMeals: number;
  star: Stars;
  isStar: number;
  price: number[];
  duration: Durations;
  isDuration: number;
  flight: boolean;
  touristPackage: boolean;
  departure: Departure;
  date: string;
  img: { url: string; urlWebp: string }[];
  description: { main: string; additional: string }[];
  room: string | string[];
  meals: string;
  beach: string;
}


