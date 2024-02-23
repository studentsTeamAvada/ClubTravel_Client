import { Users } from "../../type";
import {getFirestore, collection, getDocs, Firestore,} from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { app } from "../../modules/firebase";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const accountOrder = document.querySelector(".account__order");
const accountOrders = document.querySelector(".account__table-bottom-left");
const accountOrdersMobile = document.querySelector(".account__table-bottom-left-mobile");
const accountLeftWrapper = document.querySelector(".account-mobile__table");

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
    this.renderUserName();
  }

  initAuth() {
    const auth = getAuth();

    onAuthStateChanged(auth, (users) => {
      this.currentUser = users;
      
      if (users) {
        this.loadCards();
      } else {
        this.usersArray = [];
        this.renderUsers();
      }
    });
  }

  exitAccount() {
    console.log('yes');
    
    const auth = getAuth();
    auth.signOut().then(() => {
        
        console.log('Пользователь вышел из аккаунта');
    }).catch((error) => {
        console.error('Ошибка при выходе из аккаунта:', error);
    });
  }

  async renderUserName() {

    const querySnapshot = await getDocs(collection(this.db, "users"));

    if (!this.currentUser) return;

    const userEmail = this.currentUser.email;

    querySnapshot.forEach((doc) => {
        const user = doc.data();
        
        if (user.email === userEmail) {
            const { email, name, photo } = user;
            console.log(email);
        }
    });
}
  

  async loadCards() {
    if (!this.currentUser) return;
    const userEmail = this.currentUser.email;
    
    const querySnapshot = await getDocs(collection(this.db, "users"));
    querySnapshot.forEach((doc) => {
      const users = doc.data().orders;
      users.forEach((user: Users) => {
        if (user.email === userEmail) {
          this.usersArray.push(user);
        }
      })
    });

    this.renderUsers();
  }
 

  renderUsers() {
    console.log('da');
    
    const users = this.usersArray;
    console.log(users);
    
    
    users.forEach((user) => {
        const content = user;
        const { date, email, idOrder, payStatus, price } = content;
        
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

          let templateMobile = `
          <div class="account-mobile__table-wrapper">
            <div class="account-mobile__table-left">
              <p class="account-mobile__table-left-number">Номер заказа</p>
              <p>Сумма</p>
              <p>E-mail</p>
              <p>Cтатус</p>
              <p>Дата</p>
            </div>
            <div class="account-mobile__table-right">
              <p class="account-mobile__table-right-number">${idOrder}</p>
              <p>${price}</p>
              `;
              if(email.length < 23) {
                templateMobile += `
                    <p>${email}</p>
                  `;
              } else {
                templateMobile += `
                  <p>${email.slice(0, 23) + "..."}</p>
              `;
              }
              templateMobile += `
              ${
                payStatus == false
                ? `<p class="account__payment-processing">В обработке</p>`
                : `<p class="account__payment-success">Оплачено</p>`
                }
              <p>${date}</p>
            </div>
          </div>
          `;

          if (accountLeftWrapper) {
            accountLeftWrapper.insertAdjacentHTML("beforeend", templateMobile);
          }
    }) 

    let ordersTotal = `
      <p>Показано <span>${this.usersArray.length > 9 ? 9 : this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `;

    if (accountOrders) {
      accountOrders.insertAdjacentHTML("beforeend", ordersTotal);
    }

    let ordersTotalMobile = `
      <p>Показано <span>${this.usersArray.length > 9 ? 9 : this.usersArray.length}</span> из <span>${this.usersArray.length}</span></p>
    `

    if (accountOrdersMobile) {
      accountOrdersMobile.insertAdjacentHTML("beforeend", ordersTotalMobile);
    }
  }
 
}


