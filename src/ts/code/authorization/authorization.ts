import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",
  authDomain: "clubtravel-6eff6.firebaseapp.com",
  projectId: "clubtravel-6eff6",
  storageBucket: "clubtravel-6eff6.appspot.com",
  messagingSenderId: "883499742498",
  appId: "1:883499742498:web:b0bf6b06d8073d249a217b",
};

export class Authorization {
  private app: any;
  private auth: any;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth();
  }

  authorization() {
    const emailInput = document.querySelector("#authorizationMail") as HTMLInputElement;
    const email = emailInput.value;
    const passwordInput = document.querySelector("#authorizationPassword") as HTMLInputElement;
    const password = passwordInput.value;
      

    signInWithEmailAndPassword(this.auth, email, password)
      .then((userData) => {
        const user = userData.user;
        alert('Пользователь вошел')
        emailInput.value = '';
        passwordInput.value = '';
        console.log("User signed in:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Почта или пароль введены не верно')
        console.error("Login failed:", errorCode, errorMessage);
      });
  }
}
