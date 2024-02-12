import $ from "jquery";

export class DropDown {
  dropDown: JQuery<HTMLElement>;
  dropMain: JQuery<HTMLElement>;
  quatityAdults: JQuery<HTMLElement>;
  quatityKids: JQuery<HTMLElement>;
  addBtn: JQuery<HTMLElement>;
  btn: JQuery<HTMLElement>;
  children: JQuery<HTMLElement>;
  tegContainer: JQuery<HTMLElement>;
  error: JQuery<HTMLElement>;
  currentAbdul: number;
  currentKids: number;

  constructor(className: string) {
    this.dropDown = $(className).find(".dropdown");
    this.dropMain = this.dropDown.find(".dropdown__main");
    this.quatityAdults = this.dropDown.find("#adults-quantity");
    this.quatityKids = this.dropDown.find("#kids-quantity");
    this.addBtn = this.dropDown.find(".dropdown__button-add");
    this.error = this.dropDown.find(".dropdown__error");
    this.btn = this.dropDown.find(".dropdown__btn");
    this.children = this.dropDown.find(".dropdown__children");
    this.tegContainer = $(".tour__quantity-tegs");
    this.currentAbdul = 0;
    this.currentKids = 0;
    this.init();
  }
  init() {
    this.open();
    this.counter(this.dropDown.find(".dropdown__count-one"));
    this.counter(this.dropDown.find(".dropdown__count-two"), true);
    this.removeAgeSelect(1);
    this.addPeople();
  }
  open() {
    this.btn.on("click", () => {
      this.dropDown.toggleClass("dropdown_active");
    });
    const context = this;

    $(document).on("click", function (e: JQuery.ClickEvent) {
      if (context.dropDown.has(e.target).length == 0) {
        context.dropDown.removeClass("dropdown_active");
      }
    });
  }

  counter(el: JQuery<HTMLElement>, kids: boolean = false) {
    const add = el.find(".dropdown__count-add");
    const remove = el.find(".dropdown__count-remove");
    const total = el.find(".dropdown__count-current");
    const context = this;

    function addOne(): void {
      let current = +total.text();
      if (current < 9) {
        const sum = current + 1;
        total.html(String(sum));
        if (kids) {
          context.timeout(sum, true);
        } else {
          context.currentAbdul = sum;
          context.error.removeClass("dropdown__error_active-abduls");
        }
      }
    }
    function removeOne(): void {
      let current = +total.text();
      // const min = kids? 0 : 1
      if (current > 0) {
        const sum = current - 1;
        total.html(String(sum));
        if (kids) {
          context.timeout(sum, false);
        } else {
          context.currentAbdul = sum;
        }
      }
    }

    add.on("click", addOne);
    remove.on("click", removeOne);
  }

