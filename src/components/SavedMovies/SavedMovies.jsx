import React from 'react';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
// import Preloader from './Preloader/Preloader.js';

function SavedMovies({ cards }) {
  return (
    <>
      <SearchForm />
      <MoviesCardList
        cards={cards}
        isMovieSaved={true}
      />
    </>
  );
}

export default SavedMovies;