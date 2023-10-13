import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

function MoviesCardList({ cards, isMovieSaved, handleMovieLike, handleMovieDelete, savedCards, loadMore, cardsLength }) {

  return (
    <>
      <ul className="cards">
        {cards.map((props) => {
          return <MoviesCard key={isMovieSaved ? props.movieId : props.id} {...props}
            isMovieSaved={isMovieSaved}
            handleMovieLike={handleMovieLike}
            handleMovieDelete={handleMovieDelete}
            savedCards={savedCards}
            />
        }
        )}
      </ul>

      {isMovieSaved ? "" : (cardsLength === cards.length) ? "" :
        <section className="more">
          <button className="more__button" onClick={(e) => loadMore(e)} type="button" >Ещё</button>
        </section>
      }



    </>
  );
}

export default MoviesCardList;