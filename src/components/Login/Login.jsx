import React from 'react';
import Authentication from '../Authentication/Authentication.jsx';

import { useFormWithValidation } from '../../hooks/useFormWithValidation.jsx';

function Login({ handleAuthorize, errorMessage, resetError }) {

  const { values, handleChange, errors, isValidInput, isValid, resetForm } = useFormWithValidation();

  function handleSubmit() {
    handleAuthorize(values, "signin");
  }
  
  React.useEffect(() => {
    resetError();
    //eslint-disable-next-line
  }, [values])

  return (

    <Authentication
      title="Рады видеть!"
      isValid={isValid}
      buttonTitle="Войти"
      text="Ещё не зарегистрированы?"
      linkText="Регистрация"
      link="/signup"
      handleAuth={handleSubmit}
      errorMessage={errorMessage}
    >

      <label className="auth__subtitle auth__subtitle_type_email">E-mail</label>
      <input
        id="auth__email"
        name="email"
        className={`auth__input auth__input_type_email ${isValidInput.email === undefined || isValidInput.email ? "" : "auth__input_error"}`}
        placeholder="E-mail"
        type="email"
        value={values.email || ""}
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
        onChange={handleChange}
        required />
      <span className={`auth__error-message auth__error-message_type_email ${isValidInput.email === undefined || isValidInput.email ? "" : "auth__error-message_active"}`}>{errors.email}</span>

      <label className="auth__subtitle auth__subtitle_type_password">Пароль</label>
      <input
        id="auth__password"
        name="password"
        className={`auth__input auth__input_type_password ${isValidInput.password === undefined || isValidInput.password ? "" : "auth__input_error"}`}
        placeholder="Пароль"
        value={values.password || ""}
        minLength={8}
        onChange={handleChange}
        type="password"
        autoComplete="on"
        required />
      <span className={`auth__error-message auth__error-message_type_password ${isValidInput.password === undefined || isValidInput.password ? "" : "auth__error-message_active"}`}>{errors.password}</span>

    </Authentication >

  );
}

export default Login;