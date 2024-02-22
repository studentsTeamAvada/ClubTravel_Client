import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { DropCountry } from "../code/tour_request/drop-country";
import { Calendar } from "../code/tour_request/calendar";
import { DropDown } from "../code/tour_request/dropdown";
import { Food } from "../code/tour_request/food";
import { Preloader } from "../components/preloader";
import { AsYouType, validatePhoneNumberLength } from 'libphonenumber-js';
import { IsAuthorization } from "../components/isAuthorization";
import $ from "jquery";
import 'jquery-validation';


interface JQueryValidateForm extends JQuery<HTMLElement> {
  validate(object: Object): any;
}


// type addMet = {
//   addMethod(str: string, callback: Function, errorInfo: string): void
// }

interface addValidator extends JQueryStatic {
  validator: any
}


document.addEventListener("DOMContentLoaded", () => {

  class TourRequest {
    header: Header;
    footer: Footer;
    food: Food;
    input: JQuery<HTMLInputElement>;
    inputBtn: JQuery<HTMLButtonElement>;
    tabsBtn: JQuery<HTMLElement>;
    form: JQuery<HTMLFormElement>;
    tabsSlider: JQuery<HTMLElement>;
    dropDown: DropCountry;
    calendar: Calendar;
    DropPeople: DropDown;
    formBtn: JQuery<HTMLElement>;
    stars: JQuery<HTMLElement>;
    inputForm: JQuery<HTMLElement>;

    constructor() {
      this.header = new Header();
      this.footer = new Footer();
      this.food = new Food();
      this.dropDown = new DropCountry();

      this.calendar = new Calendar();
      this.DropPeople = new DropDown(".form__drop-guests");
      this.stars = $(".form__stars-one-star");

      this.input = $("#adviser-inp");
      this.inputBtn = $(".adviser__btn");
      this.inputForm = $("#adviser__form");
      this.tabsBtn = $(".form__tabs");
      this.form = $(".form");

      this.formBtn = this.form.find(".form__btn");
      this.tabsSlider = $(".form__tabs-slider");

      // this.inputMask(".form__phone");
      this.validateTel("#adviser__form");

      // $(".adviser__input").submit(function(event) {
      //   // Предотвращаем стандартное поведение формы (перезагрузку страницы)
      //   event.preventDefault();
      // });

      this.tabs();
      this.points();
      this.stopReload();
      this.clickFormBtn();
      this.inputMask();
      this.SelectStars();
      this.validateMainFormOne();
      this.validateMainFormThree();

    }

    SelectStars() {
      const context = this;

      this.stars.each((_index, item) => {
        item.addEventListener("click", () => {
          addActive(Number(item.getAttribute("data-num")));
        });
      });

      function addActive(attribute: number) {
        context.stars.each((index, item) => {
          if (index < attribute) {
            item.classList.add("form__stars-one-star_active");
          } else {
            item.classList.remove("form__stars-one-star_active");
          }
        });
      }
    }

    stopReload() {
      this.form.on("submit", (e): void => {
        e.preventDefault();
      });
    }

    tabs() {
      const btnOne = document.querySelector(".form__tab-one");
      const btnTwo = document.querySelector(".form__tab-two");
      const btnThree = document.querySelector(".form__tab-three");

      this.tabsBtn.each((_index, item) => {
        item.addEventListener("click", (e) => {
          if (btnOne?.contains(e.target as Node)) {
            this.points(1);
          } else if (btnTwo?.contains(e.target as Node)) {
            this.points(2);
          } else if (btnThree?.contains(e.target as Node)) {
            this.points(3);
          }
        });
      });
    }

    points(num: number = 1) {
      const btnOne = document.querySelector(".form__tab-one");
      const btnTwo = document.querySelector(".form__tab-two");
      const btnThree = document.querySelector(".form__tab-three");
      const noErrorFirst = !$(".form").is(".form_erroe-one");
      const noErrorSecond = !$(".form").is(".form_erroe-two");
      if (num === 1) {
        btnThree?.classList.remove("form__tab_active");
        btnTwo?.classList.remove("form__tab_active");
        btnOne?.classList.add("form__tab_active");

        this.form.removeClass("form_state-two form_state-three");
        this.form.addClass("form_state-one");

        this.tabsSlider.css({
          left: "0",
        });
      } else if (num === 2 && noErrorFirst) {
        btnThree?.classList.remove("form__tab_active");
        btnOne?.classList.remove("form__tab_active");
        btnTwo?.classList.add("form__tab_active");

        this.form.removeClass("form_state-one form_state-three");
        this.form.addClass("form_state-two");

        this.tabsSlider.css({
          left: "33.3%",
        });
      } else if (num === 3 && noErrorFirst && noErrorSecond) {
        btnOne?.classList.remove("form__tab_active");
        btnTwo?.classList.remove("form__tab_active");
        btnThree?.classList.add("form__tab_active");


        this.form.removeClass("form_state-one form_state-two");
        this.form.addClass("form_state-three");

        this.tabsSlider.css({
          left: "68%",
        });
      }
    }

    clickFormBtn() {
      this.formBtn.on("click", () => {
        // const oneState = $(".form").is(".form_state-one");
        // const twoState = $(".form").is(".form_state-two");
        // const threeState = $(".form").is(".form_state-three");


        // if (oneState) {
        // }
        // else if (twoState) {
        //   this.points(3);
        // } else if (threeState) {
        //   this.points(1);
        // }
      });
    }

    addError(num: number) {
      if (num === 1) {
      } else if (num === 2) {
      } else if (num === 3) {
      }
    }

    clickBtn() {
      alert("В скором времени вам позвонят.");
      this.input.val("");
      $(".adviser__input").removeClass("adviser__input_active");
    }

    inputMask() {
      const inputs = document.querySelectorAll("input[name='phone']")
      inputs.forEach(item => {
        const input = item as HTMLInputElement
        input.addEventListener("input", () => {
          if(input.value.length === 1){
            input.value = "+" + input.value
            if(input.value === "+0"){
              input.value = "+380"
            }
          }
          if(validatePhoneNumberLength(input.value + '0') === "TOO_LONG"){
            input.value = input.value.slice(0, -1)
          }
          input.value = new AsYouType().input(input.value)
        })
      })
    }



    validateTel(inputWrap: string){
      const element = $(inputWrap) as JQueryValidateForm;

      ($ as addValidator).validator.addMethod("min", function(value : string) {
        if(/\+380/.test(value)){
          return  value.replace(/ |\+/g, '').length >= 12;
        }else{
          return  value.replace(/ |\+/g, '').length >= 10;
        }
      }, 'Номер должен состоять из 10 цифр');

      element.validate({
          rules: {
            phone: {
              min: true,
              required: true
            },
        },
        messages: {
          phone: {
            required: "Введите номер"
          },
        },
        submitHandler(form : JQuery<HTMLElement>) {
          $(inputWrap).find(".input-row").removeClass("input_active")
          console.log($(inputWrap))
          alert("Мы скоро с вами свяжемся")
          $(form).trigger("reset");
        }
       });
    }

    validateMainFormOne(){
      const element = $("#form-state-one") as JQueryValidateForm;

      document.addEventListener("selectTour", () => {
        $("#drop-country").valid();
      });

      document.addEventListener("startDate", () => {
        $("#drop-calendar").valid();
      });

      document.addEventListener("finalDate", () => {
        $("#drop-calendar").valid();
      });

      ($ as addValidator).validator.addMethod("dropCountry", function() {
        const checkCountry = $(".drop-country__county").html();
        return checkCountry !== "Страна"
      }, 'Выбирите тур');

      ($ as addValidator).validator.addMethod("departure", function() {
        const startDate = $("#start-date").html();
        return startDate.length > 0
      }, 'Выберите дату вылета');

      ($ as addValidator).validator.addMethod("arrived", function() {
        const finalDate = $("#final-date").html();
        return finalDate.length > 0
      }, 'Выберите дату возвращения');

      element.validate({
        rules: {
          dropCalendar: {
            departure: true,
            arrived: true,
          },
          dropCountry: {
            dropCountry: true,
          },
        },
      submitHandler() {
        alert("Мы скоро с вами свяжемся")
      }
     });
    }

    validateMainFormThree(){
      const element = $("#form-state-three") as JQueryValidateForm;

      // document.addEventListener("selectTour", () => {
      //   $("#drop-country").valid();
      // });

      ($ as addValidator).validator.addMethod("laxEmail", function(value: string) {
        return /^(?!.*\.\.)[\w.-]{3,20}@[\wа-я.][\wа-я.-]{3,20}[\wа-я.]\.[a-z]{2,10}/.test(value);
      }, 'Введите корректный email');

      ($ as addValidator).validator.addMethod("min", function(value : string) {
        if(/\+380/.test(value)){
          return  value.replace(/ |\+/g, '').length >= 12;
        }else{
          return  value.replace(/ |\+/g, '').length >= 10;
        }
      }, 'Номер должен состоять из 10 цифр');

      element.validate({
        rules: {
          phone: {
            min: true,
          },
          email: {
            laxEmail: true,
          },
          name: {
            required: true,
            minlength: 3,
          },
        },
        messages: {
          name: {
            required: "Введите ваше имя",
            minlength: "Минимум три символа",
          }
        },
      submitHandler(form : JQuery<HTMLElement>) {
        alert("Мы скоро с вами свяжемся2")
        $(form).trigger("reset");
      }
     });
    }
  


  }
  new TourRequest();
  new Preloader();
  new IsAuthorization();
});
