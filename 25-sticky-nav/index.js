const nav = document.querySelector('nav');

let lastScroll = 0

window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    const navHeight = nav.clientHeight
    if(scroll > navHeight + 30) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }

    // if(lastScroll > window.scrollY) {
    //     nav.classList.add('active')
    // } else {
    //         nav.classList.remove('active')
    // }

    // lastScroll = window.scrollY
})