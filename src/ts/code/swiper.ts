import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper/modules'
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

export function heroSwiper() {
   new Swiper('.hero-swiper', {
      slidesPerView: 'auto',
      speed: 1100,

      navigation: {
        nextEl: '.hero__swiper-button-next',
        prevEl: '.hero__swiper-button-prev',
      },
    });
  }


export function companySwiper() {
   new Swiper('.company__swiper', {
      slidesPerView: 'auto',
      speed: 1100,
      spaceBetween: 15,

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        375: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 3
        },
        1920: {
          slidesPerView: 3
        }
      },

      navigation: {
        nextEl: '.company__swiper-button-next',
        prevEl: '.company__swiper-button-prev',
      },
    });
  }