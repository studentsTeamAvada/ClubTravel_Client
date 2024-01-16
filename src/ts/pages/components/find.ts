import $ from "jquery";
import AirDatepicker from "air-datepicker";
export class Find {
  directionSelect: JQuery<HTMLDivElement>;
  directionList: JQuery<HTMLUListElement>;
  directionIcon: JQuery<HTMLOrSVGElement>;
  directionItem: JQuery<HTMLLIElement>;
  directionCurrent: JQuery<HTMLParagraphElement>;

  durationSelect: JQuery<HTMLDivElement>;
  durationList: JQuery<HTMLUListElement>;
  durationIcon: JQuery<HTMLOrSVGElement>;
  durationItem: JQuery<HTMLLIElement>;
  durationCurrent: JQuery<HTMLParagraphElement>;

  dataSelect: JQuery<HTMLDivElement>;
  dataList: JQuery<HTMLUListElement>;
  dataIcon: JQuery<HTMLOrSVGElement>;
  dataItem: JQuery<HTMLLIElement>;
  dataCurrent: JQuery<HTMLParagraphElement>;

  dataCurrentDay: JQuery<HTMLSpanElement>;
  dataCurrentMonth: JQuery<HTMLSpanElement>;

  guestsItemAdults: JQuery<HTMLLIElement>;
  guestsItemKids: JQuery<HTMLLIElement>;

  guestsSelect: JQuery<HTMLDivElement>;
  guestsList: JQuery<HTMLUListElement>;
  guestsIcon: JQuery<HTMLOrSVGElement>;
  guestsItem: JQuery<HTMLLIElement>;

  constructor() {
    this.directionSelect = $(".direction__select");
    this.directionList = $(".direction__list");
    this.directionIcon = $(".direction__icon");
    this.directionItem = $(".direction__item");
    this.directionCurrent = $(".direction__current");

    this.durationSelect = $(".duration__select");
    this.durationList = $(".duration__list");
    this.durationIcon = $(".duration__icon");
    this.durationItem = $(".duration__item");
    this.durationCurrent = $(".duration__current");

    this.dataSelect = $(".data__select");
    this.dataList = $(".data__list");
    this.dataIcon = $(".data__icon");
    this.dataItem = $(".data__item");
    this.dataCurrent = $(".data__current");
    this.dataCurrentDay = $(".data__current-day");
    this.dataCurrentMonth = $(".data__current-month");

    this.guestsItemAdults = $(".guests__item_adults");
    this.guestsItemKids = $(".guests__item_kids");

    this.guestsSelect = $(".guests__select");
    this.guestsList = $(".guests__list");
    this.guestsIcon = $(".guests__icon");
    this.guestsItem = $(".guests__item");

    this.init();
  }

  init() {
    this.selectDirection();
    this.selectDuration();
    this.initCalendar();
    this.selectData();
    this.updateCounterAdults();
    this.updateCounterKids();
    this.selectGuests();
  }

  selectDirection() {
    const context = this;
    this.directionSelect.on("click", () => {
      this.directionList.addClass("direction__list_show").toggle();
    });

    this.directionItem.each(function (_index: number, element) {
      $(element).on("click", function () {
        let citySelected = $(this).text();
        context.directionCurrent.text(citySelected);
      });
    });
  }
  selectDuration() {
    const context = this;
    this.durationSelect.on("click", () => {
      this.durationList.addClass("duration__list_show").toggle();
    });

    this.durationItem.each(function (_index: number, element) {
      $(element).on("click", function () {
        let citySelected = $(this).text();
        context.durationCurrent.text(citySelected);
      });
    });
  }

  selectData() {
    const context = this;

    this.dataSelect.on("click", () => {
      this.dataList.addClass("data__list_show").toggle();
    });

    this.dataItem.find(".air-datepicker-cell.-day-").on("click", function () {
      const selectedDate = $(this).data("date");
      const selectedMonthIndex = $(this).data("month");
      const date = new Date(2022, selectedMonthIndex, 1);
      const selectedMonth = new Intl.DateTimeFormat("ru-Ru", {
        month: "long",
      }).format(date);
      context.dataCurrentDay.text(selectedDate);
      context.dataCurrentMonth.text(selectedMonth);
      context.dataList.removeClass("data__list_show");
    });
  }

  initCalendar(): void {
    new AirDatepicker("#calendar");
  }

  updateCounterAdults() {
    let adultsCounter = $(".guests__current-counter");

    this.guestsItemAdults.each(function () {
      let minusBtn = $(this).find(".guests__btn-adults-minus");
      let plusBtn = $(this).find(".guests__btn-adults-plus");
      let counter = $(this).find(".guests__item-adults-counter");

      minusBtn.on("click", function () {
        let currentValue = +counter.text();
        if (currentValue > 0) {
          counter.text(currentValue - 1);
          adultsCounter.text(currentValue - 1);
        }
      });

      plusBtn.on("click", function () {
        let currentValue = +counter.text();
        if (currentValue < 9) {
          counter.text(currentValue + 1);
          adultsCounter.text(currentValue + 1);
        }
      });
    });
  }
  updateCounterKids() {
    let kidsCounter = $(".guests__current-subcounter");
    this.guestsItemKids.each(function () {
      let minusBtn = $(this).find(".guests__btn-kids-minus");
      let plusBtn = $(this).find(".guests__btn-kids-plus");
      let counter = $(this).find(".guests__item-kids-counter");

      minusBtn.on("click", function () {
        let currentVal = +counter.text();
        if (currentVal > 0) {
          counter.text(currentVal - 1);
          kidsCounter.text(currentVal - 1);
          $(".guests__item").last().remove();
        }
        if (currentVal === 1) {
          plusBtn.prop("disabled", false);
        }
      });

      plusBtn.on("click", function () {
        let currentVal = +counter.text();
        if (currentVal < 9) {
          counter.text(currentVal + 1);
          kidsCounter.text(currentVal + 1);
        }
        if (currentVal + 1 === 9) {
          plusBtn.prop("disabled", true);
        }
        if (kidsCounter.text().length > 0) {
          const yearsHtml = `
            <li class="guests__item guests__item_years">
            <label for="age">Ребёнок: <span class="guests__num"></span></label>
            <select class="guests__selects"  id="age" name="age">
                <option value="0">Возраст</option>
                <option value="1">1 год</option>
                <option value="2">2 года</option>
                <option value="3">3 года</option>
                <option value="4">4 года</option>
                <option value="5">5 лет</option>
                <option value="6">6 лет</option>
                <option value="7">7 лет</option>
                <option value="8">8 лет</option>
                <option value="9">9 лет</option>
                <option value="10">10 лет</option>
                <option value="11">11 лет</option>
                <option value="12">12 лет</option>
                <option value="13">13 лет</option>
                <option value="14">14 лет</option>
                <option value="15">15 лет</option>
                <option value="16">16 лет</option>
                <option value="17">17 лет</option>
            </select>
            </li>`;
            $(".guests__list").append(yearsHtml);

            for(let i = 0; i < $(".guests__item_years").length; i++) {
              $(".guests__num").eq(i).text(i + 1);
            }
        }
      });
    });
  }

  selectGuests() {
    this.guestsSelect.on("click", () => {
      this.guestsList.addClass("guests__list_show");
    });
  }
}
