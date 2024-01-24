import $ from "jquery";

export class Header{
    burgerBtn: JQuery<HTMLDivElement>;
    body: JQuery<HTMLDivElement>;
    constructor(){
        this.burgerBtn = $('.menu__icon');
        this.body = $('body');
        this.burger();
        this.scroll();
    }
    burger(): void{
        const context = this
        this.burgerBtn.on('click', function() {
            context.body.toggleClass('burger-active');
        });
    }
    scroll(){
        window.addEventListener("scroll", () => {
            if(window.scrollY > 50 || window.pageYOffset > 50){
                this.body.addClass('scroll');
            }else{
                this.body.removeClass('scroll');
            }
        })
    }
}



