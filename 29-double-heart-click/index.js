const loveMe = document.querySelector('.love-me');
const times = document.getElementById('times');

let clickTime = 0;
let timesClicked = 0


loveMe.addEventListener('dblclick', (e) => {
    findXandY(e)
})

function findXandY(e) {
    const elementTop = loveMe.offsetTop;
    const elementLeft = loveMe.offsetLeft;

    const cX = e.clientX
    const cY = e.clientY

    const x = cX - elementLeft
    const y = cY - elementTop
    
    createHeart(x, y)
    incrementLike()
}

function createHeart(x, y) {
    const heartElement = document.createElement('i')
    heartElement.classList.add('fas')
    heartElement.classList.add('fa-heart')
    heartElement.classList.add('heart')

    heartElement.style.left = `${x}px`
    heartElement.style.top = `${y}px`

    loveMe.appendChild(heartElement)

    window.setTimeout(() => heartElement.remove(), 600)
}

function incrementLike() {
    times.innerText = ++ timesClicked
}