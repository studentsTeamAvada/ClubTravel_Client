import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",
  authDomain: "clubtravel-6eff6.firebaseapp.com",
  projectId: "clubtravel-6eff6",
  storageBucket: "clubtravel-6eff6.appspot.com",
  messagingSenderId: "883499742498",
  appId: "1:883499742498:web:b0bf6b06d8073d249a217b",
};

export class Registration {
  private app: any;
  private auth: any;

  constructor() {
    this.app = initializeApp(firebaseConfig);
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
