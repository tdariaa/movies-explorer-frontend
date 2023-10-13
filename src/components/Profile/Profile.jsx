import React from 'react';
import './Profile.css'

import { CurrentUserContext } from '../../context/CurrentUserContext.js';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

function Profile({ handleLogout, handleUpdateProfile, errorMessage, resetError, updateProfile, isProfileUpdate, isUpdated }) {

  const { values, handleChange, isValidInput, isValid, resetForm } = useFormWithValidation();
  const currentUser = React.useContext(CurrentUserContext);

  function handleSubmit() {
    if (!errorMessage) {
      handleUpdateProfile({ name: values.name || currentUser.name, email: values.email || currentUser.email });
      resetForm();
    }
  }

  React.useEffect(() => {
    resetError();
    //eslint-disable-next-line
  }, [values])

  return (
    <main className="profile">
      <section className="profile__section">
        <h1 className="profile__title">{`Привет, ${currentUser.name}`}</h1>
        <form action="" className="profile__form" onSubmit={(e) => { e.preventDefault(); handleSubmit() }}>
          <div className="profile__info">
            <label className="profile__subtitle">Имя</label>
            <input
              id="profile__name"
              name="name"
              className={`profile__text profile__text_input ${isValidInput.name === undefined || isValidInput.name ? "" : "profile__text_error"}`}
              placeholder="Имя"
              type="text"
              defaultValue={currentUser.name}
              minLength={3}
              maxLength={30}
              pattern="^[А-Яа-яЁёa-zA-Z\-\s]+$"
              onChange={handleChange}
              disabled={!isProfileUpdate}
            />
          </div>
          <div className="profile__info">
            <label className="profile__subtitle">E-mail</label>
            <input
              id="profile__email"
              name="email"
              className={`profile__text profile__text_input ${isValidInput.email === undefined || isValidInput.email ? "" : "profile__text_error"}`}
              placeholder="E-mail"
              type="email"
              defaultValue={currentUser.email}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              onChange={handleChange}
              disabled={!isProfileUpdate}
            />
          </div>
          {isProfileUpdate &&
            <>
              <span className="profile__error-message profile__error-message_active">{isUpdated ? !errorMessage && "Обновление профиля прошло успешно." : errorMessage && "При обновлении профиля произошла ошибка."}</span>
              <button className={`profile__button profile__button_type_save ${!(!isValid || errorMessage || (values.name === currentUser.name && values.email === currentUser.email)) ? "" : "profile__button_error"}`} type="submit" disabled={!isValid || errorMessage || (values.name === currentUser.name && values.email === currentUser.email)}>Сохранить</button>
            </>
          }
        </form>
        {!isProfileUpdate && <button className="profile__button profile__button_type_settings" type="submit" onClick={(e) => { e.preventDefault(); updateProfile(); }}>Редактировать</button>}
        {!isProfileUpdate && <button className="profile__button profile__button_type_signout" onClick={handleLogout} type="button">Выйти из аккаунта</button>}
      </section>
    </main>
  );
}

export default Profile;

