export class Pagination{
    private currentPage: number
    usersLength: number
    constructor(num: number){
        this.currentPage = 1;
        this.usersLength = num
        this.init()
    }
    init(){
        this.pagination()
    }
    pagination(){
        const context = this
        const btnPrev = document.getElementById("account-button-prev");
        const btnNext = document.getElementById("account-button-next");
        const btnPrevMob = document.getElementById("account-button-prev-mob");
        const btnNextMob = document.getElementById("account-button-next-mob");
        const thisPage = document.getElementById("current-page");
        const allPages = document.getElementById("all-pages");
        const thisPageMob = document.getElementById("current-page-mob");
        const allPagesMob = document.getElementById("all-pages-mob");
        const quantityPages = Math.ceil(this.usersLength / 9)
    
        if(allPages){
          allPages.textContent = String(quantityPages)
        }
    
        if(allPagesMob){
          allPagesMob.textContent = String(quantityPages)
        }
    
        btnPrev?.addEventListener("click", () => {
          minus()
        })
    
        btnPrevMob?.addEventListener("click", () => {
          minus()
        })
    
        btnNext?.addEventListener("click", () => {
          plus()
        })
    
        btnNextMob?.addEventListener("click", () => {
          plus()
        })
    
        function minus(){
          if(context.currentPage > 1){
            context.currentPage--
            switchPage();
            hideOrder();
          }
        }
    
        function plus(){
          if(context.currentPage < quantityPages){
            context.currentPage++
            switchPage();
            hideOrder();
          }
        }
    
        function hideOrder(){
          const current = context.currentPage
          const allOrders = document.querySelectorAll(".order")
          const allOrdersMob = document.querySelectorAll(".account-mobile__table-wrapper")
    
          const visibleEnd = (context.currentPage * 9) - 1
          const visibleStart = visibleEnd  - 8
    
          allOrdersMob.forEach(item => {
            if(+item.id >= visibleStart && +item.id <= visibleEnd){
              item.classList.add("account-mobile__table-wrapper_active")
            }else{
              item.classList.remove("account-mobile__table-wrapper_active")
            }
          })
    
          allOrders.forEach(item => {
            if(+item.id >= visibleStart && +item.id <= visibleEnd){
              item.classList.add("order_active")
            }else{
              item.classList.remove("order_active")
            }
          })
    
          if(current === 1){
            btnPrev?.classList.remove("account__table-bottom-button_active")
            btnPrevMob?.classList.remove("account__table-bottom-button_active")
          }else{
            btnPrev?.classList.add("account__table-bottom-button_active")
            btnPrevMob?.classList.add("account__table-bottom-button_active")
          }
    
          if(current === quantityPages){
            btnNext?.classList.remove("account__table-bottom-button_active")
            btnNextMob?.classList.remove("account__table-bottom-button_active")
          }else{
            btnNext?.classList.add("account__table-bottom-button_active")
            btnNextMob?.classList.add("account__table-bottom-button_active")
          }
        }
    
        function switchPage(){
          if(thisPage){
            thisPage.innerHTML = String(context.currentPage)
          }
          if(thisPageMob){
            thisPageMob.innerHTML = String(context.currentPage)
          }
        }
    
        hideOrder();
      }
}