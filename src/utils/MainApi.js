class MainApi {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  updateUser(name, email) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      credentials: 'include',
    }).then(this._getResponseData);
  }

  getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      headers: this.headers,
      credentials: 'include',
    }).then(this._getResponseData);
  }

  saveMovie(data) {
    return fetch(`${this.baseUrl}/movies`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailer: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id.toString(),
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
      credentials: 'include',
    }).then(this._getResponseData);
  }

  removeMovie(data) {
    return fetch(`${this.baseUrl}/movies/${data}`, {
      method: "DELETE",
      headers: this.headers,
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

// export default new MainApi({baseUrl: 'http://localhost:3001', headers: {'Content-Type': 'application/json'}});
export default new MainApi({ baseUrl: 'https://api.search-movies.nomoredomains.club', headers: { 'Content-Type': 'application/json' } });
