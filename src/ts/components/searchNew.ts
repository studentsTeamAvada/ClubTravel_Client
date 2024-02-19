import { app } from '../modules/firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import $ from 'jquery';
import { DropdownSearch } from './dropSearch';
import noUiSlider, { target } from 'nouislider';
import 'nouislider/dist/nouislider.css';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { ResultSwiper } from './../pages/code/swiper';

new DropdownSearch('.info__destination-select');

new DropdownSearch('.info__duration-select');

new DropdownSearch(".info__date-select");

//!!! додати duration в import
import {
  Destination,
  Regions,
  Meals,
  Stars,
  Departure,
  Hotel,
} from '../code/searchFile/type';

export class Country {
  countryArr: Hotel[];
  searchPanelBtn: JQuery<HTMLElement>;
  destinationCurrent: JQuery<HTMLElement>;
  countryFilterArr: Hotel[];
  regionsCurrent: JQuery<HTMLElement>;
  durationCurrent: JQuery<HTMLElement>;
  durationFilterArr: Hotel[];

  constructor() {
    this.searchPanelBtn = $('.search__panel-btn');
    this.destinationCurrent = $('.info__destination-current');
    this.regionsCurrent = $('.category__regions-current');
    this.durationCurrent = $('.info__duration-current');

    this.countryArr = [];
    this.countryFilterArr = [];
    this.durationFilterArr = [];
    this.init();

    const localStorageData = localStorage.getItem('countryArr');
    if (localStorageData) {
      this.countryArr = JSON.parse(localStorageData);
    }
  }

  async init(): Promise<void> {
    // await this.getCountry();

    this.bindEvents();
  }

  // async getCountry(): Promise<void> {
  //   const db = getFirestore(app);
  //   const hotelsRef = collection(db, 'hotels');

  //   try {
  //     const querySnapshot = await getDocs(hotelsRef);
  //     this.countryArr = querySnapshot.docs.map<Hotel>(doc => {
  //       const hotelData = doc.data() as Hotel;
  //       return {
  //         ...hotelData,
  //         id: doc.id,
  //       };
  //     });

  //     localStorage.setItem('countryArr', JSON.stringify(this.countryArr));
  //   } catch (error) {
  //     console.error('Error getting documents: ', error);
  //   }
  // }

