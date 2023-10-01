import React from 'react';
import Authentication from '../Authentication/Authentication.jsx';

function Register({ regexpEmail, handleRegister }) {

  const name = React.useRef();
  const email = React.useRef();
  const password = React.useRef();
  const [nameValid, setNameValid] = React.useState(true);
  const [emailValid, setEmailValid] = React.useState(true);
  const [passwordValid, setPasswordValid] = React.useState(true);
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    if ((nameValid && emailValid && passwordValid && email.current.value && password.current.value && name.current.value)) {
      setIsDisabled(false);
    }
    else {
      setIsDisabled(true);
    }
  }, [name, email, password, nameValid, emailValid, passwordValid]);

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

  function handleChangeName(e) {
    e.preventDefault();
    if (name.current.value.length < 3 || name.current.value.length > 30) {
      setNameValid(false);
    }
    else {
      setNameValid(true);
    }
  }

  return (
    <Authentication
      title="Добро пожаловать!"
      isDisabled={isDisabled}
      buttonTitle="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linkText="Войти"
      link="/signin"
      handleAuth={handleRegister}>

      <label className="auth__subtitle auth__subtitle_type_name">Имя</label>
      <input
        id="auth__name" 
        className={`auth__input auth__input_type_name ${nameValid ? '' : 'auth__input_error'}`}
        placeholder="Имя"
        type="text"
        ref={name}
        onChange={(e) => { handleChangeName(e) }}
        required />
      <span className={`auth__error-message auth__error-message_type_name ${nameValid ? '' : 'auth__error-message_active'}`}>Что-то пошло не так...</span>

      <label className="auth__subtitle auth__subtitle_type_email">E-mail</label>
      <input
        id="auth__email"
        className={`auth__input auth__input_type_email ${emailValid ? '' : 'auth__input_error'}`}
        placeholder="E-mail"
        type="email"
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

    </Authentication>

  );
}

export default Register;