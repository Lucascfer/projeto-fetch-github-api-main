import { getUser } from '/src/scripts/services/users.js'
import { getRepositories } from '/src/scripts/services/repositories.js'

import { user } from '/src/scripts/objects/user.js'
import { screen } from '/src/scripts/objects/screen.js'

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value
    getUserData(userName)
})

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value
    if (e.key === 'Enter') {
        getUserData(userName)
    }
})

async function getUserData(userName) {
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    
    screen.renderUser(user)
}