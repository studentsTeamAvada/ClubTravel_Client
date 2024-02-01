import $ from "jquery";
export class Dropdown {
  dropdown: JQuery<HTMLElement>;
  dropdownRow: JQuery<HTMLElement>;
  dropdownList: JQuery<HTMLElement>;
  dropdownItems: JQuery<HTMLElement>;
  dropdownCurrent: JQuery<HTMLElement>;
  dropdownIcon: JQuery<HTMLElement>;
  urlParam: URLSearchParams | undefined;
  currentUrl: string | null | undefined;

  constructor(className: string) {
    this.dropdown = $(className);
    this.dropdownRow = this.dropdown.find(".dropdown__row");
    this.dropdownList = this.dropdown.find(".dropdown__list");
    this.dropdownItems = this.dropdown.find(".dropdown__item");
    this.dropdownCurrent = this.dropdown.find(".dropdown__current");
    this.dropdownIcon = this.dropdown.find(".dropdown__icon");

    this.init();
  }

  init() {
    this.urlParam = new URLSearchParams(window.location.search);
    this.currentUrl = this.urlParam.get("isCountry");

    this.currentVal(); 
    this.toggleDropdown();
    this.dropdownObserver();
    if (this.currentUrl !== null) {
      this.changeCurrentVal(this.currentUrl);
    }
    switch (this.currentUrl) {
      case "All":
        this.dropdownCurrent.text("Все направления");
        break;
      case "Egypt":
        this.dropdownCurrent.text("Египет");
        break;
      case "AOE":
        this.dropdownCurrent.text("АОЭ");
        break;
      case "Thailand":
        this.dropdownCurrent.text("Тайланд");
        break;
      case "Bulgaria":
        this.dropdownCurrent.text("Болгария");
        break;
      case "Chornogoria":
        this.dropdownCurrent.text("Чорногория");
        break;
      case "Indonesia":
        this.dropdownCurrent.text("Індонезия");
        break;
      case "Georgia":
        this.dropdownCurrent.text("Грузия");
        break;
      case "Greece":
        this.dropdownCurrent.text("Греция");
        break;
      case "Turkey":
        this.dropdownCurrent.text("Турция");
        break;
      case "Cyprus":
        this.dropdownCurrent.text("Кипр");
        break;
      case "Tunisia":
        this.dropdownCurrent.text("Тунис");
        break;
      case "Spain":
        this.dropdownCurrent.text("Испания");
        break;
      case "Ukraine":
        this.dropdownCurrent.text("Украина");
        break;
      default:
        this.dropdownCurrent.text("");
    }
  }

  currentVal(): void {
    this.dropdownCurrent.text("");
  }

  toggleDropdown(): void {
    this.dropdownRow.on("click", () => {
      this.dropdownList.toggleClass("dropdown__list_show");
      this.dropdownIcon.toggleClass("dropdown__icon_rotate");
    });

    this.dropdownItems.on("click", (e: JQuery.ClickEvent) => {
      this.dropdownCurrent.text($(e.target).text());
      this.dropdownList.removeClass("dropdown__list_show");
      this.dropdownIcon.removeClass("dropdown__icon_rotate");
    });

    $(document).on("click", (e: JQuery.ClickEvent) => {
      const dropdownIs: boolean = this.dropdown.is(e.target);
      const dropdownHas: boolean = this.dropdown.has(e.target).length === 0;

      if (!dropdownIs && dropdownHas) {
        this.dropdownList.removeClass("dropdown__list_show");
        this.dropdownIcon.removeClass("dropdown__icon_rotate");
      }
    });
  }

  dropdownObserver(): void {
    const options = {
      rootMargin: `0px 0px -${this.dropdownList.outerHeight()}px 0px`,
      threshold: 1,
    };
    const observer = new IntersectionObserver(
      this.callback.bind(this),
      options
    );
    observer.observe(this.dropdown[0]);
  }

  callback(entries: IntersectionObserverEntry[]): void {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.dropdownList.css("top", `${this.dropdownRow.outerHeight()}px`);
      } else {
        this.dropdownList.css("top", `-${this.dropdownList.outerHeight()}px`);
      }
    });
  }

  changeCurrentVal(info: string): void{
    this.dropdownCurrent.text(info);
  }
}
