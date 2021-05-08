let boton_menu = document.querySelector('#boton_menu');
let menu = document.querySelector('#menu');
let logo = document.querySelector('.brand');

boton_menu.addEventListener('click', function(){
    menu.classList.toggle('aparecer');
    logo.classList.toggle('brand_to');
    console.log('presionaste menu');
});




