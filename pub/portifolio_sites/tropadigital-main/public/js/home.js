(function(){

    class Menu{
        constructor(){
            this.iconMenuMobile = document.querySelector('.fa-bars');
            this.modal = document.querySelector('.modal');
            this.menu = document.querySelector('.menu');
            this.init();
        }

       
        init(){
            this.addTransitionMenu();
            this.addTransitonModal();
            this.removeMenuAndModal();
        }   

        addTransitionMenu(){
           
            
            this.iconMenuMobile.addEventListener('click', ()=>{
                if(this.menu.classList.contains('transitionMenuMobile')){
                    this.menu.classList.remove('transitionMenuMobile');
                }else{
                    this.menu.classList.add('transitionMenuMobile');
                }
            });
        }

        addTransitonModal(){
            this.iconMenuMobile.addEventListener('click',()=>{
                if(this.modal.classList.contains('transtionModal')){
                    this.modal.classList.remove('transtionModal');
                }else{
                    this.modal.classList.add('transtionModal');
                }
            });
        }

        removeMenuAndModal(){
            this.modal.addEventListener('click', ()=>{
                if(this.menu.classList.contains('transitionMenuMobile')){
                    this.menu.classList.remove('transitionMenuMobile');
                    this.modal.classList.remove('transtionModal');
                }else{
                    this.menu.classList.add('transitionMenuMobile');
                }
            });
        }



    }

    const menu = new Menu();

})();