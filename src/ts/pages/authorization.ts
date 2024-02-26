import { Header } from "../components/header";
import { justValidateAuthorization } from "../modules/justValidate";
import { Preloader } from "../components/preloader";
import { Authorization } from "../code/authorization/authorization";
// import { IsAuthorization } from "../components/isAuthorization";


document.addEventListener("DOMContentLoaded", () => {
    // new IsAuthorization();
    new Header();
    justValidateAuthorization();
    
    const authorizationInstance = new Authorization();
    
    const buttonAuthorization = document.querySelector('.authorization__btn-registration') as HTMLElement;
    buttonAuthorization.addEventListener('click', () => {
        authorizationInstance.authorizationWithEmail();
    })
    
    const buttonAuthorizationGoogle = document.querySelector('.authorization__form-btn-google') as HTMLElement;
    buttonAuthorizationGoogle.addEventListener('click', () => {
        authorizationInstance.authorizationWithGoogle();
    })

    new Preloader()
})