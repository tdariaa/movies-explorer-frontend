import React from 'react';
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.jsx';

function MoviesCardList({ cards, isMovieSaved }) {

  const [visibleCards, setVisibleCards] = React.useState([]);
  const [visible, setVisible] = React.useState(12);

  React.useEffect(() => {
    setVisibleCards(cards.slice(0, visible));
  }, [visible, cards]);

  function showMore(e) {
    e.preventDefault();
    setVisible(visible + 3);
    setVisibleCards(cards.slice(0, visible));
  }

  return (
    <>
      <ul className="cards">
        {visibleCards.map((props) => {
          return <MoviesCard key={props.id} {...props} isMovieSaved={isMovieSaved} />
        }
        )}
      </ul>

      <section className="more">
        <button className="more__button" onClick={showMore} type="button" >Ещё</button>
      </section>

    </>
  );
}

export default MoviesCardList;