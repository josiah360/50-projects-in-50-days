const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')


let getRandom = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
    let generatePassword = '';
    const typesCount = lower + upper + number + symbol
    const typeArr = [{lower}, {upper}, {number}, {symbol}]
    .filter(item => Object.values(item)[0])
    .sort((a, b) => 0.5 - Math.random())
    
    if(typesCount === 0) {
        return '';
    }

    for(let i = 0; i < length; i += typesCount) {
        typeArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatePassword += getRandom[funcName]()
        })
    }
    
    finalPassword = generatePassword.slice(0, length)
    return finalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1)) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

