import React from 'react';
import { Link } from 'react-router-dom';
import './Authentication.css'

function Authentication(props) {

  function handleSubmit() {
    props.handleAuth();
  }

  return (
    <main className="auth">
      <section className="auth__section">
        <Link className="auth__logo" to="/"></Link>
        <h1 className="auth__title">{props.title}</h1>
        <form className="auth__form" onSubmit={(e) => { e.preventDefault(); handleSubmit() }} noValidate>
          <div className="auth__inputs" >
            {props.children}
          </div>
          <button className={`auth__button ${props.isDisabled ? 'auth__button_disabled' : ''}`} disabled={props.isDisabled} type="submit">{props.buttonTitle}</button>
        </form>

        <p className="auth__text">{props.text} <Link className="auth__link" to={props.link}>{props.linkText}</Link></p>
      </section>
    </main>


  );
}

export default Authentication;