const APIURL  = `https://api.github.com/users/`

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.querySelector('main');

async function getUser(username) {
    try {
        const { data } = await axios(APIURL + username)
        createUserCard(data)
        getRepos(username)
    } catch(err) {
        if(err.response.status === 404) {
            createErrorCard('No profile with this username')
        }
        
    }
}

async function getRepos(username) {
    try {
        const { data } = await axios(APIURL + username + '/repos?sorted=created')
        addReposToCard(data)
    } catch(err) {
            createErrorCard('Error fetching repos');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const user = search.value

    if(user) {
        getUser(user)
        search.value = '';
    }
})

function createUserCard(user) {
    const cardHTML = `<div class="card">
    <div>
      <img src="${user.avatar_url}" alt="" class="avatar">
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>

      <ul>
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following} <strong>Following</strong></li>
        <li>${user.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos">
        
      </div>
    </div>
  </div>`;

  main.innerHTML = cardHTML
}

function createErrorCard(message) {
    const cardHTML = `<div class="card">
                        <h1>${message}</h1>
                    </div>`;

    main.innerHTML = cardHTML
}
 
function addReposToCard(repos) {
    const reposDiv = document.getElementById('repos');

    repos
        .slice(0, 5)
        .forEach(repo => {
            const repoElement = document.createElement('a');
            repoElement.classList.add('repo')
            repoElement.href = repo.html_url
            repoElement.target = '_blank'
            repoElement.innerText = repo.name 

            reposDiv.appendChild(repoElement)
        })
}


// <a href="#" class="repo">Repo 1</a>
        // <a href="#" class="repo">Repo 2</a>
        // <a href="#" class="repo">Repo 3</a>

