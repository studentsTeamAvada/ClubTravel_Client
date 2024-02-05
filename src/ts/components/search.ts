import $ from "jquery";
import AirDatepicker from "air-datepicker";
// @ts-ignore
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";
import { app } from "../modules/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  DocumentData,
} from "firebase/firestore";
import { ResultSwiper } from "../pages/code/swiper";
import { DropdownSearch } from "./../components/dropSearch";

new DropdownSearch(".info__destination-select");
new DropdownSearch(".info__duration-select");
new DropdownSearch(".info__date-select");
new DropdownSearch(".info__guests-select");

enum Destination {
  All = 0,
  Egypt = 1,
  AOE = 2,
  Thailand = 3,
  Bulgaria = 4,
  Chornogoria = 5,
  Indonesia = 6,
  Georgia = 7,
  Greece = 8,
  Turkey = 9,
  Cyprus = 10,
  Tunisia = 11,
  Spain = 12,
  Ukraine = 13,
}

enum Duration {
  One = 1,
  Seven = 2,
  Ten = 3,
  Fourteen = 4,
  TwentyOne = 5,
}

enum Regions {
  SharmElSheikh = 1,
  Hurghada = 2,
  Dubai = 3,
  AbuDhabi = 4,
  Bangkok = 5,
  KuahHin = 6,
  SunnyBeach = 7,
  GoldenSands = 8,
  Budva = 9,
  StefanBridge = 10,
  Bali = 11,
  Batumi = 13,
  Rodos = 15,
  Marmaris = 17,
  Paphos = 19,
  Suss = 21,
  Tenerife = 23,
  Majorca = 24,
  Bukovyn = 25,
  Uldag = 27,
  Bansko = 28,
  Borovets = 29,
}

// enum Meals {
//   // Без питания
//   ao = 0,
//   // Завтрак
//   bb = 1,
//   // Завтрак и ужин
//   hb = 2,
//   //   Завтрак, обед, ужин
//   fb = 3,
//   // Всё включено
//   ai = 4,
//   // Ультра все включено
//   uai = 5,
// }

export class Search {
  dropdown: JQuery<HTMLDivElement>;
  dropdownRow: JQuery<HTMLElement>;
  dropdownList: JQuery<HTMLElement>;
  dropdownItem: JQuery<HTMLElement>;
  dropdownHeight: number;
  urlParams: URLSearchParams | undefined;
  hotelCounry: string | null | undefined;
  hotelRegion: string | null | undefined;
  cardHotel: Array<object>;

  constructor() {
    this.dropdown = $(".dropdown");
    this.dropdownRow = this.dropdown.find(".dropdown__row");
    this.dropdownList = this.dropdown.find(".dropdown__list");
    this.dropdownItem = this.dropdown.find(".dropdown__item");
    this.dropdownHeight = this.dropdownList.height() ?? 0;
    this.cardHotel = [];
    console.log(this.cardHotel);

    this.init();
  }

  init() {
    this.selectCountry();
    this.selectDuration();
    this.readDataUrl();
    this.initCalendar();
    this.updateCounterAdults();
    this.updateCounterKids();
    this.renderStars();
    this.priceSlider();
    this.selectMeal();
  }

  readDataUrl(): void {
    this.urlParams = new URLSearchParams(window.location.search);
    this.hotelCounry = this.urlParams.get("isCountry");
    this.hotelRegion = this.urlParams.get("isRegion");
    this.hotelMeals = this.urlParams.get("isMeals");

    console.log("hotelCounry:", this.hotelCounry);
    console.log("hotelRegion:", this.hotelRegion);

    if (this.hotelCounry && this.hotelRegion) {
      const destination =
        Destination[this.hotelCounry as keyof typeof Destination];
      const region = Regions[this.hotelRegion as keyof typeof Regions];
      this.clickDestination(destination, region);
    }
  }

