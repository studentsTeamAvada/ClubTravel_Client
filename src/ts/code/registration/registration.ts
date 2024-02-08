import { app } from "../../modules/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export class Registration {
  app: any;
  auth: any;

  constructor() {
    this.app = app;
    this.auth = getAuth();
  }

  registration() {
    const emailInput = document.querySelector("#registrationMail") as HTMLInputElement;
    const email = emailInput.value;
    const passwordInput = document.querySelector("#registrationPassword") as HTMLInputElement;
    const password = passwordInput.value;


      createUserWithEmailAndPassword(this.auth, email, password)
      .then((userData: any) => {
        const user = userData.user;
        emailInput.value = '';
        passwordInput.value = '';
        console.log(user);
      })
      .catch((error: any) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration failed:", errorCode, errorMessage);
      });
  }
}
