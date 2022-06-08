const boxes = document.querySelectorAll('.box');

checkboxes()

window.addEventListener('scroll', checkboxes);

function checkboxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('active')
        } else {
            box.classList.remove('active')
        }
    })
}