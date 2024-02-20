import $ from "jquery";
import {app} from "./../../modules/firebase"
// import { getFirestore, getDocs, collection  } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore"; 

interface user{
    uid: string
}

type objData = {
    date?: string
    idOrder?: number
    price?: number
    payStatus?: boolean
    email?: string | null
    id?: string | null;
}

export class Order{
    objData: objData
    orderBtn: JQuery<HTMLElement>;
    user: user | boolean
    currentUrl: URL

    constructor(){
        this.currentUrl = new URL(window.location.href);
        this.objData = {}
        this.objData.id =  this.currentUrl.searchParams.get("id") || null;
        this.orderBtn = $(".tour__btn");
        this.user = false
        this.init()
    }

    init(){
        this.getSing()
        this.setOrder()
        this.dateOrder()
    }

    getSing(){
        onAuthStateChanged(getAuth(), (user) => {
            if(user){
                this.user = user
                this.objData.email = user.email? user.email: null
            }
        })
    }

    dateOrder(){
        const currentDate =  new Date()
        const id = currentDate.getTime()
        this.objData.idOrder = +String(id).slice(3)
        this.objData.date = this.dateFormat(currentDate)
    }

    setOrder(){
        this.orderBtn.on("click", async () => {
            if(typeof this.user  != "boolean"){
                const uid = this.user.uid
                const db = getFirestore(app);

                this.objData.price = +$(".tour__total-price").html().replace(" ", '');
                this.objData.payStatus = false;
          
                await setDoc(doc(db, "users", uid), {
                    orders: this.objData
                });

                const question = confirm("Тур добавлен и ожидает оплаты, перейти в личный кабинет?")
                if(question){
                    window.location.href = "Account.html"
                }
            }else{
                const question = confirm("Чтобы забронировать тур необходимо авторизоваться, перейти на страницу авторизации?")
                if(question){
                    window.location.href = "authorization.html"
                }
            }
        })
    }

    dateFormat(date: Date){
        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];
        
        const day = date.getDate();
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        
        return `${day} ${month} ${year} ${hours}:${minutes}`;
    }
}