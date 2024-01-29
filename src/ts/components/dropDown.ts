import * as $ from 'jquery';

export class DropDown{
    dropDown: JQuery<HTMLElement>;
    dropMain: JQuery<HTMLElement>;
    btn :  JQuery<HTMLElement> ;
    children: JQuery<HTMLElement>;
    constructor(className: string){
        this.dropDown = $(className).find('.dropdown');
        this.dropMain = this.dropDown.find('.dropdown__main');
        this.btn =  this.dropDown.find('.dropdown__btn');
        this.children = this.dropDown.find('.dropdown__children');
        this.init();
    }
    init(){
        this.open();
        this.observer();
        this.counter(this.dropDown.find('.dropdown__count-one'));
        this.counter(this.dropDown.find('.dropdown__count-two'));
        this.insideDrop('#drop-1');
        this.insideDrop('#drop-2');
        this.insideDrop('#drop-3');
        this.insideDrop('#drop-4');
    }
    open(){
        this.btn.on('click', () => {
            this.dropDown.toggleClass('dropdown_active')
        })
        const context = this;


        $(document).on('click', function (e:JQuery.ClickEvent) {
            if(context.dropDown.has(e.target).length == 0){
                context.dropDown.removeClass('dropdown_active')
            }
        })
    }
    observer(): void{
        const mainDropHeight: number = Number(this.dropMain.height());
        const context = this;

        $(document).ready(function() {          
            const options = {
                root: null,
                rootMargin: `0px 0px -${mainDropHeight + 30}px 0px`,
                threshold: 1 
            };  
            
            function callback(entries: IntersectionObserverEntry[]): void {
                entries.forEach((entry) => {

                    const windowHeight: number = Number($(window).height());
                    const distanceTop: number = Number(entry.boundingClientRect.top)

                    if(windowHeight > 700 && distanceTop > 0){
                        if (entry.isIntersecting) {
                            context.dropDown.addClass('dropdown_bottom')
                            context.dropDown.removeClass('dropdown_top')
                        } else {
                            context.dropDown.addClass('dropdown_top')
                            context.dropDown.removeClass('dropdown_bottom')
                        }
                    }
                });
            }
            
            const items = $('.dropdown__btn');
            
            const observer = new IntersectionObserver(callback, options);
            
            items.each(function(index, item) {
                observer.observe(item);
            });
        });
  
    }
    counter(el : JQuery<HTMLElement>){
        const add = el.find('.dropdown__count-add');
        const remove = el.find('.dropdown__count-remove');
        const total = el.find('.dropdown__count-current');
        const context = this;

        function addOne() : void{
            let current = +total.text();
            if(current < 9){
                const sum = current + 1
                total.html(String(sum))
                context.addKids(sum)
            }
        }
        function removeOne() : void{
            let current = +total.text()
            if(current > 0){
                const sum = current - 1;
                total.html(String(sum))
                context.addKids(sum)
            }
        }

        add.on('click', addOne)
        remove.on('click', removeOne)
    }

    addKids(current : number){
        if(current > 0){
            this.children.addClass('children_active');
        }else{
            this.children.removeClass('children_active');
        }

    }

    insideDrop(id: string){
        const drop = $(id)
        const li = drop.find('li');
        const current = drop.find('.children__current');
        const listHeight = drop.find('.children__list').height();

        for(let i = 0; i < li.length; i++){
            const thisEl = $(li[i]);
            thisEl.on('click', () => {
                current.text(thisEl.text())
            });
        }

        drop.on('click', () => {
            drop.toggleClass('children__drop_active')
        });

        $(document).on('click', function (e:JQuery.ClickEvent) {
            if(drop.has(e.target).length == 0){
                drop.removeClass('children__drop_active')
            }
        });



        function observer(): void{
            $(document).ready(function() {          
                const options = {
                    root: null,
                    rootMargin: `0px 0px -${Number(listHeight) + 30}px 0px`,
                    threshold: 1 
                };  
                
                function callback(entries: IntersectionObserverEntry[]): void {
                    entries.forEach((entry) => {
    
                        const windowHeight: number = Number($(window).height());
                        const distanceTop: number = Number(entry.boundingClientRect.top)

                        if(windowHeight > 700 && distanceTop > 0){
                            if (entry.isIntersecting) {
                                drop.addClass('children_top')
                                drop.removeClass('children_bottom')
                            } else {
                                drop.addClass('children_bottom')
                                drop.removeClass('children_top')
                            }
                        }
                    });
                }
                
                const items = drop.find('.children__btn');
                const observer = new IntersectionObserver(callback, options);
                items.each(function(index, item) {
                    observer.observe(item);
                });
            });
        }
        observer()
    }
    
}
