// header slider
const headerSlider = new Swiper('.swiper-container', {
    loop: true,
    speed: 2000,
    autoplay: {
        delay: 3000
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    // Navigation arrows
    navigation: {
        nextEl: '.slider-nav--next',
        prevEl: '.slider-nav--prev',
    }
})

// Smoothscroll
const scrollElement = document.querySelector('.smoothscroll')
function smoothScroll () {
    const header = document.querySelector('.header')
    
    window.scrollTo({
        top: header.scrollHeight,
        behavior: "smooth"
    });
}

scrollElement.addEventListener('click', smoothScroll)

// AOS init
AOS.init();