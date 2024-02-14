// import { app } from "../modules/firebase";
// import {
//     DocumentData,
//     QueryDocumentSnapshot,
//     getFirestore,
// } from "firebase/firestore";
// import { collection, getDocs } from "firebase/firestore";
// import $ from "jquery";
// import noUiSlider, { target } from "nouislider";
// import "nouislider/dist/nouislider.css";
// import { DropdownSearch } from "./dropSearch";

// new DropdownSearch(".info__destination-select");

// enum Destination {
//     All = 0,
//     Egypt = 1,
//     AOE = 2,
//     Thailand = 3,
//     Bulgaria = 4,
//     Chornogoria = 5,
//     Indonesia = 6,
//     Georgia = 7,
//     Greece = 8,
//     Turkey = 9,
//     Cyprus = 10,
//     Tunisia = 11,
//     Spain = 12,
//     Ukraine = 13,
// }

// enum Regions {
//     All = 0,
//     SharmElSheikh = 1,
//     Hurghada = 2,
//     Dubai = 3,
//     AbuDhabi = 4,
//     Bangkok = 5,
//     KuahHin = 6,
//     SunnyBeach = 7,
//     GoldenSands = 8,
//     Budva = 9,
//     StefanBridge = 10,
//     Bali = 11,
//     Batumi = 13,
//     Rodos = 15,
//     Marmaris = 17,
//     Paphos = 19,
//     Suss = 21,
//     Tenerife = 23,
//     Majorca = 24,
//     Bukovyn = 25,
//     Uldag = 27,
//     Bansko = 28,
//     Borovets = 29,
// }

// class Library {
//     constructor() {
//         this.priceSlider();
//     }

//     priceSlider(): void {
//         const slider = document.querySelector(".category__slider") as target;
//         noUiSlider.create(slider, {
//             start: [600, 3700],
//             connect: true,
//             range: {
//                 min: 400,
//                 max: 4000,
//             },
//             tooltips: true,
//             format: {
//                 to: function (value) {
//                     return Math.round(+value) + "€";
//                 },
//                 from: function (value) {
//                     return Math.round(+value);
//                 },
//             },
//             step: 200,
//             pips: {
//                 // @ts-ignore
//                 mode: "range",
//                 // stepped: true,
//                 density: 10,
//             },
//         });

//         // slider.noUiSlider?.on(
//         //   "update",
//         //   function (values: (string | number)[], _handle: number) {
//         //     const priceMin =
//         //       typeof values[0] === "string"
//         //         ? values[0].slice(0, -1)
//         //         : values[0].toString();
//         //     const priceMax =
//         //       typeof values[1] === "string"
//         //         ? values[1].slice(0, -1)
//         //         : values[1].toString();

//         //     // const newUrl = new URL(window.location.href);
//         //     // newUrl.searchParams.set("priceMin", priceMin);
//         //     // newUrl.searchParams.set("priceMax", priceMax);

//         //     // window.history.pushState({}, "", newUrl.toString());
//         //   }
//         // );
//     }
// }

// new Library();

// class RenderHotels {
//     constructor() {}

//     renderHotels(info: DocumentData[]): void {
//         $(".result__content").html("");

//         if (info.length > 0) {
//             info.forEach((item: DocumentData) => {
//                 const hotelHtml = `
//                 <div class="result__hotel">

//                 <div class="result__slider">
//                   <div class="swiper result__swiper">
//                     <div class="swiper-wrapper result__wrapper">

//                       <div class="swiper-slide result__slide">
//                         <picture>
//                           <source srcset="${item.img[0].urlWebp}" type="image/webp">
//                           <img src="${item.img[0].url}" alt="photo">
//                         </picture>
//                       </div>

//                       <div class="swiper-slide result__slide">
//                         <picture>
//                           <source srcset="${item.img[1].urlWebp}" type="image/webp">
//                           <img src="${item.img[1].url}" alt="photo">
//                         </picture>
//                       </div>

//                       <div class="swiper-slide result__slide">
//                         <picture>
//                           <source srcset="${item.img[2].urlWebp}" type="image/webp">
//                           <img src="${item.img[2].url}" alt="photo">
//                         </picture>
//                       </div>

//                       <div class="swiper-slide result__slide">
//                         <picture>
//                           <source srcset="${item.img[3].urlWebp}" type="image/webp">
//                           <img src="${item.img[3].url}" alt="photo">
//                         </picture>
//                       </div>

//                       <div class="swiper-slide result__slide">
//                         <picture>
//                           <source srcset="${item.img[4].urlWebp}" type="image/webp">
//                           <img src="${item.img[4].url}" alt="photo">
//                         </picture>
//                       </div>

//                     </div>

//                     <div class="swiper-button-next result__btn-next">
//                       <svg>
//                         <use xlink:href="#chevron-left"></use>
//                       </svg>
//                     </div>

