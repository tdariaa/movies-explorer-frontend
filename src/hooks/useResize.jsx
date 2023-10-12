import React from 'react';
import { useState, useEffect } from 'react';

export function useResize() {
  const [cardInfo, setCardInfo] = React.useState({});

  React.useEffect(() => {
    setCardInfo((window.innerWidth >= 1280) ?
      { number: 12, plus: 3 } :
      (window.innerWidth >= 768) ?
        { number: 8, plus: 2 } :
        (window.innerWidth >= 320) ?
          { number: 5, plus: 2 } :
          { number: 5, plus: 2 });
    const handleResize = (event) => {
      setCardInfo(
        (event.target.innerWidth >= 1280) ?
          { number: 12, plus: 3 } :
          (event.target.innerWidth >= 768) ?
            { number: 8, plus: 2 } :
            (event.target.innerWidth >= 320) ?
              { number: 5, plus: 2 } :
              { number: 5, plus: 2 })
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function addCards() {
    setCardInfo({number: cardInfo.number + cardInfo.plus, plus: cardInfo.plus});
  }
  return { cardInfo, addCards };
}