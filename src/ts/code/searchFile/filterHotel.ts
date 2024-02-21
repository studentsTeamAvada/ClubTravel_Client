import $ from 'jquery';
import { Filtering } from './filteringCountry';
import noUiSlider, { target } from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { Hotel, Meals, Stars, Departure } from './type';
export class Hotels extends Filtering {
  urlParams: URLSearchParams;

  constructor() {
    super();

    this.urlParams = new URLSearchParams(window.location.search);
    this.initial();
  }

  initial(): void {
    this.selectingMeals();
    this.selectingStars();
    this.priceSlider();
    this.filterPrice();
    this.selectiongTourAndFlight();
    this.selectingDeparture();
  }

  numberToMeals(info: string): Meals {
    switch (info) {
      case 'ao':
        return Meals.ao;
      case 'bb':
        return Meals.bb;
      case 'hb':
        return Meals.hb;
      case 'fb':
        return Meals.fb;
      case 'ai':
        return Meals.ai;
      case 'uai':
        return Meals.uai;
      default:
        return Meals.all;
    }
  }

  selectingMeals(): void {
    $('.category__btns-meals').on('click', event => {
      const mealName = $(event.currentTarget).data('meals');
      const meal = this.numberToMeals(mealName);

      this.filterByKeyValue('isMeals', meal, Meals.all);
    });
  }

  numberToStars(info: string): Stars {
    switch (info) {
      case 'three':
        return Stars.three;
      case 'four':
        return Stars.four;
      case 'five':
        return Stars.five;
      case 'apart':
        return Stars.apart;
      default:
        return Stars.all;
    }
  }

  selectingStars() {
    $('.category__btns-stars').on('click', event => {
      const starsName = $(event.currentTarget).data('stars');
      const stars = this.numberToStars(starsName);

      this.filterByKeyValue('isStar', stars, Stars.all);
    });
  }

  priceSlider(): void {
    const savedPriceMin = this.urlParams.get('priceMin');
    const savedPriceMax = this.urlParams.get('priceMax');

    const startMin = savedPriceMin ? parseInt(savedPriceMin) : 300;
    const startMax = savedPriceMax ? parseInt(savedPriceMax) : 4300;

    const slider = document.querySelector('.category__slider') as target;

    noUiSlider.create(slider, {
      start: [startMin, startMax],
      connect: true,
      range: {
        min: 300,
        max: 6000,
      },
      tooltips: true,
      format: {
        to: function (value) {
          return Math.round(+value) + '€';
        },
        from: function (value) {
          return Math.round(+value);
        },
      },
      step: 200,
    });

    slider.noUiSlider?.on(
      'change',
      function (values: (string | number)[], _handle: number) {
        const priceMin =
          typeof values[0] === 'string'
            ? values[0].slice(0, -1)
            : values[0].toString();
        const priceMax =
          typeof values[1] === 'string'
            ? values[1].slice(0, -1)
            : values[1].toString();

        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('priceMin', priceMin);
        newUrl.searchParams.set('priceMax', priceMax);

        window.history.pushState({}, '', newUrl.toString());
        window.location.reload();
      }
    );
  }

  filterPrice(): void {
    const savedPriceMin = this.urlParams.get('priceMin');
    const savedPriceMax = this.urlParams.get('priceMax');
    let priceMin = parseInt(savedPriceMin || '400');
    let priceMax = parseInt(savedPriceMax || '4000');

    if (isNaN(priceMin) || isNaN(priceMax) || priceMin > priceMax) {
      priceMin = 400;
      priceMax = 4000;
    }

    const priceFilterArr = this.countryArr.filter((item: Hotel) => {
      return item.price.some(price => price >= priceMin && price <= priceMax);
    });

    this.renderHotels(priceFilterArr);
    this.renderRegions(priceFilterArr);
    this.renderInfo(priceFilterArr);

    this.removeParametersFromUrl(['isCountry']);
  }

  selectiongTourAndFlight(): void {
    $('.category__btns-tour').on('click', event => {
      const tourName = $(event.currentTarget).data('tour');

      if (tourName === 'tour') {
        this.filterByKeyValue('touristPackage', true || '');
        this.removeParametersFromUrl(['flight']);
      } else {
        this.filterByKeyValue('flight', true || '');
        this.removeParametersFromUrl(['touristPackage']);
      }
    });
  }

  numberToDeparture(info: string): Departure {
    switch (info) {
      case 'kiev':
        return Departure.kiev;
      case 'lviv':
        return Departure.lviv;
      default:
        return Departure.all;
    }
  }

  selectingDeparture() {
    $('.category__btns-city[data-city]').on('click', event => {
      const cityName = $(event.currentTarget).data('city');
      const city = this.numberToDeparture(cityName);

      this.filterByKeyValue('departure', city, Departure.all);
    });
  }
}
