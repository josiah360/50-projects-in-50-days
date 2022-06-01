const btns = document.querySelectorAll('.faq-toggle');
// const container = document.querySelectorAll('.faq');



btns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active')
    })
})