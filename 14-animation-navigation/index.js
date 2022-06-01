const textarea = document.getElementById('textarea');
const tagsContainer = document.getElementById('tags');

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if(e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        getRandomChoice()
    } else {

    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '')
    
    tagsContainer.innerHTML = '';

    tags.forEach(tag => {
        const span = document.createElement('span');
        span.classList.add('tag');
        span.innerText = tag;

        tagsContainer.appendChild(span)
    })
}

function getRandomChoice() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = getRandomTag()

        highlightTag(randomTag)

        setTimeout(() => {
            unhighlightTag(randomTag)
        }, 100)
        
    }, 100)

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = getRandomTag()
            highlightTag(randomTag)
        }, 100) 
        
    }, 100 * times)
}

function getRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    if(tag) {
        tag.classList.add('highlight')
    } else {
        tagsContainer.innerText = 'Enter your choice first'
    }
    
}

function unhighlightTag(tag) {
    if(tag) {
        tag.classList.remove('highlight')
    } else {
        return
    }
    
}