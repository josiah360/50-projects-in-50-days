const API_URL = `https://api.github.com/users/`;

const main = document.querySelector('main');
const form = document.querySelector('form')
const searchInput = document.querySelector('.search')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = searchInput.value
    getUser(username)
})

async function getUser(username) {
    try{
        const res = await axios(API_URL + username)
        displayUserInfo(res.data)
        getUserRepos(username)
    } 
    
    catch(err) {
        if(err.statusText === '404') {
            console.log('This user profile does not exist');
        }
    }
}

async function getUserRepos(username) {
    const res = await axios(API_URL + username + '/repos')
    displayUserRepos(res.data)
}

function displayUserInfo(user) {
    const userInfo = `<div class="user-info">
        <img src="${user.avatar_url}" alt="" class="user-img">
        <div class="user-details">
            <h2>${user.name}</h2>
            <p>${user.bio}</p>
            <div class="repo-details">
                <p>${user.followers} <span>Followers</span></p>
                <p>${user.following} <span>Following</span></p>
                <p>${user.public_repos} <span>Repos</span></p>
            </div>
            <div class="repos">
            </div>
        </div>
    </div>`;

    main.innerHTML = userInfo
}

function displayUserRepos(userRepos) {
    const repos = document.querySelector('.repos')
    userRepos
    .slice(0, 5)
    .forEach(repo => {
        const spanElement = document.createElement('span')
        spanElement.innerText = repo.name
        repos.appendChild(spanElement)
    })
}


