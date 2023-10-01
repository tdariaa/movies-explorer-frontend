import React from 'react';
import './NoResult.css'

function NoResult({ goBack }) {
  return (
    <main className="no-result">
      <section className="no-result__section">
        <h1 className="no-result__title">404</h1>
        <h2 className="no-result__subtitle">Страница не найдена</h2>
        <button className="no-result__back" onClick={goBack} type="button">Назад</button>

      </section>
    </main>

  );
}

export default NoResult;