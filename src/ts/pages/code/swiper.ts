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

      // breakpoints: {
      //   320: {
      //     slidesPerView: 'auto',
          
      //   },
      //   375: {
      //     slidesPerView: 'auto',
      //   },
      //   768: {
      //     slidesPerView: 'auto',
      //   },
      //   991: {
      //     slidesPerView: 'auto',
      //   },
       
      // },

      navigation: {
        nextEl: '.company__swiper-button-next',
        prevEl: '.company__swiper-button-prev',
      },
    });
  }