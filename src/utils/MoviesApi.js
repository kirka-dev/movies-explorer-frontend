class MoviesApi {
    constructor({ baseUrl, headers }) {
      this.baseUrl = baseUrl;
      this.headers = headers;
    }
  
    getMovies() {
      return fetch(`${this.baseUrl}/beatfilm-movies`, {
        headers: this.headers,
      }).then(this._getResponseData);
    }
  
    _getResponseData(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
  
  export default new MoviesApi({baseUrl: 'https://api.nomoreparties.co', headers: {'Content-Type': 'application/json'}});
