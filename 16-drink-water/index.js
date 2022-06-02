const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const target = +counter.dataset.target
    const decrement = Math.ceil(target/1000)
    let startPoint = +counter.innerText
    
    function incrementCounter() {
        startPoint += decrement
        

        if(startPoint < target) {
            counter.innerText = startPoint
        } else {
            counter.innerText = target
        }

        setTimeout(incrementCounter, 1)
    }

    incrementCounter()
})