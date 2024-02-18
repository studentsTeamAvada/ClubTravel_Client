import $ from "jquery";

export class Preloader{
    header: JQuery<HTMLElement>
    preloader: JQuery<HTMLElement>
    constructor(){
        this.header = $('.header');
        this.preloader = $(".preloader")
        this.removePreloader();
    }
    removePreloader(){
        setTimeout(() => {
            this.header.removeClass("header_preload");
            this.preloader.addClass("preloader_hidden");
        },300)
    }
}