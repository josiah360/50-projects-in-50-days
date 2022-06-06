const btn = document.querySelector('button');

btn.addEventListener('click', (e)=> {
    const x = e.clientX;
    const y = e.clientY;
    const top = btn.offsetTop
    const left = btn.offsetLeft

    const rippleSpan = document.createElement('span');
    rippleSpan.classList.add('circle');
    btn.appendChild(rippleSpan)

    rippleSpan.style.top = `${y - top}px` ;
    rippleSpan.style.left = `${x - left}px`;

    setTimeout(() => {
        rippleSpan.remove()
    }, 500)
})