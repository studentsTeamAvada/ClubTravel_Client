import { Header } from "../components/header";
import { heroSwiper } from '../code/swiper';
import { companySwiper } from '../code/swiper';
import { hotDealsSwiper } from '../code/swiper';
import { winterTourSwiper } from '../code/swiper';
import { CompanyProduct } from '../code/main/company';
import { HotDealsProduct } from '../code/main/hot-deals';
import { WinterTourProduct } from '../code/main/winter-tour';

new Header();
const productCompany = new CompanyProduct();
const productHotDeals = new HotDealsProduct();
const productWinterTour = new WinterTourProduct();
heroSwiper();
companySwiper();
hotDealsSwiper();
winterTourSwiper();

await productCompany.loadCards();
await productHotDeals.loadCards();
await productWinterTour.loadCards();
