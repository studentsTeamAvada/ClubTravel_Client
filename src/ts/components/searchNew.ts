import { app } from "../modules/firebase";
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import $ from "jquery";
import { DropdownSearch } from "./dropSearch";
import noUiSlider, { target } from "nouislider";
import "nouislider/dist/nouislider.css";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import { ResultSwiper } from "./../pages/code/swiper";

new DropdownSearch(".info__destination-select");

new DropdownSearch(".info__duration-select");
new DropdownSearch(".info__date-select");

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

enum Regions {
  All = 0,
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

enum Meals {
  all = 0,
  // Без питания
  ao = 1,
  // Завтрак
  bb = 2,
  // Завтрак и ужин
  hb = 3,
  //   Завтрак, обед, ужин
  fb = 4,
  // Всё включено
  ai = 5,
  // Ультра все включено
  uai = 6,
}

enum Stars {
  all = 0,
  three = 2,
  four = 3,
  five = 4,
  apart = 5,
}

enum Duration {
  all = 0,
  three = 1,
  seven = 2,
  ten = 3,
  fourteen = 4,
  twentyOne = 5,
}

enum Departure {
  all = 0,
  kiev = 1,
  lviv = 2,
}

interface Hotel {
  name: string;
  country: Destination;
  isCountry: number;
  region: Regions;
  isRegion: number;
  meal: Meals;
  isMeals: number;
  star: Stars;
  isStar: number;
  price: number[];
  duration: Duration;
  isDuration: number;
  flight: boolean;
  touristPackage: boolean;
  departure: Departure;
  date: {seconds:number};
}

export class Country {
  countryArr: Hotel[];
  searchPanelBtn: JQuery<HTMLElement>;
  destinationCurrent: JQuery<HTMLElement>;
  countryFilterArr: Hotel[];
  regionsCurrent: JQuery<HTMLElement>;
  durationCurrent: JQuery<HTMLElement>;
  durationFilterArr: Hotel[];

  constructor() {
    this.searchPanelBtn = $(".search__panel-btn");
    this.destinationCurrent = $(".info__destination-current");
    this.regionsCurrent = $(".category__regions-current");
    this.durationCurrent = $(".info__duration-current");

    this.countryArr = [];
    this.countryFilterArr = [];
    this.durationFilterArr = [];
    this.init();
    const localStorageData = localStorage.getItem("countryArr");
    if (localStorageData) {
      this.countryArr = JSON.parse(localStorageData);
    }
    // this.renderInfo(this.countryArr);
  }

  async init(): Promise<void> {
    // await this.getCountry();

    this.bindEvents();
  }

  // async getCountry(): Promise<void> {
  //   const db = getFirestore(app);
  //   const hotelsRef = collection(db, "hotels");

  //   try {
  //     const querySnapshot = await getDocs(hotelsRef);
  //     this.countryArr = querySnapshot.docs.map<Hotel>(
  //       (doc: QueryDocumentSnapshot<DocumentData>) => doc.data() as Hotel
  //     );
  // localStorage.setItem('countryArr', JSON.stringify(this.countryArr));
  //   } catch (error) {
  //     console.error("Error getting documents: ", error);
  //   }
  // }

  bindEvents(): void {
    this.searchPanelBtn.on("click", () => this.filterCountry());
    window.addEventListener("load", () => this.restoreFilterFromUrl());
  }

  countryToNumber(info: string): Destination {
    switch (info) {
      case "Египет":
        return Destination.Egypt;
      case "АОЭ":
        return Destination.AOE;
      case "Таиланд":
        return Destination.Thailand;
      case "Болгария":
        return Destination.Bulgaria;
      case "Чорногория":
        return Destination.Chornogoria;
      case "Индонезия":
        return Destination.Indonesia;
      case "Грузия":
        return Destination.Georgia;
      case "Греция":
        return Destination.Greece;
      case "Турция":
        return Destination.Turkey;
      case "Кипр":
        return Destination.Cyprus;
      case "Тунис":
        return Destination.Tunisia;
      case "Испания":
        return Destination.Spain;
      case "Украина":
        return Destination.Ukraine;
      default:
        return Destination.All;
    }
  }

