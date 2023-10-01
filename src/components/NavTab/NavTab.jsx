import React from 'react';
import './NavTab.css'

function NavTab() {

  return (
    <section className="hero">
      <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
      <nav className="hero__nav">
        <ul className="hero__nav-tab">
          <li className="hero__item"><a className="hero__link" href="#about">О проекте</a></li>
          <li className="hero__item"><a className="hero__link" href="#tech">Технологии</a></li>
          <li className="hero__item"><a className="hero__link" href="#student">Студент</a></li>
        </ul>
      </nav>
    </section>
  );
}

export default NavTab;