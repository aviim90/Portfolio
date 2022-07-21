const hamburger = document.getElementById('nav-burger');
const navMenu = document.getElementById('nav-ul');
const navMenu1 = document.getElementById('nav-ul1');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navMenu1.classList.toggle('show');
});