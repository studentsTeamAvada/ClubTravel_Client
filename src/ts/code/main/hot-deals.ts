import { Tours } from '../../type';

export async function hotDealsProduct() {
  const hotDealsWrapper = document.querySelector(".hot-deals__swiper-wrapper");

  const fetchResults = async () => {
    const response = await fetch(
      `http://localhost:1337/api/hot-dealses?populate=deep`
    );
    const data = await response.json();
    console.log(data);
    
    const products: Array<{ attributes: Tours }> = data.data;
      
    products.forEach((product) => {
      const content = product.attributes;

      const { title, place, data, price, oldPrice, stars, discount, img, webP } = content;

      let url = null;
      let urlWebP = null;

      const photos = img.data;
      photos.forEach((photo) => {
        url = photo.attributes.url;
      });

      const photosWebP = webP.data;
      photosWebP.forEach((photoWebP) => {
        urlWebP = photoWebP.attributes.url;
      })

      
      let template = `
      <div class="swiper-slide hot-deals__swiper-slide">
        <div class="hot-deals__card">
        <div class="hot-deals__card-img">
          <picture class="hero__bg-img">
            <source srcset=${urlWebP} type="image/webp" />
            <img src=${url} alt="bg" />
          </picture>
          `;

      if (price) {
        template += `
            <div class="hot-deals__card-line">
            <svg>
              <use xlink:href="./src/images/sprite.svg#company-line"></use>
            </svg>
            <div class="hot-deals__card-line-wrapper">
              <p class="hot-deals__card-line-price">от ${price}€</p>
            </div>
          </div>
            `;
      }

      template += `
          <div class="hot-deals__card-data-wrapper">
            <svg>
              <use xlink:href="./src/images/sprite.svg#clock"></use>
            </svg>
            <p class="hot-deals__card-data">${data}</p>
          </div>
        </div>
        <div class="hot-deals__card-text-wrapper">
            <p class="hot-deals__card-text">${title}</p>
            <div class="hot-deals__card-stars-wrapper">
                <svg>
                    <use xlink:href="./src/images/sprite.svg#star"></use>
                </svg>
            </div>
        </div>
        
      </div>
      </div>
        `;

      if (hotDealsWrapper) {
        hotDealsWrapper.insertAdjacentHTML("beforeend", template);
      }
    });
  };

  fetchResults();
}
