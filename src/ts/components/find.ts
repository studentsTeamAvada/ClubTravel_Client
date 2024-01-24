import $ from "jquery";
import AirDatepicker from "air-datepicker";
import axios from "axios";
// @ts-ignore
import Sprite from "./../../../src/images/sprite.svg" ;
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
export class Find {
  destinationSelect: JQuery<HTMLDivElement>;
  destinationList: JQuery<HTMLUListElement>;
  destinationIcon: JQuery<HTMLOrSVGElement>;
  destinationItem: JQuery<HTMLLIElement>;
  destinationCurrent: JQuery<HTMLParagraphElement>;

  durationSelect: JQuery<HTMLDivElement>;
  durationList: JQuery<HTMLUListElement>;
  durationIcon: JQuery<HTMLOrSVGElement>;
  durationItem: JQuery<HTMLLIElement>;
  durationCurrent: JQuery<HTMLParagraphElement>;

  dateSelect: JQuery<HTMLDivElement>;
  dateList: JQuery<HTMLUListElement>;
  dateIcon: JQuery<HTMLOrSVGElement>;
  dateItem: JQuery<HTMLLIElement>;
  dateCurrent: JQuery<HTMLParagraphElement>;
  dateDay: JQuery<HTMLSpanElement>;
  dateMonth: JQuery<HTMLSpanElement>;

  advanced: JQuery<HTMLDivElement>;
  // guestsItemAdults: JQuery<HTMLLIElement>;
  // guestsItemKids: JQuery<HTMLLIElement>;

  // guestsSelect: JQuery<HTMLDivElement>;
  // guestsList: JQuery<HTMLUListElement>;
  // guestsIcon: JQuery<HTMLOrSVGElement>;
  // guestsItem: JQuery<HTMLLIElement>;

  // findRowSub: JQuery<HTMLDivElement>;
  slider: JQuery<HTMLElement>;

  constructor() {
    this.destinationSelect = $(".info__destination-select");
    this.destinationList = $(".info__destination-list");
    this.destinationIcon = $(".info__destination-icon");
    this.destinationItem = $(".info__destination-item");
    this.destinationCurrent = $(".info__destination-current");

    this.durationSelect = $(".info__duration-select");
    this.durationList = $(".info__duration-list");
    this.durationIcon = $(".info__duration-icon");
    this.durationItem = $(".info__duration-item");
    this.durationCurrent = $(".info__duration-current");

    this.dateSelect = $(".info__date-select");
    this.dateList = $(".info__date-list");
    this.dateIcon = $(".info__date-icon");
    this.dateItem = $(".info__date-item");
    this.dateCurrent = $(".info__date-current");
    this.dateDay = $(".info__date-day");
    this.dateMonth = $(".info__date-month");

    this.advanced = $(".advanced");

    // this.guestsItemAdults = $(".guests__item_adults");
    // this.guestsItemKids = $(".guests__item_kids");

    // this.guestsSelect = $(".guests__select");
    // this.guestsList = $(".guests__list");
    // this.guestsIcon = $(".guests__icon");
    // this.guestsItem = $(".guests__item");

    // this.findRowSub = $(".find__row_sub");
    this.slider = $(".advanced__category-slider");

    this.init();
  }

  init() {
    this.getDestination();
    this.selectDestination();
    this.getDuration();
    this.selectDuration();
    this.initCalendar();
    this.selectDate();
    this.getRating();
    this.getFly();
    this.getRegions();
    //   this.updateCounterAdults();
    //   this.updateCounterKids();
    //   this.selectGuests();
    this.accordion();

      this.sliderMoney();
  }

  selectDestination(): void {
    this.destinationSelect.on("click", () => {
      this.destinationList.toggleClass("info__destination-list_show");
    });
  }

  selectDuration(): void {
    this.durationSelect.on("click", () => {
      this.durationList.toggleClass("info__duration-list_show");
    });
  }

