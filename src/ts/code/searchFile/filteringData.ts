import { app } from '../../modules/firebase';
import { collection, getFirestore, query, where, getDocs } from 'firebase/firestore';
import { Hotel } from './type';
import { ResultSwiper } from '../swiper';
import { DropdownSearch } from './dropSearch';
import { RenderHotels, RenderRegions, RenderInfo } from './renderFiles';

new DropdownSearch('.info__destination-select');
new DropdownSearch('.info__duration-select');
new DropdownSearch('.info__date-select');
new DropdownSearch('.info__guests-select');

export class FilteringData {
  url: URL;
  filter: Hotel[] = [];

  constructor() {
    this.url = new URL(window.location.href);

    this.someFunction(1, 1, '22.03.2024', 1, 1);
  }

  restoreFilterFromUrl(key: string, _keys?: boolean): void {
    const urlParams = new URLSearchParams(window.location.search);

    const value = urlParams.get(key);

    if (value) {
      // this.getHotelsByFilter(key, +value);
    }
  }

  async getHotelsByFilter(isCountry: number, isDuration: number, date: string, adults: number, kids: number) {
    const db = getFirestore(app);
    const hotelsRef = collection(db, 'hotels');
    const querySnapshot = await getDocs(hotelsRef);
    const hotels: Hotel[] = [];

    querySnapshot.forEach((doc) => {
      const hotelData = doc.data() as Hotel;
      const hotelId = doc.id;
      hotelData.id = hotelId;
      hotels.push(hotelData);
    });

    switch (true) {
      case isCountry === 0 && isDuration !== 0:
        return hotels.filter((item) => item.isDuration === isDuration);
      case isCountry === 0 && isDuration === 0 && date !== '':
        return hotels.filter((item) => item.date >= date);
      case isCountry === 0 && isDuration === 0 && date === '' && adults !== 0 && kids > 0:
        return hotels.filter((item) => item.isKids === 2);
      case isCountry === 0 && isDuration === 0 && date === '' && adults >= 0:
        return hotels;
      default:
        return hotels.filter((item) => (item.isCountry === isCountry && item.isDuration === isDuration && item.adults === adults && item.isKids === kids) || item.date === date);
    }
  }

  async someFunction(key: number, value: number, date: string, adults: number, kids: number) {
    this.filter = await this.getHotelsByFilter(key, value, date, adults, kids);

    new RenderHotels().renderHotels(this.filter);

    console.log(this.filter);
  }

  async filterAdvanced(key: string, value: string | number, key2: string, value2: string | number) {
    const hotelsFiltered = await this.getHotelsByFilter(key, value);

    if (hotelsFiltered.length > 0) {
      let advancedFilterArr;

      if (key2 === 'price') {
        advancedFilterArr = hotelsFiltered.filter((item: Hotel) => {
          return Number(item[key2]) >= Number(value) && Number(item[key2]) <= Number(value2);
        });
      } else {
        advancedFilterArr = hotelsFiltered.filter((item: Hotel) => {
          return item[key2] === value2;
        });
      }

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set(key2, value2.toString());
      window.history.pushState({}, '', newUrl.toString());

      if (advancedFilterArr.length > 0) {
        new RenderHotels().renderHotels(advancedFilterArr);
        new RenderRegions().renderRegions(advancedFilterArr);
        new RenderInfo().renderInfo(advancedFilterArr);
        new ResultSwiper();
      }

      return advancedFilterArr;
    } else {
      return [];
    }
  }
}
