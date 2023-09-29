import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {

  return (

    <section className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <ul className="footer__info">
        <li className="footer__item footer__item_type_date">&copy; {new Date().getFullYear()}</li>
        <li className="footer__item footer__item_type_yandex"><Link className="footer__link" to="https://practicum.yandex.ru" target="_blank">Яндекс.Практикум</Link></li>
        <li className="footer__item footer__item_type_github"><Link className="footer__link"  to="https://github.com/yandex" target="_blank">Github</Link></li>
      </ul>
    </section>

  );
}

export default Footer;