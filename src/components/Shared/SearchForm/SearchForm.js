import React from "react";
import { searchFormValidation } from "../../../utils/Validation";
import Switch from "./components/Switch/Switch";

import "./SearchForm.scss";

function SearchForm(props) {
  const [nameMovie, setNameMovie] = React.useState('');
  const [shortMovies, setShortMovies] = React.useState(false);
  const [errorNameMovie, setErrorNameMovie] = React.useState(true);

  function handleChangeSearchForm(e) {
    const nameMovie = e.target.value;

    setNameMovie(nameMovie);
  }

  function handleSwich() {
    return setShortMovies(shortMovies ? false : true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    setErrorNameMovie(searchFormValidation(nameMovie));
    nameMovie && props.onSubmit(nameMovie, shortMovies);
  }

  return (
    <div className="search">
      <form className="search__search-form search-form" onSubmit={handleSubmit}>
        <span className="search-form__icon"></span>
        <input className="search-form__input" placeholder="Фильм" onChange={handleChangeSearchForm} value={nameMovie} />
        <button className="search-form__submit" type="submit" />
        {
          !errorNameMovie.status && <p className="search-form__error">{errorNameMovie.message}</p>
        }
      </form>
      <Switch value={shortMovies} switch={handleSwich}>Короткометражки</Switch>
    </div>
  );
}

export default SearchForm;
