import React from "react";
import Preloader from "../../../Shared/Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesCardList.scss";

function MoviesCardList(props) {
  return (
    <div className="movies-card-list">
      {props.data.length ? props.data.map((movie, index) => (
        <MoviesCard
          key={index}
          name={movie.nameRU}
          duration={movie.duration}
          image={movie.image}
          data={movie}
        />
      )) : props.data ? <p className="movies-card-list__not-found">Ничего не найдено</p> : props.loading && <Preloader />}
    </div>
  );
}

export default MoviesCardList;
