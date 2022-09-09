const screen = {
    userProfile: document.querySelector(`.profile-data`),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                            <img src="${user.avatarUrl}" alt="Foto de prefil do usuário" />
                            <div class="data"> 
                                <h1>${user.name ?? 'Não possui nome cadastrado 😭'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada 😭'}</p>
                            </div>
                        </div>`
    }
}

export { screen }