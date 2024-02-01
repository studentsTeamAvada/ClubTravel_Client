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
// import { Dropdown } from "./dropdown";
// new Dropdown(".info__destination-select");
// new Dropdown(".info__duration-select");
// new Dropdown(".info__date-select");
// new Dropdown(".info__guests-select");

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
  }

  readDataUrl(): void {
    this.urlParams = new URLSearchParams(window.location.search);
    this.hotelCounry = this.urlParams.get("isCountry");
    this.hotelRegion = this.urlParams.get("isRegion");
  
    if (this.hotelCounry && this.hotelRegion) {
      const destination = Destination[this.hotelCounry as keyof typeof Destination];
      const region = this.hotelRegion;
      this.clickDestination(destination, region);
    }
  }

  clickDestination(destination: Destination, region: string): void {
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
        this.clickDestination(destination as Destination, "Шарм-эль-Шейх");
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

  async getCountry(destinationName: Destination, region: string): Promise<void> {
    const db = getFirestore(app);
    let q;
    const destinationVal = Destination[destinationName];
  
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("isCountry", destinationVal.toString());
    newUrl.searchParams.set("isRegion", region);
    window.history.pushState({}, "", newUrl.toString());
  
    this.cardHotel = [];
  
    if (destinationName === Destination.All) {
      q = query(collection(db, "hotels"), where("isCountry", "!=", ""));
    } else {
      q = query(
        collection(db, "hotels"),
        where("isCountry", "==", +destinationName),
        where("isRegion", "==", region)
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
        console.log(regionName);
      }

      switch (regionName) {
        case "Шарм-эль-Шейх":
        
          break;
      }

    });




  }

}

// selectGuests(): void {
//   this.guestsSelect.on("click", () => {
//     this.guestsList.addClass("guests__list_show");
//   });
// }

//   accordion(): void {
//     this.advanced.on("click", () => {
//       this.advanced.toggleClass("advanced_show");
//       if (this.advanced.hasClass("advanced_show")) {
//         $(".advanced__btn").addClass("advanced__btn_act");
//         $(".advanced__line").removeClass("advanced__line_act");
//         $(".advanced__btn-close").removeClass("advanced__btn-close_act");
//       } else {
//         $(".advanced__btn").removeClass("advanced__btn_act");
//         $(".advanced__line").addClass("advanced__line_act");
//         $(".advanced__btn-close").addClass("advanced__btn-close_act");
//       }
//     });
//     //   $(".find__row-btn").on("click", function () {
//     //     $(".find__row-sub").addClass("find__row-sub_act");
//     //     $(".find__row-btn").addClass("find__row-btn_act");
//     //     $(".find__row-line").removeClass("find__row-line_act");
//     //     $(".find__row-btn-close").removeClass("find__row-btn-close_act");
//     //   });

//     //   $(".find__row-btn-close").on("click", function () {
//     //     $(".find__row-sub").removeClass("find__row-sub_act");
//     //     $(".find__row-btn").removeClass("find__row-btn_act");
//     //     $(".find__row-line").addClass("find__row-line_act");
//     //     $(".find__row-btn-close").addClass("find__row-btn-close_act");
//     //   });
//   }

//   async getDestination() {
//     const context = this;
//     try {
//       const API_URL = "https://clubtravel.onrender.com/api/find-infos";
//       const response = await axios.get(API_URL);
//       const destinations = response.data.data[0].attributes.search.destinations;

//       const listItemHtml = destinations.map((item: any) => {
//         return `
//         <li class="info__destination-item dropdown__item">${item.name}</li>
//         `;
//       });
//       $(".info__destination-list").append(listItemHtml.join(""));
//       $(".info__destination-item").each(function (
//         _index: number,
//         element: HTMLElement
//       ) {
//         $(element).on("click", function () {
//           let citySelected = $(this).text();
//           context.destinationCurrent.text(citySelected);
//           let newUrl = `search_results.html?destination=${citySelected}`;
//           window.history.pushState(null, " ", newUrl);
//         });
//       });
//     } catch (error) {
//       console.error("Помилка при отриманні даних:", error);
//     }
//   }
//   async getDuration() {
//     const context = this;
//     try {
//       const API_URL = "https://clubtravel.onrender.com/api/find-infos";
//       const response = await axios.get(API_URL);
//       const destinations = response.data.data[0].attributes.search.duration;

//       const listItemHtml = destinations.map((item: any) => {
//         return `
//         <li class="info__duration-item dropdown__item">${item.name}</li>
//         `;
//       });
//       $(".info__duration-list").append(listItemHtml.join(""));
//       $(".info__duration-item").on("click", function () {
//         let daySelected = $(this).text();
//         context.durationCurrent.text(daySelected);
//         const daySelectedLength = daySelected.slice(0, 2);

//         const urlParams = new URLSearchParams(window.location.search);
//         const urlDestination = urlParams.get("destination");

