let isRun = false
const aboutSection = document.querySelector('.about')

function counterInit () {
    const countElements = document.querySelectorAll('.count')
    const achievements = [
        {min: 0, max: 125},
        {min: 0, max: 6},
        {min: 0, max: 25},
        {min: 0, max: 65},
        {min: 0, max: 17}
    ]

    for (let i = 0, j = 0, countElementsLength = countElements.length, achievementsLength = achievements.length; i < countElementsLength && j < achievementsLength; i++, j++) {
        counter(countElements[i], achievements[j].min, achievements[j].max)
    }
}

function counter(el, start, end) {
    let startVal = start;
    let endVal = end
    el.textContent = startVal;

    const timer = setInterval(() => {
        startVal += 1;
        el.textContent = startVal;

        if (startVal === endVal) {
            clearInterval(timer);
        }
    }, 60);
}

window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('.about')

    if (pageYOffset >= aboutSection.offsetTop && !isRun) {
        counterInit()
        isRun = true
    } else {
        return
    }
})

