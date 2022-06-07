const counter = document.querySelector('.text');
const bg = document.querySelector('.bg');

let count = 0;

const interval = setInterval(update, 40)

function update() {
    count += 1;
    counter.innerText = count;
    counter.style.opacity = `${(count/100) * 1}`

    if(count === 100) {
        clearInterval(interval)
    }
}

