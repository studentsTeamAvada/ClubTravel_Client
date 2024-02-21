import { Users } from "../../type";
import {getFirestore, collection, getDocs, Firestore,} from "firebase/firestore";
import { FirebaseApp } from "firebase/app";
import { app } from "../../modules/firebase";

const accountWrapper = document.querySelector(".account__wrapper");

export class Account {
  private app: FirebaseApp;
  private db: Firestore;
  private usersArray: Users[];

  constructor() {
    this.app = app;
    this.db = getFirestore(this.app);
    this.usersArray = [];
  }

  async loadCards() {
    const querySnapshot = await getDocs(collection(this.db, "users"));
    querySnapshot.forEach((doc) => {
      const user = doc.data().orders as Users;
        this.usersArray.push(user);
    });

    this.renderUsers();
  }

  renderUsers() {
    const users = this.usersArray;
    users.forEach((user) => {
        const content = user;
        console.log(user);
        console.log(this.usersArray.length);
        
        
        const { date, email, idOrder, payStatus, price} = content;
        
        let template = `
        <div class="account__left-wrapper">
        <div class="account__left">
          <div class="account__left-photo">
            <picture>
              <source
                srcset="/src/images/account/photo1.webp"
                type="image/webp"
              />
              <img src="/src/images/account/photo1.png" alt="bg" />
            </picture>
          </div>
          <p class="account__left-name">Еле Колонаева</p>
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
        </div>
        <div class="account__polite-wrapper">
          <a class="account__polite">Политика конфиденциальности</a>
          <a class="account__polite">Политика использования</a>
        </div>
      </div>
      <div class="account__right">
        <h4 class="account__right-title">Заказы</h4>
        <div class="account__right-table">
          <table id="accountTable" border="1">
            <thead>
              <tr>
                <th>Номер заказа</th>
                <th>Сумма</th>
                <th>E-mail</th>
                <th>Cтатус</th>
                <th>Дата</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
          <div class="account__right-table-bottom account__table-bottom">
            <div class="account__table-bottom-left">
              <p>Показано <span>9</span> из <span>${this.usersArray.length}</span></p>
            </div>
            <div class="account__table-bottom-right">
              <button
                class="account__table-bottom-button"
                id="account-button-prev"
              >
                Назад
              </button>
              <div class="account__table-bottom-pagination">
                <p>
                  Страница
                  <span class="account__table-pagination active">1</span> из
                  <span class="account__table-pagination">2</span>
                </p>
              </div>
              <button
                class="account__table-bottom-button"
                id="account-button-next"
              >
                Вперед
              </button>
            </div>
          </div>
        </div>
        <div class="account__right-table-mobile account-mobile__table">
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
                  template += `
                    <p>${email}</p>
                  `;
              } else {
                  template += `
                  <p>${email.slice(0, 23) + "..."}</p>
              `;
              }
                template += `
              ${
                payStatus == false
                ? `<p class="account__payment-processing">В обработке</p>`
                : `<p class="account__payment-success">Оплачено</p>`
                }
              <p>${date}</p>
            </div>
          </div>
          <div class="account-mobile__table-bottom">
            <div class="account__table-bottom-left">
              <p>Показано <span>9</span> из <span>${this.usersArray.length}</span></p>
              <div class="account__table-bottom-right account-mobile__table-bottom-right">
                <button
                  class="account__table-bottom-button"
                  id="account-button-prev"
                >
                  Назад
                </button>
                <div class="account__table-bottom-pagination">
                  <p>
                    Страница
                    <span class="account__table-pagination active">1</span> из
                    <span class="account__table-pagination">2</span>
                  </p>
                </div>
                <button
                  class="account__table-bottom-button"
                  id="account-button-next"
                >
                  Вперед
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        `;
        
        if (accountWrapper) {
            accountWrapper.insertAdjacentHTML("beforeend", template);
          }
    }) 
  }
}
