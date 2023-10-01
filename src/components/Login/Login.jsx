import React from 'react';
import Authentication from '../Authentication/Authentication.jsx';

function Login({ regexpEmail, handleLogin }) {

  const email = React.useRef();
  const password = React.useRef();
  const [emailValid, setEmailValid] = React.useState(true);
  const [passwordValid, setPasswordValid] = React.useState(true);
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    if ((emailValid && passwordValid && email.current.value && password.current.value)) {
      setIsDisabled(false);
    }
    else {
      setIsDisabled(true);
    }
  }, [email, password, emailValid, passwordValid]);

  function handleChangeEmail(e) {
    e.preventDefault();
    if (!regexpEmail.test(String(email.current.value).toLowerCase())) {
      setEmailValid(false);
    }
    else {
      setEmailValid(true);
    }
  }

  function handleChangePassword(e) {
    e.preventDefault();
    if (password.current.value.length < 8) {
      setPasswordValid(false);
    }
    else {
      setPasswordValid(true);
    }
  }

  return (

    <Authentication
      title="Рады видеть!"
      isDisabled={isDisabled}
      buttonTitle="Войти"
      text="Ещё не зарегистрированы?"
      linkText="Регистрация"
      link="/signup"
      handleAuth={handleLogin}
      >

      <label className="auth__subtitle auth__subtitle_type_email">E-mail</label>
      <input
        id="auth__email"
        className={`auth__input auth__input_type_email ${emailValid ? '' : 'auth__input_error'}`}
        type="email"
        placeholder="E-mail"
        ref={email}
        onChange={(e) => { handleChangeEmail(e) }}
        required />
      <span className={`auth__error-message auth__error-message_type_email ${emailValid ? '' : 'auth__error-message_active'}`}>Что-то пошло не так...</span>

      <label className="auth__subtitle auth__subtitle_type_password">Пароль</label>
      <input
        id="auth__password"
        className={`auth__input auth__input_type_password ${passwordValid ? '' : 'auth__input_error'}`}
        placeholder="Пароль"
        ref={password}
        onChange={(e) => { handleChangePassword(e) }}
        type="password"
        autoComplete="on"
        required />
      <span className={`auth__error-message auth__error-message_type_password ${passwordValid ? '' : 'auth__error-message_active'}`}>Что-то пошло не так...</span>

    </Authentication >

  );
}

export default Login;