//         let newUrl = `search_results.html?${urlDestination}&duration=${daySelectedLength}`;
//         window.history.pushState(null, "", newUrl);
//       });
//     } catch (error) {
//       console.error("Помилка при отриманні даних:", error);
//     }
//   }
//   async getRating() {
//     try {
//       const API_URL = "https://clubtravel.onrender.com/api/find-infos";
//       const response = await axios.get(API_URL);
//       const stars = response.data.data[0].attributes.search.stars;
//       const meal = response.data.data[0].attributes.search.meal;
//       const btnsHtml = stars.map((item: { name: any }, index: number) => {
//       const starIcons = Array.from({ length: +item.name + 1 },() => `
//           <svg class="advanced__icon">
//             <use xlink:href="${Sprite}#start"></use>
//           </svg>`
//         ).join("");

//         if (index === 4) {
//           return `
//             <button class="category__btns category__btns-flat">
//               <svg>
//                 <use xlink:href="${Sprite}#house"></use>
//               </svg>
//               Апартаменты
//             </button>
//           `;
//         } else {
//           return `
//             <button class="category__btns category__btns-stars">
//               ${starIcons}
//             </button>
//           `;
//         }
//       });
//       const btnsHtmlMeal = meal.map((item: { name: any }) => {
//         return `
//           <button class="category__btns category__btns-meal">
//           <svg>
//             <use xlink:href="${Sprite}#check-circle"></use>
//           </svg>
//             ${item.name}
//           </button>
//         `;
//       });

//       $(".category__rating-stars").append(btnsHtml.join(""));
//       $(".category__rating-meal").append(btnsHtmlMeal.join(""));
//     } catch (error) {
//       console.error("Помилка при отриманні даних:", error);
//     }
//   }
//   async getFly() {
//     try {
//       const API_URL = "https://clubtravel.onrender.com/api/find-infos";
//       const response = await axios.get(API_URL);
//       console.log(response.data);
//       const lineupTour = response.data.data[0].attributes.search.lineupTour;
//       const departure = response.data.data[0].attributes.search.departure;
//       const btnsHtml = lineupTour.map((item: { name: any }) => {
//         return `
//           <button class="category__btns category__btns-lineup">
//           <svg>
//             <use xlink:href="${Sprite}#check-circle"></use>
//           </svg>
//             ${item.name}
//           </button>
//         `;
//       });
//       const btnsHtmlDeparture = departure.map((item: { name: any }) => {
//         return `
//           <button class="category__btns category__btns-departure">
//           <svg>
//             <use xlink:href="${Sprite}#check-circle"></use>
//           </svg>
//             ${item.name}
//           </button>
//         `;
//       });
//       $(".category__lineup").append(btnsHtml.join(""));
//       $(".category__departure").append(btnsHtmlDeparture.join(""));
//     } catch (error) {
//       console.error("Помилка при отриманні даних:", error);
//     }
//   }
//   sliderMoney(){
//     const slider = document.querySelector('.category__slider') as HTMLElement;
//         noUiSlider.create(slider, {
//           start: [600, 3700],
//           connect: true,
//           range: {
//               'min': 400,
//               'max': 4000
//           },
//           tooltips: true,
//           format: {
//             to: function (value) {
//               return Math.round(+value) + '€'
//             },
//             from: function (value) {
//               return Math.round(+value)
//             },
//           },
//           step:200,
//           pips: {
//             // @ts-ignore
//             mode: 'range',
//             // stepped: true,
//             density: 10
//         }
//       });
//       $('.noUi-value').each(function() {
//         $(this).text($(this).text() + '€');
//       });

//   }
//   async getRegions() {
//     try {
//       const API_URL = "https://clubtravel.onrender.com/api/find-infos";
//       const response = await axios.get(API_URL);
//       console.log(response.data);
//       const regions = response.data.data[0].attributes.search.regins;
//       const btnsHtml = regions.slice(0, -2).map((item: any) => {
//         return `
//           <button class="category__btns category__btns-regions">
//           <svg>
//             <use xlink:href="${Sprite}#check-circle"></use>
//           </svg>
//             ${item.name}
//           </button>
//         `;
//       });
//       $(".category__regions-item").append(btnsHtml.join(""));
//     } catch (error) {
//       console.error("Помилка при отриманні даних:", error);
//     }
//   }

//   // async getGuests() {
//   //   const context = this;
//   //   try {
//   //     const API_URL = "https://clubtravel.onrender.com/api/find-infos";
//   //     const response = await axios.get(API_URL);
//   //     console.log(response.data);
//   //     const destinations = response.data.data[0].attributes.search.duration;

//   //     const listItemHtml = destinations.map((item: any) => {
//   //       return `
//   //       <li class="info__guests-item dropdown__item">${item.name}</li>
//   //       `;
//   //     });
//   //     $(".info__guests-list").append(listItemHtml.join(""));
//   //     // $(".info__duration-item").on("click", function () {
//   //     //   let daySelected = $(this).text();
//   //     //   context.durationCurrent.text(daySelected);
//   //     //   const daySelectedLength = daySelected.slice(0, 2);

//   //     //   // const urlParams = new URLSearchParams(window.location.search);
//   //     //   // const urlDestination = urlParams.get("destination");

//   //     //   let newUrl = `search_results.html&duration=${+daySelectedLength}`;
//   //     //   window.history.pushState(null, "", newUrl);
//   //     // });
//   //   } catch (error) {
//   //     console.error("Помилка при отриманні даних:", error);
//   //   }
//   // }
// }
