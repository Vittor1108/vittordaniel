// Efeito carregamendo SVG
new Vivus ('sword_svg', {
    duration: 150,
    type: 'sync',
});


setTimeout(function (){
    const bg_loading = document.querySelector('.bg_loading');
    bg_loading.classList.add('bg_loading_off');
}, 5 * 1000);

setTimeout(function(){
    const bg_video = document.querySelector('.bg_video');
    bg_video.classList.add('intro_video');
}, 6 * 1000);

setTimeout(function (){
    const navBar = document.querySelector('.navbar');
    const lines = document.querySelector('.lines');
    navBar.classList.add('intro_navbar');
    lines.classList.add('intro_lines');
}, 7 * 1000);

setTimeout(function (){
    const item_1 = document.querySelector('.item-1');;
    item_1.classList.add('intro_item-1');
}, 7.5 * 1000);

setTimeout(function (){
    const item_2 = document.querySelector('.item-2');;
    item_2.classList.add('intro_item-2');
}, 8 * 1000)

// Efeito IMG
VanillaTilt.init(document.querySelector(".riven"), {
    max: 10,
    speed: 200
});
