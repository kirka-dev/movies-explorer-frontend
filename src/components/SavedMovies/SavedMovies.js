import React from "react";
import Storage from "../../utils/StorageHandling";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import SearchForm from "../Shared/SearchForm/SearchForm";
import MoviesCardList from "./components/MoviesCardList/MoviesCardList";

import "./SavedMovies.scss"

function SavedMovies(props) {
  const [movies, setMovies] = React.useState(Storage.getSavedMovies());
  const [loading, setLoading] = React.useState(false);

  function getMovies(name, short) {
    setLoading(true);
    setMovies(() => {
      let movies = Storage.getSavedMovies().filter(movie => movie.nameRU.toLowerCase().includes(name.toLowerCase()));
      return short ? movies.filter(movie => movie.duration < 41) : movies;
    });
  }

  return (
    <>
      <Header />
      <main>
        <section className="saved-movies">
          <div className="saved-movies__container container">
            <SearchForm onSubmit={getMovies} />
            <MoviesCardList data={movies} loading={loading} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
