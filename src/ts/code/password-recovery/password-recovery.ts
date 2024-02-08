import { initializeApp } from "firebase/app";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAVwhQr2zeNEAr1FSrD6ygo5dJeLkxjtRk",
  authDomain: "clubtravel-6eff6.firebaseapp.com",
  projectId: "clubtravel-6eff6",
  storageBucket: "clubtravel-6eff6.appspot.com",
  messagingSenderId: "883499742498",
  appId: "1:883499742498:web:b0bf6b06d8073d249a217b",
};

export class PasswordRecovery {
  private app: any;
  private auth: any;

  constructor() {
    this.app = initializeApp(firebaseConfig);
    this.auth = getAuth();
  }

  passwordRecovery() {
    const emailInput = document.querySelector("#passwordRecoveryMail") as HTMLInputElement;
    const email = emailInput.value;

    sendPasswordResetEmail(this.auth, email)
      .then(() => {
        alert("Password reset email sent. Please check your inbox.");
        emailInput.value = '';
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Password reset failed:", errorCode, errorMessage);
        alert("Password reset failed. Please try again later.");
      });
  }
}