  clickDestination(destination: Destination, region: Regions): void {
    this.getCountry(destination, region);
  }

  clickDuration(duration: Duration): void {
    this.getDuration(duration);
  }

  selectCountry(): void {
    $(".dropdown__item[data-destination]").on("click", (event) => {
      const destinationName = $(event.currentTarget).data("destination");

      if (destinationName) {
        const destination =
          Destination[destinationName as keyof typeof Destination];
        this.clickDestination(
          destination as Destination,
          destination as unknown as Regions
        );
      }
    });
  }

  selectDuration(): void {
    $(".dropdown__item[data-duration]").on("click", (event) => {
      const durationName = $(event.currentTarget).data("duration");
      if (durationName) {
        const duration = Duration[durationName as keyof typeof Duration];
        this.clickDuration(duration);
      }
    });
  }

  async getCountry(
    destinationName: Destination,
    regionName: Regions
  ): Promise<void> {
    const db = getFirestore(app);
    let q;

    const destinationVal = Destination[destinationName];
    const regionVal = Regions[regionName];

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("isCountry", destinationVal.toString());
    // newUrl.searchParams.set("isRegion", regionVal.toString());
    window.history.pushState({}, "", newUrl.toString());

    this.cardHotel = [];

    if (destinationName === Destination.All) {
      q = query(collection(db, "hotels"), where("isCountry", "!=", ""));
    } else {
      q = query(
        collection(db, "hotels"),
        where("isCountry", "==", +destinationName),
        where("isRegion", "==", +regionName)
      );
    }

    try {
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        this.cardHotel.push(doc.data());
      });

