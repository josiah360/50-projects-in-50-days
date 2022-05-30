const openNav = document.getElementById('open');
const closeNav = document.getElementById('close');
const container = document.getElementsByClassName('container');


openNav.addEventListener('click', function() {
    container[0].classList.add('show-nav');
    console.log(this)
})

closeNav.addEventListener('click', () => {
    container[0].classList.remove('show-nav');
})