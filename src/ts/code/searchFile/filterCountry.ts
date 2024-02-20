import { app } from './../../modules/firebase';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Destination, Hotel, Regions } from './type';
import { ResultSwiper } from '../../pages/code/swiper';
import $ from 'jquery';
import { DropdownSearch } from '../../components/dropSearch';
new DropdownSearch('.info__destination-select');
new DropdownSearch('.info__duration-select');
new DropdownSearch('.info__date-select');
new DropdownSearch('.info__guests-select');


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

  async getCountry(): Promise<void> {
    const db = getFirestore(app);
    const hotelsRef = collection(db, 'hotels');

    try {
      const querySnapshot = await getDocs(hotelsRef);
      this.countryArr = querySnapshot.docs.map<Hotel>(doc => {
        const hotelData = doc.data() as Hotel;
        return {
          ...hotelData,
          id: doc.id,
        };
      });

      localStorage.setItem('countryArr', JSON.stringify(this.countryArr));
    } catch (error) {
      console.error('Error getting documents: ', error);
    }
  }

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
    const seveCountry = urlParams.get('country');

    if (seveCountry) {
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
    </h3>`;

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



