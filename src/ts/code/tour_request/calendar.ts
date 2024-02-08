import $ from "jquery";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

export class Calendar {
  calendar: JQuery<HTMLElement>;
  calendarMain: JQuery<HTMLElement>;
  btn: JQuery<HTMLElement>;
  form: JQuery<HTMLElement>;
  currentSelDate: Date;
  currentDate: Date;
  constructor() {
    this.form = $(".form");
    this.calendar = $(".calendar");
    this.calendarMain = $(".calendar__main");
    this.btn = $(".calendar__btn");
    this.currentSelDate = new Date();
    this.currentDate = new Date();
    this.init();
  }
  init() {
    this.open();
    this.observer();
    this.selectDate();
    this.startCurrentDate();
  }
  startCurrentDate() {}
  selectDate(): void {
    const spanStartDate = $("#start-date");
    const context = this;
    if (sessionStorage.getItem("startDate")) {
      this.currentSelDate = new Date(
        Number(sessionStorage.getItem("startDate"))
      );
    } else {
      this.currentSelDate.setDate(this.currentSelDate.getDate() + 7);
    }

    spanStartDate.html(context.formatDate(this.currentSelDate));
    context.checkError();
    sessionStorage.setItem("startDate", String(this.currentSelDate.valueOf()));

    const dp = new AirDatepicker("#el", {
      onSelect: ({ date }) => {
        select(String(date));
      },
      toggleSelected: false,
      selectedDates: [this.currentSelDate],
    });

    dp.show();

    function select(date: string): void {
      if (date != "undefined") {
        context.currentSelDate = new Date(date);
      }

      context.checkError();

      spanStartDate.html(context.formatDate(context.currentSelDate));
      sessionStorage.setItem(
        "startDate",
        String(context.currentSelDate.valueOf())
      );

      context.removeFinalDate();
    }
    this.removeFinalDate();
  }

  checkError() {
    const errorBtn = $(".form__btn-error");
    if (this.currentDate.valueOf() > this.currentSelDate.valueOf()) {
      errorBtn.html("");
      this.btn.css("border", "1px solid rgb(199 41 41)");
      errorBtn.html("Нельзя выбрать прошедшую/текущую дату вылета");
      this.form.addClass("form_erroe-one");
    } else {
      this.form.removeClass("form_erroe-one");
      this.btn.css("border", "1px solid #e2e2e2");
      errorBtn.html("");
    }
  }

  removeFinalDate(): void {
    const finalDate = $("#final-date");
    const total: number = +$(".form__counter-count").html();

    const newDate = new Date(this.currentSelDate);
    newDate.setDate(newDate.getDate() + total);

    finalDate.html(this.formatDate(newDate));
    // sessionStorage.setItem("finalDate", String(newDate.valueOf()));
  }

  formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formatDay = day < 10 ? "0" + day : day;
    const formatMonth = month < 10 ? "0" + month : month;
    return `${formatDay}.${formatMonth}.${year}`;
  }

  open(): void {
    this.calendar.on("click", () => {
      this.calendar.toggleClass("calendar_active");
    });
    const context = this;

    $(document).on("click", function (e: JQuery.ClickEvent) {
      if (context.calendar.has(e.target).length == 0) {
        context.calendar.removeClass("calendar_active");
      }
    });
  }
  observer(): void {
    const mainDropHeight: number = Number(this.calendarMain.height());
    const context = this;

    $(document).ready(function () {
      const options = {
        root: null,
        rootMargin: `0px 0px -${mainDropHeight + 30}px 0px`,
        threshold: 1,
      };

      function callback(entries: IntersectionObserverEntry[]): void {
        entries.forEach((entry) => {
          const windowHeight: number = Number($(window).height());
          const distanceTop: number = Number(entry.boundingClientRect.top);
          if (windowHeight > 700 && distanceTop > 0) {
            if (entry.isIntersecting) {
              context.calendar.addClass("calendar_bottom");
              context.calendar.removeClass("calendar_top");
            } else {
              context.calendar.addClass("calendar_top");
              context.calendar.removeClass("calendar_bottom");
            }
          }
        });
      }

      const items = $(".calendar__btn");

      const observer = new IntersectionObserver(callback, options);

      items.each(function (_index, item) {
        observer.observe(item);
      });
    });
  }
}
