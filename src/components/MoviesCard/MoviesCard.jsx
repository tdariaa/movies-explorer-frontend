import React from 'react';
import { Link } from 'react-router-dom';
import './MoviesCard.css'

import { CurrentUserContext } from '../../context/CurrentUserContext.js';

function MoviesCard(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isSaveActive, setIsSaveActive] = React.useState(false);
  const [cardId, setCardId] = React.useState({});


  React.useEffect(() => {
    if (!props.isMovieSaved) {
      setIsSaveActive(props.savedCards.some((item) => { return item.movieId === props.id }));
      setCardId(props.savedCards.find(card => card.movieId === props.id))
    }
  }, [props.savedCards])

  function savedButton(e) {
    e.preventDefault();
    setIsSaveActive(!isSaveActive);
    props.handleMovieLike(
      {
        country: props.country,
        director: props.director,
        duration: props.duration,
        year: props.year,
        description: props.description,
        image: `https://api.nomoreparties.co${props.image.url}`,
        trailerLink: props.trailerLink,
        thumbnail: `https://api.nomoreparties.co${props.image.formats.thumbnail.url}`,
        movieId: props.id,
        nameRU: props.nameRU,
        nameEN: props.nameEN
      })
  }

  function deleteButton(e) {
    e.preventDefault();
    if (props.isMovieSaved) {
      props.handleMovieDelete(props._id)
    } else {
      props.handleMovieDelete(cardId._id)
    }
  }

  return (

    <li className="cards__item">
      <Link className="cards__link" to={props.trailerLink} target="_blank">
        <img className="cards__images" src={props.isMovieSaved ? props.image : `https://api.nomoreparties.co${props.image.url}`} alt={props.image.name} />

        <div className="cards__description">
          <h2 className="cards__title">{props.nameRU}</h2>
          <p className="cards__duration">{props.duration}</p>
        </div>
      </Link>
      {
        props.isMovieSaved ?
          <button className="cards__status cards__status_type_delete" onClick={deleteButton} type="button" /> :
          isSaveActive ?
            <button className="cards__status cards__status_type_saved" onClick={(e) => { deleteButton(e); setIsSaveActive(!isSaveActive) }} type="button" ></button> :
            <button className="cards__status cards__status_type_save" onClick={savedButton} type="button" >Сохранить</button>
      }
    </li>


  );
}

export default MoviesCard;