import { Country } from './filterCountry';
import $ from 'jquery';
import { ResultSwiper } from '../../pages/code/swiper';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import { Hotel } from './type';

export class SelectData extends Country {
  filterDateArr: Hotel[];

  constructor() {
    super();
    this.calendar();
    this.filterDateArr = [];
  }

  bindEvents(): void {
    super.bindEvents();
    this.searchPanelBtn.on('click', () => this.filterDate());
  }

  restoreFilterFromUrl(): void {
    super.restoreFilterFromUrl();
    const urlParams = new URLSearchParams(window.location.search);
    const savedDate = urlParams.get('date');

    if (savedDate) {
      this.filterDate();
    }
    
  }

  calendar() {
    new AirDatepicker('#calendar', {
      onSelect: function ({ date }) {
        const dateObj = Array.isArray(date) ? date[0] : date;
        const day = dateObj.getDate().toString().padStart(2, '0');
        const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const year = dateObj.getFullYear();

        const formattedDate = `${day}.${month}.${year}`;

        $('.info__date-current').text(formattedDate);

        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('date', formattedDate);
        window.history.pushState(
          { path: currentUrl.href },
          '',
          currentUrl.href
        );
        window.location.reload();
      },
    });
  }

  filterDate(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const savedDate = urlParams.get('date');
    console.log(savedDate);
    this.filterDateArr = this.countryArr.filter((item: Hotel) => {
      if (savedDate) {
        return item.date === savedDate;
      }
    });

    this.renderHotels(this.filterDateArr);
    this.renderRegions(this.filterDateArr);
    this.renderInfo(this.filterDateArr);

    new ResultSwiper();
  }
}
