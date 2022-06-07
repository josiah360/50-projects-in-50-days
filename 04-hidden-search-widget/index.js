const searchBtn = document.querySelector('.btn');
const search = document.querySelector('.search');
const container = document.querySelector('.container');

searchBtn.addEventListener('click', () => {
    search.focus()
    container.classList.toggle('active')
})

search.addEventListener('blur', () => {
    container.classList.remove('active')
})