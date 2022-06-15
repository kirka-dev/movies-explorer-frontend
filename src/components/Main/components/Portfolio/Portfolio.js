import React from "react";

import "./Portfolio.scss"

function Portfolio(props) {
  return (
    <section className="portfolio">
      <div className="portfolio__container container">
        <h3 className="portfolio__title">Портфолио</h3>
        <a className="portfolio__link" href="https://russianprettyflacko.github.io/how-to-learn/">Статичный сайт</a>
        <a className="portfolio__link" href="https://russianprettyflacko.github.io/russian-travel/">Адаптивный сайт</a>
      </div>
    </section>
  );
}

export default Portfolio;
