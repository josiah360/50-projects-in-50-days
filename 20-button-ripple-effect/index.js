const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY

    const left = x - btn.offsetLeft;
    const top = y - btn.offsetTop;

    const circle = document.createElement('span');
    circle.style.top = `${top}px`;
    circle.style.left = `${left}px`;
    circle.classList.add('circle');

    btn.appendChild(circle)

    setTimeout(() => {
        circle.remove()
    }, 500)

})