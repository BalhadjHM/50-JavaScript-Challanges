const page = document.querySelector('.page');
const menu = document.querySelector('.menu');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    // rotate the btn when click
    btn.classList.toggle('rotate');
    // rotate the page when click
    page.classList.toggle('slide');
    // show the links when click
    if(menu.classList.contains('show')){
        menu.classList.remove('show');
    }else{
        setTimeout(() => {menu.classList.toggle('show')}, 500);
    }
})