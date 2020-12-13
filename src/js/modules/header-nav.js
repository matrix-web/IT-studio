// Mobile nav active
const buttonMobileNav = document.querySelector('.header__nav-mobile')
const headerNav = document.querySelector('.header-nav')

buttonMobileNav.addEventListener('click', () => {
    buttonMobileNav.classList.toggle('header__nav-mobile--active')
    headerNav.classList.toggle('header-nav--open')
})
