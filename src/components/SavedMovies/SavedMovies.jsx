import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm.jsx';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import Preloader from '../Preloader/Preloader.js';

function SavedMovies({ savedCards, handleMovieDelete, loader }) {

  const [isChecked, setIsChecked] = React.useState(false);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");
  const [resultShortMovie, setResultShortMovie] = React.useState([]);
  const [resultLongMovie, setResultLongMovie] = React.useState([]);

  React.useEffect(() => {
    setResultShortMovie(savedCards.filter((item) => item.duration < 40));
    filtered(searchValue);
  }, [savedCards]);

  function handleCheck() {
    setIsChecked(!isChecked);
  }

  function filtered(inputValue) {
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

  function handleSubmit(inputValue) {
    setIsSubmit(true);
    setSearchValue(inputValue);
    filtered(inputValue);
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
        (isSubmit && resultLongMovie.concat(resultShortMovie).length === 0) ?
        <h3 className="movies__no-result">Ничего не найдено</h3> :
          (isSubmit && isChecked && resultShortMovie.length === 0) ?
            <h3 className="movies__no-result">Ничего не найдено</h3> :
            <MoviesCardList
              cards={isSubmit ? isChecked ? resultShortMovie : resultLongMovie.concat(resultShortMovie) : isChecked ? resultShortMovie : savedCards}
              isMovieSaved={true}
              handleMovieDelete={handleMovieDelete}
            />
      }
    </main>
  );
}

export default SavedMovies;