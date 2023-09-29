import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css'
import Portfolio from '../Portfolio/Portfolio.jsx';
import avatar from '../../images/avatar.jpg'

function AboutMe() {

  return (

    <section className="student" id="student">
      <h1 className="student__title">Студент</h1>
      <div className="student__table">
        <img className="student__table_photo" src={avatar} alt="Фото студента." />
        <p className="student__table_name">Виталий</p>
        <p className="student__table_subtitle">Фронтенд-разработчик, 23 года</p>
        <p className="student__table_about">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
          С 2015 года работал в компании «СКБ Контур».
          После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
        <Link className="student__table_github" to="https://github.com/" target="_blank">Github</Link>

      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;