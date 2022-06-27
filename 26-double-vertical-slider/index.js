const leftSlider = document.querySelector('.left-slider');
const rightSlider = document.querySelector('.right-slider');
const btnUp = document.querySelector('.btn-up');
const btnDown = document.querySelector('.btn-down');
const slidesLength = document.querySelectorAll('.left-slider .slide').length

leftSlider.style.top = `-${100 * (slidesLength - 1)}%`;
let activeIndex = 0;

btnDown.addEventListener('click', () => changeSlide('down'));
btnUp.addEventListener('click', () => changeSlide('up'));

function changeSlide(direction) {
    if(direction === 'down') {
        ++activeIndex
        
        if(activeIndex > slidesLength - 1) {
            activeIndex = 0;
        }
    }

    if(direction === 'up') {
        --activeIndex
        
        if(activeIndex < 0) {
            activeIndex = slidesLength - 1;
        }
    }

    leftSlider.style.transform = `translateY(${100 * activeIndex}%)`
    rightSlider.style.transform = `translateY(-${100 * activeIndex}%)`
}

