import React from 'react';
import './SearchForm.css'

function SearchForm() {

  return (
    <section className="search">
      <form className="search__form">
        <div className="search__line">
          <input className="search__input" type="search" placeholder="Фильм" required />
          <button className="search__button" type="submit" />
        </div>
        <div className="search__filter">
          <input className="search__filter-checkbox" type="checkbox" />
          <span className="search__filter-span"></span>
          <h2 className="search__filter-subtitle">Короткометражки</h2>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;