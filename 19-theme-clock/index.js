const toggleModeBtn = document.querySelector('.toggle');
const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');
const time = document.querySelector('.time');
const thisDate = document.querySelector('.date');

const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function updateClock() {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const currentMonth = date.getMonth()
    const currentDay = date.getDay()

    updateClockHand(hour, minute, second)
    updateTime(hour, time, minute)

    thisDate.innerHTML = `${day[currentDay]}, ${month[currentMonth]} <span class="circle">${date.getDate()}</span>`

}

function updateClockHand(hour, minute, second) {
    hourHand.style.transform = `translate(-50%, -100%) rotate(${(hour/12) * 360}deg)`    
    minuteHand.style.transform = `translate(-50%, -100%) rotate(${(minute/60) * 360}deg)`
    secondHand.style.transform = `translate(-50%, -100%) rotate(${(second/60) * 360}deg)`
}

function updateTime(hour, time, min) {
    const clock12 = hour % 12
    const ampm = hour < 12 ? 'AM' : 'PM';
    time.innerText = `${clock12}:${min < 10 ? '0' + min : min} ${ampm}`
}

toggleModeBtn.addEventListener('click', () => {
    const html = document.querySelector('html')
    html.classList.toggle('dark')
}) 


setInterval(updateClock, 1000)