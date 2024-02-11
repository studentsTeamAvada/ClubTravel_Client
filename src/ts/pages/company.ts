import { Header } from "../components/header";
import { CompanyProduct } from "../code/company/company-company";

new Header();
const productCompany = new CompanyProduct();

await productCompany.loadCards();
