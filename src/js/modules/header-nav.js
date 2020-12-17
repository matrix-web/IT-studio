// Mobile nav active
const buttonMobileNav = document.querySelector('.header__nav-mobile')
const headerNav = document.querySelector('.header-nav')

function navigationOpen () {
    buttonMobileNav.classList.toggle('header__nav-mobile--active')
    headerNav.classList.toggle('header-nav--open')
}

buttonMobileNav.addEventListener('click', navigationOpen)

function navigationScrollActive () {
    const headerTopEl = document.querySelector('.header-top')

    if (pageYOffset >= 100) {
        headerTopEl.classList.add('header-top--active')
    } else {
        headerTopEl.classList.remove('header-top--active')
    }
}

window.addEventListener('scroll', navigationScrollActive)