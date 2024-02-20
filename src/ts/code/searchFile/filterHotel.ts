import $ from 'jquery';
import noUiSlider, { target } from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { Country } from './filterCountry';
import { Hotel, Meals, Stars, Departure } from './type';

export class Hotels extends Country {
  mealsFilterArr: Hotel[];
  starsFilterArr: Hotel[];
  priceFilterArr: Hotel[];

  constructor() {
    super();
    this.mealsFilterArr = [];
    this.starsFilterArr = [];
    this.priceFilterArr = [];

    this.selectMeal();
    this.selectStars();
    this.priceSlider();
    this.selectTourAndFlight();
    this.selectDeparture();
  }

  restoreFilterFromUrl(): void {
    super.restoreFilterFromUrl();
    const urlParams = new URLSearchParams(window.location.search);

    urlParams.forEach((_value, key) => {
      switch (key) {
        case 'isMeals':
          this.filterMeals();
          break;
        case 'isStar':
          this.filterStars();
          break;
        case 'priceMin':
        case 'priceMax':
          this.filterPrice();
          break;
        case 'isTour':
        case 'flight':
          this.selectTourAndFlight();
          break;
        case 'departure':
          this.filterDeparture();
          break;
      }
    });
  }

  selectMeal(): void {
    $('.category__btns-meals[data-meals]').on('click', event => {
      const mealName = $(event.currentTarget).data('meals');
      const meal = this.numberToMeals(mealName);

      const newUrl = new URL(window.location.href);
      const isMealParam = newUrl.searchParams.get('isMeals');

      if (isMealParam === meal.toString()) {
        newUrl.searchParams.delete('isMeals');
      } else {
        newUrl.searchParams.set('isMeals', meal.toString());
      }

      window.history.pushState({}, '', newUrl.toString());
      window.location.reload();
    });
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

  filterMeals() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedMeals = urlParams.get('isMeals');
    const meals = parseInt(savedMeals as string);

    this.mealsFilterArr = this.countryArr.filter((item: Hotel) => {
      if (meals === Meals.all) {
        return true;
      } else {
        return item.isMeals === meals;
      }
    });

    this.renderHotels(this.mealsFilterArr);
    this.renderRegions(this.mealsFilterArr);
    this.renderInfo(this.mealsFilterArr);

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('isMeals', meals.toString());
    window.history.pushState({}, '', newUrl.toString());
  }

  selectStars(): void {
    $('.category__btns-stars[data-stars]').on('click', event => {
      const starsName = $(event.currentTarget).data('stars');
      const stars = this.numberToStars(starsName);

      const newUrl = new URL(window.location.href);
      const isStarParam = newUrl.searchParams.get('isStar');

      if (isStarParam === stars.toString()) {
        newUrl.searchParams.delete('isStar');
      } else {
        newUrl.searchParams.set('isStar', stars.toString());
      }

      window.history.pushState({}, '', newUrl.toString());
      window.location.reload();
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

  filterStars(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const savedStars = urlParams.get('isStar');
    const stars = parseInt(savedStars as string);

    this.starsFilterArr = this.countryArr.filter((item: Hotel) => {
      if (stars === Stars.all) {
        return true;
      } else {
        return item.isStar === stars;
      }
    });

    this.renderHotels(this.starsFilterArr);
    this.renderRegions(this.starsFilterArr);
    this.renderInfo(this.starsFilterArr);
  }

  priceSlider(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const savedPriceMin = urlParams.get('priceMin');
    const savedPriceMax = urlParams.get('priceMax');

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
    const urlParams = new URLSearchParams(window.location.search);
    const savedPriceMin = urlParams.get('priceMin');
    const savedPriceMax = urlParams.get('priceMax');
    let priceMin = parseInt(savedPriceMin || '400');
    let priceMax = parseInt(savedPriceMax || '4000');
    console.log(123);
    if (isNaN(priceMin) || isNaN(priceMax) || priceMin > priceMax) {
      priceMin = 400;
      priceMax = 4000;
    }

    this.priceFilterArr = this.countryArr.filter((item: Hotel) => {
      return item.price.some(price => price >= priceMin && price <= priceMax);
    });

    console.log(this.priceFilterArr);
    this.renderHotels(this.priceFilterArr);
    this.renderRegions(this.priceFilterArr);
    this.renderInfo(this.priceFilterArr);
  }

  selectTourAndFlight(): void {
    const newUrl = new URL(window.location.href);

    $('.category__btns-tour[data-tour]').on('click', event => {
      const tourName = $(event.currentTarget).data('tour');

      if (tourName === 'tour') {
        newUrl.searchParams.set('isTour', 'true');
        newUrl.searchParams.delete('flight');
      } else {
        newUrl.searchParams.delete('isTour');
        newUrl.searchParams.set('flight', 'true');
      }

      if (tourName === 'tour') {
        const filterTour = this.countryArr.filter(
          (item: Hotel) => item.touristPackage === true
        );

        this.renderHotels(filterTour);
        this.renderRegions(filterTour);
        this.renderInfo(filterTour);
      } else {
        const filterFly = this.countryArr.filter(
          (item: Hotel) => item.flight === true
        );

        this.renderHotels(filterFly);
        this.renderRegions(filterFly);
        this.renderInfo(filterFly);
      }

      window.history.pushState({}, '', newUrl.toString());
      // window.location.reload();
    });
  }

  selectDeparture() {
    $('.category__btns-city[data-city]').on('click', event => {
      const cityName = $(event.currentTarget).data('city');
      const city = this.numberToDeparture(cityName);

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('departure', city.toString());
      window.history.pushState({}, '', newUrl.toString());
      window.location.reload();
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

  filterDeparture() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedDeparture = urlParams.get('departure');
    const departure = parseInt(savedDeparture as string);

    this.priceFilterArr = this.countryArr.filter((item: Hotel) => {
      return item.departure === departure;
    });

    console.log(this.priceFilterArr);
    this.renderHotels(this.priceFilterArr);
    this.renderRegions(this.priceFilterArr);
    this.renderInfo(this.priceFilterArr);
  }
}