  restoreFilterFromUrl(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const savedDestination = urlParams.get("isCountry");

    if (savedDestination) {
      this.destinationCurrent.val(savedDestination);
      this.filterCountry();
    }
  }

  filterCountry(): void {
    const destinationName = this.destinationCurrent.text().trim();
    const destination = this.countryToNumber(destinationName);
    this.countryFilterArr = this.countryArr.filter((item: Hotel) => {
      if (destination === Destination.All) {
        return true;
      } else {
        return item.isCountry === destination;
      }
    });

    this.renderHotels(this.countryFilterArr);
    this.renderRegions(this.countryFilterArr);
    this.renderInfo(this.countryFilterArr);
    new ResultSwiper();
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("isCountry", destination.toString());
    if (newUrl.searchParams.has("isRegion")) {
      newUrl.searchParams.delete("isRegion");
    }
    window.history.pushState({}, "", newUrl.toString());
  }

  renderHotels(info: DocumentData[]): void {
    $(".result__content").html("");

    if (info.length > 0) {
      info.forEach((item) => {
        const starsCount = item.star;
        let starsHTML = "";

        for (let i = 0; i < starsCount; i++) {
          starsHTML += `<svg><use xlink:href="#star"></use></svg>`;
        }

        const seconds = item.date.seconds;
        const dateObj = new Date(seconds * 1000);
        const day = dateObj.getDate();  
        const monthNames = ['янв.', 'фев.', 'мар.', 'апр.', 'май.', 'июн.', 'июл.', 'авг.', 'сен.', 'окт.', 'ноя.', 'дек.'];
        const month = monthNames[dateObj.getMonth()];
        const year = dateObj.getFullYear();
        const formattedDate = `${day} ${month} ${year}`;
        

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
                  ${starsHTML}
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
                <p class="result__price-num"><span>${item.room.length}</span> предложения от <span>${item.price[0]}€</span><span>/чел</span></p>
                <button class="result__price-btn">Открыть</button>
              </div>
    
            </div>
    
          </div>

          <div class="result__advanced advanced">
          <div class="advanced__header">
            <p class="advanced__header-text">Дата</p>
            <p class="advanced__header-text">Период</p>
            <p class="advanced__header-text">Питание</p>
            <p class="advanced__header-text">Тип номера</p>
            <p class="advanced__header-text">Стоимость</p>
          </div>

          <div class="advanced__body">
          ${
            Array.isArray(item.room)
              ? item.room
                  .map(
                    (room: any) => `
          <div class="advanced__body-row">
            <p class="advanced__body-date">${formattedDate}</p>
            <p class="advanced__body-duration">${item.duration}</p>
            <p class="advanced__body-meals">${item.meals}</p>
            <p class="advanced__body-rooms">${room}</p>
            <p class="advanced__body-price">${item.price[0]}€<span>/чел</span></p>
            <a class="advanced__body-link" href="hotel.html">выбрать</a>
          </div>
          <hr class="advanced__body-line"></hr>
        `
                  )
                  .join("")
              : ""
          }
          </div>
        </div>
          
          
          
          `;

        $(".result__content").append(hotelHtml);
      });
    } else {
      $(".result__content").html(`
          <div class="result__not-found">
            <h2 class="result__not-found-title">По вашему запросу ничего не найдено</h2>
            <p class="result__not-found-text">Попробуйте изменить параметры поиска</p>
          </div>`);
    }
    $(".result__price button").on("click", function () {
      $(this).toggleClass("result__price-btn_act");
      $(this).closest('.result__price').toggleClass("result__price_act");
  });
  
  }

  renderRegions(region: DocumentData[]): void {
    $(".category__regions-item").html("");
    region.forEach((item) => {
      const regionHtml = `
    <button data-region="${item.region}" class="category__btns category__btns-regions">
      <svg>
        <use xlink:href="#check-circle"></use>
      </svg>
      ${item.region}
    </button>`;
      $(".category__regions-item").append(regionHtml);
    });

    this.selectRegion();

    if ($(".category__regions-item").children().length > 5) {
      $(".category__regions-item").removeClass("category__regions-item_change");
    } else {
      $(".category__regions-item").addClass("category__regions-item_change");
    }
  }

  renderInfo(item: any[]): void {
    $(".result__header").html("");
    const hotels = item.length;
    const offers = item.reduce((acc, item) => acc + item.room.length, 0);
    const infoHtml = `
    <h3 class="result__header-title">
      Найдено <span class="result__header-offers">${offers}</span> предложения в
      <span class="result__header-hotel">${hotels}</span>
      отелях
    </h3>
    
`;

    $(".result__header").append(infoHtml);
  }

  selectRegion() {
    $(".category__btns-regions").on("click", (event) => {
      const regionName = $(event.currentTarget).data("region");
      const region = this.regionToNumber(regionName);
      this.regionsCurrent.text(region);

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("isRegion", region.toString());
      window.history.pushState({}, "", newUrl.toString());
      window.location.reload();
    });
  }

  regionToNumber(info: string): Regions {
    switch (info) {
      case "Шарм-эль-Шейх":
        return Regions.SharmElSheikh;
      case "Хургада":
        return Regions.Hurghada;
      case "Дубай":
        return Regions.Dubai;
      case "Абу-Даби":
        return Regions.AbuDhabi;
      case "Бангкок":
        return Regions.Bangkok;
      case "Хуа Хин":
        return Regions.KuahHin;
      case "Солнечный берег":
        return Regions.SunnyBeach;
      case "Золотые пески":
        return Regions.GoldenSands;
      case "Будва":
        return Regions.Budva;
      case "Свети Стефан":
        return Regions.StefanBridge;
      case "Бали":
        return Regions.Bali;
      case "Батумі":
        return Regions.Batumi;
      case "Родос":
        return Regions.Rodos;
      case "Мармарис":
        return Regions.Marmaris;
      case "Пафос":
        return Regions.Paphos;
      case "Сусс":
        return Regions.Suss;
      case "Тенерифе":
        return Regions.Tenerife;
      case "Майорка":
        return Regions.Majorca;
      case "Буковель":
        return Regions.Bukovyn;
      case "Улудаг":
        return Regions.Uldag;
      case "Бансько":
        return Regions.Bansko;
      case "Боровець":
        return Regions.Borovets;
      default:
        return Regions.All;
    }
  }
}

class Region extends Country {
  regionFilterArr: Hotel[];

  constructor() {
    super();
    this.regionFilterArr = [];
    this.regionsCurrent = $(".category__regions-current");
  }

  bindEvents(): void {
    super.bindEvents();
    this.searchPanelBtn.on("click", () => this.filterRegion());
  }

  restoreFilterFromUrl(): void {
    super.restoreFilterFromUrl();
    const urlParams = new URLSearchParams(window.location.search);
    const savedRegion = urlParams.get("isRegion");
    if (savedRegion) {
      this.regionsCurrent.val(savedRegion);
      this.filterRegion();
    }
  }

  filterRegion(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const savedRegion = urlParams.get("isRegion");
    const region = parseInt(savedRegion as string);

    this.regionFilterArr = this.countryArr.filter((item: Hotel) => {
      if (region === Regions.All) {
        return true;
      } else {
        return item.isRegion === region;
      }
    });

    // console.log(this.regionFilterArr);

    // const newUrl = new URL(window.location.href);
    // newUrl.searchParams.set("isRegion", region.toString());
    // window.history.pushState({}, "", newUrl.toString());

    this.renderHotels(this.regionFilterArr);
    this.renderRegions(this.regionFilterArr);
    new ResultSwiper();
  }
}

class Hotels extends Country {
  mealsFilterArr: Hotel[];
  starsFilterArr: Hotel[];
  priceFilterArr: Hotel[];

  constructor() {
    super();
    this.mealsFilterArr = [];
    this.starsFilterArr = [];
    this.priceFilterArr = [];
    this.selectMeal();
    this.selectStars();
    this.priceSlider();
    this.selectTourAndFlight();
    this.selectDeparture();
  }

  restoreFilterFromUrl(): void {
    super.restoreFilterFromUrl();
    const urlParams = new URLSearchParams(window.location.search);

    urlParams.forEach((_value, key) => {
      switch (key) {
        case "isMeals":
          this.filterMeals();
          break;
        case "isStar":
          this.filterStars();
          break;
        case "priceMin":
        case "priceMax":
          this.filterPrice();
          break;
        case "isTour":
        case "flight":
          this.selectTourAndFlight();
          break;
      }
    });
  }

  selectMeal(): void {
    const selectedMeals = localStorage.getItem("selectedMeals");
    if (selectedMeals) {
      $(`.category__btns-meals[data-meals="${selectedMeals}"]`).addClass(
        "category__btns-meals_act"
      );
    }

    $(".category__btns-meals[data-meals]").on("click", (event) => {
      const mealName = $(event.currentTarget).data("meals");
      const meal = this.numberToMeals(mealName);

      localStorage.setItem("selectedMeals", mealName);

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("isMeals", meal.toString());
      window.history.pushState({}, "", newUrl.toString());
      window.location.reload();

      // const selectedMeals = localStorage.getItem("selectedMeals");
      // if (selectedMeals) {
      //   $(`.category__btns-meals[data-meals="${selectedMeals}"]`).addClass("category__btns-meals_act");
      // }
    });
  }

  numberToMeals(info: string): Meals {
    switch (info) {
      case "ao":
        return Meals.ao;
      case "bb":
        return Meals.bb;
      case "hb":
        return Meals.hb;
      case "fb":
        return Meals.fb;
      case "ai":
        return Meals.ai;
      case "uai":
        return Meals.uai;
      default:
        return Meals.all;
    }
  }

  filterMeals() {
    const urlParams = new URLSearchParams(window.location.search);
    const savedMeals = urlParams.get("isMeals");
    const meals = parseInt(savedMeals as string);

    this.mealsFilterArr = this.countryArr.filter((item: Hotel) => {
      if (meals === Meals.all) {
        return true;
      } else {
        return item.isMeals === meals;
      }
    });

    this.renderHotels(this.mealsFilterArr);
    this.renderRegions(this.mealsFilterArr);

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("isMeals", meals.toString());
    window.history.pushState({}, "", newUrl.toString());
  }

  selectStars(): void {
    $(".category__btns-stars[data-stars]").on("click", (event) => {
      const starsName = $(event.currentTarget).data("stars");
      const stars = this.numberToStars(starsName);

      localStorage.setItem("selectedStars", starsName);

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("isStar", stars.toString());
      window.history.pushState({}, "", newUrl.toString());
      window.location.reload();
    });

    const selectedStars = localStorage.getItem("selectedStars");
    if (selectedStars) {
      $(`.category__btns-stars[data-stars="${selectedStars}"]`).addClass(
        "category__btns-stars_act"
      );
    }
  }

  numberToStars(info: string): Stars {
    switch (info) {
      case "three":
        return Stars.three;
      case "four":
        return Stars.four;
      case "five":
        return Stars.five;
      case "apart":
        return Stars.apart;
      default:
        return Stars.all;
    }
  }

  filterStars(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const savedStars = urlParams.get("isStar");
    const stars = parseInt(savedStars as string);

    this.starsFilterArr = this.countryArr.filter((item: Hotel) => {
      if (stars === Stars.all) {
        return true;
      } else {
        return item.isStar === stars;
      }
    });

    console.log(this.starsFilterArr);

    // const newUrl = new URL(window.location.href);
    // newUrl.searchParams.set("isStar", stars.toString());
    // window.history.pushState({}, "", newUrl.toString());
    this.renderHotels(this.starsFilterArr);
    this.renderRegions(this.starsFilterArr);
  }

  priceSlider(): void {
    const slider = document.querySelector(".category__slider") as target;
    noUiSlider.create(slider, {
      start: [300, 4300],
      connect: true,
      range: {
        min: 300,
        max: 6000,
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
    });

    slider.noUiSlider?.on(
      "change",
      function (values: (string | number)[], _handle: number) {
        const priceMin =
          typeof values[0] === "string"
            ? values[0].slice(0, -1)
            : values[0].toString();
        const priceMax =
          typeof values[1] === "string"
            ? values[1].slice(0, -1)
            : values[1].toString();

        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set("priceMin", priceMin);
        newUrl.searchParams.set("priceMax", priceMax);

        window.history.pushState({}, "", newUrl.toString());
        window.location.reload();
      }
    );
  }

  filterPrice(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const savedPriceMin = urlParams.get("priceMin");
    const savedPriceMax = urlParams.get("priceMax");
    let priceMin = parseInt(savedPriceMin || "400");
    let priceMax = parseInt(savedPriceMax || "4000");
    console.log(123);
    if (isNaN(priceMin) || isNaN(priceMax) || priceMin > priceMax) {
      priceMin = 400;
      priceMax = 4000;
    }

    this.priceFilterArr = this.countryArr.filter((item: Hotel) => {
      return item.price.some((price) => price >= priceMin && price <= priceMax);
    });

    console.log(this.priceFilterArr);
    this.renderHotels(this.priceFilterArr);
    this.renderRegions(this.priceFilterArr);
  }

  selectTourAndFlight(): void {
    const context = this;
    const newUrl = new URL(window.location.href);

    $(".category__btns-tour[data-tour]").on("click", (event) => {
      const tourName = $(event.currentTarget).data("tour");

      if (tourName === "tour") {
        const filterTour = context.countryArr.filter(
          (item: Hotel) => item.touristPackage === true
        );

        context.renderHotels(filterTour);

        newUrl.searchParams.set("isTour", "true");
      } else {
        const filterFly = context.countryArr.filter(
          (item: Hotel) => item.flight === true
        );

        context.renderHotels(filterFly);

        newUrl.searchParams.set("flight", "true");
      }

      window.history.pushState({}, "", newUrl.toString());

      if (newUrl.searchParams.has("flight")) {
        newUrl.searchParams.delete("flight");
      }
    });
  }

  selectDeparture() {
    $(".category__btns-city[data-city]").on("click", (event) => {
      const cityName = $(event.currentTarget).data("city");
      const city = this.numberToDeparture(cityName);

      const filterCity = this.countryArr.filter(
        (item: Hotel) => item.departure === city
      );
      this.renderHotels(filterCity);

      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("departure", city.toString());
      window.history.pushState({}, "", newUrl.toString());
      // window.location.reload();
    });
  }

  numberToDeparture(info: string): Departure {
    switch (info) {
      case "kiev":
        return Departure.kiev;
      case "lviv":
        return Departure.lviv;
      default:
        return Departure.all;
    }
  }
}

class SelectData extends Country {
    constructor() {
      super();
      this.calendar();

    }

    calendar() {
      new AirDatepicker("#calendar", {
          onSelect: function({date }) {
                const dateObj = Array.isArray(date) ? date[0] : date;
                const day = dateObj.getDate();
                const month = dateObj.getMonth() + 1;
                const year = dateObj.getFullYear();
          
                const formattedDate = `${day} ${month} ${year}`;
          
                $(".info__date-current").text(formattedDate);
          
                const currentUrl = window.location.href;
                const urlParts = currentUrl.split("?");
                const baseUrl = urlParts[0];
                const params = new URLSearchParams(urlParts[1]);
                params.set("date", formattedDate);
                const newUrl = baseUrl + "?" + params.toString();
              window.history.pushState({ path: newUrl }, '', newUrl);
              window.location.reload();
          }
      });
  }


  restoreFilterFromUrl(){
    super.restoreFilterFromUrl();
    const urlParams = new URLSearchParams(window.location.search);
    const savedDate = urlParams.get("date");
    if (savedDate) {
      this.filterDate();
    }
  }



  filterDate(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const savedDate = urlParams.get("date");

    const filterDate = this.countryArr.filter(function(item ) {
      const seconds = item.date.seconds;
      const dateObj = new Date(seconds * 1000);
      const day = dateObj.getDate();  
      const month = dateObj.getMonth() + 1;
      const year = dateObj.getFullYear();
      console.log(day, month, year);

      const formattedDate = `${day} ${month} ${year}`;
      return formattedDate === savedDate;

    });
    console.log(filterDate);
    this.renderHotels(filterDate);
    this.renderRegions(filterDate);
  }
  

}

class AdvancedSearch {
  constructor() {
    this.init();
  }

  init() {
    // this.accordion();
    this.activeFilter();
  }

  accordion() {
    $(".search__row-sub").on("click", function () {
      $(".search__row-bottom").toggleClass("search__row-bottom_active");
      $(".category").toggleClass("category_active");
    });
  }

  activeFilter() {
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach((value, key) => {
      switch (key) {
        case "isStar":
          this.rating(value);
          break;
        case "isMeals":
          this.meals(value);
          break;
      }
    });
  }

  rating(val: string) {
    const rating = $(".category__filter-row");
    switch (val) {
      case "2":
        rating.append(`<div class="category__filter-rating">
        <h3 class="category__filter-title">Категория размещенияотеля</h3>
        <p class="category__filter-text">3 звезды</p>
      </div>`);
        break;
      case "3":
        rating.append(`<div class="category__filter-rating">
        <h3 class="category__filter-title">Категория размещенияотеля</h3>
        <p class="category__filter-text">4 звезды</p>
      </div>`);
        break;
      case "4":
        rating.append(`<div class="category__filter-rating">
        <h3 class="category__filter-title">Категория размещенияотеля</h3>
        <p class="category__filter-text">5 звезд</p>
        </div>`);
        break;
      case "5":
        rating.append(
          `<div class="category__filter-rating">
        <h3 class="category__filter-title">Категория размещенияотеля</h3>
        <p class="category__filter-text">Апартаменты</p>
      </div>`
        );

        break;
    }
  }
  meals(val: string) {
    const meals = $(".category__filter-row");
    switch (val) {
      case "1":
        meals.append(
          `<div class="category__filter-meals">
        <h3 class="category__filter-title">Питание</h3>
        <p class="category__filter-text">Без питания</p>
      </div>`
        );
        break;
      case "2":
        meals.append(
          `<div class="category__filter-meals">
        <h3 class="category__filter-title">Питание</h3>
        <p class="category__filter-text">Завтрак</p>
      </div>`
        );
        break;
      case "3":
        meals.append(
          `<div class="category__filter-meals">
        <h3 class="category__filter-title">Питание</h3>
        <p class="category__filter-text">Завтрак и ужин</p>
      </div>`
        );
        break;
      case "4":
        meals.append(
          `<div class="category__filter-meals">
        <h3 class="category__filter-title">Питание</h3>
        <p class="category__filter-text">Завтрак, обед, ужин</p>
      </div>`
        );
        break;
      case "5":
        meals.append(
          `<div class="category__filter-meals">
        <h3 class="category__filter-title">Питание</h3>
        <p class="category__filter-text">Всё включено</p>
      </div>`
        );
        break;
      case "6":
        meals.append(
          `<div class="category__filter-meals">
        <h3 class="category__filter-title">Питание</h3>
        <p class="category__filter-text">Ультра все включено</p>
      </div>`
        );
        break;
    }
  }

  // tours(val: string) {
  //   const meals = $(".category__filter-row");
  //   switch (val) {
  //   }
  // }
}

new Region();
new Hotels();
new SelectData();
new AdvancedSearch();
