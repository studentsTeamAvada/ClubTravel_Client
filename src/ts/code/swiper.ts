import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, Scrollbar, Thumbs } from 'swiper/modules'
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar, Thumbs]);

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

  export function hotDealsSwiper() {
    new Swiper('.hot-deals__swiper', {
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
         nextEl: '.hot-deals__swiper-button-next',
         prevEl: '.hot-deals__swiper-button-prev',
       },
     });
   }
  export class HotelSlider{
    swiperOne : Swiper;
    swiperTwo : Swiper;
    constructor(){
      this.swiperTwo = new Swiper(".hotel-swiper-one", {
        loop: true,
        spaceBetween: 7,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
  
        breakpoints: {
          768: {
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 16,
          }
        },
      });

      this.swiperOne = new Swiper(".hotel-swiper-two", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: this.swiperTwo,
        },
      });
    }
  }
