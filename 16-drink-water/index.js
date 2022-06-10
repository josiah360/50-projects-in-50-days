const smallCups = document.querySelectorAll('.small-cup');
const waterLevel  = document.querySelector('.water-level');
const remained = document.querySelector('.remained');
const litre = document.querySelector('.litre');

smallCups.forEach((smallCup, idx) => {
    smallCup.addEventListener('click', () => {
        highlightCups(idx, smallCup)
        fillBigCup()
    })
})

function highlightCups(idx, smallCup) {
    if(smallCup.classList.contains('fill') && (smallCup.nextElementSibling == null ||!smallCup.nextElementSibling.classList.contains('fill'))) {
        idx-= 1
    }

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('fill')
        } else {
            cup.classList.remove('fill')
        }
    })
}

function fillBigCup() {
    const filledCups = document.querySelectorAll('.fill').length;
    const totalCups = smallCups.length;
    
    waterLevel.style.height = `${(filledCups/totalCups) * 100}%`;
    waterLevel.innerText = `${(filledCups/totalCups) * 100}%`;
    litre.innerText = `${2 - (250 * filledCups / 1000)}L`

    waterLevel.style.opacity = waterLevel.innerText === '0%' ? '0' : '1';
    remained.style.height = waterLevel.innerText === '100%' ? '0' : 'auto'
}

