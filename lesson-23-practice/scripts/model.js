import {ApiService} from "./api.service.js";

export class Model {
    users = null;

    async getUser() {
        this.users = await ApiService.getUsers();
        return this.users;
    }

    async addUser(name) {
        await ApiService.addUser(name);
    }

    async editUser(id, name) {
        await ApiService.editUser(id, name);
    }

    async deleteUser(id) {
        await ApiService.deleteUser(id);
    }
}