//                     <div class="swiper-button-prev result__btn-prev">
//                       <svg>
//                         <use xlink:href="#chevron-left"></use>
//                       </svg>
//                     </div>

//                   </div>
//                 </div>

//                 <div class="result__row">

//                   <div class="result__info">
//                     <h4 class="result__info-title">${item.name}</h4>

//                     <div class="result__info-location">
//                       <svg>
//                         <use xlink:href="#point"></use>
//                       </svg>
//                       <p class="result__info-country">${item.country}</p>
//                       <p class="result__info-region">${item.region}</p>
//                     </div>

//                     <p class="result__info-descript">${item.description[0].main}</p>
//                     <a class="result__info-link"  href="hotel.html">
//                       Подробнее об отеле
//                       <svg>
//                         <use xlink:href="#arrow-right"></use>
//                       </svg>
//                     </a>
//                   </div>

//                   <div class="result__rating">
//                     <div class="result__rating-star">

//                     </div>

//                     <p class="result__rating-duration">
//                       <svg>
//                         <use xlink:href="#clock"></use>
//                       </svg>
//                       ${item.duration}
//                     </p>

//                     <p class="result__rating-meal">
//                       <svg>
//                         <use xlink:href="#food"></use>
//                       </svg>
//                       ${item.meals}
//                     </p>

//                     <p class="result__rating-room">
//                       <svg>
//                         <use xlink:href="#house"></use>
//                       </svg>
//                       ${item.room[0]}
//                     </p>

//                     <p class="result__rating-beach">
//                       <svg>
//                         <use xlink:href="#sun"></use>
//                       </svg>
//                       ${item.beach}
//                     </p>
//                   </div>

//                   <div class="result__price">
//                     <p class="result__price-num"> ${item.price[0]}</p>
//                   </div>

//                 </div>

//               </div>`;

//                 $(".result__content").append(hotelHtml);
//             });
//         } else {
//             $(".result__content").html(`
//               <div class="result__not-found">
//                 <h2 class="result__not-found-title">По вашему запросу ничего не найдено</h2>
//                 <p class="result__not-found-text">Попробуйте изменить параметры поиска</p>
//               </div>
//               `);
//         }
//     }

//     renderRegions(region: DocumentData): void {
//         $(".category__regions-item").html("");
//         region.forEach((item: DocumentData) => {
//             const regionHtml = `
//         <button data-region="${item.region}" class="category__btns category__btns-regions">
//           <svg>
//             <use xlink:href="#check-circle"></use>
//           </svg>
//           ${item.region}
//         </button>`;
//             $(".category__regions-item").append(regionHtml);
//         });

//         this.selectRegion();

//         if ($(".category__regions-item").children().length > 5) {
//             $(".category__regions-item").removeClass(
//                 "category__regions-item_change"
//             );
//         } else {
//             $(".category__regions-item").addClass(
//                 "category__regions-item_change"
//             );
//         }
//     }

//     selectRegion() {
//         $(".category__btns-regions").on("click", (event) => {
//             const regionName = $(event.currentTarget).data("region");
//             console.log(regionName);
//             const region = this.regionToNumber(regionName);
//             console.log(region);

//             const newUrl = new URL(window.location.href);
//             newUrl.searchParams.set("isRegion", region.toString());
//             window.history.pushState({}, "", newUrl.toString());
//         });
//     }

//     regionToNumber(info: string): Regions {
//         switch (info) {
//             case "Шарм-эль-Шейх":
//                 return Regions.SharmElSheikh;
//             case "Хургада":
//                 return Regions.Hurghada;
//             case "Дубай":
//                 return Regions.Dubai;
//             case "Абу-Даби":
//                 return Regions.AbuDhabi;
//             case "Бангкок":
//                 return Regions.Bangkok;
//             case "Хуа Хин":
//                 return Regions.KuahHin;
//             case "Солнечный берег":
//                 return Regions.SunnyBeach;
//             case "Золотые пески":
//                 return Regions.GoldenSands;
//             case "Будва":
//                 return Regions.Budva;
//             case "Свети Стефан":
//                 return Regions.StefanBridge;
//             case "Бали":
//                 return Regions.Bali;
//             case "Батумі":
//                 return Regions.Batumi;
//             case "Родос":
//                 return Regions.Rodos;
//             case "Мармарис":
//                 return Regions.Marmaris;
//             case "Пафос":
//                 return Regions.Paphos;
//             case "Сусс":
//                 return Regions.Suss;
//             case "Тенерифе":
//                 return Regions.Tenerife;
//             case "Майорка":
//                 return Regions.Majorca;
//             case "Буковель":
//                 return Regions.Bukovyn;
//             case "Улудаг":
//                 return Regions.Uldag;
//             case "Бансько":
//                 return Regions.Bansko;
//             case "Боровець":
//                 return Regions.Borovets;
//             default:
//                 return Regions.All;
//         }
//     }
// }

