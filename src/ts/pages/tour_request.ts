import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { DropCountry } from "../code/tour_request/drop-country";
import { Calendar } from "../code/tour_request/calendar";
import { DropDown } from "../code/tour_request/dropdown";
import { Food } from "../code/tour_request/food";
import $ from "jquery";
import 'jquery-validation';



interface JQueryValidateForm extends JQuery<HTMLElement> {
  validate(object: Object): void;
  // addMethod(str: string, callback: Function, errorInfo: string): void;
  // validator: addMet
}


type addMet = {
  addMethod(str: string, callback: Function, errorInfo: string): void
}

interface addValidator extends JQueryStatic {
  validator: addMet
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
      this.inputMask(".adviser__input");
      this.inputMask(".form__phone");
      this.validateTel("#adviser__form");

      // $(".adviser__input").submit(function(event) {
      //   // Предотвращаем стандартное поведение формы (перезагрузку страницы)
      //   event.preventDefault();
      // });

      this.tabs();
      this.points();
      this.stopReload();
      this.clickFormBtn();
      this.SelectStars();
      this.validateMainFormOne();

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
      console.log(num);
      const btnOne = document.querySelector(".form__tab-one");
      const btnTwo = document.querySelector(".form__tab-two");
      const btnThree = document.querySelector(".form__tab-three");
      const noErrorFirst = !$(".form").is(".form_erroe-one");
      const noErrorSecond = !$(".form").is(".form_erroe-two");
      if (num === 1) {
        btnThree?.classList.remove("form__tab_active");
        btnTwo?.classList.remove("form__tab_active");
        btnOne?.classList.add("form__tab_active");

        this.form.removeClass("form_two-state form_three-state");
        this.form.addClass("form_one-state");

        this.tabsSlider.css({
          left: "0",
        });
      } else if (num === 2 && noErrorFirst) {
        btnThree?.classList.remove("form__tab_active");
        btnOne?.classList.remove("form__tab_active");
        btnTwo?.classList.add("form__tab_active");

        this.form.removeClass("form_one-state form_three-state");
        this.form.addClass("form_two-state");

        this.tabsSlider.css({
          left: "33.3%",
        });
      } else if (num === 3 && noErrorFirst && noErrorSecond) {
        btnOne?.classList.remove("form__tab_active");
        btnTwo?.classList.remove("form__tab_active");
        btnThree?.classList.add("form__tab_active");

        this.form.removeClass("form_one-state form_two-state");
        this.form.addClass("form_three-state");

        this.tabsSlider.css({
          left: "68%",
        });
      }
    }

    clickFormBtn() {
      this.formBtn.on("click", () => {
        const oneState = $(".form").is(".form_one-state");
        // const twoState = $(".form").is(".form_two-state");
        // const threeState = $(".form").is(".form_three-state");

        // const rule = this.calendar.checkError();
        // if (rule && oneState) {
        //   // this.points(2);
        // }

        if (oneState) {
        }
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

    inputMask(inputWrapper: string) {
      const wrapper = $(inputWrapper);
      const input = wrapper.find("input");

      function checkEmpy(): void {
        const value: number | undefined = input.val()?.length;
        if (value && value > 0) {
          wrapper.addClass("input_active");
        } else {
          wrapper.removeClass("input_active");
        }
      }

      function mask() {
        const value: string = String(input.val()).replace(/\s/g, "");
        const length: number = value.length;
        const index: number = length - 1;
        const lastNum: string = value[index];
        const numRule = /[0-9]/.test(lastNum);

        if (!numRule || length > 10) {
          input.val(String(input.val()).slice(0, -1));
        } else if (length < 3) {
          input.val(value);
        } else if (length >= 3 && length < 10) {
          input.val(
            `${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6, 8)} ${value.slice(8, 10)}`.trim(),
          );
        }
      }

      input.on("input", () => {
        mask();
        checkEmpy();
      });
    }



    validateTel(inputWrap: string){
      const element = $(inputWrap) as JQueryValidateForm;
      element.validate({
          rules: {
            tel: {
                minlength: 13,
            },
        },
        messages: {
            tel: {
                minlength: "Номер должен состоять из 10 цифр"
            },
        },
        highlight: function(element: JQuery<HTMLElement>, _errorClass: string, validClass: string) {
          $(element).addClass("border-error").removeClass(validClass);
        },
        unhighlight: function(element: JQuery<HTMLElement>, _errorClass: string, validClass: string) {
          $(element).addClass(validClass).removeClass("border-error");
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
      function validateCountry(){
        console.log(12)
        const ruleCounrty: boolean = $(".drop-country__county").html() === "Страна";
        if(ruleCounrty){
          $('.drop-country').addClass("drop-country_error")
        }
      }
      $(".form__btn-first-state").on("click", validateCountry)
    }
  


  }
  new TourRequest();
});
