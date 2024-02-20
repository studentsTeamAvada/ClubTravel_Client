import $ from 'jquery';
import { Country } from './filterCountry';
import { Durations, Hotel } from './type';
import { ResultSwiper } from '../../pages/code/swiper';

export class Duration extends Country {
  durationFilterArr: Hotel[];
  durationCurrent: JQuery<HTMLElement>;

  constructor() {
    super();
    this.durationFilterArr = [];
    this.durationCurrent = $('.info__duration-current');
  }

  bindEvents(): void {
    super.bindEvents();

    this.searchPanelBtn.on('click', () => this.filterDuration());
    window.addEventListener('load', () => this.restoreFilterFromUrl());
  }

  restoreFilterFromUrl(): void {
    super.restoreFilterFromUrl();

    const urlParams = new URLSearchParams(window.location.search);
    const savedDuration = urlParams.get('isDuration');

    if (savedDuration) {
      this.filterDuration();
    }
  }

  durationToNumber(duration: string): number {
    switch (duration) {
      case '3 ночи':
        return Durations.three;
      case '7 ночей':
        return Durations.seven;
      case '10 ночей':
        return Durations.ten;
      case '14 ночей':
        return Durations.fourteen;
      case '21 ночь':
        return Durations.twentyOne;
      default:
        return Durations.all;
    }
  }

  filterDuration(): void {
    const durationName = this.durationCurrent.text().trim();
    const duration = this.durationToNumber(durationName);

    this.durationFilterArr = this.countryArr.filter((item: Hotel) => {
      if (duration === Durations.all) {
        return true;
      } else {
        return item.isDuration === duration;
      }
    });

    this.renderHotels(this.durationFilterArr);
    this.renderRegions(this.durationFilterArr);
    this.renderInfo(this.durationFilterArr);

    new ResultSwiper();

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('isDuration', duration.toString());
    window.history.pushState({}, '', newUrl.toString());
  }
}

new Duration();
