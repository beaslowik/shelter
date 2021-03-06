const body = document.querySelector('body');
const hamburgerButton = document.querySelector('.hamburger-button');
const mobileMenu = document.querySelector('.mobile-menu');
const menuItem = document.querySelectorAll('.menu-item');
const mobileLogo = document.querySelector('h1');
const header = document.querySelector('header');

mobileLogo.addEventListener('click', coverBody);
mobileLogo.addEventListener('click', showHideMenu);
mobileLogo.addEventListener('click', rotateHamburger);

hamburgerButton.addEventListener('click', coverBody);
hamburgerButton.addEventListener('click', showHideMenu);
hamburgerButton.addEventListener('click', mobileMenuAnimation);

menuItem.forEach(function(item) {
    item.addEventListener('click', coverBody);
    item.addEventListener('click', showHideMenu);
    item.addEventListener('click', rotateHamburger);
})

//  COVER BODY 
function coverBody() {
    if (body.classList.contains('cover-body')) {
        body.classList.remove('cover-body');
    } else {
        body.classList.add('cover-body');
    }
}

// SHOW HIDE MOBILE MENU
function showHideMenu() {
    mobileMenu.classList.toggle('hide');
}

//MOBILE MENU ANIMATION
function mobileMenuAnimation() {
    header.classList.toggle('slide-in');
    header.classList.toggle('slide-out');
}

// ROTATE HAMBURGER 
hamburgerButton.addEventListener('click', rotateHamburger);

function rotateHamburger() {
    hamburgerButton.classList.toggle('turn');
}