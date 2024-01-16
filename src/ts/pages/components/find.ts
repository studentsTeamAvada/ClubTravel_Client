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
    this.init();
  }

  init() {
    this.selectDirection();
    this.selectDuration();
    this.initCalendar();
   //  this.selectData()
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
      this.durationList.addClass("direction__list_show").toggle();
    });

    this.durationItem.each(function (_index: number, element) {
      $(element).on("click", function () {
        let citySelected = $(this).text();
        context.durationCurrent.text(citySelected);
      });
    });
  }

//   selectData() {
//    // const context = this;
//    this.dataSelect.on("click", () => {
//      this.dataList.addClass("direction__list_show").toggle();
//    });

//    // this.durationItem.each(function (_index: number, element) {
//    //   $(element).on("click", function () {
//    //     let citySelected = $(this).text();
//    //     context.durationCurrent.text(citySelected);
//    //   });
//    // });
//  }

initCalendar(): void  {
   new AirDatepicker('#calendar');
}
}
