// TRANSIÇÃO MENU
const menuItems = document.querySelectorAll('.menu ul a');
menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
});

function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    window.scroll({
        top: section,
        behavior: "smooth",
    });
};

// ANIMAÇÃO DE ENTRADA

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll(){
   const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element){

        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass);

        } else {
            element.classList.remove(animationClass);
        }
    });
};

animeScroll();

if(target.length){
    window.addEventListener('scroll', function(){
        animeScroll();
    });
}
