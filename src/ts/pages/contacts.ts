import { Header } from "../components/header";
import { Footer } from "../components/footer";
import $ from "jquery";
import 'jquery-validation';
import { Preloader } from "../components/preloader";

type JQueryValidateForm = JQuery<HTMLFormElement>;


type addValidator = {
  validator: {
    addMethod: (
      name: string,
      method: (value: string, element: Element) => boolean,
      message: string
    ) => void;
  };
};

class Contacts {
  header: Header;
  footer: Footer;

  constructor() {
    this.header = new Header();
    this.footer = new Footer();
    this.init();
  }

  init() {
    this.validateForm();
  }

  validateForm() {
    const element = $("#form") as JQueryValidateForm;

    ($ as addValidator).validator.addMethod("laxEmail", function(value: string) {
      return /^(?!.*\.\.)[\w.-]{3,20}@[\wа-я.][\wа-я.-]{3,20}[\wа-я.]\.[a-z]{2,10}/.test(value);
    }, 'Введите корректный email');

    element.validate({
      rules: {
        phone: {
          required: true,
          minlength: 13,
        },
        main: {
          laxEmail: true,
          required: true,
          minlength: 13,
        },
      },
      messages: {
        phone: {
          required: "Введите номер",
          minlength: "Номер должен состоять из 10 цифр"
        },
        main: {
          required: "Введите почту",
          minlength: "Номер должен состоять из 10 цифр"
        },
      },
      highlight: function(element: HTMLElement, _errorClass: string, validClass: string) {
        return $(element).addClass("border-error").removeClass(validClass);
      },
      unhighlight: function(element: HTMLElement, _errorClass: string, validClass: string) {
        return $(element).addClass(validClass).removeClass("border-error");
      },
      submitHandler(form: HTMLFormElement) {
        alert("Мы скоро с вами свяжемся");
        $(form).trigger("reset");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new Contacts();
  new Preloader()
})