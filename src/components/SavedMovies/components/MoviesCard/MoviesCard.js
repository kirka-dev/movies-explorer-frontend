import React from "react";
import MainApi from "../../../../utils/MainApi";
import Storage from "../../../../utils/StorageHandling";

import "./MoviesCard.scss"

function MoviesCard(props) {
  const [id, setId] = React.useState(props.data._id);

  function setDuration(minutes) {
    return minutes > 60 ? `${(minutes / 60).toFixed(0)}ч ${(minutes % 60).toFixed(0)}м` : `${minutes}м`;
  }

  function handleRemoveMovie() {
    MainApi
      .removeMovie(id)
      .then((res) => {
        Storage.removeMovie(res.data);
        setId('');
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      {
        id && <div className="movies-card">
          <img className="movies-card__thumbnail" src={props.image} alt="Обложка" />
          <div className="movies-card__info info">
            <p className="info__name">{props.name}</p>
            <button className="info__delete-button" onClick={handleRemoveMovie} />
            <p className="info__duration">{setDuration(props.duration)}</p>
          </div>
        </div>
      }
    </>
  );
}

export default MoviesCard;
