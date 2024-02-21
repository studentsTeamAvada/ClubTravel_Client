import $ from 'jquery';
import { Filtering } from './filteringCountry';
import { Destination } from './type';

export class Country extends Filtering {
  destinationCurrent: JQuery<HTMLElement>;

  constructor() {
    super();
    this.destinationCurrent = $('.info__destination-current');
    this.selectCountry();

    this.bindEvents('load', 'isCountry', this.destinationCurrent.text().trim());
  }

  countryToNumber(info: string): Destination {
    switch (info) {
      case 'Египет':
        return Destination.Egypt;
      case 'АОЭ':
        return Destination.AOE;
      case 'Таиланд':
        return Destination.Thailand;
      case 'Болгария':
        return Destination.Bulgaria;
      case 'Чорногория':
        return Destination.Chornogoria;
      case 'Индонезия':
        return Destination.Indonesia;
      case 'Грузия':
        return Destination.Georgia;
      case 'Греция':
        return Destination.Greece;
      case 'Турция':
        return Destination.Turkey;
      case 'Кипр':
        return Destination.Cyprus;
      case 'Тунис':
        return Destination.Tunisia;
      case 'Испания':
        return Destination.Spain;
      case 'Украина':
        return Destination.Ukraine;
      default:
        return Destination.All;
    }
  }

  selectCountry(): void {
    $('.info__destination-list li').on('click', event => {
      const destinationName = $(event.currentTarget).data('destination');
      const destination = this.countryToNumber(destinationName);

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('isCountry', destination.toString());
      window.history.pushState({}, '', newUrl.toString());
  
    });
  }
}
