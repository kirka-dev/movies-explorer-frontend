import React from "react";
import Title from "../../../Shared/Title/Title";

import "./Techs.scss"

function Techs(props) {
  return (
    <section className="techs">
      <div className="techs__container container">
        <Title className="techs__title">Технологии</Title>
        <p className="techs__text techs-text">
          <h3 className="techs-text__title">7 технологий</h3>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__list techs-list">
          <li className="techs-list__item">HTML</li>
          <li className="techs-list__item">CSS</li>
          <li className="techs-list__item">JS</li>
          <li className="techs-list__item">React</li>
          <li className="techs-list__item">Git</li>
          <li className="techs-list__item">Express.js</li>
          <li className="techs-list__item">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;
