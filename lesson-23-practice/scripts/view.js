export class UserView {
    constructor(container) {
        this.container = container;
    }

    renderUsers(users) {
        if (users.length) {
            const html = users.map(user => {
                return `
                    <div class="card user-card">
                      <img class="card-img-top" src="${user.avatar}" alt="Card image cap">
                      <div class="card-body">
                        <h5 class="card-title">${user.name}</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>`
            }).join('');

            $(this.container).html(html);
        }
    }
}