  addAgeSelect(current: number) {
    const allSelects = this.dropDown.find(".children__drop");
    const quantitySelect = allSelects.length;

    for (let i = 0; i < current; i++) {
      if (i > quantitySelect - 1) {
        this.children.append(`
                    <div id="drop-${i}" class="children__drop">
                        <button class="children__btn">
                            <span class="children__current">Укажите возраст</span>
                            <svg><use xlink:href="#chevron-left"></use></svg> 
                        </button>
                        <ul class="children__list">
                            <li>Укажите возраст</li>
                            <li>&lt; 1 год</li>
                            <li>1 год</li>
                            <li>2 года</li>
                            <li>3 года</li>
                            <li>4 года</li>
                            <li>5 лет</li>
                            <li>6 лет</li>
                            <li>7 лет</li>
                            <li>8 лет</li>
                            <li>9 лет</li>
                            <li>10 лет</li>
                            <li>11 лет</li>
                            <li>12 лет</li>
                            <li>13 лет</li>
                            <li>14 лет</li>
                            <li>15 лет</li>
                            <li>16 лет</li>
                            <li>17 лет</li>
                        </ul>
                    </div>
                `);

        const scriptElement = $("<script>").attr("type", "text/javascript")
          .text(`
                    function dropDown(id){
                        const drop = document.querySelector(id)
                        const li = drop.querySelectorAll('li');
                        const current = drop.querySelector('.children__current');
                        const btn  = drop.querySelector('.children__btn');
                        const listHeight = drop.querySelector('.children__list').offsetHeight;
        
                        li.forEach(item => {
                            item.addEventListener('click', () => {
                                    current.textContent = item.textContent
                                    if(item.textContent !== 'Укажите возраст'){
                                        drop.classList.remove('children__drop_error')
                                        document.querySelector('.dropdown__error').classList.remove('dropdown__error_active-kids')
                                    }
                            })
                        });
        
                        
                        drop.addEventListener('click', () => {
                            drop.classList.toggle('children__drop_active')
                        })
        
                        document.addEventListener('click', (e) => {
                            if (!drop.contains(e.target)) {
                                drop.classList.remove('children__drop_active');
                            }
                        });
        
                        function observer(){
                            const options = {
                                rootMargin: '0px 0px -' + (listHeight? listHeight + 30 : 300 ) + 'px 0px',
                                threshold: 1 
                            };  
                            const observer = new IntersectionObserver(callback, options);  
                            if(btn){
                                observer.observe(btn);
                            }
                
                            function callback(entries) {
                                entries.forEach(entry => {
                                    if (entry.isIntersecting) {
                                            drop.classList.add('children_top');
                                            drop.classList.remove('children_bottom');
                                    } else {
                                        if(window.innerHeight > 700 ){
                                            drop.classList.add('children_bottom');
                                            drop.classList.remove('children_top');
                                        }
                                    }
                                });
                            }
                        }
                        observer()
                        drop.classList.add('children__drop_opacity')
                    }
                    dropDown('#drop-${i}')
                `);
        $("body").append(scriptElement);
      }
    }
  }

  removeAgeSelect(current: number) {
    const allSelects = this.dropDown.find(".children__drop");
    allSelects.each((index, item) => {
      if (index > current - 1) {
        item.classList.remove("children__drop_opacity");
        setTimeout(() => {
          item.remove();
        }, 150);
      }
    });
  }

  timeout(current: number, action: boolean) {
    function height(): number {
      const rows = Math.ceil(current / 2);
      let currentHeight = 0;
      if (rows === 1) {
        currentHeight = 40;
      } else if (rows > 1) {
        currentHeight = rows * 45 - 5;
      }
      return currentHeight;
    }

    if (action) {
      if (current % 2 !== 0) {
        this.children.css("height", `${height()}px`);
      }
      this.addAgeSelect(current);
    } else {
      if (current % 2 === 0) {
        this.children.css("height", `${height()}px`);
      }
      this.removeAgeSelect(current);
    }
  }

  addPeople() {
    this.addBtn.on("click", () => {
      const allSelects = this.dropDown.find(".children__drop");
      const context = this;
      interface KidsObject {
        [key: string]: number;
      }
      const kidsObj: KidsObject = {};

      allSelects.each(function (_index, el) {
        const thisCurrent: string = String(
          el.querySelector(".children__current")?.textContent,
        );
        if (thisCurrent === "Укажите возраст") {
          el.classList.add("children__drop_error");
          context.error.addClass("dropdown__error_active-kids");
        } else {
          if (kidsObj.hasOwnProperty(thisCurrent)) {
            kidsObj[thisCurrent]++;
          } else {
            kidsObj[thisCurrent] = 1;
          }
        }
      });

      const allErrors = this.dropDown.find(".children__drop_error");

      if (allErrors.length === 0) {
        if (this.currentAbdul < 1) {
          this.error.addClass("dropdown__error_active-abduls");
        } else {
          this.quatityAdults.html(String(this.currentAbdul));

          this.currentKids = Object.keys(kidsObj).length;
          this.quatityKids.html(String(this.currentKids));
          this.dropDown.removeClass("dropdown_active");

          this.tegContainer.html(`
                        <li>Взрослых x${this.currentAbdul}</li>
                    `);
          for (const key in kidsObj) {
            this.tegContainer.append(`
                            <li>${key} x${kidsObj[key]}</li>
                        `);
          }
          const customEvent = new CustomEvent("myCustomEvent");
          document.dispatchEvent(customEvent);
        }
      }
    });
  }
  getAbduls() {
    return this.currentAbdul;
  }
  getKids() {
    return this.currentKids;
  }
}
