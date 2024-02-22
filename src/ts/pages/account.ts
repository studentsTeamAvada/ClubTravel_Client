import { Header } from "../components/header";
import { Account } from "../code/account/account";
import { IsAuthorization } from "../components/isAuthorization";


document.addEventListener("DOMContentLoaded", async function() {
    new Header();
    new IsAuthorization();
    const productAccount = new Account();
    await productAccount.loadCards();
})


