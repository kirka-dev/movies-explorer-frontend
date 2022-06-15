import React from "react";
import Title from "../../../Shared/Title/Title";

import "./AboutProject.scss"

function AboutProject(props) {
  return (
    <section className="about-project">
      <div className="about-project__container container">
        <Title className="about-project__title">О проекте</Title>
        <p className="about-project__text text">
          <h3 className="text__title">Дипломный проект включал 5 этапов</h3>
          Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
        </p>
        <p className="about-project__text text">
          <h3 className="text__title">На выполнение диплома ушло 5 недель</h3>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
        </p>
        <div className="about-project__line line">
          <div className="line__part line__part_backend">1 неделя</div>
          <div className="line__part line__part_frontend">4 недели</div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
