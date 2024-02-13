import { app } from "../../modules/firebase";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export class Authorization {
  app: any;
  auth: any;

  constructor() {
    this.app = app;
    this.auth = getAuth();
  }

  authorizationWithEmail() {
    const emailInput = document.querySelector(
      "#authorizationMail",
    ) as HTMLInputElement;
    const email = emailInput.value;
    const passwordInput = document.querySelector(
      "#authorizationPassword",
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
        alert("Почта или пароль введены неверно");
        console.error("Login failed:", errorCode, errorMessage);
      });
  }

  authorizationWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(this.auth, provider)
      .then((result) => {
        const user = result.user;
        alert("Пользователь вошел с помощью Google");
        console.log("User signed in:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Не удалось войти с помощью Google");
        console.error("Login failed:", errorCode, errorMessage);
      });
  }
}