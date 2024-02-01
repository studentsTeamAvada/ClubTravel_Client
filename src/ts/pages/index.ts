import { Header } from "../components/header";
import { heroSwiper } from "../code/swiper";
import { companySwiper } from "../code/swiper";
import { hotDealsSwiper } from "../code/swiper";
import { companyProduct } from "../code/main/company";
import { hotDealsProduct } from "../code/main/hot-deals";

document.addEventListener("DOMContentLoaded", async () => {
  new Header();
  heroSwiper();
  companySwiper();
  hotDealsSwiper();
  await companyProduct();
  await hotDealsProduct();
});
