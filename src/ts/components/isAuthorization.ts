import { getAuth, onAuthStateChanged } from "firebase/auth";

export class IsAuthorization {
    
    constructor() {
        this.initializeButton();
    }

    async checkAuthorization() {
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
                console.log(user.email);
                console.log('Пользователь авторизован:', user.uid);
            } else {
                console.log('Пользователь не авторизован');
                window.location.href = "authorization.html";
            }
        });
    }

    initializeButton() {
        const button = document.querySelector('.top-list__link-avatar');
        
        if (button) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                this.checkAuthorization();
            });
            this.watchAuthState();
        } else {
            console.error('Кнопка не найдена');
        }
    }
}