  selectDate(): void {
    // const context = this;

    this.dateSelect.on("click", () => {
      this.dateList.toggleClass("info__date-list_show");
    });

    $(".air-datepicker-cell.-day-").each(function (
      _index: number,
      element: HTMLElement
    ) {
      $(element).on("click", function () {
        const selectedDate = $(this).data("date");
        const selectedMonthIndex = $(this).data("month");
        console.log(selectedMonthIndex);
        console.log(selectedDate);

        // const selectedMonthIndex = $(this).data("month");
        // const selectedYear = $(this).data("year");
        // const date = new Date(selectedYear, selectedMonthIndex, selectedDate);
        // const selectedMonth = new Intl.DateTimeFormat("ru-Ru", {
        //   month: "long",}).format(date);
        // context.dateDay.text(selectedDate);
        // context.dateMonth.text(selectedMonth);
        // context.dateList.removeClass("info__date-list_show");
        // console.log(1)
      });
    });

    // $(".air-datepicker-cell.-day-").on("click", function () {
    //   const selectedDate = $(this).data("date");
    //   console.log(selectedDate)
    // const selectedMonthIndex = $(this).data("month");
    // const selectedYear = $(this).data("year");
    // const date = new Date(selectedYear, selectedMonthIndex, selectedDate);
    // const selectedMonth = new Intl.DateTimeFormat("ru-Ru", {
    //   month: "long",}).format(date);
    // context.dateDay.text(selectedDate);
    // context.dateMonth.text(selectedMonth);
    // context.dateList.removeClass("info__date-list_show");
    // console.log(1)
    // });
  }

  initCalendar(): void {
    new AirDatepicker("#calendar");
  }

  // updateCounterAdults(): void {
  //   let adultsCounter = $(".guests__current-counter");

  //   this.guestsItemAdults.each(function () {
  //     let minusBtn = $(this).find(".guests__btn-adults-minus");
  //     let plusBtn = $(this).find(".guests__btn-adults-plus");
  //     let counter = $(this).find(".guests__item-adults-counter");

  //     minusBtn.on("click", function () {
  //       let currentValue = +counter.text();
  //       if (currentValue > 0) {
  //         counter.text(currentValue - 1);
  //         adultsCounter.text(currentValue - 1);
  //       }
  //     });

  //     plusBtn.on("click", function () {
  //       let currentValue = +counter.text();
  //       if (currentValue < 9) {
  //         counter.text(currentValue + 1);
  //         adultsCounter.text(currentValue + 1);
  //       }
  //     });
  //   });
  // }
  // updateCounterKids(): void {
  //   let kidsCounter = $(".guests__current-subcounter");
  //   this.guestsItemKids.each(function () {
  //     let minusBtn = $(this).find(".guests__btn-kids-minus");
  //     let plusBtn = $(this).find(".guests__btn-kids-plus");
  //     let counter = $(this).find(".guests__item-kids-counter");

  //     minusBtn.on("click", function () {
  //       let currentVal = +counter.text();
  //       if (currentVal > 0) {
  //         counter.text(currentVal - 1);
  //         kidsCounter.text(currentVal - 1);
  //         $(".guests__item").last().remove();
  //       }
  //       if (currentVal === 1) {
  //         plusBtn.prop("disabled", false);
  //       }
  //     });

  //     plusBtn.on("click", function () {
  //       let currentVal = +counter.text();
  //       if (currentVal < 9) {
  //         counter.text(currentVal + 1);
  //         kidsCounter.text(currentVal + 1);
  //       }
  //       if (currentVal + 1 === 9) {
  //         plusBtn.prop("disabled", true);
  //       }
  //       if (kidsCounter.text().length > 0) {
  //         const yearsHtml = `
  //           <li class="guests__item guests__item_years">
  //           <label for="age">Ребёнок: <span class="guests__num"></span></label>
  //           <select class="guests__selects"  id="age" name="age">
  //               <option value="0">Возраст</option>
  //               <option value="1">1 год</option>
  //               <option value="2">2 года</option>
  //               <option value="3">3 года</option>
  //               <option value="4">4 года</option>
  //               <option value="5">5 лет</option>
  //               <option value="6">6 лет</option>
  //               <option value="7">7 лет</option>
  //               <option value="8">8 лет</option>
  //               <option value="9">9 лет</option>
  //               <option value="10">10 лет</option>
  //               <option value="11">11 лет</option>
  //               <option value="12">12 лет</option>
  //               <option value="13">13 лет</option>
  //               <option value="14">14 лет</option>
  //               <option value="15">15 лет</option>
  //               <option value="16">16 лет</option>
  //               <option value="17">17 лет</option>
  //           </select>
  //           </li>`;
  //         $(".guests__list").append(yearsHtml);

  //         for (let i = 0; i < $(".guests__item_years").length; i++) {
  //           $(".guests__num")
  //             .eq(i)
  //             .text(i + 1);
  //         }
  //       }
  //     });
  //   });
  // }

