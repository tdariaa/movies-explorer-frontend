import React from 'react';
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
// import Preloader from './Preloader/Preloader.js';

function Movies({ cards }) {

  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList
        cards={cards}
        isMovieSaved={false}
      />
    </main>
  );
}

export default Movies;