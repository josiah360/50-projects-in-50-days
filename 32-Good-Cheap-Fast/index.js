const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


const getRandom = {
    lower: getLower,
    upper: getUpper,
    number: getNumber,
    symbol: getSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText
    
    if(!password) return

    document.body.appendChild(textarea)
    textarea.value = password
    textarea.select()

    document.execCommand('copy')
    textarea.remove()
    alert('Copied to clipboard')
})

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const lower = lowercaseEl.checked
    const upper = uppercaseEl.checked
    const number = numbersEl.checked
    const symbol = symbolsEl.checked

    resultEl.innerText = generatePassword(lower, upper, number, symbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const checkedLength = lower + upper + number + symbol
    const typeArr = [{lower}, {upper}, {number}, {symbol}]
        .filter(item => Object.values(item)[0])
    
    if(checkedLength === 0) {
        return '';
    }

    for(let i = 0; i < length; i += checkedLength) {
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += getRandom[funcName]()
        })
    }
    
    finalPassword = generatedPassword.slice(0, length)
    return finalPassword
}

function getLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