  // selectGuests(): void {
  //   this.guestsSelect.on("click", () => {
  //     this.guestsList.addClass("guests__list_show");
  //   });
  // }

  accordion(): void {
    this.advanced.on("click", () => {
      this.advanced.toggleClass("advanced_show");
      if (this.advanced.hasClass("advanced_show")) {
        $(".advanced__btn").addClass("advanced__btn_act");
        $(".advanced__line").removeClass("advanced__line_act");
        $(".advanced__btn-close").removeClass("advanced__btn-close_act");
      } else {
        $(".advanced__btn").removeClass("advanced__btn_act");
        $(".advanced__line").addClass("advanced__line_act");
        $(".advanced__btn-close").addClass("advanced__btn-close_act");
      }
    });
    //   $(".find__row-btn").on("click", function () {
    //     $(".find__row-sub").addClass("find__row-sub_act");
    //     $(".find__row-btn").addClass("find__row-btn_act");
    //     $(".find__row-line").removeClass("find__row-line_act");
    //     $(".find__row-btn-close").removeClass("find__row-btn-close_act");
    //   });

    //   $(".find__row-btn-close").on("click", function () {
    //     $(".find__row-sub").removeClass("find__row-sub_act");
    //     $(".find__row-btn").removeClass("find__row-btn_act");
    //     $(".find__row-line").addClass("find__row-line_act");
    //     $(".find__row-btn-close").addClass("find__row-btn-close_act");
    //   });
  }

  async getDestination() {
    const context = this;
    try {
      const API_URL = "https://clubtravel.onrender.com/api/find-infos";
      const response = await axios.get(API_URL);
      const destinations = response.data.data[0].attributes.search.destinations;

      const listItemHtml = destinations.map((item: any) => {
        return `
        <li class="info__destination-item dropdown__item">${item.name}</li>
        `;
      });
      $(".info__destination-list").append(listItemHtml.join(""));
      $(".info__destination-item").each(function (
        _index: number,
        element: HTMLElement
      ) {
        $(element).on("click", function () {
          let citySelected = $(this).text();
          context.destinationCurrent.text(citySelected);
          let newUrl = `search_results.html?destination=${citySelected}`;
          window.history.pushState(null, " ", newUrl);
        });
      });
    } catch (error) {
      console.error("Помилка при отриманні даних:", error);
    }
  }
  async getDuration() {
    const context = this;
    try {
      const API_URL = "https://clubtravel.onrender.com/api/find-infos";
      const response = await axios.get(API_URL);
      const destinations = response.data.data[0].attributes.search.duration;

      const listItemHtml = destinations.map((item: any) => {
        return `
        <li class="info__duration-item dropdown__item">${item.name}</li>
        `;
      });
      $(".info__duration-list").append(listItemHtml.join(""));
      $(".info__duration-item").on("click", function () {
        let daySelected = $(this).text();
        context.durationCurrent.text(daySelected);
        const daySelectedLength = daySelected.slice(0, 2);

        const urlParams = new URLSearchParams(window.location.search);
        const urlDestination = urlParams.get("destination");

        let newUrl = `search_results.html?${urlDestination}&duration=${daySelectedLength}`;
        window.history.pushState(null, "", newUrl);
      });
    } catch (error) {
      console.error("Помилка при отриманні даних:", error);
    }
  }
  async getRating() {
    try {
      const API_URL = "https://clubtravel.onrender.com/api/find-infos";
      const response = await axios.get(API_URL);
      const stars = response.data.data[0].attributes.search.stars;
      const meal = response.data.data[0].attributes.search.meal;
      const btnsHtml = stars.map((item: { name: any }, index: number) => {
      const starIcons = Array.from({ length: +item.name + 1 },() => `
          <svg class="advanced__icon">
            <use xlink:href="${Sprite}#star"></use>
          </svg>`
        ).join("");

        if (index === 4) {
          return `
            <button class="category__btns category__btns-flat">
              <svg>
                <use xlink:href="${Sprite}#house"></use>
              </svg>
              Апартаменты
            </button>
          `;
        } else {
          return `
            <button class="category__btns category__btns-stars">
              ${starIcons}
            </button>
          `;
        }
      });
      const btnsHtmlMeal = meal.map((item: { name: any }) => {
        return `
          <button class="category__btns category__btns-meal">
          <svg>
            <use xlink:href="${Sprite}#check-circle"></use>
          </svg>
            ${item.name}
          </button>
        `;
      });

      $(".category__rating-stars").append(btnsHtml.join(""));
      $(".category__rating-meal").append(btnsHtmlMeal.join(""));
    } catch (error) {
      console.error("Помилка при отриманні даних:", error);
    }
  }
  async getFly() {
    try {
      const API_URL = "https://clubtravel.onrender.com/api/find-infos";
      const response = await axios.get(API_URL);
      console.log(response.data);
      const lineupTour = response.data.data[0].attributes.search.lineupTour;
      const departure = response.data.data[0].attributes.search.departure;
      const btnsHtml = lineupTour.map((item: { name: any }) => {
        return `
          <button class="category__btns category__btns-lineup">
          <svg>
            <use xlink:href="${Sprite}#check-circle"></use>
          </svg>
            ${item.name}
          </button>
        `;
      });
      const btnsHtmlDeparture = departure.map((item: { name: any }) => {
        return `
          <button class="category__btns category__btns-departure">
          <svg>
            <use xlink:href="${Sprite}#check-circle"></use>
          </svg>
            ${item.name}
          </button>
        `;
      });
      $(".category__lineup").append(btnsHtml.join(""));
      $(".category__departure").append(btnsHtmlDeparture.join(""));
    } catch (error) {
      console.error("Помилка при отриманні даних:", error);
    }
  }
  sliderMoney(){
    const slider = document.querySelector('.category__slider') as HTMLElement;
        noUiSlider.create(slider, {
          start: [600, 3700],
          connect: true,
          range: {
              'min': 400,
              'max': 4000
          },
          tooltips: true,
          format: {
            to: function (value) {
              return Math.round(+value) + '€'
            },
            from: function (value) {
              return Math.round(+value)
            },
          },
          step:200,
          pips: {
            // @ts-ignore
            mode: 'range',
            // stepped: true,
            density: 10
        }
      });
      $('.noUi-value').each(function() {
        $(this).text($(this).text() + '€');
      });
      
  }
  async getRegions() {
    try {
      const API_URL = "https://clubtravel.onrender.com/api/find-infos";
      const response = await axios.get(API_URL);
      console.log(response.data);
      const regions = response.data.data[0].attributes.search.regins;
      const btnsHtml = regions.slice(0, -2).map((item: any) => {
        return `
          <button class="category__btns category__btns-regions">
          <svg>
            <use xlink:href="${Sprite}#check-circle"></use>
          </svg>
            ${item.name}
          </button>
        `;
      });
      $(".category__regions-item").append(btnsHtml.join(""));
    } catch (error) {
      console.error("Помилка при отриманні даних:", error);
    }
  }



