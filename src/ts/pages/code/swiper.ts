import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, Scrollbar } from "swiper/modules";
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

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
