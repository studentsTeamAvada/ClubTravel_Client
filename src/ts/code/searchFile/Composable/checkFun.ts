import { FilteringData } from '../filteringData';
import { RemoveUrl } from './removeUrl';


export class ChackFun {
  urlParam: URLSearchParams;
  allParams: string[];
  saveCountry: string;
  saveDuration: string;
  date: string;
  saveKids: string;
  kids: string;
  savaAdults: string;

  constructor() {
    this.urlParam = new URLSearchParams(window.location.search);
    this.allParams = Array.from(this.urlParam.keys());
    this.saveCountry = this.urlParam.get('isCountry') ?? '';
    this.saveDuration = this.urlParam.get('isDuration') ?? '';
    this.date = this.urlParam.get('date') ?? '';
    this.saveKids = this.urlParam.get('isKids') ?? '';
    this.kids = this.urlParam.get('kids') ?? '';
    this.savaAdults = this.urlParam.get('adults') ?? '';
    console.log(this.savaAdults);
  }

  filterHotelsForKids(): void {
    if (+this.savaAdults > 0 && +this.kids > 0) {
      new FilteringData().getHotelsByFilter('isKids', 2);

    } else if (+this.savaAdults > 0 || +this.kids < 0) {
      new RemoveUrl().removeParametersFromUrl(['isKids', 'kids']);
      new FilteringData().getHotelsByFilter('isCoutry', 0);
    }
  }

  checkIsFlag(): void {
    this.allParams.forEach((param) => {
      switch (param) {
        case 'isCountry':
          new FilteringData().getHotelsByFilter('isCountry', +this.saveCountry);
          break;
        case 'isDuration':
          new FilteringData().getHotelsByFilter('isDuration', +this.saveDuration);
          break;
        case 'date':
          new FilteringData().getHotelsByFilter('date', this.date);
          break;
        case 'kids':
        case 'adults':
          this.filterHotelsForKids();
          break;
        default:
          break;
      }
    });
  }
}
