const img = document.querySelector('.img')
const count = document.querySelector('.count')

let like = 0

function putShape(e) {
    const x = e.clientX - img.offsetLeft
    const y = e.clientY - img.offsetTop

    createHeart(x, y, img)
    incrementLike(count)
}

img.addEventListener('click', putShape)

function createHeart(x, y, elem) {
    const heart = document.createElement('i')
    heart.classList.add('fas', 'fa-heart', 'grow-heart')
    heart.style.left = `${x}px`
    heart.style.top = `${y}px`
    elem.appendChild(heart)

    setTimeout(() => heart.remove(), 600)
}

function incrementLike(likeElem) {
    like += 1
    likeElem.innerText = like
}

