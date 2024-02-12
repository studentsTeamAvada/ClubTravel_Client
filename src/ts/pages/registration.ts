import { Header } from "../components/header";
import { justValidateRegistration } from "../modules/justValidate"
import { Registration } from '../code/registration/registration';

new Header();
justValidateRegistration();

const registrationInstance = new Registration();

const buttonRegistration = document.querySelector('.registration__btn-registration') as HTMLElement;
buttonRegistration.addEventListener('click', () => {
    registrationInstance.registrationWithEmail();
})

const buttonRegistrationGoogle = document.querySelector('.registration__form-btn-google') as HTMLElement;
buttonRegistrationGoogle.addEventListener('click', () => {
    registrationInstance.registrationWithGoogle();
})



