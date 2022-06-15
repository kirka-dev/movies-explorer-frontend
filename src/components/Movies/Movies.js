import React from "react";
import useWindowSize from "../../contexts/WindowSizeContext";
import MoviesApi from "../../utils/MoviesApi";
import Storage from "../../utils/StorageHandling";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import SearchForm from "../Shared/SearchForm/SearchForm";
import MoviesCardList from "./components/MoviesCardList/MoviesCardList";

import "./Movies.scss"

function Movies(props) {
  const [width] = useWindowSize();
  const [movies, setMovies] = React.useState(Storage.getFoundMovies() || []);
  const [loading, setLoading] = React.useState(false);
  const [counter, setCounter] = React.useState(12);
  const [moreButton, setMoreButton] = React.useState(false);

  React.useEffect(() => {
    setMoreButton(counter < movies.length)
  }, [counter, movies.length]);

  function getMovies(name, short) {
    setCounter(width < 601 ? 5 : (width < 1024 ? 8 : 12));
    setMoreButton(false);

    if (Storage.getMovies()) {
      setMovies(() => {
        let movies = Storage.getMovies().filter(movie => movie.nameRU.toLowerCase().includes(name.toLowerCase()));
        movies = short ? movies.filter(movie => movie.duration < 41) : movies;
        Storage.setFoundMovies(movies);
        return movies;
      });
      setMoreButton(counter < movies.length);
    } else {
      setLoading(true);
      MoviesApi
        .getMovies()
        .then((movies) => {
          Storage.setMovies(movies);
          setMovies(() => {
            let movies = Storage.getMovies().filter(movie => movie.nameRU.toLowerCase().includes(name.toLowerCase()));
            movies = short ? movies.filter(movie => movie.duration < 41) : movies;
            Storage.setFoundMovies(movies);
            return movies;
          });
          setMoreButton(counter < movies.length);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function handleClickMore() {
    setCounter(counter + (width < 601 ? 2 : (width < 1024 ? 2 : 4)));
  }

  return (
    <>
      <Header />
      <main>
        <section className="movies">
          <div className="movies__container container">
            <SearchForm onSubmit={getMovies} />
            <MoviesCardList data={movies} counter={counter} loading={loading} />
            {moreButton && <button className="movies__more-button" onClick={handleClickMore}>Ещё</button>}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Movies;
