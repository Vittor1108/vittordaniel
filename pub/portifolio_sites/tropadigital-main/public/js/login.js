(function(){

    class Login{
        constructor(){
            this.btn = document.querySelector('button');
            this.init();
        }

        init(){
            this.inputValidation();
        }

        inputValidation(){
            const email = document.querySelector('#email');
            const password = document.querySelector('#password');

            this.btn.addEventListener('click', ()=>{
                if(email.value !== 'TropaDigital' || password.value !== '123'){
                    email.value = '';
                    password.value = '';
                    alert('Senha Errada!')

                }else{
                    email.value = '';
                    password.value = '';
                    window.location.href = "./home.html";
                }
            });
        }
    }
    const login = new Login();
})();