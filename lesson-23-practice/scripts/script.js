import {Model} from "./model.js";
import {UserView} from "./view.js";

const selectors = {
    userContainer: '.user-container'
}

const model = new Model();
const view = new UserView(selectors.userContainer);

function getAndRenderUsers() {
    model.getUser()
        .then(users => view.renderUsers(users));
}

getAndRenderUsers()