  bindEvents(): void {
    this.searchPanelBtn.on('click', () => this.filterCountry());
    window.addEventListener('load', () => this.restoreFilterFromUrl());
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

  restoreFilterFromUrl(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const savedDestination = urlParams.get('country');

    if (savedDestination) {
      // this.destinationCurrent.val(savedDestination);
      this.filterCountry();
    }
  }

  filterCountry(): void {
    const destinationName = this.destinationCurrent.text().trim();
    const destination = this.countryToNumber(destinationName);
    this.countryFilterArr = this.countryArr.filter((item: Hotel) => {
      if (destination === Destination.All) {
        return true;
      } else {
        return item.isCountry === destination;
      }
    });

    console.log(this.countryFilterArr);

    this.renderHotels(this.countryFilterArr);
    this.renderRegions(this.countryFilterArr);
    this.renderInfo(this.countryFilterArr);
    new ResultSwiper();

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set('isCountry', destination.toString());
    window.history.pushState({}, '', newUrl.toString());
  }

  renderHotels(info: Hotel[]): void {
    if (info.length > 0) {
      $('.result__content').html('');
      info.forEach(item => {
        const starsCount = item.star;
        let starsHTML = '';

        for (let i = 0; i < starsCount; i++) {
          starsHTML += `<svg><use xlink:href="#star"></use></svg>`;
        }
        const hotelId = item.id;

        const hotelHtml = `
                <div class="result__hotel">
                    <div class="result__slider">
                        <div class="swiper result__swiper">
                            <div class="swiper-wrapper result__wrapper">
                                <div class="swiper-slide result__slide">
                                    <picture>
                                        <source srcset="${item.img[0].urlWebp}" type="image/webp"/>
                                        <img src="${item.img[0].url}" alt="photo"/>
                                    </picture>
                                </div>

                                <div class="swiper-slide result__slide">
                                    <picture>
                                        <source srcset="${item.img[1].urlWebp}" type="image/webp"/>
                                        <img src="${item.img[1].url}" alt="photo"/>
                                    </picture>
                                </div>

                                <div class="swiper-slide result__slide">
                                    <picture>
                                        <source srcset="${item.img[2].urlWebp}" type="image/webp"/>
                                        <img src="${item.img[2].url}" alt="photo"/>
                                    </picture>
                                </div>

                                <div class="swiper-slide result__slide">
                                    <picture>
                                        <source srcset="${item.img[3].urlWebp}" type="image/webp"/>
                                        <img src="${item.img[3].url}" alt="photo"/>
                                    </picture>
                                </div>

                                <div class="swiper-slide result__slide">
                                    <picture>
                                        <source srcset="${item.img[4].urlWebp}" type="image/webp"/>
                                        <img src="${item.img[4].url}" alt="photo"/>
                                    </picture>
                                </div>
                            </div>

                            <div class="swiper-button-next result__btn-next">
                                <svg><use xlink:href="#chevron-left"></use></svg>
                            </div>

                            <div class="swiper-button-prev result__btn-prev">
                                <svg><use xlink:href="#chevron-left"></use></svg>
                            </div>
                        </div>
                    </div>

                    <div class="result__row">
                        <div class="result__info">
                            <div class="result__info-item">
                                <h4 class="result__info-title">${item.name}</h4>

                                <div class="result__info-location">
                                    <svg><use xlink:href="#point"></use></svg>
                                    <p class="result__info-country">${item.country},</p>
                                    <p class="result__info-region">${item.region}</p>
                                </div>

                                <p class="result__info-descript">${item.description[0].main}</p>
                            </div>
                            <div class="result__info-subitem">
                                <a class="result__info-link" href="hotel.html?id=${hotelId}">
                                    Подробнее об отеле
                                    <svg><use xlink:href="#arrow-right"></use></svg>
                                </a>
                            </div>
                        </div>

                        <div class="result__rating">
                            <div class="result__rating-item">
                                <div class="result__rating-star">${starsHTML}</div>
                                <div class="result__rating-subitem">
                                    <p class="result__rating-duration">
                                        <svg><use xlink:href="#clock"></use></svg>
                                        ${item.duration}
                                    </p>

                                    <p class="result__rating-meal">
                                        <svg><use xlink:href="#food"></use></svg>
                                        ${item.meals}
                                    </p>

                                    <p class="result__rating-room">
                                        <svg><use xlink:href="#house"></use></svg>
                                        ${item.room[0]}
                                    </p>

                                    <p class="result__rating-beach">
                                        <svg><use xlink:href="#sun"></use></svg>
                                        ${item.beach}
                                    </p>
                                </div>
                            </div>
                            <div class="result__price">
                                <p class="result__price-num">
                                    <span>${item.room.length}</span> предложения от
                                    <span>${item.price[0]}€</span><span>/чел</span>
                                </p>
                                <button class="result__price-btn">Открыть</button>
                            </div>
                        </div>
                    </div>

                </div>
                <table class="result__table table table_act">
                <thead   ad class="table__thead">
                    <tr class="table__tr">
                        <th class="table__th">Дата</th>
                        <th class="table__th">Период</th>
                        <th class="table__th">Питание</th>
                        <th class="table__th">Тип номера</th>
                        <th class="table__th">Стоимость</th>
                    </tr>
                </thead>
                <tbody class="table__tbody">
                    ${
                      Array.isArray(item.room)
                        ? item.room
                            .map(
                              room => `
                        <tr class="table__tr">
                            <td class="table__td">${item.date}</td>
                            <td class="table__td">${item.duration}</td>
                            <td class="table__td">${item.meals}</td>
                            <td class="table__td">${room}</td>
                            <td class="table__td">${item.price[0]}€<span>/чел</span></td>
                            <td class="table__td"><button class="table__link">выбрать</button></td>
                        </tr>
                        <tr class="table__sub-tbody">
                            <td class="table__sub-td" colspan="6"> <hr class="table__line"></td>
                        </tr>
                    `
                            )
                            .join('')
                        : ''
                    }
                </tbody>
            </table>
                `;

        $('.result__content').append(hotelHtml);
      });
    } else {
      $('.result__content').html(`
            <div class="result__not-found">
              <h2 class="result__not-found-title">По вашему запросу ничего не найдено</h2>
              <p class="result__not-found-text">Попробуйте изменить параметры поиска</p>
            </div>`);
    }
    $('.result__price button').on('click', function () {
      $(this).toggleClass('result__price-btn_act');
      $(this).closest('.result__price').toggleClass('result__price_act');

      $('.table').toggleClass('table_act');
    });
  }

  renderRegions(region: Hotel[]): void {
    $('.category__regions-item').html('');
    region.forEach(item => {
      const regionHtml = `
    <button data-region="${item.region}" class="category__btns category__btns-regions">
      <svg>
        <use xlink:href="#check-circle"></use>
      </svg>
      ${item.region}
    </button>`;
      $('.category__regions-item').append(regionHtml);
    });

    this.selectRegion();

    if ($('.category__regions-item').children().length > 5) {
      $('.category__regions-item').removeClass('category__regions-item_change');
    } else {
      $('.category__regions-item').addClass('category__regions-item_change');
    }
  }

  renderInfo(item: any[]): void {
    $('.result__header').html('');
    const hotels = item.length;
    const offers = item.reduce((acc, item) => acc + item.room.length, 0);
    const infoHtml = `
    <h3 class="result__header-title">
      Найдено <span class="result__header-offers">${offers}</span> предложения в
      <span class="result__header-hotel">${hotels}</span>
      отелях
    </h3>
    
`;

    $('.result__header').append(infoHtml);
  }

  selectRegion() {
    $('.category__btns-regions').on('click', event => {
      const regionName = $(event.currentTarget).data('region');
      const region = this.regionToNumber(regionName);
      // this.regionsCurrent.text(region);

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set('isRegion', region.toString());
      window.history.pushState({}, '', newUrl.toString());
      window.location.reload();
    });
  }

  regionToNumber(info: string): Regions {
    switch (info) {
      case 'Шарм-эль-Шейх':
        return Regions.SharmElSheikh;
      case 'Хургада':
        return Regions.Hurghada;
      case 'Дубай':
        return Regions.Dubai;
      case 'Абу-Даби':
        return Regions.AbuDhabi;
      case 'Бангкок':
        return Regions.Bangkok;
      case 'Хуа Хин':
        return Regions.KuahHin;
      case 'Солнечный берег':
        return Regions.SunnyBeach;
      case 'Золотые пески':
        return Regions.GoldenSands;
      case 'Будва':
        return Regions.Budva;
      case 'Свети Стефан':
        return Regions.StefanBridge;
      case 'Бали':
        return Regions.Bali;
      case 'Батумі':
        return Regions.Batumi;
      case 'Родос':
        return Regions.Rodos;
      case 'Мармарис':
        return Regions.Marmaris;
      case 'Пафос':
        return Regions.Paphos;
      case 'Сусс':
        return Regions.Suss;
      case 'Тенерифе':
        return Regions.Tenerife;
      case 'Майорка':
        return Regions.Majorca;
      case 'Буковель':
        return Regions.Bukovyn;
      case 'Улудаг':
        return Regions.Uldag;
      case 'Бансько':
        return Regions.Bansko;
      case 'Боровець':
        return Regions.Borovets;
      default:
        return Regions.All;
    }
  }
}

class Region extends Country {
  regionFilterArr: Hotel[];

