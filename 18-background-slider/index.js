const api_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c27701ab70ee6ee4d3ab55460df8c76b&page=1';

const img_path = 'https://image.tmdb.org/t/p/w1280';

const search_api = 'https://api.themoviedb.org/3/search/movie?api_key=c27701ab70ee6ee4d3ab55460df8c76b&query=';


const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main')


getMovies(api_url)

async function getMovies(url) {
    const response = await fetch(url);
    const data = await response.json()

    showMovies(data.results)
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach(movie => {
        const {title, poster_path, vote_average, overview } = movie

        const div = document.createElement('div');
        div.classList.add('movie')

        div.innerHTML = `<img src="${img_path + poster_path}" alt="movie-poster">
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClass(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Overview</h3>
         ${overview} 
        </div> `;

        main.appendChild(div);
    })
}

function getClass(rating) {
    if(rating >= 8) {
        return 'green';
    } 
    else if(rating >= 5) {
        return 'orange';
    }
    else if(rating < 5) {
        return 'red';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const searchTerm = search.value;

    if(searchTerm && search !== '') {
        getMovies(search_api + searchTerm)

        search.value = '';
    } else {
        window.location.reload()
    }
})