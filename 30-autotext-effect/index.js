const h1 = document.querySelector('h1')
const speed = document.querySelector('#speed')


let typeSpeed = 1;
const text = 'We Love Programming!';
let textLength = 0;

let typeForward = true;

speed.addEventListener('input', () => {
    typeSpeed = +speed.value
})

function updateText() {
    h1.innerText = text.slice(0, textLength)

    if(typeForward) {
        textLength += 1; 
    } else {
        textLength -= 1
    }
    

    if(textLength > text.length) {
        typeForward = false;
    }

    if(textLength < 1) {
        textLength = 1
        typeForward = true;
    }
   
    setTimeout(updateText, 300 / typeSpeed) 
}

updateText()