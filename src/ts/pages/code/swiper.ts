import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

export function heroSwiper() {
  new Swiper(".hero-swiper", {
    slidesPerView: "auto",
    speed: 1100,

    navigation: {
      nextEl: ".hero__swiper-button-next",
      prevEl: ".hero__swiper-button-prev",
    },
  });
}

export class ResultSwiper {
  constructor() {
    this.swiperResult();
  }
  swiperResult() {
    new Swiper(".result__swiper", {
      spaceBetween: 10,
      loop: true,
      navigation: {
        nextEl: ".result__btn-next",
        prevEl: ".result__btn-prev",
      },
    });
  }
}
