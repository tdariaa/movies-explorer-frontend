import React from 'react';
import { Link } from 'react-router-dom';
import './Authentication.css'

function Authentication(props) {

  return (
    <main className="auth">
      <section className="auth__section">
        <Link className="auth__logo" to="/"></Link>
        <h1 className="auth__title">{props.title}</h1>
        <form className="auth__form" onSubmit={(e) => { e.preventDefault(); props.handleAuth() }} noValidate>
          <div className="auth__inputs" >
            {props.children}
          </div>
          <span className="auth__error">{props.errorMessage && "Произошла ошибка."}</span>
          <button className={`auth__button ${!(!props.isValid || props.errorMessage || props.buttonDisabled) ? "" : "auth__button_disabled"}`}
            disabled={!props.isValid || props.errorMessage || props.buttonDisabled}
            type="submit">{props.buttonTitle}</button>
        </form>

        <p className="auth__text">{props.text} <Link className="auth__link" to={props.link}>{props.linkText}</Link></p>
      </section>
    </main>


  );
}

export default Authentication;