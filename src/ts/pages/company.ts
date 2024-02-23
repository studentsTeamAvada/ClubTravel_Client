import { Header } from "../components/header";
import { CompanyProduct } from "../code/company/company-company";
import { Preloader } from "../components/preloader";




document.addEventListener("DOMContentLoaded", async function() {
    const productCompany = new CompanyProduct();
    await productCompany.loadCards();
    new Header();
    new Preloader();
})
