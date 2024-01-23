import { Tours } from '../../type';

export async function companyProduct() {
  const companyWrapper = document.querySelector(".company__swiper-wrapper");

  const fetchResults = async () => {
    const response = await fetch(
      `http://localhost:1337/api/tours?populate=deep`
    );
    const data = await response.json();
    const products: Array<{ attributes: Tours }> = data.data;

    products.forEach((product) => {
      const content = product.attributes;

      const { title, data, price, img } = content;

      let url = null;

      const photos = img.data;
      photos.forEach((photo) => {
        url = photo.attributes.url;
      });

      let template = `
      <div class="swiper-slide company__swiper-slide">
        <div class="company__card">
        <div class="company__card-img">
          <picture class="hero__bg-img">
            <img src=${url} alt="bg" />
          </picture>
          `;

      if (price) {
        template += `
            <div class="company__card-line">
            <svg>
              <use xlink:href="./src/images/sprite.svg#company-line"></use>
            </svg>
            <div class="company__card-line-wrapper">
              <p class="company__card-line-price">от ${price}€</p>
            </div>
          </div>
            `;
      }

      template += `
          <div class="company__card-data-wrapper">
            <svg>
              <use xlink:href="./src/images/sprite.svg#clock"></use>
            </svg>
            <p class="company__card-data">${data}</p>
          </div>
        </div>
        <p class="company__card-text">${title}</p>
      </div>
      </div>
        `;

      if (companyWrapper) {
        companyWrapper.insertAdjacentHTML("beforeend", template);
      }
    });
  };

  fetchResults();
}
