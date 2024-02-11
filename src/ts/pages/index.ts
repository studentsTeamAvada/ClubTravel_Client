import { Header } from "../components/header";
import { heroSwiper } from "../code/swiper";
import { companySwiper } from "../code/swiper";
import { hotDealsSwiper } from "../code/swiper";
import { winterTourSwiper } from "../code/swiper";
import { summerTourSwiper } from "../code/swiper";
import { CompanyProduct } from "../code/main/main-company";
import { HotDealsProduct } from "../code/main/hot-deals";
import { WinterTourProduct } from "../code/main/winter-tour";
import { SummerTourProduct } from "../code/main/summer-tour";

new Header();
const productCompany = new CompanyProduct();
const productHotDeals = new HotDealsProduct();
const productWinterTour = new WinterTourProduct();
const productSummerTour = new SummerTourProduct();
heroSwiper();
companySwiper();
hotDealsSwiper();
winterTourSwiper();
summerTourSwiper();

await productCompany.loadCards();
await productHotDeals.loadCards();
await productWinterTour.loadCards();
await productSummerTour.loadCards();
