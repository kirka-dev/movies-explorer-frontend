import React from "react";
import Title from "../../../Shared/Title/Title";

import Photo from "../../../../images/photo.jpg"
import "./AboutMe.scss"

function AboutMe(props) {
  return (
    <section className="about-me">
      <div className="about-me__container container">
        <Title className="about-me__title">Студент</Title>
        <div className="about-me__info">
          <h3 className="about-me__name">Виталий</h3>
          <h4 className="about-me__profession">Фронтенд-разработчик, 30 лет</h4>
          <p className="about-me__story">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className="about-me__links links">
            <a className="links__link" href="https://github.com/russianprettyflacko">Github</a>
          </ul>
        </div>
        <img className="about-me__photo" src={Photo} alt="Фото" />
      </div>
    </section>
  );
}

export default AboutMe;
