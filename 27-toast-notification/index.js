const btn = document.querySelector('.btn');
const container = document.querySelector('.toasts')

const messages = [
    'success',
    'warning',
    'failure'
]


btn.addEventListener('click', () => {
    const randomMessage = getRandomMessage(messages)
    const domElement = document.createElement('div')
    domElement.classList.add('toast')
    domElement.innerText = randomMessage
    domElement.style.color = getRandomColor(randomMessage)
    container.appendChild(domElement)
})

function getRandomMessage(messages) {
    const random = Math.floor(Math.random() * messages.length)
    return messages[random]
}

function getRandomColor(message) {
    if(message === 'success') {
        return 'green'
    }

    if(message === 'warning') {
        return 'orange'
    }

    if(message === 'failure') {
        return 'red'
    }
}