import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Preloader from '../Preloader/Preloader.js';

function SavedMovies({ savedCards, handleMovieDelete, loader }) {

  const [isChecked, setIsChecked] = React.useState(false);
  const [isSubmit, setIsSubmit] = React.useState(false);

  const [resultShortMovie, setResultShortMovie] = React.useState([]);
  const [resultLongMovie, setResultLongMovie] = React.useState([]);

  React.useEffect(() => {
    setResultShortMovie(savedCards.filter((item) => item.duration < 40));
  }, [savedCards]);

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  function handleSubmit(inputValue) {
    setIsSubmit(true);
    console.log(inputValue, isSubmit, isChecked);
    setResultShortMovie(savedCards.filter((item) =>
      item.duration < 40 &&
      (item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.nameRU.toLowerCase().includes(inputValue.toLowerCase()))
    ));
    setResultLongMovie(savedCards.filter((item) =>
      item.duration >= 40 &&
      (item.nameRU.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.nameRU.toLowerCase().includes(inputValue.toLowerCase()))
    ));
  }

  return (
    <main className="saved-movies">
      <SearchForm
        handleCheck={handleCheck}
        handleSubmit={handleSubmit}
        isMovieSaved={true}
        isChecked={isChecked}
      />
      {loader ? <Preloader /> :
        <MoviesCardList
          cards={isSubmit ? isChecked ? resultShortMovie : resultLongMovie.concat(resultShortMovie) : isChecked ? resultShortMovie : savedCards}
          isMovieSaved={true}
          handleMovieDelete={handleMovieDelete}
        />}
    </main>
  );
}

export default SavedMovies;