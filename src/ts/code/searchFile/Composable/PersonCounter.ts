import $ from 'jquery';
import { UpdateUrl } from './updateUrlAndGetUrl';

export class PersonCounter {
  guestsItemAdults: JQuery<HTMLElement>;
  counterKids: JQuery<HTMLElement>;
  durationCurrent: JQuery<HTMLElement>;
  destinationCurrent: JQuery<HTMLElement>;
  dateCurrent: JQuery<HTMLElement>;
  kidsCounter: JQuery<HTMLElement>;
  guestsItemKids: JQuery<HTMLElement>;

  constructor() {
    this.guestsItemAdults = $('.info__guests-item_adults');
    this.guestsItemKids = $('.info__guests-item_kids');
    this.counterKids = $('.info__guests-counters_kids');
    this.durationCurrent = $('.info__duration-current');
    this.destinationCurrent = $('.info__destination-current');
    this.dateCurrent = $('.info__date-current');
    this.kidsCounter = $('.info__guests-subcounter');
  }

  addGuests(): void {
    let adultsCounter = $('.guests__current-counter');
    let counterTop = $('.info__guests-counter');

    this.guestsItemAdults.each(function () {
      let minusBtn = $(this).find('.info__guests-minus_adults');
      let plusBtn = $(this).find('.info__guests-plus_adults');
      let counter = $(this).find('.info__guests-counters_adults');

      minusBtn.on('click', function () {
        let currentValue = +counter.text();

        if (currentValue > 0) {
          counter.text(currentValue - 1);
          adultsCounter.text(currentValue - 1);
          counterTop.text(currentValue - 1);
          new UpdateUrl().updateUrlParam('adults', counterTop.text());
        }
      });

      plusBtn.on('click', function () {
        let currentValue = +counter.text();

        if (currentValue < 9) {
          counter.text(currentValue + 1);
          adultsCounter.text(currentValue + 1);
          counterTop.text(currentValue + 1);
          new UpdateUrl().updateUrlParam('adults', counterTop.text());
        }
      });
    });
  }

  addKids(): void {
    let kidsCounter = $('.info__guests-subcounter');

    this.guestsItemKids.each(function () {
      let minusBtn = $(this).find('.info__guests-minus_kids');
      let plusBtn = $(this).find('.info__guests-plus_kids');
      let counter = $(this).find('.info__guests-counters_kids');

      minusBtn.on('click', function () {
        let currentValue = +counter.text();

        if (currentValue > 0) {
          counter.text(currentValue - 1);
          kidsCounter.text(currentValue - 1);

          new UpdateUrl().updateUrlParam('kids', kidsCounter.text());
        }
      });

      plusBtn.on('click', function () {
        let currentValue = +counter.text();

        if (currentValue < 9) {
          counter.text(currentValue + 1);
          kidsCounter.text(currentValue + 1);

          new UpdateUrl().updateUrlParam('kids', kidsCounter.text());
        }
      });
    });
  }
}
