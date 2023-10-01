import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
// import Preloader from './Preloader/Preloader.js';

function SavedMovies({ cards }) {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList
        cards={cards}
        isMovieSaved={true}
      />
    </main>
  );
}

export default SavedMovies;