const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const circles = document.querySelectorAll('.circle');
const range = document.querySelector('.range');

let current = 1;

nextBtn.addEventListener('click', () => {
    current += 1;

    updateCurrent()
    updateCircles()
    updateRange()
    updateBtn()
    
})

prevBtn.addEventListener('click', () => {
    current -= 1;

    updateCurrent()
    updateCircles()
    updateRange()
    updateBtn()
})

function updateBtn() {
    if(current > 1) {
        prevBtn.disabled = false;
    } else {
        prevBtn.disabled = true;
    }

    if(current < circles.length) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
}

function updateCurrent() {
    if(current > circles.length) {
        current = circles.length;
    } 

    if(current < 0) {
        current = 0;
    }
}

function updateCircles() {
    circles.forEach((circle, idx) => {
        if(idx < current) {
            circle.classList.add('active');
        } else{
            circle.classList.remove('active')
        }
    })
}

function updateRange() {
    const activeCircles = document.querySelectorAll('.circle.active').length;
    const totalCircles = circles.length;
    range.style.width = `${((activeCircles - 1)/(totalCircles - 1)) * 100}%`
}