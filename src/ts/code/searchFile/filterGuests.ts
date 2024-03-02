import $ from 'jquery';
import { PersonCounter } from './Composable/PersonCounter';
import { ChackFun } from './Composable/checkFun';

export class Guests {
  searchPanelBtn: JQuery<HTMLElement>;

  url: URL;

  constructor() {
    this.searchPanelBtn = $('.info__btn');

    this.updateGuests();
    this.updateKids();
    this.closeDropDown();
    this.haldelsClik();

    this.url = new URL(window.location.href);
  }

  updateGuests(): void {
    new PersonCounter().addGuests();
  }

  updateKids(): void {
    new PersonCounter().addKids();
  }

  closeDropDown(): void {
    $('.info__guests-add').on('click', () => {
      $('.dropdown__list').removeClass('dropdown__list_show');
      $('.dropdown__icon').removeClass('dropdown__icon_rotate');
    });
  }

  haldelsClik() {
    this.searchPanelBtn.on('click', async () => {
      new ChackFun().checkIsFlag();

      // if (this.url.pathname === '/hot_offers.html') {
      //   const hotels = await new FilteringData().getHotelsByFilter('hotTour', true);
      //   if (hotels.length > 0) {
      //     const filteredHotels = hotels.filter((hotel) => hotel.isCountry === +saveCountry);
      //     if (filteredHotels.length > 0) {
      //       new RenderHotTour().renderTable(filteredHotels);
      //     } else {
      //       new RenderHotTour().renderTable(filteredHotels);
      //     }
      //   } else {
      //     console.log('Немає готелів з hotTour = true');
      //   }
      // }

      if (this.url.pathname === '/index.html') {
        window.location.href = `search_results.html?isCountry=${new ChackFun().saveCountry}`;
      }
    });

    if (window.location.pathname === '/search_results.html') {
      new ChackFun().checkIsFlag();
    }
  }
}
