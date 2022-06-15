class Storage {
    setMovies(movies) {
        let savedMovies = JSON.parse(localStorage.getItem("savedMovies"));

        for (const movie of movies) {
            for (const savedMovie of savedMovies) {
                if (movie.id.toString() === savedMovie.movieId) {
                    movie._id = savedMovie._id;
                }
            }
        }

        localStorage.setItem("movies", movies ? JSON.stringify(movies) : []);
    }

    getMovies() {
        return JSON.parse(localStorage.getItem("movies"));
    }

    setSavedMovies(savedMovies) {
        localStorage.setItem("savedMovies", savedMovies ? JSON.stringify(savedMovies) : []);
    }

    getSavedMovies() {
        return JSON.parse(localStorage.getItem("savedMovies"));
    }

    addMovie(savedMovie) {
        let movies = JSON.parse(localStorage.getItem("movies"));
        let savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
        let foundMovies = JSON.parse(localStorage.getItem("foundMovies"));

        if (movies) movies[movies.findIndex(movie => movie.id.toString() === savedMovie.movieId)]._id = savedMovie._id;
        if (foundMovies) foundMovies[foundMovies.findIndex(movie => movie.id.toString() === savedMovie.movieId)]._id = savedMovie._id;

        localStorage.setItem("movies", JSON.stringify(movies));
        localStorage.setItem("savedMovies", JSON.stringify([...savedMovies, savedMovie]));
        localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
    }

    removeMovie(removedMovie) {
        let movies = JSON.parse(localStorage.getItem("movies"));
        let savedMovies = JSON.parse(localStorage.getItem("savedMovies"));
        let foundMovies = JSON.parse(localStorage.getItem("foundMovies"));

        if (movies) delete movies[movies.findIndex(movie => movie._id === removedMovie._id)]._id;
        if (foundMovies) delete foundMovies[foundMovies.findIndex(movie => movie._id === removedMovie._id)]._id;

        localStorage.setItem("movies", JSON.stringify(movies));
        localStorage.setItem("savedMovies", JSON.stringify(savedMovies.filter(savedMovie => savedMovie._id !== removedMovie._id)));
        localStorage.setItem("foundMovies", JSON.stringify(foundMovies));
    }

    setFoundMovies(movies) {
        localStorage.setItem("foundMovies", movies ? JSON.stringify(movies) : movies);
    }

    getFoundMovies() {
        return JSON.parse(localStorage.getItem("foundMovies"));
    }

    clearMovies() {
        localStorage.removeItem("movies");
        localStorage.removeItem("savedMovies");
        localStorage.removeItem("foundMovies");
    }
}

export default new Storage();
