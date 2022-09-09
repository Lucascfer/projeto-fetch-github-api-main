import { getUser } from '/src/scripts/services/users.js'
import { getRepositories } from '/src/scripts/services/repositories.js'

import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserProfile(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    if (e.key === 'Enter') {
        getUserProfile(userName)
    }
})

async function getUserData(userName) {
    const userResponse = await getUser(userName)
    user.setInfo(userResponse)
    screen.renderUser(user)
    
    // getUser(userName).then(userData => {


    //     getUserRepositories(userName)
    // })
}

function getUserRepositories(userName) {
    getRepositories(userName).then(reposData => {
        let repositoriesItens = ""

        reposData.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`
        });

        document.querySelector('.profile-data').innerHTML += `<div class="repositories section">
                                                                <h2>Repositórios</h2>
                                                                <ul>${repositoriesItens}</ul>
                                                            </div>`
    })
}

