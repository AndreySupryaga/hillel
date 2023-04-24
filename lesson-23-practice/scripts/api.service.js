export class ApiService {
    static baseUrl = 'https://6429c27cb11efeb7598d765d.mockapi.io/api/v1/';
    static headers = {
        'Content-Type': 'application/json'
    }

    static getUsers() {
        return fetch(ApiService.baseUrl + 'users')
            .then(res => res.json());
    }

    static addUser(name) {
        return fetch(ApiService.baseUrl + 'users', {
            method: 'POST',
            headers: ApiService.headers,
            body: JSON.stringify({name})
        }).then(res => res.json());
    }

    static editUser(id, name) {
        return fetch(ApiService.baseUrl + 'users/' + id, {
            method: 'PUT',
            headers: ApiService.headers,
            body: JSON.stringify({name})
        }).then(res => res.json());
    }

    static deleteUser(id) {
        return fetch(ApiService.baseUrl + 'users/' + id, {
            method: 'DELETE',
        }).then(res => res.json());
    }
}
