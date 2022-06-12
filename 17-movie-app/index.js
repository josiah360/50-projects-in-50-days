const apiKey = 'c27701ab70ee6ee4d3ab55460df8c76b';
const api = 'https://api.themoviedb.org/3/discover/movie/?sort_by=popularity.desc&api_key=c27701ab70ee6ee4d3ab55460df8c76b'
const searchPath = `https://api.themoviedb.org/3/search/movie?api_key=c27701ab70ee6ee4d3ab55460df8c76b&page=1&query=`
const imagePath = 'https://image.tmdb.org/t/p/w1280'

const main = document.querySelector('main');
const cards = document.querySelectorAll('.card');
const form = document.querySelector('form');
const searchInput = document.querySelector('input[type=search]')

getMovie(api)

function getMovie(api) {
    fetch(api)
    .then(result => result.json())
    .then(data => updatePage(data.results))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    main.innerHTML = '';
    const searchTerm = searchInput.value;

    if(searchTerm && searchTerm !== '') {
        getMovie(`${searchPath + searchTerm}`)
        searchInput.value = '';
    } else {
        window.location.reload()
    }
    
})

function updatePage(movieData) {

    movieData.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<img src="${imagePath + poster_path}" class="poster">
        <div class="title-div">
          <h3 class="title">${title}</h3>
          <div class="rating ${getRating(vote_average)}">${vote_average}</div>
        </div>
        <div class="overview">
          <h3>Overview</h3>
          <p>${overview}</p>
        </div>`;

        main.appendChild(card)
    })
}

function getRating(vote) {
    if(vote >= 8) {
        return 'green'
    } 
    
    else if(vote >= 5) {
        return 'orange'
    } 
    
    else if(vote < 5) {
        return 'red'
    }
}



