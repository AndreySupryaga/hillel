export class ApiService {
    static baseUrl = 'https://6429c27cb11efeb7598d765d.mockapi.io/api/v1/';

    static getUsers() {
        return fetch(ApiService.baseUrl + 'users')
            .then(res => res.json());
    }
}
