import {Model} from "./model.js";
import {UserView} from "./view.js";

const selectors = {
    userContainer: '.user-container',
    editContainer: '.edit-container',
    cardTitle: '.card-title',
    userCard: '.user-card',
    addInput: '.add-input',
    addBtn: '.add-btn',
    editBtn: '.edit-btn',
    saveBtn: '.save-btn',
    editInput: '.edit-input',
    deleteBtn: '.delete-btn',
}

const model = new Model();
const view = new UserView(selectors.userContainer);

getAndRenderUsers();
addEventListeners();

function getAndRenderUsers() {
    model.getUser().then(renderUsers);
}

function renderUsers() {
    view.renderUsers(model.users);
}

function addEventListeners() {
    $(selectors.addBtn).on('click', async () => {
        const value = $(selectors.addInput).eq(0).val();
        await model.addUser(value);
        renderUsers();
    });

    $(selectors.userContainer).on('click', selectors.editBtn, function () {
        $(this).closest(selectors.userCard).find(selectors.cardTitle).hide();
        $(this).closest(selectors.userCard).find(selectors.editContainer).css({display: 'flex'});
    })

    $(selectors.userContainer).on('click', selectors.saveBtn, async function () {
        const name = $(this).closest(selectors.userCard).find(selectors.editInput).val();
        const id = this.dataset.id;
        await model.editUser(id, name);
        renderUsers();
        $(this).closest(selectors.userCard).find(selectors.cardTitle).show();
        $(this).closest(selectors.userCard).find(selectors.editContainer).hide();
    })

    $(selectors.userContainer).on('click', selectors.deleteBtn, async function () {
        const isDelete = confirm('Do you really want to delete this user?');
        if (isDelete) {
            const id = this.dataset.id;
            await model.deleteUser(id);
            renderUsers();
        }
    })
}

