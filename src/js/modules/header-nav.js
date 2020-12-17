const { count } = require("yargs")

// Mobile nav active
const buttonMobileNav = document.querySelector('.header__nav-mobile')
const headerNav = document.querySelector('.header-nav')

buttonMobileNav.addEventListener('click', () => {
    buttonMobileNav.classList.toggle('header__nav-mobile--active')
    headerNav.classList.toggle('header-nav--open')
})

// header slider
const headerSlider = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
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

const progress = document.querySelector('.progress')
const circleDefault = document.querySelector('#default-circle')
const circleActive = document.querySelector('#active-circle')
const radius = circleActive.r.baseVal.value
const circumference = 2 * Math.PI * radius

circleDefault.style.strokeDasharray = circumference
circleActive.style.strokeDasharray = circumference
circleActive.style.strokeDashoffset = circumference
circleActive.style.transition = "stroke-dashoffset 10ms linear 0s"

function setProgress(element, percent) {
    const offset = circumference - percent / 100 * circumference
    element.style.strokeDashoffset = offset
}

progress.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

window.addEventListener('scroll', () => {
    progress.hidden = (pageYOffset < document.documentElement.clientHeight)

    const scrollTop = document.documentElement.scrollTop
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const percent = scrollTop / windowHeight * 100

    setProgress(circleActive, percent)
})

// Смещение блока about от верхней части страницы в px aboutElement.offsetTop = 2018px
// Количество проскроленных пикселей страницы pageYOffset, возвращает количество пикселей, которые пользователь проскролил от верхней части страницы

const countList = document.querySelectorAll('.count')

const listValues = []
countList.forEach(element => {
    listValues.push(element.dataset)
    // console.log('dataset', element.dataset)
})
console.log(countList)
const newListValues = listValues.map(item => ({min: parseInt(item.min), max: parseInt(item.max)}))
console.log(newListValues)

let counter = 0

function setCount () {
    const countItem = countList[0] // div.count
    const firstValue = newListValues[0] // {min: 0, max: 125}

    countItem.innerText = firstValue.min

    // setInterval(() => {
        while (counter !== firstValue.max) {
            counter++
            countItem.innerText = counter
        }
    // }, 500)
    
    
}

// setInterval(setCount, 500)

// setCount()