      this.renderHotels(this.cardHotel);
      new ResultSwiper();
      this.renderRegions(this.cardHotel);
    } catch (error) {
      console.error(error);
    }
  }

  async getDuration(durationName: Duration): Promise<void> {
    const db = getFirestore(app);
    const q = query(
      collection(db, "hotels"),
      where("isDuration", "==", durationName)
    );

    try {
      const querySnapshot = await getDocs(q);

      // $(".result__content").html("");

      querySnapshot.forEach((doc) => {
        const cardHotel = doc.data();
        console.log(cardHotel);
      });
    } catch (error) {
      console.error("Помилка при отриманні даних:", error);
    }
  }

  renderHotels(info: DocumentData[]): void {
    $(".result__content").html("");

    if (info.length > 0) {
      info.forEach((item: DocumentData) => {
        const hotelHtml = `
        <div class="result__hotel">

        <div class="result__slider">
          <div class="swiper result__swiper">
            <div class="swiper-wrapper result__wrapper">

              <div class="swiper-slide result__slide">
                <picture>
                  <source srcset="${item.img[0].urlWebp}" type="image/webp">
                  <img src="${item.img[0].url}" alt="photo">
                </picture>
              </div>

              <div class="swiper-slide result__slide">
                <picture>
                  <source srcset="${item.img[1].urlWebp}" type="image/webp">
                  <img src="${item.img[1].url}" alt="photo">
                </picture>
              </div>

              <div class="swiper-slide result__slide">
                <picture>
                  <source srcset="${item.img[2].urlWebp}" type="image/webp">
                  <img src="${item.img[2].url}" alt="photo">
                </picture>
              </div>

              <div class="swiper-slide result__slide">
                <picture>
                  <source srcset="${item.img[3].urlWebp}" type="image/webp">
                  <img src="${item.img[3].url}" alt="photo">
                </picture>
              </div>

              <div class="swiper-slide result__slide">
                <picture>
                  <source srcset="${item.img[4].urlWebp}" type="image/webp">
                  <img src="${item.img[4].url}" alt="photo">
                </picture>
              </div>

            </div>

            <div class="swiper-button-next result__btn-next">
              <svg>
                <use xlink:href="#chevron-left"></use>
              </svg>
            </div>

            <div class="swiper-button-prev result__btn-prev">
              <svg>
                <use xlink:href="#chevron-left"></use>
              </svg>
            </div>

          </div>
        </div>

        <div class="result__row">

          <div class="result__info">
            <h4 class="result__info-title">${item.name}</h4>

            <div class="result__info-location">
              <svg>
                <use xlink:href="#point"></use>
              </svg>
              <p class="result__info-country">${item.country}</p>
              <p class="result__info-region">${item.region}</p>
            </div>

            <p class="result__info-descript">${item.description[0].main}</p>
            <a class="result__info-link"  href="hotel.html">
              Подробнее об отеле
              <svg>
                <use xlink:href="#arrow-right"></use>
              </svg>
            </a>
          </div>

          <div class="result__rating">
            <div class="result__rating-star">

            </div>

            <p class="result__rating-duration">
              <svg>
                <use xlink:href="#clock"></use>
              </svg>
              ${item.duration}
            </p>

            <p class="result__rating-meal">
              <svg>
                <use xlink:href="#food"></use>
              </svg>
              ${item.meals}
            </p>

            <p class="result__rating-room">
              <svg>
                <use xlink:href="#house"></use>
              </svg>
              ${item.room[0]}
            </p>

            <p class="result__rating-beach">
              <svg>
                <use xlink:href="#sun"></use>
              </svg>
              ${item.beach}
            </p>
          </div>

          <div class="result__price">
            <p class="result__price-num"> ${item.price[0]}</p>
          </div>

        </div>

      </div>`;

        $(".result__content").append(hotelHtml);
      });
    } else {
      $(".result__content").html(`
      <div class="result__not-found">
        <h2 class="result__not-found-title">По вашему запросу ничего не найдено</h2>
        <p class="result__not-found-text">Попробуйте изменить параметры поиска</p>
      </div>
      `);
    }
  }

  initCalendar(): void {
    new AirDatepicker("#calendar");
  }

  updateCounterAdults(): void {
    let adultsCounter = $(".info__guests-counter");

    $(".info__guests-item_adults").each(function () {
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

  updateCounterKids(): void {
    let kidsCounter = $(".info__guests-subcounter");

    $(".info__guests-item_kids").each(function () {
      let minusBtn = $(this).find(".info__guests-minus_kids");
      let plusBtn = $(this).find(".info__guests-plus_kids");
      let counter = $(this).find(".info__guests-counters_kids");

      minusBtn.on("click", function () {
        let currentVal = +counter.text();
        if (currentVal > 0) {
          counter.text(currentVal - 1);
          kidsCounter.text(currentVal - 1);
          $(".info__guests-item").last().remove();
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
            <li class="info__guests-item guests__item_years">
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
          $(".info__guests-list").append(yearsHtml);
          for (let i = 0; i < $(".guests__item_years").length; i++) {
            $(".guests__num")
              .eq(i)
              .text(i + 1);
          }
        }
      });
    });
  }

  renderStars(): void {
    const numStars: number[] = [2, 3, 4, 5];
    const starIcons = numStars.map((num) =>
      Array.from(
        { length: num },
        () => `
        <svg>
            <use xlink:href="#start"></use>
        </svg>`
      ).join("")
    );

    $(".category__btns-stars").each((index, element) => {
      $(element).html(starIcons[index]);
    });
  }

  priceSlider(): void {
    const slider = document.querySelector(".category__slider") as HTMLElement;
    noUiSlider.create(slider, {
      start: [600, 3700],
      connect: true,
      range: {
        min: 400,
        max: 4000,
      },
      tooltips: true,
      format: {
        to: function (value) {
          return Math.round(+value) + "€";
        },
        from: function (value) {
          return Math.round(+value);
        },
      },
      step: 200,
      pips: {
        // @ts-ignore
        mode: "range",
        // stepped: true,
        density: 10,
      },
    });
    $(".noUi-value").each(function () {
      $(this).text($(this).text() + "€");
    });
  }

  renderRegions(region: DocumentData): void {
    $(".category__regions-item").html("");
    region.forEach((item: DocumentData) => {
      const regionHtml = `
        <button data-region="${item.region}" class="category__btns category__btns-regions">
          <svg>
            <use xlink:href="#check-circle"></use>
          </svg>
          ${item.region}
        </button>`;

      $(".category__regions-item").append(regionHtml);
    });

    $(".category__btns-regions").on("click", (event) => {
      const regionName = $(event.currentTarget).data("region");
      if (regionName) {
        // console.log(regionName);

        // this.urlParams = new URLSearchParams(window.location.search);
        // this.hotelRegion = this.urlParams.get("isRegion");
        // const region = Regions[this.hotelRegion as keyof typeof Regions];
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set("isRegion", regionName.toString());
        window.history.pushState({}, "", newUrl.toString());

        switch (regionName) {
          case "Шарм-эль-Шейх":
            this.clickDestination(Destination.Egypt, Regions.SharmElSheikh);
            break;
          case "Хургада":
            this.clickDestination(Destination.Egypt, Regions.Hurghada);
            break;
          case "Дубай":
            this.clickDestination(Destination.AOE, Regions.Dubai);
            break;
          case "Абу-Даби":
            this.clickDestination(Destination.AOE, Regions.AbuDhabi);
            break;
          case "Бангкок":
            this.clickDestination(Destination.Thailand, Regions.Bangkok);
            break;
          case "Хуа Хин":
            this.clickDestination(Destination.Thailand, Regions.KuahHin);
            break;
          case "Солнечный берег":
            this.clickDestination(Destination.Bulgaria, Regions.SunnyBeach);
            break;
          case "Золотые пески":
            this.clickDestination(Destination.Bulgaria, Regions.GoldenSands);
            break;
          case "Будва":
            this.clickDestination(Destination.Chornogoria, Regions.Budva);
            break;
          case "Свети Стефан":
            this.clickDestination(
              Destination.Chornogoria,
              Regions.StefanBridge
            );
            break;
          case "Бали":
            this.clickDestination(Destination.Indonesia, Regions.Bali);
            break;
          case "Батумі":
            this.clickDestination(Destination.Georgia, Regions.Batumi);
            break;
          case "Родос":
            this.clickDestination(Destination.Greece, Regions.Rodos);
            break;
          case "Мармарис":
            this.clickDestination(Destination.Turkey, Regions.Marmaris);
            break;
          case "Пафос":
            this.clickDestination(Destination.Cyprus, Regions.Paphos);
            break;
          case "Сусс":
            this.clickDestination(Destination.Tunisia, Regions.Suss);
            break;
          case "Тенерифе":
            this.clickDestination(Destination.Spain, Regions.Tenerife);
            break;
          case "Майорка":
            this.clickDestination(Destination.Spain, Regions.Majorca);
            break;
          case "Буковель":
            this.clickDestination(Destination.Ukraine, Regions.Bukovyn);
            break;
          case "Улудаг":
            this.clickDestination(Destination.Turkey, Regions.Uldag);
            break;
          case "Бансько":
            this.clickDestination(Destination.Bulgaria, Regions.Bansko);
            break;
          case "Боровець":
            this.clickDestination(Destination.Bulgaria, Regions.Borovets);
            break;
          case "":
            this.clickDestination(Destination.All, Regions.SharmElSheikh);
            break;
          default:
        }
      }
    });
  }

  selectMeal(): void {
    $(".category__btns-meals[data-meals]").on("click", (event) => {
      const mealName = $(event.currentTarget).data("meals");
  
      if (mealName) {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set("isMeals", mealName.toString());
        window.history.pushState({}, "", newUrl.toString());

        switch (mealName) {
          
        }
      }

        // const meal = Meals[mealName as keyof typeof Meals];
        // this.clickMeal(meal);
      
    });
  }
}
