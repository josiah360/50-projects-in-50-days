const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 200;
    let startPoint = 0;

    function incrementCounter() {
        startPoint += increment

        if(startPoint <= target) {
            counter.innerHTML = Math.ceil(startPoint);
            setTimeout(incrementCounter, 1)
        }
    }
    
    incrementCounter()
})