  constructor() {
    super();
    this.regionFilterArr = [];
    this.regionsCurrent = $('.category__regions-current');
  }

  bindEvents(): void {
    super.bindEvents();
    this.searchPanelBtn.on('click', () => this.filterRegion());
  }

  restoreFilterFromUrl(): void {
    super.restoreFilterFromUrl();
    const urlParams = new URLSearchParams(window.location.search);
    const savedRegion = urlParams.get('isRegion');

    if (savedRegion) {
      this.filterRegion();
      this.addActiveClassForRegion();
    }
  }

  filterRegion(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const savedRegion = urlParams.get('isRegion');
    const region = parseInt(savedRegion as string);

    this.regionFilterArr = this.countryArr.filter((item: Hotel) => {
      if (region === Regions.All) {
        return true;
      } else {
        return item.isRegion === region;
      }
    });

    this.renderHotels(this.regionFilterArr);
    this.renderRegions(this.regionFilterArr);
    this.renderInfo(this.regionFilterArr);
    new ResultSwiper();

    // const newUrl = new URL(window.location.href);
    // newUrl.searchParams.set("isRegion", region.toString());
    // window.history.pushState({}, "", newUrl.toString());

    // new ResultSwiper();
  }

  addActiveClassForRegion() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedRegion = urlParams.get('isRegion');
    const region: { [key: string]: string } = {
      '1': 'Шарм-эль-Шейх',
      '2': 'Хургада',
      '3': 'Дубай',
      '4': 'Абу-Даби',
      '5': 'Бангкок',
      '6': 'Хуа Хин',
      '7': 'Солнечный берег',
      '8': 'Золотые пески',
      '9': 'Будва',
      '10': 'Свети Стефан',
      '11': 'Бали',
      '13': 'Батумі',
      '15': 'Родос',
      '17': 'Мармарис',
      '19': 'Пафос',
      '21': 'Сусс',
      '23': 'Тенерифе',
      '24': 'Майорка',
      '25': 'Буковель',
      '27': 'Улудаг',
      '28': 'Бансько',
      '29': 'Боровець',
    };

