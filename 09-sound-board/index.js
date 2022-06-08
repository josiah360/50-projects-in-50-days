const btns = document.querySelector('.btns');

// buttons.forEach(button => {
//     button.addEventListener('click', playSong)
// })

let lastSong = '';

btns.addEventListener('click', (e) => {
    const btn = e.target
    if(btn.tagName === 'BUTTON') {
        stopLastSong(lastSong)
        playSong(btn)
        lastSong = document.getElementById(`${btn.innerText.toLowerCase()}`);
    }
})

function playSong(btn) {
    const song = document.getElementById(`${btn.innerText.toLowerCase()}`);
    song.play();
}

function stopLastSong(lastSong) {
    if(lastSong === '') return
    lastSong.pause()
    lastSong.currentTime = 0;
}