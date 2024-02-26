import { FilteringData } from './filteringData';

export class SelectedFilter {
  constructor() {}

  selectedFilter(key: string, value:string| number | boolean): void {
    const urlParams = new URLSearchParams(window.location.search);
    const savedCountry = urlParams.get('isCountry');
    const savedDuration = urlParams.get('isDuration');
    const savedDate = urlParams.get('date');
    const savedKids = urlParams.get('kids');
    const minPrice = urlParams.get('priceMin');
    const maxPrice = urlParams.get('priceMax');

    if (savedCountry !== null) { //todo: refactoring
      new FilteringData().filterAdvanced('isCountry', +savedCountry, key, value);
    }
    if (savedDuration !== null) {
      new FilteringData().filterAdvanced('isDuration', +savedDuration, key, value);
    }
    if (savedDate !== null) {
      new FilteringData().filterAdvanced('date', savedDate, key, value);
    }
    if (savedKids !== null) {
      if (savedKids !== '0') {
        new FilteringData().filterAdvanced('isKids', true, key, value);
      } else {
        new FilteringData().filterAdvanced('isKids', false, key, value);
      }
    }

    if (minPrice !== null && maxPrice !== null) {
      new FilteringData().filterAdvanced('priceMin', +minPrice, 'priceMax', +maxPrice);
    }
    
  }
}
