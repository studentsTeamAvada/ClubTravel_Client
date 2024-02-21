import $ from 'jquery';
import { Filtering } from './filteringCountry';
import { Duration } from './filterDuration';
import { Country } from './filterCountry';
import { Destination, Durations } from './type';

const duration = new Duration();
const country = new Country();
export class Guests extends Filtering {
  guestsItemAdults: JQuery<HTMLElement>;
  searchPanelBtn: JQuery<HTMLElement>;
  counterKids: JQuery<HTMLElement>;
  durationCurrent: JQuery<HTMLElement>;
  destinationCurrent: JQuery<HTMLElement>;
  dateCurrent: JQuery<HTMLElement>;
  kidsCounter: JQuery<HTMLElement>;

  constructor() {
    super();
    this.guestsItemAdults = $('.info__guests-item_adults');
    this.counterKids = $('.info__guests-counters_kids');
    this.searchPanelBtn = $('.search__panel-btn');
    this.durationCurrent = $('.info__duration-current');
    this.destinationCurrent = $('.info__destination-current');
    this.dateCurrent = $('.info__date-current');
    this.kidsCounter = $('.info__guests-subcounter');
    this.updateGuests();
    this.updateKids();
    this.closeDropDown();
    this.haldelsClik();


   

  }

  updateGuests(): void {
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
        }

        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('adults', counterTop.text());
        history.pushState({}, '', newUrl.toString());
      });

      plusBtn.on('click', function () {
        let currentValue = +counter.text();
        if (currentValue < 9) {
          counter.text(currentValue + 1);
          adultsCounter.text(currentValue + 1);
          counterTop.text(currentValue + 1);
        }

        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('adults', counterTop.text());
        history.pushState({}, '', newUrl.toString());
      });
    });
  }

  updateKids(): void {
    let kidsCounter = $('.info__guests-counters_kids');
    let kidsItem = $('.info__guests-item_kids');
    let minusBtn = kidsItem.find('.info__guests-minus_kids');
    let plusBtn = kidsItem.find('.info__guests-plus_kids');
    let counter = kidsItem.find('.info__guests-counters_kids');
    let counterKids = $('.info__guests-subcounter');

    minusBtn.on('click', function () {
      let currentVal = +counter.text();
      if (currentVal > 0) {
        counter.text(currentVal - 1);
        kidsCounter.text(currentVal - 1);
        counterKids.text(currentVal - 1);
        $('.info__guests-item').eq(3).remove();
        createYearsHtml(currentVal - 1);
      }

      if (+kidsCounter === 1) {
        minusBtn.prop('disabled', true);
      }

      if (currentVal === 1) {
        plusBtn.prop('disabled', false);
      }

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('kids', counterKids.text());
      history.pushState({}, '', newUrl.toString());
    });

    plusBtn.on('click', function () {
      let currentVal = +counter.text();
      if (currentVal < 9) {
        counter.text(currentVal + 1);
        kidsCounter.text(currentVal + 1);
        counterKids.text(currentVal + 1);
        createYearsHtml(currentVal + 1);
      }

      if (currentVal + 1 === 9) {
        plusBtn.prop('disabled', true);
      }

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('kids', counterKids.text());
      history.pushState({}, '', newUrl.toString());
    });

    function createYearsHtml(numKids: number) {
      let yearsHtml = '';
      for (let i = 0; i < numKids; i++) {
        yearsHtml += `
            <li class="info__guests-item info__guests-item_sub">
                <p class="info__guests-item-current">Ребёнок</p>
                <ul class="info__guests-sublist">
                    <li class="info__guests-item-years"><span>&lt;</span>1 года</li>
                    <li class="info__guests-item-years">1 год</li>
                    <li class="info__guests-item-years">2 года</li>
                    <li class="info__guests-item-years">3 года</li>
                    <li class="info__guests-item-years">4 года</li>
                    <li class="info__guests-item-years">5 лет</li>
                    <li class="info__guests-item-years">6 лет</li>
                    <li class="info__guests-item-years">7 лет</li>
                    <li class="info__guests-item-years">8 лет</li>
                    <li class="info__guests-item-years">9 лет</li>
                    <li class="info__guests-item-years">10 лет</li>
                    <li class="info__guests-item-years">11 лет</li>
                    <li class="info__guests-item-years">12 лет</li>
                    <li class="info__guests-item-years">13 лет</li>
                    <li class="info__guests-item-years">14 лет</li>
                    <li class="info__guests-item-years">15 лет</li>
                    <li class="info__guests-item-years">16 лет</li>
                    <li class="info__guests-item-years">17 лет</li>
                </ul>
            </li>`;
      }

      $('.info__guests-list li').eq(2).after(yearsHtml);
    }

    createYearsHtml(+kidsCounter.text());

    function updateURL() {
      const selectedYears = $('.info__guests-item-current').text();
      const url = new URL(window.location.href);
      url.searchParams.set('years', selectedYears);
      window.history.replaceState({}, '', url);
    }

    $('.info__guests-list').on('click', '.info__guests-item_sub', function () {
      $(this)
        .find('.info__guests-sublist')
        .toggleClass('info__guests-sublist_show');
    });

    $('.info__guests-list').on(
      'click',
      '.info__guests-item-years',
      function () {
        const selectedYear = $(this).text();
        $(this).parent().prev().text(selectedYear);
        $(this)
          .find('.info__guests-sublist')
          .removeClass('info__guests-sublist_show');
        updateURL();
      }
    );
  }

  closeDropDown(): void {
    $('.info__guests-add').on('click', () => {
      $('.dropdown__list').removeClass('dropdown__list_show');
    });
  }

  filterGuests(): void {
    const kidsName = this.kidsCounter.text().trim();
    const kids = kidsName !== '' ? +kidsName : 0;
    const filteredItems = this.countryArr.filter(item => {
      if (kids > 0) {
        return item.isKids !== false;
      } else {
        return item.isKids === false;
      }
    });
    this.renderHotels(filteredItems);
    this.renderInfo(filteredItems);
    this.renderRegions(filteredItems);
  }

  haldelsClik() {
        // window.addEventListener('load', () => this.filterGuests());
    this.searchPanelBtn.on('click', () => {
      const destinationName = this.destinationCurrent.text().trim();
      const destination = country.countryToNumber(destinationName);
      const durationName = this.durationCurrent.text().trim();
      const durations = duration.durationToNumber(durationName);
      const urlParams = new URLSearchParams(window.location.search);
      const allParams = Array.from(urlParams.keys());

      console.log(allParams);

      const date = this.dateCurrent.text().trim();

      if (allParams.includes('isCountry')) {
        this.filterByKeyValue('isCountry', destination, Destination.All);
        this.removeParametersFromUrl(['isDuration', 'date', 'kids', 'adults']);
        allParams.shift();
      }

      if (allParams.includes('isDuration')) {
        this.filterByKeyValue('isDuration', durations, Durations.all);
        this.removeParametersFromUrl(['isCountry', 'date', 'kids', 'adults']);
        allParams.shift();
      }

      if (allParams.includes('date')) {
        this.filterByKeyValue('date', date);
        this.removeParametersFromUrl([
          'isCountry',
          'isDuration',
          'kids',
          'adults',
        ]);
        allParams.shift();
      }

      if (allParams.includes('kids')) {
        this.filterGuests();
        this.removeParametersFromUrl(['isCountry', 'isDuration', 'date']);
        allParams.shift();
      }
    });
  }
}
