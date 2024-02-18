import { Header } from "../components/header";
import { justValidatePasswordRecovery } from "../modules/justValidate";
import { PasswordRecovery } from "../code/password-recovery/password-recovery";
import { Preloader } from "../components/preloader";

document.addEventListener("DOMContentLoaded", () => {
  new Header();
  justValidatePasswordRecovery();
  
  const passwordRecoveryInstance = new PasswordRecovery();
  
  const buttonSend = document.querySelector(
    ".password-recovery__btn-registration",
  ) as HTMLElement;
  buttonSend.addEventListener("click", () => {
    passwordRecoveryInstance.passwordRecovery();
  });
  
  new Preloader()
})
