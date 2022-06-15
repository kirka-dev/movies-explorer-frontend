class AuthApi {
    constructor({ baseUrl, headers }) {
      this.baseUrl = baseUrl;
      this.headers = headers;
    }
  
    register(name, email, password) {
      return fetch(`${this.baseUrl}/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
        credentials: 'include',
      }).then(this._getResponseData);
    };
  
    login(email, password) {
      return fetch(`${this.baseUrl}/signin`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        credentials: 'include',
      }).then(this._getResponseData);
    };
  
    signout() {
      return fetch(`${this.baseUrl}/signout`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: 'include',
      }).then(this._getResponseData);
    };
  
    checkToken(token) {
      return fetch(`${this.baseUrl}/users/me`, {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        credentials: 'include',
      }).then(this._getResponseData);
    }
  
    _getResponseData(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
  
  // export default new AuthApi({ baseUrl: 'http://localhost:3001', headers: { 'Content-Type': 'application/json' } });
  export default new AuthApi({ baseUrl: 'https://api.search-movies.nomoredomains.club', headers: { 'Content-Type': 'application/json' } });
