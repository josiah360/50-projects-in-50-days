const leftSplit = document.querySelector('.left-split');
const rightSplit = document.querySelector('.right-split');
const container = document.querySelector('.container')

leftSplit.addEventListener('mouseover', () => {
    container.classList.add('left-active')
})

leftSplit.addEventListener('mouseout', () => {
    container.classList.remove('left-active')
})

rightSplit.addEventListener('mouseover', () => {
    container.classList.add('right-active')
})

rightSplit.addEventListener('mouseout', () => {
    container.classList.remove('right-active')
})