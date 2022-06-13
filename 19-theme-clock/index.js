const html = document.querySelector('html');
const toggle = document.querySelector('.toggle');
const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const time = document.querySelector('.time');
const date = document.querySelector('.datespan');
const dayNum = document.querySelector('.day');

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

toggle.addEventListener('click', () => {
    html.classList.toggle('dark')
   
});

function updateTime() {
    const sec = new Date().getSeconds();
    const min = new Date().getMinutes();
    const hour = new Date().getHours();
    const hour12 = hour % 12;

    const day = days[new Date().getDay()]
    const month = months[new Date().getMonth()]
    const dayDate = new Date().getDate()

    secHand.style.transform = `translate(-50%, -100%) rotate(${(sec / 60) * 360}deg)`;
    minHand.style.transform = `translate(-50%, -100%) rotate(${(min / 60) * 360}deg)`;
    hourHand.style.transform = `translate(-50%, -100%) rotate(${(hour / 12) * 360}deg)`;

    const ampm = hour > 12 ? 'PM' : 'AM';
    time.innerText = `${hour12}:${min} ${ampm}`;
    date.innerText = `${day}, ${month}`;
    dayNum.innerText = dayDate;
}

setInterval(updateTime, 1000)