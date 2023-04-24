import {ApiService} from "./api.service.js";

export class Model {
    users = null;

    async getUser() {
        this.users = await ApiService.getUsers();
        return this.users;
    }
}
