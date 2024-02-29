import $ from 'jquery';
import noUiSlider, { target } from 'nouislider';
import 'nouislider/dist/nouislider.css';
import { SelectedFilter } from './filterAdvanced';
import { Calendar } from './priceCalendar';
import { rating, meals, lineup, regions, departure } from './obgFile';
import { app } from './../../modules/firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Hotel } from './type';

export class AdvancedSearch {
  destinationCurrent: JQuery<HTMLElement>;
  dateCurrent: JQuery<HTMLElement>;
  durationCurrent: JQuery<HTMLElement>;
  selectedStars: JQuery<HTMLElement>;
  selectedMeals: JQuery<HTMLElement>;
  selectedLineup: JQuery<HTMLElement>;
  selectedDeparture: JQuery<HTMLElement>;

  constructor() {
    this.selectedStars = $('.advanced__filter-star');
    this.selectedMeals = $('.advanced__filter-meal');
    this.selectedLineup = $('.advanced__filter-lineup');
    this.selectedDeparture = $('.advanced__filter-departure');
    this.destinationCurrent = $('.info__destination-current');
    this.dateCurrent = $('.info__date-current');
    this.durationCurrent = $('.info__duration-current');
    this.init();
  }

  init() {
    this.accordion();
    this.priceSlider();
    // this.selectingStars();
    this.selectingFilter(this.selectedStars, '.advanced__categori-btns-stars', 'Рейтинг', rating);
    this.selectingFilter(this.selectedMeals, '.advanced__categori-btns-meals', 'Питание', meals);
    this.selectingFilter(this.selectedLineup, '.advanced__categori-btns-tour', 'Состав тура', lineup);
    this.selectingFilter(this.selectedDeparture, '.advanced__categori-btns-city', 'Вылет из', departure);

    // this.activeFilter();
    // this.addActiveClassForStar();
    // this.addActiveClassForMeals();
    // this.addActiveClassForTour();
    // this.addActiveClassForDeparture();
    // this.addTextForCurrents();

  }

  accordion() {
    $('.advanced__row-btn').on('click', function () {
      $('.advanced__row-btn').addClass('advanced__row-btn_act');
      $('.advanced').addClass('advanced_act');

      $('.advanced__row-line').addClass('advanced__row-line_act');
      $('.advanced__row-close-btn').addClass('advanced__row-close-btn_act');
    });

    $('.advanced__row-close-btn').on('click', function () {
      $('.advanced__row-btn').removeClass('advanced__row-btn_act');
      $('.advanced').removeClass('advanced_act');

      $('.advanced__row-line').removeClass('advanced__row-line_act');
      $('.advanced__row-close-btn').removeClass('advanced__row-close-btn_act');
    });
  }