    if (savedRegion && region[savedRegion]) {
      $(
        `.category__btns-regions[data-region="${region[savedRegion]}"]`
      ).addClass('category__btns-regions_act');
    }
  }
}

class Hotels extends Country {
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
      newUrl.searchParams.set('isMeals', meal.toString());
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

    console.log(this.mealsFilterArr);

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
      newUrl.searchParams.set('isStar', stars.toString());
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

    console.log(this.starsFilterArr);

    // const newUrl = new URL(window.location.href);
    // newUrl.searchParams.set("isStar", stars.toString());
    // window.history.pushState({}, "", newUrl.toString());
    this.renderHotels(this.starsFilterArr);
    this.renderRegions(this.starsFilterArr);
    this.renderInfo(this.starsFilterArr);
  }

  priceSlider(): void {
    const slider = document.querySelector('.category__slider') as target;
    noUiSlider.create(slider, {
      start: [300, 4300],
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
        const filterTour = this.countryArr.filter(
          (item: Hotel) => item.touristPackage === true
        );
        this.renderHotels(filterTour);
        this.renderRegions(filterTour);
        this.renderInfo(filterTour);

        newUrl.searchParams.set('isTour', 'true');

        if (newUrl.searchParams.has('flight')) {
          newUrl.searchParams.delete('flight');
        }
      } else {
        const filterFly = this.countryArr.filter(
          (item: Hotel) => item.flight === true
        );

        this.renderHotels(filterFly);
        this.renderRegions(filterFly);
        this.renderInfo(filterFly);

        newUrl.searchParams.set('flight', 'true');

        if (newUrl.searchParams.has('isTour')) {
          newUrl.searchParams.delete('isTour');
        }
      }

      window.history.pushState({}, '', newUrl.toString());
      window.location.reload();
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

class SelectData extends Country {
  constructor() {
    super();
    this.calendar();
  }

  calendar() {
    new AirDatepicker('#calendar', {
      onSelect: function ({ date }) {
        const dateObj = Array.isArray(date) ? date[0] : date;
        const day = dateObj.getDate();
        const month = dateObj.getMonth() + 1;
        const year = dateObj.getFullYear();

        const formattedDate = `${day} ${month} ${year}`;

        $('.info__date-current').text(formattedDate);

        const currentUrl = window.location.href;
        const urlParts = currentUrl.split('?');
        const baseUrl = urlParts[0];
        const params = new URLSearchParams(urlParts[1]);
        params.set('date', formattedDate);
        const newUrl = baseUrl + '?' + params.toString();
        window.history.pushState({ path: newUrl }, '', newUrl);
        // window.location.reload();
      },
    });
  }

  restoreFilterFromUrl() {
    super.restoreFilterFromUrl();
    const urlParams = new URLSearchParams(window.location.search);
    const savedDate = urlParams.get('date');
    if (savedDate) {
      // this.filterDate();
    }
  }

  filterDate(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const savedDate = urlParams.get('date');
    console.log(savedDate);

    const filterDate = this.countryArr.filter(function (_item) {
      // const seconds = item.date.seconds;
      // const dateObj = new Date(seconds * 1000);
      // const day = dateObj.getDate();
      // const month = dateObj.getMonth() + 1;
      // const year = dateObj.getFullYear();
      // console.log(day, month, year);
      // const formattedDate = `${day} ${month} ${year}`;
      // return formattedDate === savedDate;
    });
    console.log(filterDate);
    this.renderHotels(filterDate);
    this.renderRegions(filterDate);
  }
}

class AdvancedSearch {
  filterRow: JQuery<HTMLElement>;
  destinationCurrent: JQuery<HTMLElement>;
  dateCurrent: JQuery<HTMLElement>;
  durationCurrent: JQuery<HTMLElement>;

  constructor() {
    this.filterRow = $('.category__filter-row');
    this.destinationCurrent = $('.info__destination-current');
    this.dateCurrent = $('.info__date-current');
    this.durationCurrent = $('.info__duration-current');
    this.init();
  }

  init() {
    this.accordion();
    this.activeFilter();
    this.addActiveClassForStar();
    this.addActiveClassForMeals();
    this.addActiveClassForTour();
    this.addActiveClassForDeparture();
    this.addTextForCurrents();
  }

  accordion() {
    $('.search__btn').on('click', function () {
      $('.search__row-bottom').addClass('search__row-bottom_active');
      $('.search__btn-close').removeClass('search__btn-close_act');
      $('.search__line').removeClass('search__line_act');
    });

    $('.search__btn-close').on('click', function () {
      $('.search__row-bottom').removeClass('search__row-bottom_active');
      $('.search__btn-close').addClass('search__btn-close_act');
      $('.search__line').addClass('search__line_act');
      console.log(123);
    });
  }

  activeFilter() {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      switch (key) {
        case 'isStar':
          this.rating(value);
          break;
        case 'isMeals':
          this.meals(value);
          break;
        case 'isTour':
          this.tours(value);
          break;
        case 'isRegion':
          this.region(value);
          break;
        case 'flight':
          this.flight(value);
          break;
        case 'departure':
          this.departure(value);
          break;
      }
    });
  }

  rating(val: string) {
    const rating: { [key: string]: string } = {
      '2': '3 звезды',
      '3': '4 звезды',
      '4': '5 звезд',
      '5': 'Апартаменты',
    };

    if (rating[val]) {
      this.filterRow.append(
        `<div class="category__filter-rating">
          <h3 class="category__filter-title">Рейтинг</h3>
          <p class="category__filter-text">${rating[val]}</p>
        </div>`
      );
    }
  }

  meals(val: string) {
    const meals: { [key: string]: string } = {
      '1': 'Без питания',
      '2': 'Завтрак',
      '3': 'Завтрак и ужин',
      '4': 'Завтрак, обед, ужин',
      '5': 'Всё включено',
      '6': 'Ультра все включено',
    };

    if (meals[val]) {
      this.filterRow.append(
        `<div class="category__filter-meals">
          <h3 class="category__filter-title">Питание</h3>
          <p class="category__filter-text">${meals[val]}</p>
        </div>`
      );
    }
  }

  tours(val: string) {
    if (val === 'true') {
      this.filterRow.append(
        `<div class="category__filter-tour">
          <h3 class="category__filter-title">Состав тура</h3>
          <p class="category__filter-text">Туристический пакет</p>
        </div>`
      );
    }
  }

  flight(val: string) {
    if (val === 'true') {
      this.filterRow.append(
        `<div class="category__filter-tour">
          <h3 class="category__filter-title">Состав тура</h3>
          <p class="category__filter-text">Только перелет</p>
        </div>`
      );
    }
  }

  region(val: string) {
    const filterRow = $('.category__filter-row');
    const regions: { [key: string]: string } = {
      '1': 'Шарм-эль-Шейх',
      '2': 'Хургада',
      '3': 'Дубай',
      '4': 'Абу-Даби',
      '5': 'Бангкок',
      '6': 'Хуа Хин',
      '7': 'Солнечный берег',
      '8': 'Золотые пески',
      '9': 'Будва',
      '10': 'Свети Стефан',
      '11': 'Бали',
      '13': 'Батумі',
      '15': 'Родос',
      '17': 'Мармарис',
      '19': 'Пафос',
      '21': 'Сусс',
      '23': 'Тенерифе',
      '25': 'Буковуль',
      '27': 'Улудаг',
      '28': 'Бансько',
      '29': 'Інше',
    };

    if (regions[val]) {
      filterRow.append(`
          <div class="category__filter-region">
            <h3 class="category__filter-title">Регион</h3>
            <p class="category__filter-text">${regions[val]}</p>
          </div>
        `);
    }
  }

  departure(val: string) {
    const departure: { [key: string]: string } = {
      '1': 'Киев',
      '2': 'Львов',
    };

    if (departure[val]) {
      this.filterRow.append(
        `<div class="category__filter-flying">
          <h3 class="category__filter-title">Вылет из</h3>
          <p class="category__filter-text">${departure[val]}</p>
        </div>`
      );
    }
  }

  addActiveClassForStar() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedStar = urlParams.get('isStar');

    const star: { [key: string]: string } = {
      '2': 'three',
      '3': 'four',
      '4': 'five',
      '5': 'apart',
    };

    if (savedStar && star[savedStar]) {
      $(`.category__btns-stars[data-stars="${star[savedStar]}"]`).addClass(
        'category__btns-stars_act'
      );
    }
  }

  addActiveClassForMeals() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedMeals = urlParams.get('isMeals');

    const meals: { [key: string]: string } = {
      '1': 'ao',
      '2': 'bb',
      '3': 'hb',
      '4': 'fb',
      '5': 'ai',
      '6': 'uai',
    };

    if (savedMeals && meals[savedMeals]) {
      $(`.category__btns-meals[data-meals="${meals[savedMeals]}"]`).addClass(
        'category__btns-meals_act'
      );
    }
  }

  addActiveClassForTour() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedTour = urlParams.get('isTour');
    const savedFlight = urlParams.get('flight');

    if (savedTour === 'true') {
      $('.category__btns-tour[data-tour="tour"]').addClass(
        'category__btns-tour_act'
      );
    } else if (savedFlight === 'true') {
      $('.category__btns-tour[data-tour="fly"]').addClass(
        'category__btns-tour_act'
      );
    }
  }

  addActiveClassForDeparture() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedDeparture = urlParams.get('departure');

    const departure: { [key: string]: string } = {
      '1': 'kiev',
      '2': 'lviv',
    };

    if (savedDeparture && departure[savedDeparture]) {
      $(
        `.category__btns-city[data-city="${departure[savedDeparture]}"]`
      ).addClass('category__btns-city_act');
    }
  }

  addTextForCurrents() {
    if (this.destinationCurrent.text() === '') {
      this.destinationCurrent.text('Направление');
    }

    if(this.dateCurrent.text() === '') {
      this.dateCurrent.text('Дата');
    }

    if(this.durationCurrent.text() === '') {
      this.durationCurrent.text('Длительность');
    }
  }
}

new Region();
new Hotels();
new SelectData();
new AdvancedSearch();

// const db = getFirestore(app);
// const hotelsRef = collection(db, "hotels");

// getDocs(hotelsRef).then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {

//       console.log(doc.id);
//   });
// });
