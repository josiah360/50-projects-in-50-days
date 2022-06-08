const counter = document.querySelector('.text');
const bg = document.querySelector('.bg');

let count = 0;

const interval = setInterval(update, 40)

function update() {
    count += 1;
    counter.innerText = `${count}%`;
    counter.style.opacity = `${scale(count, 0, 100, 1, 0)}`
    bg.style.filter = `blur(${scale(count, 0, 100, 35, 0)}px)`

    if(count === 100) {
        clearInterval(interval)
    }
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}