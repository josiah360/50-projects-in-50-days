const button = document.querySelector('.btn');
const toastContainer = document.querySelector('.toasts');

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

const labels = [
    'success',
    'warning',
    'failure'
]

button.addEventListener('click', () => createNotification());

function createNotification() {
    const toastElement = document.createElement('div');
    toastElement.innerText = getRandomText();
    toastElement.style.color = getColor();
    toastElement.classList.add('toast');
    toastContainer.appendChild(toastElement);

    setTimeout(() => toastContainer.removeChild(toastElement), 5000);
}

function getRandomText() {
    const random = Math.floor(Math.random() * messages.length);
    return messages[random];
}

function getColor() {
    const random = Math.floor(Math.random() * labels.length);
    const randomLabel = labels[random];

    if(randomLabel === 'success') {
        return 'green';
    }

    if(randomLabel === 'warning') {
        return 'orange';
    }

    if(randomLabel === 'failure') {
        return 'red';
    }
}