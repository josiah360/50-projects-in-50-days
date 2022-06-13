const body = document.querySelector('body');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');


let currentActive = 0;

rightBtn.addEventListener('click', () => {
    currentActive += 1;

    updateCurrentActive()
    updateSlides()
    updateBg()
   
})

leftBtn.addEventListener('click', () => {
    currentActive -= 1;

    updateCurrentActive()
    updateSlides()
    updateBg()
})

function updateCurrentActive() {
    if(currentActive > (slides.length -  1)) {
        currentActive = 0;
    }

    if(currentActive < 0) {
        currentActive = slides.length - 1;
    }
}

function updateSlides() {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })

    slides[currentActive].classList.add('active')
}

function updateBg() {
    body.style.backgroundImage = slides[currentActive].style.backgroundImage
    
}