import React from 'react';
import './Profile.css'

function Profile({ handleLogout, regexpEmail }) {

  const [isProfileUpdate, setIsProfileUpdate] = React.useState(false);
  const name = React.useRef();
  const email = React.useRef();
  const [nameValid, setNameValid] = React.useState(true);
  const [emailValid, setEmailValid] = React.useState(true);
  const [isDisabled, setIsDisabled] = React.useState(true);


  function handleSubmit() {
    setIsProfileUpdate(!isProfileUpdate)
  }

  React.useEffect(() => {
    if ((emailValid && nameValid)) {
      setIsDisabled(false);
    }
    else {
      setIsDisabled(true);
    }
  }, [email, name, emailValid, nameValid]);

  function handleChangeEmail(e) {
    e.preventDefault();
    if (!regexpEmail.test(String(email.current.value).toLowerCase())) {
      setEmailValid(false);
    }
    else {
      setEmailValid(true);
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
    <main className="profile">
      <section className="profile__section">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form action="" className="profile__form" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
          <div className="profile__info">
            <label className="profile__subtitle">Имя</label>
            {isProfileUpdate ?
              <input className={`profile__text profile__text_input ${nameValid ? "" : "profile__text_error"}`} ref={name} onChange={(e) => { handleChangeName(e) }} type="text" placeholder="Имя" defaultValue={""} disabled={!isProfileUpdate} /> :
              <input className="profile__text profile__text_input" type="text" placeholder="Имя" defaultValue={"Виталий"} disabled={!isProfileUpdate} />
            }
          </div>
          <div className="profile__info">
            <label className="profile__subtitle">E-mail</label>
            {isProfileUpdate ?
              <input className={`profile__text profile__text_input ${emailValid ? "" : "profile__text_error"}`} ref={email} onChange={(e) => { handleChangeEmail(e) }} type="email" placeholder="E-mail" defaultValue={""} disabled={!isProfileUpdate} /> :
              <input className="profile__text profile__text_input" type="email" placeholder="E-mail" defaultValue={"pochta@yandex.ru"} disabled={!isProfileUpdate} />}
          </div>
          {isProfileUpdate ?
            <>
              <span className={`profile__error-message ${isDisabled ? "profile__error-message_active" : ""}`}>При обновлении профиля произошла ошибка.</span>
              <button className={`profile__button profile__button_type_save ${isDisabled ? "profile__button_error" : ""}`}  type="submit" disabled={isDisabled}>Сохранить</button>
            </> :
            <button className="profile__button profile__button_type_settings" type="submit" >Редактировать</button>
          }
        </form>
        {!isProfileUpdate && <button className="profile__button profile__button_type_signout" onClick={handleLogout} type="button">Выйти из аккаунта</button>}
      </section>
    </main>
  );
}

export default Profile;

