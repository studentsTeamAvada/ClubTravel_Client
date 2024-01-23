import $ from "jquery";
// import AirDatepicker from "air-datepicker";
import axios from "axios";
// import noUiSlider from 'nouislider';

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

  // dataSelect: JQuery<HTMLDivElement>;
  // dataList: JQuery<HTMLUListElement>;
  // dataIcon: JQuery<HTMLOrSVGElement>;
  // dataItem: JQuery<HTMLLIElement>;
  // dataCurrent: JQuery<HTMLParagraphElement>;

  // dataCurrentDay: JQuery<HTMLSpanElement>;
  // dataCurrentMonth: JQuery<HTMLSpanElement>;

  // guestsItemAdults: JQuery<HTMLLIElement>;
  // guestsItemKids: JQuery<HTMLLIElement>;

  // guestsSelect: JQuery<HTMLDivElement>;
  // guestsList: JQuery<HTMLUListElement>;
  // guestsIcon: JQuery<HTMLOrSVGElement>;
  // guestsItem: JQuery<HTMLLIElement>;

  // findRowSub: JQuery<HTMLDivElement>;
  // slider: JQuery<HTMLElement>;

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

    // this.dataSelect = $(".data__select");
    // this.dataList = $(".data__list");
    // this.dataIcon = $(".data__icon");
    // this.dataItem = $(".data__item");
    // this.dataCurrent = $(".data__current");
    // this.dataCurrentDay = $(".data__current-day");
    // this.dataCurrentMonth = $(".data__current-month");

    // this.guestsItemAdults = $(".guests__item_adults");
    // this.guestsItemKids = $(".guests__item_kids");

    // this.guestsSelect = $(".guests__select");
    // this.guestsList = $(".guests__list");
    // this.guestsIcon = $(".guests__icon");
    // this.guestsItem = $(".guests__item");

    // this.findRowSub = $(".find__row_sub");
    // this.slider = $("#slider");

    this.init();
  }

  init() {
    this.getDestination();
    this.selectDestination();
    this.getDuration();
    this.selectDuration();
    //   this.initCalendar();
    //   this.selectData();
    //   this.updateCounterAdults();
    //   this.updateCounterKids();
    //   this.selectGuests();
    //   this.accordion();
    //   // this.sliderMoney();
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

  // selectData(): void {
  //   const context = this;

  //   this.dataSelect.on("click", () => {
  //     this.dataList.addClass("data__list_show").toggle();
  //   });

  //   this.dataItem.find(".air-datepicker-cell.-day-").on("click", function () {
  //     const selectedDate = $(this).data("date");
  //     const selectedMonthIndex = $(this).data("month");
  //     const date = new Date(2022, selectedMonthIndex, 1);
  //     const selectedMonth = new Intl.DateTimeFormat("ru-Ru", {
  //       month: "long",
  //     }).format(date);
  //     context.dataCurrentDay.text(selectedDate);
  //     context.dataCurrentMonth.text(selectedMonth);
  //     context.dataList.removeClass("data__list_show");
  //   });
  // }

  // initCalendar(): void {
  //   new AirDatepicker("#calendar");
  // }

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

  // accordion(): void {
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
  // }

  // sliderMoney(){

  //   noUiSlider.create(this.slider[0], {
  //     start: [20, 80],
  //     connect: true,
  //     range: {
  //         'min': 0,
  //         'max': 100
  //     }
  // });
  // }

  async getDestination() {
    const context = this;
    try {
      const API_URL = "https://clubtravel.onrender.com/api/find-infos";
      const response = await axios.get(API_URL);
      console.log(response.data);
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
      console.log(response.data);
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
        const daySelectedLength  = daySelected.slice(0, 2);

        // const urlParams = new URLSearchParams(window.location.search);
        // const urlDestination = urlParams.get("destination");

        let newUrl = `search_results.html&duration=${+daySelectedLength}`;
        window.history.pushState(null, "", newUrl);
      });
    } catch (error) {
      console.error("Помилка при отриманні даних:", error);
    }
  }
}

// // const key = "6a2aeec3d56b84ca847c777ad636794030245464ab122a17a422b0001d7691dfa6dd0829410077e996e8da83b9ba506716c05bb89505c5141046ef8d5a0cfc2e23ee7e4abfa53077aeeb736e29b484a78a631b3a2b6617883eae8e5f40c878c726042792683c9f44829b1647dd51d63e301889cae7b1ba2ef5af6fcb6a3c1771";
// const API_URL = "https://clubtravel.onrender.com/api/find-infos";
// axios.get(API_URL).then(
//   (response) => {
//     console.log(response.data);
//   });
