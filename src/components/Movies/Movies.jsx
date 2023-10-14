import React from 'react';
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Preloader from '../Preloader/Preloader.js';
import { useResize } from '../../hooks/useResize.jsx';

import * as moviesApi from '../../utils/MoviesApi';


function Movies({ savedCards, handleMovieLike, handleMovieDelete }) {

  const [loader, setLoader] = React.useState(false);
  const [loadError, setLoadError] = React.useState(false);
  const { cardInfo, addCards } = useResize();
  const [isChecked, setIsChecked] = React.useState(false);
  const [resultShortMovie, setResultShortMovie] = React.useState([]);
  const [resultLongMovie, setResultLongMovie] = React.useState([]);
  const [resultMovie, setResultMovie] = React.useState([]);
  const [isSearch, setIsSearch] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('value')) {
      handleSubmit(localStorage.getItem('value'))
    }
    if (localStorage.getItem('check') === 'true') {
      setIsChecked(true);
    }
  }, []);

  function filtred(cards, inputValue) {
    setResultShortMovie(cards.filter((item) =>
      item.duration < 40 &&
      (item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.nameRU.toLowerCase().includes(inputValue.toLowerCase()))
    ));
    setResultLongMovie(cards.filter((item) =>
      item.duration >= 40 &&
      (item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.nameRU.toLowerCase().includes(inputValue.toLowerCase()))
    ));
  }

  function handleSubmit(inputValue) {
    setIsSearch(true);
    localStorage.setItem('value', inputValue);
    setLoader(true);
    if (!localStorage.getItem('cards')) {
      moviesApi.getInitialCards()
        .then(function (cards) {
          filtred(cards, inputValue);
          setLoadError(false);
          localStorage.setItem('cards', JSON.stringify(cards));
        })
        .catch(function (value) {
          console.log('Ошибка:' + value);
          setLoadError(true);
        })
        .finally(function (value) {
          setLoader(false);
        })
    } else {
      setLoader(false);
      filtred(JSON.parse(localStorage.getItem('cards')), inputValue);
    }
  }

  React.useEffect(() => {
    if (isChecked) {
      setResultMovie(resultShortMovie);
    } else {
      setResultMovie(resultLongMovie.concat(resultShortMovie));
    }
  }, [isChecked, resultLongMovie, resultShortMovie]);

  function handleCheck() {
    setIsChecked(!isChecked);
    localStorage.setItem('check', !isChecked);
  }

  function loadMore(e) {
    e.preventDefault();
    addCards();
  }

  return (
    <main className="movies">
      <SearchForm
        handleCheck={handleCheck}
        handleSubmit={handleSubmit}
        isMovieSaved={false}
        isChecked={isChecked}
      />
      {loader ? <Preloader /> : loadError ?
        <h3 className="movies__no-result">Во время запроса произошла ошибка.
          Возможно, проблема с соединением или сервер недоступен.
          Подождите немного и попробуйте ещё раз</h3> :
        (resultLongMovie.concat(resultShortMovie).length !== 0) ?
          (isChecked && resultShortMovie.length === 0) ?
            <h3 className="movies__no-result">Ничего не найдено</h3> :
            <MoviesCardList
              cards={resultMovie.slice(0, cardInfo.number)}
              isMovieSaved={false}
              handleMovieLike={handleMovieLike}
              handleMovieDelete={handleMovieDelete}
              savedCards={savedCards}
              loadMore={loadMore}
              cardsLength={isChecked ?
                resultShortMovie.length :
                resultLongMovie.length}
            />
          : isSearch && <h3 className="movies__no-result">Ничего не найдено</h3>}
    </main>
  );
}

export default Movies;