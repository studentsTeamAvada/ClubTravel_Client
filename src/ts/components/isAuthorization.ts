
import { getAuth, onAuthStateChanged } from "firebase/auth";

export class IsAuthorization {
    
    constructor() {
        this.initializeButton();
        this.watchAuthState(); 
    }

    async checkAuthorizationAvatar() {
        const user = await getAuth().currentUser;
        if (user) {
            console.log('Пользователь авторизован:', user.uid);
            window.location.href = "account.html"; 
        } else {
            console.log('Пользователь не авторизован');
            window.location.href = "authorization.html";
        }
    }

    async checkAuthorizationUser() {
        const user = await getAuth().currentUser;
        if (user) {
            console.log('Пользователь авторизован:', user.uid);
            window.location.href = "account.html"; 
        } else {
            console.log('Пользователь не авторизован');
            window.location.href = "authorization.html";
        }

    }

    watchAuthState() {
        onAuthStateChanged(getAuth(), (user) => {
            if (user) {
                console.log('Пользователь авторизован:', user.uid);
            } else {
                console.log('Пользователь не авторизован');
                if (!window.location.href.includes("authorization.html")) {
                    window.location.href = "authorization.html";
                }
            }
        });
    }

    initializeButton() {
        const buttonAvatar = document.querySelector('.top-list__link-avatar');
        const buttonUser = document.querySelector('.top-list__link-user');
        
        if (buttonAvatar) {
            buttonAvatar.addEventListener('click', (e) => {
                e.preventDefault();
                this.checkAuthorizationAvatar();
            });
        } else {
            console.error('Кнопка не найдена');
        }

        if (buttonUser) {
            buttonUser.addEventListener('click', (e) => {
                e.preventDefault();
                this.checkAuthorizationUser();
            });
        } else {
            console.error('Кнопка не найдена');
        }
    }
}