import React from "react";

import "./Footer.scss"

function Footer(props) {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__row">
          <p className="footer__copy">© 2020</p>
          <ul className="footer__sources sources">
            <a className="sources__link" href="https://practicum.yandex.ru">Яндекс.Практикум</a>
            <a className="sources__link" href="https://github.com/russianprettyflacko">Github</a>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
