const textarea = document.querySelector('textarea');
const container = document.querySelector('.choice-container')

window.addEventListener('keyup', (e) => {
    const choices = textarea.value.split(',')
        .filter(choice => choice
        .trim() !== '')
        .map(choice => choice.trim())

        container.innerHTML = '';

        choices.forEach(choice => {
            const btn = document.createElement('button')
            btn.classList.add('choice')
            btn.innerText = choice
            container.appendChild(btn)
        })
        
        if(e.key === 'Enter') {
            textarea.value = '';
            flickerColor()
        }
})

function pickRandom() {
    const btns = document.querySelectorAll('.choice')
    const random = Math.floor(Math.random() * btns.length)
    return btns[random]
}

function flickerColor() {
    const count = 32;

    const interval = setInterval(() => {
        const random = pickRandom()
        random.classList.add('active')

        setTimeout(() => {
            random.classList.remove('active')
        }, 100)
    }, 100);

    setTimeout(() => {
        clearInterval(interval)
        pickRandom().classList.add('active')
    }, (100 * count) + 100)
}