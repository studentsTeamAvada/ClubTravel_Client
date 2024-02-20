import $ from 'jquery';
import { Country } from './filterCountry';

export class Guests extends Country {
  guestsItemAdults: JQuery<HTMLElement>;
  constructor() {
    super();

    this.guestsItemAdults = $(".info__guests-item_adults");


    this.updateGuests(); 
    this.updateKids();
  }


  updateGuests(): void {
    let adultsCounter = $(".guests__current-counter");

    this.guestsItemAdults.each(function () {
      let minusBtn = $(this).find(".info__guests-minus_adults");
      let plusBtn = $(this).find(".info__guests-plus_adults");
      let counter = $(this).find(".info__guests-counters_adults");
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

  updateKids(): void {
    let kidsCounter = $(".guests__current-counter");
    let kidsItem = $(".info__guests-item_kids");
    let minusBtn = kidsItem.find(".info__guests-minus_kids");
    let plusBtn = kidsItem.find(".info__guests-plus_kids");
    let counter = kidsItem.find(".info__guests-counters_kids");
    
    minusBtn.on("click", function () {
      let currentVal = +counter.text();
      if (currentVal > 0) {
        counter.text(currentVal - 1);
        kidsCounter.text(currentVal - 1);
        // $(".info__guests-item").last().remove();
      }

      // if (currentVal === 1) {
      //   plusBtn.prop("disabled", false);
      // }
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

      if (kidsCounter.text().length >= 0) {
        const yearsHtml = `<li>1</li>`;


       
        $(".info__guests-list li").eq(2).after(yearsHtml);
        // for (let i = 0; i < $(".info__guests-item_kid").length; i++) {
        //   $(".guests__num")
        //     .eq(i)
        //     .text(i + 1);
        // }
      }

    });
  }
  
  
}