  priceSlider(): void {
    // const savedPriceMin = this.urlParams.get('priceMin');
    // const savedPriceMax = this.urlParams.get('priceMax');
    // const startMin = savedPriceMin ? parseInt(savedPriceMin) : 300;
    // const startMax = savedPriceMax ? parseInt(savedPriceMax) : 4300;
    const slider = document.querySelector('.advanced__categori-slide') as target;

    noUiSlider.create(slider, {
      range: {
        min: 300,
        max: 6000,
      },
      start: [300, 5000],
      connect: true,
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

    // slider.noUiSlider?.on('change', function (values: (string | number)[], _handle: number) {
    //   const priceMin = typeof values[0] === 'string' ? values[0].slice(0, -1) : values[0].toString();

    //   const priceMax = typeof values[1] === 'string' ? values[1].slice(0, -1) : values[1].toString();

    //   function filterPrice(priceMin: number, priceMax: number): void {
    //     new SelectedFilter().selectedFilter('priceMin', priceMin);
    //     new SelectedFilter().selectedFilter('priceMax', priceMax);
    //   }

    //   const newUrl = new URL(window.location.href);
    //   newUrl.searchParams.set('priceMin', priceMin);
    //   newUrl.searchParams.set('priceMax', priceMax);

    //   window.history.pushState({}, '', newUrl.toString());

    //   filterPrice(+priceMin, +priceMax);
    // });
  }

  selectingFilter(nameBlock: JQuery<HTMLElement>, selector: string, filterType: string, filterOptions: { [key: string]: string }) {
    $(selector).on('click', (event) => {
      const index = $(event.currentTarget).index() + 1;
      const selectedOption = filterOptions[index];

      $(selector).removeClass(selector.replace('.', '') + '_act');
      $(event.currentTarget).addClass(selector.replace('.', '') + '_act');

      new SelectedFilter().displayFilter(nameBlock, filterType, selectedOption);
    });
  }

  // activeFilter() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   urlParams.forEach((value, key) => {
  //     switch (key) {
  //       case 'isStar':
  //         this.rating(value);
  //         break;
  //       case 'isMeals':
  //         this.meals(value);
  //         break;
  //       case 'isTour':
  //         this.tours(value);
  //         break;
  //       case 'isRegion':
  //         this.region(value);
  //         break;
  //       case 'flight':
  //         this.flight(value);
  //         break;
  //       case 'departure':
  //         this.departure(value);
  //         break;
  //     }
  //   });
  // }

  // rating(val: string) {
  //   if (rating[val]) {
  //     this.filterRow.append(
  //       `<div class="category__filter-rating">
  //         <h3 class="category__filter-title">Рейтинг</h3>
  //         <p class="category__filter-text">${rating[val]}</p>
  //       </div>`
  //     );
  //   }
  // }

  // meals(val: string) {
  //   if (meals[val]) {
  //     this.filterRow.append(
  //       `<div class="category__filter-meals">
  //         <h3 class="category__filter-title">Питание</h3>
  //         <p class="category__filter-text">${meals[val]}</p>
  //       </div>`
  //     );
  //   }
  // }

  // tours(val: string) {
  //   if (val === 'true') {
  //     this.filterRow.append(
  //       `<div class="category__filter-tour">
  //         <h3 class="category__filter-title">Состав тура</h3>
  //         <p class="category__filter-text">Туристический пакет</p>
  //       </div>`
  //     );
  //   }
  // }

  // flight(val: string) {
  //   if (val === 'true') {
  //     this.filterRow.append(
  //       `<div class="category__filter-tour">
  //         <h3 class="category__filter-title">Состав тура</h3>
  //         <p class="category__filter-text">Только перелет</p>
  //       </div>`
  //     );
  //   }
  // }

  // region(val: string) {
  //   const filterRow = $('.category__filter-row');

  //   if (regions[val]) {
  //     filterRow.append(`
  //         <div class="category__filter-region">
  //           <h3 class="category__filter-title">Регион</h3>
  //           <p class="category__filter-text">${regions[val]}</p>
  //         </div>
  //       `);
  //   }
  // }

  // departure(val: string) {
  //   if (departure[val]) {
  //     this.filterRow.append(
  //       `<div class="category__filter-flying">
  //         <h3 class="category__filter-title">Вылет из</h3>
  //         <p class="category__filter-text">${departure[val]}</p>
  //       </div>`
  //     );
  //   }
  // }

  // addActiveClassForStar() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const savedStar = urlParams.get('isStar');

  //   if (savedStar && star[savedStar]) {
  //     $(`.category__btns-stars[data-stars="${star[savedStar]}"]`).addClass('category__btns-stars_act');
  //   }
  // }

  // addActiveClassForMeals() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const savedMeals = urlParams.get('isMeals');

  //   const meals: { [key: string]: string } = {
  //     '1': 'ao',
  //     '2': 'bb',
  //     '3': 'hb',
  //     '4': 'fb',
  //     '5': 'ai',
  //     '6': 'uai',
  //   };

  //   if (savedMeals && meals[savedMeals]) {
  //     $(`.category__btns-meals[data-meals="${meals[savedMeals]}"]`).addClass('category__btns-meals_act');
  //   }
  // }

  // addActiveClassForTour() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const savedTour = urlParams.get('isTour');
  //   const savedFlight = urlParams.get('flight');

  //   if (savedTour === 'true') {
  //     $('.category__btns-tour[data-tour="tour"]').addClass('category__btns-tour_act');
  //   } else if (savedFlight === 'true') {
  //     $('.category__btns-tour[data-tour="fly"]').addClass('category__btns-tour_act');
  //   }
  // }

  // addActiveClassForDeparture() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const savedDeparture = urlParams.get('departure');

  //   const departure: { [key: string]: string } = {
  //     '1': 'kiev',
  //     '2': 'lviv',
  //   };

  //   if (savedDeparture && departure[savedDeparture]) {
  //     $(`.category__btns-city[data-city="${departure[savedDeparture]}"]`).addClass('category__btns-city_act');
  //   }
  // }

  // addTextForCurrents() {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const savedDestination = urlParams.get('isCountry');
  //   const savedDuration = urlParams.get('isDuration');
  //   const savedDate = urlParams.get('date');
  //   const savedAdults = urlParams.get('adults');
  //   const savedKids = urlParams.get('kids');
  //   const savedYears = urlParams.get('years');
  //   const yearsArr = savedYears ? savedYears.match(/\d+ \D+/g) : [];

  //   if (savedDuration && duration[savedDuration]) {
  //     this.durationCurrent.text(duration[savedDuration]);
  //   } else if (this.durationCurrent.text() === '') {
  //     this.durationCurrent.text('Длительность');
  //   }

  //   if (savedDestination && country[savedDestination]) {
  //     this.destinationCurrent.text(country[savedDestination]);
  //   } else if (this.destinationCurrent.text() === '') {
  //     this.destinationCurrent.text('Направление');
  //   }

  //   if (savedDate) {
  //     this.dateCurrent.text(savedDate);
  //     console.log(savedDate);
  //   } else if (this.dateCurrent.text() === '') {
  //     this.dateCurrent.text('Дата');
  //   }

  //   if (savedAdults || savedKids) {
  //     $('.info__guests-counter').text(savedAdults !== null ? savedAdults : '');
  //     $('.info__guests-subcounter').text(savedKids !== null ? savedKids : '');
  //     $('.info__guests-counters_adults').text(savedAdults !== null ? savedAdults : '');
  //     $('.info__guests-counters_kids').text(savedKids !== null ? savedKids : '');
  //   } else {
  //     $('.info__guests-counters_adults').text('0');
  //     $('.info__guests-counters_kids').text('0');
  //   }

  //   $(document).ready(function () {
  //     if (yearsArr) {
  //       $.each(yearsArr, function (index, item) {
  //         $('.info__guests-item-current').eq(index).text(item);
  //       });
  //     }
  //   });
  // }

  // showAdvancedInfoHotTour() {
  //   const tableBtn = document.querySelectorAll('.table__btn');
  //   const subThead = document.querySelector('.table__row');
  //   tableBtn.forEach(function (btn) {
  //     btn.addEventListener('click', () => {
  //       btn.classList.toggle('table__btn_act');
  //       subThead?.classList.toggle('table__row_show');
  //     });
  //   });
  // }

  getInfoAboutTour() {

  }
}
