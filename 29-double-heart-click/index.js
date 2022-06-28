const img = document.querySelector('.img')

img.addEventListener('click', (e) => {
    const x = e.clientX - img.offsetLeft
    const y = e.clientY - img.offsetTop
    
    createHeart(x, y, img)
})

function createHeart(x, y, elem) {
    const heart = document.createElement('i')
    heart.classList.add('fas', 'fa-heart')
    elem.appendChild(heart)
}