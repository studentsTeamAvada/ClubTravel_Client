import { Users } from "../../type";
import {getFirestore, collection, getDocs, Firestore,} from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { app } from "../../modules/firebase";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

const accountOrder = document.querySelector(".account__order");
const accountOrders = document.querySelector(".account__table-bottom-left");
const accountOrdersMobile = document.querySelector(".account__table-bottom-left-mobile");
const accountLeftWrapper = document.querySelector(".account-mobile__table");
const accountLeft = document.querySelector('.account__left');

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
    this.renderAccountLeft();
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
    console.log('Пользователь вышел из аккаунта');
    
    const auth = getAuth();
    auth.signOut().then(() => {
        
        console.log('Пользователь вышел из аккаунта');
    }).catch((error) => {
        console.error('Ошибка при выходе из аккаунта:', error);
    });
  }

  async renderAccountLeft() {

    const querySnapshot = await getDocs(collection(this.db, "users"));

    if (!this.currentUser) return;

    const userEmail = this.currentUser.email;

    querySnapshot.forEach((doc) => {
        const user = doc.data();
        
        if (user.email === userEmail) {
            const { email, name, photo } = user;
            console.log(email);

            let templateRenderLeft = `
            <div class="account__left-photo">
            
            <img src="${photo}" alt="bg" />
            
          </div>
          <p class="account__left-name">${name ? name : 'Пользователь'}</p>
          <button class="account__left-order active">
            <svg><use xlink:href="#order"></use></svg>
            <p>Мои заказы</p>
          </button>
          <button class="account__left-history-order">
            <svg><use xlink:href="#history-order"></use></svg>
            <p>История платежей</p>
          </button>
          <button class="account__left-settings">
            <svg><use xlink:href="#account-settings"></use></svg>
            <p>Настройки</p>
          </button>
          <a href="#" class="account__left-exit">
            <svg><use xlink:href="#exit"></use></svg>
            <p>Выход</p>
          </a>
        `;

        if(accountLeft) {
          accountLeft.insertAdjacentHTML("beforeend", templateRenderLeft)
        }

        }      
    });

    this.settings();
  }
  

  settings() {
    const buttonSettings = document.querySelector('.account__left-settings');
    const buttonOrders = document.querySelector('.account__left-order');
    const accountRight = document.querySelector('.account__right');
    const accountSettings = document.querySelector('.account__settings');

    const accountLeftWrapper = document.querySelector('.account__left-wrapper');

    accountLeftWrapper?.addEventListener('click', (e) => {
      const clickElement = e.target as HTMLElement;

      if (clickElement) {
        const clickContent = clickElement.textContent;

        if (clickContent && clickContent.includes('Настройки')) {
          buttonSettings?.classList.add('active');
          buttonOrders?.classList.remove('active');
          accountRight?.classList.add('active');
          accountSettings?.classList.remove('active');
          
        } else if (clickContent && clickContent.includes('Мои заказы')) {
          buttonOrders?.classList.add('active');
          buttonSettings?.classList.remove('active');
          accountRight?.classList.remove('active');
          accountSettings?.classList.add('active');
        }

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
    const users = this.usersArray;

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


