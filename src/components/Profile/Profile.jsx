import React from 'react';
import './Profile.css'

function Profile({ handleLogout }) {

  return (

    <section className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <div className="profile__content">
        <div className="profile__info">
          <h2 className="profile__subtitle">Имя</h2>
          <p className="profile__text">Виталий</p>
        </div>
        <div className="profile__info">
          <h2 className="profile__subtitle">E-mail</h2>
          <p className="profile__text">pochta@yandex.ru</p>
        </div>
      </div>
      <button className="profile__button profile__button_type_settings" to="#">Редактировать</button>
      <button className="profile__button profile__button_type_signout" to="/" onClick={handleLogout}>Выйти из аккаунта</button>
    </section>
  );
}

export default Profile;