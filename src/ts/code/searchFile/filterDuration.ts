import $ from 'jquery';
import { Filtering } from './filteringCountry';
import { Durations } from './type';

export class Duration extends Filtering {
  durationCurrent: JQuery<HTMLElement>;

  constructor() {
    super();
    this.durationCurrent = $('.info__duration-current');
    this.selectDuration();
    this.bindEvents('load', 'isDuration', this.durationCurrent.text().trim());
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

  selectDuration(): void {
    $('.info__duration-list li').on('click', event => {
      const durationName = $(event.target).data('duration');
      const duration = this.durationToNumber(durationName);

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('isDuration', duration.toString());
      window.history.pushState({}, '', newUrl.toString());
    });
  }
}
