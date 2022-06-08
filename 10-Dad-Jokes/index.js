const btn = document.querySelector('.btn');
const jokeEl = document.querySelector('.joke');
const url = 'https://icanhazdadjoke.com';

getJoke(url, jokeEl)

btn.addEventListener('click', () => {
    getJoke(url, jokeEl)
})


// function getJoke(url) {
//     fetch(url, {
//     headers: {
//         'Accept': 'application/json'
//     }
//     }).then(res => res.json())
//     .then(data => {
//         jokeEl.innerHTML = data.joke
//     })
// }

async function getJoke(url, elem) {
    const res = await fetch(url, { headers: {'Accept': 'application/json'}});
    const data = await res.json()
    elem.innerHTML = data.joke
}