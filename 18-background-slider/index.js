const arrowLeft = document.querySelector('.left-arrow');
const arrowRight = document.querySelector('.right-arrow');
const slides = document.querySelectorAll('.slide')
const body = document.querySelector('body')

let currentActive = 0;

arrowRight.addEventListener('click', () => {
    currentActive += 1;
    updateActive(currentActive)
    updateSlide(slides, currentActive)
    updateBackground(body, slides, currentActive)
})

arrowLeft.addEventListener('click', () => {
    currentActive -= 1;

    updateActive(currentActive)
    updateSlide(slides, currentActive)
    updateBackground(body, slides, currentActive)
})

function updateActive(current) {
    if(currentActive > (slides.length - 1)) {
        currentActive = 0;
    } else if(currentActive < 0) {
        currentActive = slides.length - 1
    }
}

function updateSlide(slid, current) {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })

    slides[currentActive].classList.add('active')
}

function updateBackground(elem, slid, current) {
    elem.style.backgroundImage = slid[current].style.backgroundImage
}

