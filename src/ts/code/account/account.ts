import { Users } from "../../type";
import {getFirestore, collection, getDocs, Firestore,} from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { app } from "../../modules/firebase";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const accountOrder = document.querySelector(".account__order");
const accountOrders = document.querySelector(".account__table-bottom-left");

export class Account {
  private app: FirebaseApp;
  private db: Firestore;
  private usersArray: Users[];
  private currentUser: User | null;

  constructor() {
    this.app = app;
    this.db = getFirestore(this.app);
    this.usersArray = [];
    this.currentUser = null;
    this.initAuth();
  }

  initAuth() {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      this.currentUser = user;
      if (user) {
        this.loadCards();
      } else {
        this.usersArray = [];
        this.renderUsers();
      }
    });
  }
  

  async loadCards() {
    if (!this.currentUser) return;
    const userEmail = this.currentUser.email;
    
    const querySnapshot = await getDocs(collection(this.db, "users"));
    querySnapshot.forEach((doc) => {
      const user = doc.data().orders as Users;
      console.log(user.email);
      
      if (user.email === userEmail) {
        this.usersArray.push(user);
      }
    });

    this.renderUsers();
  }

  renderUsers() {
    const users = this.usersArray;
    users.forEach((user) => {
        const content = user;
        const { date, email, idOrder, payStatus, price} = content;
        
        let template = `
        <td>${idOrder}</td>
        <td>${price}</td>
        `;
      if(email.length < 23) {
          template += `
              <td>${email}</td>
          `;
      } else {
          template += `
          <td>${email.slice(0, 23) + "..."}</td>
      `;
      }
        template += `
        <td>
        ${
            payStatus == false
            ? `<p class="account__payment-processing">В обработке</p>`
            : `<p class="account__payment-success">Оплачено</p>`
        }
      </td>
        <td>${date}</td>
        `;
        
        if (accountOrder) {
          accountOrder.insertAdjacentHTML("beforeend", template);
          }
    }) 

    let ordersTotal = `
      <p>Показано <span>${this.usersArray.length > 9 ? 9 : this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;

    if (accountOrders) {
      accountOrders.insertAdjacentHTML("beforeend", ordersTotal);
    }
  }
 
}
