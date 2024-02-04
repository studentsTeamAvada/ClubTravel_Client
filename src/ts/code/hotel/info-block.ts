<<<<<<< HEAD
import * as $ from 'jquery';
import { DropDown } from './../../components/dropdown';
=======
import $ from 'jquery';
import { DropDown } from './dropdown';
>>>>>>> 268533d4aa4b24416edc8ee22b689d0ac23cb5e7

export class InfoBlock{
    priceOnePerson: JQuery<HTMLElement>;
    totalPrice: JQuery<HTMLElement>;
    dropDown: DropDown;
    constructor(){
        this.priceOnePerson = $('.tour__price-sum').data('price');
        this.totalPrice = $('.tour__total-price');
        this.dropDown = new DropDown('.tour__quantity-drop');
        this.priceCalculator()
    }
    priceCalculator(){
        document.addEventListener('myCustomEvent', () => {
            const allPeople = this.dropDown.getKids() + this.dropDown.getAbduls();
            const total = String( +this.priceOnePerson * allPeople);
            let sum = ''
            if(total.length > 3){
                let count = 0
                for(let i = total.length - 1 ; i >= 0; i--){
                    count++
                    sum += total[i]
                    if(count === 3){
                        sum += ' '
                    }

                }
                sum = sum.split('').reverse().join('')
            }else{
                sum = total
            }
            this.totalPrice.html(sum)
            console.log(total)
        })
    }
}