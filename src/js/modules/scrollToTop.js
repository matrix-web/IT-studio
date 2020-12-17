const progress = document.querySelector('.progress')
const circleDefault = document.querySelector('#default-circle')
const circleActive = document.querySelector('#active-circle')

function setProgress(element) {
    const scrollTop = document.documentElement.scrollTop
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const percent = scrollTop / windowHeight * 100
    const radius = circleActive.r.baseVal.value
    const circumference = 2 * Math.PI * radius
    const offset = circumference - percent / 100 * circumference

    circleDefault.style.strokeDasharray = circumference
    circleActive.style.strokeDasharray = circumference
    circleActive.style.strokeDashoffset = circumference
    circleActive.style.transition = "stroke-dashoffset 10ms linear 0s"
    element.style.strokeDashoffset = offset

    progress.hidden = (pageYOffset < document.documentElement.clientHeight)
}

progress.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})

window.addEventListener('scroll', () => setProgress(circleActive))