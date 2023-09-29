import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css'

function Portfolio() {

  return (
    <>
      <h2 className="student_subtitle">Портфолио</h2>
      <ul className="student_portfolio">
        <li className="student__item">
          <Link className="student__link" to="https://github.com/tdariaa/how-to-learn" target="_blank">
            <p className="student__text">Статичный сайт</p>
            <p className="student__text">&#8599;</p>
          </Link>
        </li>
        <li className="student__item">
          <Link className="student__link" to="https://github.com/tdariaa/russian-travel" target="_blank">
            <p className="student__text">Адаптивный сайт </p>
            <p className="student__text">&#8599;</p>
          </Link>
        </li>
        <li className="student__item">
          <Link className="student__link" to="https://github.com/tdariaa/react-mesto-api-full-gha" target="_blank">
            <p className="student__text">Одностраничное приложение</p>
            <p className="student__text">&#8599;</p>
          </Link>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;