const mainMenu = document.querySelector('nav-menu');
const openBurger = document.querySelector('nav-burger');

openBurger.addEventListener('click', show);

function show(){
    mainMenu.style.display = 'flex'
    mainMenu.style.top = '0';
}