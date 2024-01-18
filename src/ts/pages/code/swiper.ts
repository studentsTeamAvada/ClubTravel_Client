import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules'
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

export function heroSwiper() {
    let swiper = new Swiper('.hero-swiper', {
      slidesPerView: 'auto',
      speed: 1100,

      navigation: {
        nextEl: '.hero__swiper-button-next',
        prevEl: '.hero__swiper-button-prev',
      },
    });
  }