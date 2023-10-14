import React from 'react';

import {
  WINDOW_BIG_DESKTOP,
  WINDOW_DESKTOP,
  WINDOW_TABLETS,
  WINDOW_MOBILE,
  NUMBER_BIG_DESKTOP, 
  NUMBER_DESKTOP, 
  NUMBER_TABLETS, 
  NUMBER_MOBILE,
  PLUS_BIG_DESKTOP, 
  PLUS_DESKTOP, 
  PLUS_TABLETS, 
  PLUS_MOBILE
} from '../utils/constants.js'

export function useResize() {
  const [cardInfo, setCardInfo] = React.useState({});

  React.useEffect(() => {
    setCardInfo(
      (window.innerWidth >= WINDOW_BIG_DESKTOP) ?
        { number: NUMBER_BIG_DESKTOP, plus: PLUS_BIG_DESKTOP } :
        (window.innerWidth >= WINDOW_DESKTOP) ?
          { number: NUMBER_DESKTOP, plus: PLUS_DESKTOP } :
          (window.innerWidth >= WINDOW_TABLETS) ?
            { number: NUMBER_TABLETS, plus: PLUS_TABLETS } :
            (window.innerWidth >= WINDOW_MOBILE) ?
              { number: NUMBER_MOBILE, plus: PLUS_MOBILE } :
              { number: NUMBER_MOBILE, plus: PLUS_MOBILE });

    const handleResize = (event) => {
      setCardInfo(
        (event.target.innerWidth >= WINDOW_BIG_DESKTOP) ?
          { number: NUMBER_BIG_DESKTOP, plus: PLUS_BIG_DESKTOP } :
          (event.target.innerWidth >= WINDOW_DESKTOP) ?
            { number: NUMBER_DESKTOP, plus: PLUS_DESKTOP } :
            (event.target.innerWidth >= WINDOW_TABLETS) ?
              { number: NUMBER_TABLETS, plus: PLUS_TABLETS } :
              (event.target.innerWidth >= WINDOW_MOBILE) ?
                { number: NUMBER_MOBILE, plus: PLUS_MOBILE } :
                { number: NUMBER_MOBILE, plus: PLUS_MOBILE })
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function addCards() {
    setCardInfo({ number: cardInfo.number + cardInfo.plus, plus: cardInfo.plus });
  }
  return { cardInfo, addCards };
}