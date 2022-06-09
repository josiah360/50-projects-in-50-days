const container = document.querySelector('.container')
const instruction = document.querySelector('.instruction')

window.addEventListener('keydown', (e) => {
    container.innerHTML = `<div class="key card">${e.key === ' ' ? 'Space' : e.key}
    <small>event.key</small>
    </div>

    <div class="key-code card">${e.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="code card">${e.code}
        <small>event.code</small>
    </div>`;

    instruction.style.display = 'none';
})