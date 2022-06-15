import React from "react";
import { Link } from "react-router-dom";

import './NotFoundPage.scss'

function NotFoundPage(props) {
  return (
    <main>
      <section className="not-found-page">
        <h1 className="not-found-page__title">404</h1>
        <p className="not-found-page__text">Страница не найдена</p>
        <Link className="not-found-page__link" to="/">Назад</Link>
      </section>
    </main>
  );
}

export default NotFoundPage;