// export class Country extends RenderHotels {
//     hotelsArr: Array<object>;
//     filterArr: Array<object> | undefined;
//     searchPanelBtn: JQuery<HTMLElement>;
//     destinationCurrent: JQuery<HTMLElement>;

//     constructor() {
//         super();
//         this.searchPanelBtn = $(".search__panel-btn");
//         this.destinationCurrent = $(".info__destination-current");
//         this.hotelsArr = [];
//         this.filterArr = [];

//         this.clickSearchPanel();
//         this.readDataUrl();
//         this.getCountry();

//         console.log(this.hotelsArr);
//     }

//     async getCountry(): Promise<void> {
//         const db = getFirestore(app);
//         const hotelsRef = collection(db, "hotels");

//         try {
//             const querySnapshot = await getDocs(hotelsRef);
//             this.hotelsArr = querySnapshot.docs.map(
//                 (doc: QueryDocumentSnapshot<DocumentData>) => doc.data()
//             );
//         } catch (error) {
//             console.error("Error getting documents: ", error);
//         }
//     }

//     filterCountry(): void {
//         const destinationName = this.destinationCurrent.text().trim();
//         const destination = this.countryToNumber(destinationName);
//         console.log(destination);
//         this.filterArr = this.hotelsArr.filter((item: any) => {
//             if (destination === Destination.All) {
//                 return item;
//             } else {
//                 return item.isCountry === destination;
//             }
//         });

//         super.renderHotels(this.filterArr);
//         super.renderRegions(this.filterArr);

//         const newUrl = new URL(window.location.href);
//         newUrl.searchParams.set("isCountry", destination.toString());
//         window.history.pushState({}, "", newUrl.toString());
//     }

//     countryToNumber(info: string): Destination {
//         switch (info) {
//             case "Египет":
//                 return Destination.Egypt;
//             case "АОЭ":
//                 return Destination.AOE;
//             case "Таиланд":
//                 return Destination.Thailand;
//             case "Болгария":
//                 return Destination.Bulgaria;
//             case "Чорногория":
//                 return Destination.Chornogoria;
//             case "Индонезия":
//                 return Destination.Indonesia;
//             case "Грузия":
//                 return Destination.Georgia;
//             case "Греция":
//                 return Destination.Greece;
//             case "Турция":
//                 return Destination.Turkey;
//             case "Кипр":
//                 return Destination.Cyprus;
//             case "Тунис":
//                 return Destination.Tunisia;
//             case "Испания":
//                 return Destination.Spain;
//             case "Украина":
//                 return Destination.Ukraine;
//             default:
//                 return Destination.All;
//         }
//     }

//     clickSearchPanel(): void {
//         this.searchPanelBtn.on("click", () => {
//             this.filterCountry();
//         });
//     }

//     readDataUrl(): void {
//         const urlParams = new URLSearchParams(window.location.search);
//         const isCountryParam = urlParams.get("isCountry");

//         if (isCountryParam) {
//             this.filterCountry();
//         }
//     }
// }

// class CountryRegion extends Country {
//     regionFilter: Array<object> | undefined;
//     regionCurrent: JQuery<HTMLElement>;
//     searchPanelBtn: JQuery<HTMLElement>;

//     constructor() {
//         super();
//         this.searchPanelBtn = $(".search__panel-btn");
//         this.regionCurrent = $(".category__regions-current");
//         this.regionFilter = [];
//         this.clickSearchPanelRegion();
//     }

//     // filterCountry(): void {
//     // super.filterCountry();
//     // if (this.filterArr) {
//     //   this.renderRegions(this.filterArr);
//     // }
//     // }

//     // clickSearchPanelRegion(): void {
//     //     // this.searchPanelBtn.off("click");
//     //     this.searchPanelBtn.on("click", () => {
//     //         this.filterRegion();
//     //         // this.selectRegion();
//     //     });
//     // }

//     // filterRegion(): void {
//     //     const urlParams = new URLSearchParams(window.location.search);
//     //     const isRegionParam = urlParams.get("isRegion");
//     //     const isCountry = urlParams.get("isCountry");
//     //     const region = parseInt(isRegionParam as string);
//     //     console.log(region);

//     //     if (isRegionParam && isCountry) {
//     //         this.regionFilter = this.filterArr?.filter((item: any) => {
//     //             if (region === Regions.All) {
//     //                 return item;
//     //             } else {
//     //                 return item && item.isRegion === region;
//     //             }
//     //         });
//     //         console.log(this.regionFilter);

