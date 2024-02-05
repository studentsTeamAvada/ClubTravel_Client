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

const summerTourWrapper = document.querySelector(".summer-tour__swiper-wrapper");

export class SummerTourProduct {
  private app: any;
  private db: any;
  private productsArray: Tours[];

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.db = getFirestore(this.app);
    this.productsArray = [];
  }

  async loadCards() {
    const filterSummerTours = query(
      collection(this.db, 'hotels'),
      where('hotTour', '==', true)
    );
    
   
    const querySnapshot = await getDocs(filterSummerTours);
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
      

      const { country, img} = content;

      if (img && Array.isArray(img) && img.length > 0) {
        const { url, urlWebp } = img[0];

      
      let template = `
      <div class="swiper-slide summer-tour__swiper-slide">
        <div class="summer-tour__card">
        <div class="summer-tour__card-img">
          <picture class="hero__bg-img">
            <source srcset=${urlWebp} type="image/webp" />
            <img src=${url} alt="bg" />
          </picture>
        </div>
        <div class="summer-tour__card-text-wrapper">
            <div class="summer-tour__card-place-wrapper">
                <svg>
                    <use xlink:href="./src/images/sprite.svg#map-marker"></use>
                </svg>
                <p class="summer-tour__card-place">${country}</p>
            </div>  
            <p class="summer-tour__card-price-new">от <span>509€</span>/чел</p>
            
        </div>
        <a href="#" class="summer-tour__btn btn">Выбрать тур</a>
        `;

      if (summerTourWrapper) {
        summerTourWrapper.insertAdjacentHTML("beforeend", template);
      }
    }
    });
  };
}