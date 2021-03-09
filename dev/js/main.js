/*********************/
/***** Variables *****/
/*********************/
let prevScrollpos = window.pageYOffset;
let header = document.querySelector('#header')
let headerTrigger = document.querySelector('#header-trigger')
let mainMenu = document.querySelector('#main-menu')

/*********************/
/***** Functions *****/
/*********************/
let showHeaderFunc = () => {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) header.classList.remove('is-header-visible')
    else header.classList.add('is-header-visible')
    prevScrollpos = currentScrollPos;
}

let showMenuFunc = () => mainMenu.classList.toggle('is-menu-visible')

/********************/
/***** Listener *****/
/********************/
window.addEventListener('scroll', showHeaderFunc)
headerTrigger.addEventListener('click', showMenuFunc)

/*******************/
/***** Plugins *****/
/*******************/

luxy.init();

ScrollReveal().reveal( '.to-top', { mobile: true, opacity: 0, duration: 1000, delay: 1000, origin: 'bottom', distance: '50px' });
ScrollReveal().reveal( '.to-image', { mobile: true, duration: 1000, delay: 750, opacity: 1, origin: 'bottom', distance: '100px' });
ScrollReveal().reveal( '.to-right', { mobile: true, opacity: 0, duration: 400, delay: 1250, scale: 0, origin: 'left', distance: '100px' });
ScrollReveal().reveal( '.to-right2', { mobile: true, opacity: 0, duration: 800, delay: 1250, scale: 0, origin: 'left', distance: '100px' });
ScrollReveal().reveal( '.to-right3', { mobile: true, opacity: 0, duration: 1200, delay: 1250, scale: 0, origin: 'left', distance: '100px' });
ScrollReveal().reveal( '.to-right4', { mobile: true, opacity: 0, duration: 1600, delay: 1250, scale: 0, origin: 'left', distance: '100px' });
ScrollReveal().reveal( '.to-left', { mobile: true, opacity: 0, duration: 1000, delay: 1000, origin: 'right', distance: '120px' });

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5,
    breakpoints: {
        640: { slidesPerView: 2.25 },
        960: { slidesPerView: 3.25 },
        1200: { slidesPerView: 4, },
    },
});
