import {app} from "./../../modules/firebase"
import $ from "jquery";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 

type dateObj = {
    counrty?: string //todo: refactoring
    region?: string
    dataStart?: string
    dataFinish?: string
    people?: object
    price?: string
    food?: string
    stars?: string
    wouldLike?: string
    name?: string
    tel?: string
    email?: string
}

interface castumEvent extends Event { //todo: refactoring
    detail: {stars: string} ,

}

export class SendDate{
    dateObj : dateObj
    constructor (){
        this.dateObj = {}
        this.dateObj.people = {kids: 0, abduls: 1} //todo: refactoring

        this.init()
    }
    init(){
        this.selecDate()
    }

    selecDate(){ //todo: refactoring
        console.log(this.dateObj, 1)
        document.addEventListener("selectTour", () => {
            this.dateObj.counrty = $(".drop-country__county").html()
            this.dateObj.region = $(".drop-country__tour").html()
        });

        document.addEventListener("finalDate", () => {
            this.dateObj.dataStart = $("#start-date").html()
            this.dateObj.dataFinish = $("#final-date").html()
        });

        document.addEventListener("myCustomEvent", (e) => {
            const even = e as castumEvent
            this.dateObj.people = even.detail
        });

        document.addEventListener("selectFood", () => {
            this.dateObj.food = $(".food__btn-info").html()
        });

        document.addEventListener("selectStars", (e) => {
            const even = e as castumEvent
            this.dateObj.stars = even.detail.stars
        });

        $('#input-price').on("input", () => {
            this.dateObj.price = String($('#input-price').val())
        });

        $('.form__textarea').on("input", () => {
            this.dateObj.wouldLike = String($('.form__textarea').val())
        });

        $('#input-name').on("input", () => {
            this.dateObj.name = String($('#input-name').val())
        });

        $('#input-tel').on("input", () => {
            this.dateObj.tel = String($('#input-tel').val())
        });

        $('#input-mail').on("input", () => {
            this.dateObj.email = String($('#input-mail').val())
        });

        $('#adviser-inp').on("input", () => {
            this.dateObj.tel = String($('#adviser-inp').val())
        });
    }
    
    async sendDate(form: boolean = true){
        const db = getFirestore(app);
        if(form){
            await addDoc(collection(db, "callYouForm"), this.dateObj);
        }else{
            await addDoc(collection(db, "callYouForm"), {phone: this.dateObj.tel});
        }

        this.clearFormTwo()
    }

    clearFormTwo(){
        $('#input-price').val('');
        $('.form__textarea').val('');
        $('.food__btn-info').html('Выбрать');
        $(".form__stars-one-star").each((_index, item) => {
            item.classList.remove("form__stars-one-star_active");
        })
    }
}