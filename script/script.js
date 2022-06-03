//  COVER BODY 
const hamburgerButton = document.querySelector('.hamburger-button');
const menuItem = document.querySelectorAll('.menu-item');
const mobileLogo = document.querySelector('h1');

mobileLogo.addEventListener('click', coverBody);
mobileLogo.addEventListener('click', showHideMenu);

hamburgerButton.addEventListener('click', coverBody);
hamburgerButton.addEventListener('click', showHideMenu);

menuItem.forEach(function(item) {
    item.addEventListener('click', coverBody);
    item.addEventListener('click', showHideMenu);
})


function coverBody(params) {
    const body = document.querySelector('body');
    if (body.classList.contains('cover-body')) {
        body.classList.remove('cover-body');
    } else {
        body.classList.add('cover-body');
    }
}

// SHOW HIDE MOBILE MENU
const mobileMenu = document.querySelector('.mobile-menu');

function showHideMenu() {
    if (mobileMenu.classList.contains('hide')) {
        mobileMenu.classList.remove('hide');
    } else {
        mobileMenu.classList.add('hide');
    }
}
let counter = 0;
hamburgerButton.addEventListener('click', () => {
    counter++;
    var deg = counter * 90;
    hamburgerButton.style.transform = "rotate(" + deg + "deg)";
});


// =============================================
// const popups = [...document.getElementsByClassName('mobile-menu')];
// window.addEventListener('click', ({
//     target
// }) => {
//     const popup = target.closest('.mobile-menu');
//     const clickedOnClosedPopup = popup && !popup.classList.contains('hide');

//     popups.forEach(p => p.classList.remove('hide'));

//     if (clickedOnClosedPopup) popup.classList.add('hide');
// });