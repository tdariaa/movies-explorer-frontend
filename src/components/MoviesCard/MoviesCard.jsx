import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesCard.css'

function MoviesCard(props) {
  console.log(props.image.url)
  const [isSaved, setIsSaved] = React.useState(props.isMovieSaved);

  function savedButton(e) {
    e.preventDefault();
    setIsSaved(!isSaved)
  }

  return (

    <li className="cards__item">
      <Link className="cards__link" to={props.trailerLink}  target="_blank">
        <img className="cards__images" src={`https://api.nomoreparties.co${props.image.url}`} alt={props.image.name} />

        <div className="cards__description">
          <h2 className="cards__title">{props.nameRU}</h2>
          <p className="cards__duration">{props.duration}</p>
        </div>
      </Link>
      {
        props.isMovieSaved ?
          <button className="cards__status cards__status_type_delete" type="button" /> :
          <button className={`cards__status ${isSaved ? "cards__status_type_saved" : "cards__status_type_save"}`} onClick={savedButton} type="button" >{isSaved ? "" : "Сохранить"}</button>
      }
    </li>


  );
}

export default MoviesCard;