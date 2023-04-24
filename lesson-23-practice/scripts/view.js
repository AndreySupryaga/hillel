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
                        <div class="edit-container">
                            <input class="edit-input form-control" value="${user.name}">
                            <button class="btn btn-primary save-btn" data-id="${user.id}">Save</button>
                        </div>
                        <div class="action">
                            <button class="btn btn-primary edit-btn">Edit</button>
                            <button class="btn btn-primary delete-btn" data-id="${user.id}">Delete</button>
                        </div>
                      </div>
                    </div>`
            }).join('');

            $(this.container).html(html);
        }
    }
}
