import { app } from "../../modules/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export class Authorization {
  app: any;
  auth: any;

  constructor() {
    this.app = app;
    this.auth = getAuth();
  }

  authorization() {
    const emailInput = document.querySelector(
      "#authorizationMail"
    ) as HTMLInputElement;
    const email = emailInput.value;
    const passwordInput = document.querySelector(
      "#authorizationPassword"
    ) as HTMLInputElement;
    const password = passwordInput.value;

    signInWithEmailAndPassword(this.auth, email, password)
      .then((userData) => {
        const user = userData.user;
        alert("Пользователь вошел");
        emailInput.value = "";
        passwordInput.value = "";
        console.log("User signed in:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Почта или пароль введены не верно");
        console.error("Login failed:", errorCode, errorMessage);
      });
  }
}
