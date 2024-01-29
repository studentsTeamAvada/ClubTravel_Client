import { Header } from "../components/header";
import { heroSwiper } from '../code/swiper';
import { companySwiper } from '../code/swiper';
import { hotDealsSwiper } from '../code/swiper';
import { CompanyProduct } from '../code/main/company';
// import { hotDealsProduct } from '../code/main/hot-deals';

new Header();
const productCompany = new CompanyProduct();
heroSwiper();
companySwiper();
hotDealsSwiper();

await productCompany.loadCards();
// await hotDealsProduct();
