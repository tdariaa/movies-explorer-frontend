import React from 'react';
import './NoResult.css'

function NoResult({ goBack }) {
  return (

    <section className="no-result">
      <h1 className="no-result__title">404</h1>
      <h2 className="no-result__subtitle">Страница не найдена</h2>
      <button className="no-result__back" onClick={goBack}>Назад</button>

    </section>


  );
}

export default NoResult;