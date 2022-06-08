const labels = document.querySelectorAll('label');
const inputs = document.querySelectorAll('input');



// inputs.forEach(input => {
//     input.addEventListener('focus', () => {
//         const label = input.nextElementSibling
//         const letters = label.innerText.split('')
//         let html = '';
       
//         letters.forEach((letter, idx) => {
//             html += `<span class="letter" style="transition-delay:${idx * 30}ms;">${letter}</span>`
//         })
        
//         setTimeout(() => label.innerHTML = html, 1)
        
//     })
// })

labels.forEach(label => {
    const letters = label.innerHTML.split('')
        .map((letter, idx) => {
            return `<span class="letter" style="transition-delay:${idx * 30}ms;">${letter}</span>`
        }).join('')
    label.innerHTML = letters;
    console.log(label)
})