  // async getGuests() {
  //   const context = this;
  //   try {
  //     const API_URL = "https://clubtravel.onrender.com/api/find-infos";
  //     const response = await axios.get(API_URL);
  //     console.log(response.data);
  //     const destinations = response.data.data[0].attributes.search.duration;

  //     const listItemHtml = destinations.map((item: any) => {
  //       return `
  //       <li class="info__guests-item dropdown__item">${item.name}</li>
  //       `;
  //     });
  //     $(".info__guests-list").append(listItemHtml.join(""));
  //     // $(".info__duration-item").on("click", function () {
  //     //   let daySelected = $(this).text();
  //     //   context.durationCurrent.text(daySelected);
  //     //   const daySelectedLength = daySelected.slice(0, 2);

  //     //   // const urlParams = new URLSearchParams(window.location.search);
  //     //   // const urlDestination = urlParams.get("destination");

  //     //   let newUrl = `search_results.html&duration=${+daySelectedLength}`;
  //     //   window.history.pushState(null, "", newUrl);
  //     // });
  //   } catch (error) {
  //     console.error("Помилка при отриманні даних:", error);
  //   }
  // }
}

// // const key = "6a2aeec3d56b84ca847c777ad636794030245464ab122a17a422b0001d7691dfa6dd0829410077e996e8da83b9ba506716c05bb89505c5141046ef8d5a0cfc2e23ee7e4abfa53077aeeb736e29b484a78a631b3a2b6617883eae8e5f40c878c726042792683c9f44829b1647dd51d63e301889cae7b1ba2ef5af6fcb6a3c1771";
// const API_URL = "https://clubtravel.onrender.com/api/find-infos";
// axios.get(API_URL).then(
//   (response) => {
//     console.log(response.data);
//   });
