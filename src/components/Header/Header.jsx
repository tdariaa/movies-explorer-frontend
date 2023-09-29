import React from 'react';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';

function Header({ isLoggedIn }) {

  const [open, setOpen] = React.useState(false);

  return (

    <section className="header">
      <Link className="header__logo" to="/"></Link>
      <nav className="header__nav">
        {isLoggedIn ?
          <>
            <NavLink className={({ isActive }) => `header__link header__link_signedin ${isActive ? "header__link_selected" : ""}`} to="/movies">Фильмы</NavLink>
            <NavLink className={({ isActive }) => `header__link header__link_signedin ${isActive ? "header__link_selected" : ""}`} to="/saved-movies">Сохранённые фильмы</NavLink>

            <button className={`header__burger-button ${open ? 'header__burger-button_type_close' : 'header__burger-button_type_open'}`} onClick={() => { setOpen(!open) }}></button>
            <div className={`header__overlay ${open ? 'header__overlay_open' : ''}`}></div>
            <div className={`header__menu ${open ? 'header__menu_open' : ''}`}>
              <NavLink className={({ isActive }) => `header__menu-link ${isActive ? "header__menu-link_selected" : ""}`} to="/">Главная</NavLink>
              <NavLink className={({ isActive }) => `header__menu-link ${isActive ? "header__menu-link_selected" : ""}`} to="/movies">Фильмы</NavLink>
              <NavLink className={({ isActive }) => `header__menu-link ${isActive ? "header__menu-link_selected" : ""}`} to="/saved-movies">Сохранённые фильмы</NavLink>
              {isLoggedIn && <NavLink className="header___menu-link header___menu-link_style_light-grey" to="/profile">Аккаунт</NavLink>}
            </div>
          </> :
          <>
            <Link className="header__link header__link_signedout" to="/signup">Регистрация</Link>
            <Link className="header__link header__link_signedout header__link_style_green" to="/signin">Войти</Link>
          </>}
      </nav>
      {isLoggedIn && <NavLink className="header__link header__link_signedin header__link_style_light-grey" to="/profile">Аккаунт</NavLink>}

    </section>


  );
}

export default Header;