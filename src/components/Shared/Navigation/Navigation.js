import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";

import "./Navigation.scss"

function Navigation(props) {
  const {isLoggedIn} = React.useContext(UserContext);

  return (
    <>
      {
        isLoggedIn.value &&
        <nav className={props.className ? `${props.className} navigation` : 'navigation'}>
          <Link className="navigation__link" to="/movies">Фильмы</Link>
          <Link className="navigation__link" to="/saved-movies">Сохранённые фильмы</Link>
        </nav>
      }
    </>
  );
}

export default Navigation;
