const circles = document.querySelectorAll('.circle');
const progress = document.querySelector('.progress')
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive += 1;
    updateCurrentActive()
    updateCircles()
    updateBtn()
    progressWidth()

})

prev.addEventListener('click', () => {
    currentActive -= 1;
    updateCurrentActive()
    updateCircles()
    updateBtn()
    progressWidth()

})

function progressWidth() {
    const activeCircles = document.querySelectorAll('.circle.active');
    const progressWidth = ((activeCircles.length - 1)/(circles.length - 1)) * 100;
    progress.style.width = `${progressWidth}%`
    console.log(progressWidth)
}

function updateCurrentActive() {
    if(currentActive > circles.length) {
        currentActive = circles.length;
    }

    if(currentActive < 1) {
        currentActive = 1
    }
}

function updateCircles() {
    circles.forEach((circle, idx) => {
        if(currentActive > idx) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
}

function updateBtn() {
    if(currentActive > 1) {
        prev.disabled = false;
    }

    if(currentActive === circles.length) {
        next.disabled = true
    }

    if (currentActive === 1) {
        prev.disabled = true
    }

    if(currentActive < circles.length) {
        next.disabled = false
    }
}