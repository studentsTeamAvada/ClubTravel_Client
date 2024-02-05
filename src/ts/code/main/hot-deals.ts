import { Tours } from '../../type';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",
  authDomain: "clubtravel-6eff6.firebaseapp.com",
  projectId: "clubtravel-6eff6",
  storageBucket: "clubtravel-6eff6.appspot.com",
  messagingSenderId: "883499742498",
  appId: "1:883499742498:web:b0bf6b06d8073d249a217b",
};

const hotDealsWrapper = document.querySelector(".hot-deals__swiper-wrapper");


export class HotDealsProduct {
  private app: any;
  private db: any;
  private productsArray: Tours[];

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.productsArray = [];
  }

  async loadCards() {
    const filterHotDeals = query(
      collection(this.db, 'hotels'),
      where('hotTour', '==', true)
    );
    
   
    const querySnapshot = await getDocs(filterHotDeals);
    querySnapshot.forEach((doc) => {
      const product = doc.data() as Tours;

      this.productsArray.push(product);
    });

    this.renderProducts();
  }
  
  renderProducts() {
    const products = this.productsArray;
      
    products.forEach((product) => {
      const content = product;
      

      const { name, price, country, region, star, img} = content;

      if (img && Array.isArray(img) && img.length > 0) {
        const { url, urlWebp } = img[0];

      
      let template = `
      <div class="swiper-slide hot-deals__swiper-slide">
        <div class="hot-deals__card">
        <div class="hot-deals__card-img">
          <picture class="hero__bg-img">
            <source srcset=${urlWebp} type="image/webp" />
            <img src=${url} alt="bg" />
          </picture>
          <div class="hot-deals__card-data-wrapper hot-deals__card-data-top">
            <svg>
              <use xlink:href="./src/images/sprite.svg#clock"></use>
            </svg>
            <p class="hot-deals__card-data">22.11.2020</p>
          </div>
          <div class="hot-deals__card-place-wrapper">
            <svg>
              <use xlink:href="./src/images/sprite.svg#place"></use>
            </svg>
            <p class="hot-deals__card-place">${country}, ${region}</p>
          </div>
        </div>
        <div class="hot-deals__card-wrappers">
        <div class="hot-deals__card-text-wrapper">
            <p class="hot-deals__card-text">${name}</p>
            <div class="hot-deals__card-stars-wrapper">
            `;
            for (let i = 0; i < star; i++) {
              template += `
              <svg>
                <use xlink:href="./src/images/sprite.svg#star"></use>
              </svg>
              `;
            }

            template += `
            </div>
          </div>
          <div class="hot-deals__card-prices-wrapper">
            <div class="hot-deals__card-price-wrapper">
              <p class="hot-deals__card-price-new"><span>509€</span>/чел</p>
              <p class="hot-deals__card-price-old">779 €/чел</p>
            </div>
            `;
            if (price) {
              template += `
                  <div class="hot-deals__card-line">
                  <svg>
                    <use xlink:href="./src/images/sprite.svg#company-line"></use>
                  </svg>
                  <div class="hot-deals__card-line-wrapper">
                    <p class="hot-deals__card-line-price">-30%</p>
                  </div>
                </div>
                </div>
                  `;
            }

            template += `
            </div>
            </div>
            </div>
        `;

      if (hotDealsWrapper) {
        hotDealsWrapper.insertAdjacentHTML("beforeend", template);
      }
    }
    });
  };
}
