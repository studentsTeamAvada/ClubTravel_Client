import $ from "jquery";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";


interface ICalendar  {

}
export class Calendar {
  calendar: JQuery<HTMLElement>;
  calendarMain: JQuery<HTMLElement>;
  btn: JQuery<HTMLElement>;
  form: JQuery<HTMLElement>;
  currentSelDate: Date;
  currentNextDate: Date;
  datepicker?: AirDatepicker<HTMLElement>;
  between: number;
  constructor() {
    this.form = $(".form");
    this.calendar = $(".calendar");
    this.calendarMain = $(".calendar__main");
    this.btn = $(".calendar__btn");
    this.currentSelDate = new Date();
    this.currentNextDate = new Date();
    this.between = 0;
    this.init();
  }
  init() {
    this.open();
    this.observer();
    this.airDatepicker();
    this.counter()
  }



  newDate(start: boolean = true, finish: boolean = false){
    if(start){
      $("#start-date").html(this.formatDate(this.currentSelDate))
    }else{
      $("#start-date").html("")
    }

    if(finish){
      $("#final-date").html(this.formatDate(this.currentNextDate))
    }else{
      $("#final-date").html("")
    }
  }

  airDatepicker(){
    const context = this
    const tomorrow = new Date().setDate(new Date().getDate() + 1)
    const maxData = new Date().setDate(new Date().getFullYear() + 5)

    this.datepicker =  new AirDatepicker('#el', {
      range: true, 
      toggleSelected: true,
      multipleDatesSeparator: ' -', 
      minDate: tomorrow,
      onSelect({date}) {
        const myDate = date as Array<Date> 



        if(myDate[1]){
          context.currentNextDate = new Date(myDate[1]);
          context.newDate(true, true);
          context.datepicker?.update({
            minDate: tomorrow,
            maxDate: maxData
          })
          context.selectCount()
        }else if(myDate[0]){
          context.currentSelDate = new Date(myDate[0]);
          context.newDate();
          context.datepicker?.update({
            minDate: new Date(myDate[0]),
            maxDate: new Date(myDate[0]).setDate(myDate[0].getDate() + 18)
          })
        } else{
          context.datepicker?.update({
            minDate: tomorrow,
            maxDate: maxData
          })
          context.newDate(false, false);
        }
      }
    })
  }

  selectCount(){
    const finishDate = new Date(new Date().setDate(this.currentSelDate.getDate() + this.between)) 

    const between: number = this.currentNextDate.getTime() - this.currentSelDate.getTime();

    const daysBetween: number = Math.floor(between / (1000 * 60 * 60 * 24));
    console.log(daysBetween)
    $('.form__counter-count').html(String(daysBetween))
  }

  
  counter() {
    const add = $(".form__counter-add");
    const remove = $(".form__counter-remove");
    const total = $(".form__counter-count");
    const context = this;

    function addOne(): void {
      let current = +total.text();
      if (current < 100) {
        const sum = current + 1;
        selectSum(String(sum));
      }
    }

    function removeOne(): void {
      let current = +total.text();
      if (current > 1) {
        const sum = current - 1;
        selectSum(String(sum));
      }
    }

    function selectSum(sum: string) {
      total.html(sum);
      context.selectFinishDate(+sum)
    }

    add.on("click", addOne);
    remove.on("click", removeOne);
  }

  selectFinishDate(num: number = 1): void{
    const finish = new Date(new Date().setDate(this.currentSelDate.getDate() + num)) 
    this.datepicker?.clear();
    this.datepicker?.selectDate(this.currentSelDate); 
    this.datepicker?.selectDate(finish);
    console.log(this.currentSelDate)
    console.log(this.currentNextDate)

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
    this.btn.on("click", () => {
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
