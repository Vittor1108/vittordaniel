// Animation Menu
const icon_menu = document.querySelector(".icon_menu_mobile");
const menu_mobile = document.querySelector(".menu_mobile");
icon_menu.addEventListener('click',()=>{
   icon_menu.classList.toggle("animation_icon");
   menu_mobile.classList.toggle("animation_menu");
})