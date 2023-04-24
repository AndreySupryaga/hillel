import {ApiService} from "./api.service.js";

export class Model {
    users = [];

    async getUser() {
        this.users = await ApiService.getUsers();
        return this.users;
    }

    async addUser(name) {
        const user = await ApiService.addUser(name);
        this.users.push(user)
    }

    async editUser(id, name) {
        const user = await ApiService.editUser(id, name);
        this.users.find(({id}) => id === user.id).name = user.name;
    }

    async deleteUser(id) {
        const user = await ApiService.deleteUser(id);
        this.users = this.users.filter(({id}) => id !== user.id);
    }
}
