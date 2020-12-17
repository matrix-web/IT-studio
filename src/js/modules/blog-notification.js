const mediaQuery = window.matchMedia('(max-width: 991px)')
const notification = document.querySelector('.notification')
const notificationButton = document.querySelector('.notification__button')

window.addEventListener('load', () => {
    if (mediaQuery.matches) {
        console.log('Mobile device')
        notification.classList.add('show')
    }

    notificationButton.addEventListener('click', () => {
        notification.classList.remove('show')
    })
})