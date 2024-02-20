import { Country } from './filterCountry';
import { Regions, Hotel } from './type';
import { ResultSwiper } from '../../pages/code/swiper';
import $ from 'jquery';

 export class Region extends Country {
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

    console.log(this.regionFilterArr);

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