//     //         if (this.regionFilter) {
//     //             super.renderHotels(this.regionFilter);
//     //         }
//     //     }
//     // }

//     // readDataUrl(): void {
//     //     super.readDataUrl();
//     //     this.filterRegion();
//     // }
// }

// class Hotels extends CountryRegion {
//   updatePriceMax: any;
//   constructor() {
//     super();
//     this.selectMeal();
//     this.selectTour();
//     this.fillterPrice();
//   }

//   selectMeal(): void {
//     $(".category__btns-meals[data-meals]").on("click", (event) => {
//       const mealName = $(event.currentTarget).data("meals");
//       console.log(mealName);
//       const meal = this.numberToMeals(mealName);

//       const newUrl = new URL(window.location.href);
//       newUrl.searchParams.set("isMeals", meal.toString());
//       window.history.pushState({}, "", newUrl.toString());
//       this.filterMeals();
//     });
//   }

//   numberToMeals(info: string): Meals {
//     switch (info) {
//       case "ao":
//         return Meals.ao;
//       case "bb":
//         return Meals.bb;
//       case "hb":
//         return Meals.hb;
//       case "fb":
//         return Meals.fb;
//       case "ai":
//         return Meals.ai;
//       case "uai":
//         return Meals.uai;
//       default:
//         return Meals.all;
//     }
//   }

//   filterMeals(): void {
//     const urlParams = new URLSearchParams(window.location.search);
//     const isMealsParam = urlParams.get("isMeals");

//     const meals = parseInt(isMealsParam as string);
//     console.log(meals);
//     const filterArr = this.filterArr?.filter((item: any) => {
//       if (meals === Meals.all) {
//         return item;
//       } else {
//         return item.isMeals === meals;
//       }
//     });

//     if (filterArr) {
//       console.log(filterArr);
//       this.renderHotels(filterArr);
//     }
//   }

//   selectTour(): void {
//     $(".category__btns-tour").on("click", (event) => {
//       const tourName = $(event.currentTarget).data("tour");
//       console.log(tourName);

//       const findTour = this.filterArr?.filter(
//         (item: any) => item.touristPackage === true
//       );

//       const filterFly = this.filterArr?.filter(
//         (item: any) => item.flight === true
//       );

//       if (findTour && filterFly) {
//         this.renderHotels(findTour);
//         this.renderHotels(filterFly);
//       } else {
//         if (this.filterArr) {
//           this.renderHotels(this.filterArr);
//         }
//       }

//       // const tour = this.numberToTour(tourName);

//       const newUrl = new URL(window.location.href);
//       newUrl.searchParams.set("flight", "true");
//       newUrl.searchParams.set("touristPackage", "true");
//       // newUrl.searchParams.set("isTour", tour.toString());
//       window.history.pushState({}, "", newUrl.toString());
//       // this.filterTour();
//     });
//   }

//   fillterPrice(): void {
// const urlParams = new URLSearchParams(window.location.search);
// const priceMin = parseInt(urlParams.get("priceMin") || "0");
// const priceMax = parseInt(urlParams.get("priceMax") || "Infinity");
//   }

// const filterArr = this.filterArr?.filter((item: any) => {
//   const itemPrice = parseInt(item.price[0]);
//   return itemPrice >= priceMin && itemPrice <= priceMax;
// });

// if (filterArr) {
//   console.log(filterArr);
//   this.renderHotels(filterArr);
// }

//   const filterArr = this.filterArr?.filter((item: any) => {
//     if (item.price[0] >= priceMin && item.price[0] <= priceMax) {
//       return item;
//     }
//   });

//   if (filterArr) {
//     this.renderHotels(filterArr);
//   }
// }
// priceSlider() {
//   throw new Error("Method not implemented.");
// }

// filterTour(): void {
//   const urlParams = new URLSearchParams(window.location.search);
//   const isTourParam = urlParams.get("isTour");
//   const tour = parseInt(isTourParam as string);

//   const filterArr = this.filterArr?.filter((item: any) => {
//     if (tour === 0) {
//       return item;
//     } else {
//       return item.isTour === tour;
//     }
//   });

//   if (filterArr) {
//     console.log(filterArr);
//     this.renderHotels(filterArr);
//   }
// }

// readDataUrls(): void {
//   const urlParams = new URLSearchParams(window.location.search);
//   const isMealsParam = urlParams.get("isMeals");
//   if (isMealsParam) {

//     this.filterMeals();
//   }
// }
// }

// new CountryRegion();
// new Hotels();
// async initHotels(): Promise<void> {
//   try {
//     await this.readDataUrl();
//     // this.renderHotels(this.hotelsArr);
//   } catch (error) {
//     console.error("Error fetching hotels:", error);
//   }
// }

// initUrl() {
//   this.initHotels().then(() => {
//     this.readDataUrl();
//   });
// }
