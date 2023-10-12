import React from 'react';
import './SearchForm.css'

import { useFormWithValidation } from '../../hooks/useFormWithValidation.jsx';

function SearchForm({ handleCheck, handleSubmit, isMovieSaved, isChecked }) {

  const { values, handleChange, isValid, resetForm } = useFormWithValidation();

  function submitForm(e) {
    e.preventDefault();
    handleSubmit(values.search)
  }

  React.useEffect(() => {
    if (isMovieSaved) {
      resetForm();
    }
    if (!isMovieSaved && localStorage.getItem('value')) {
      values.search = localStorage.getItem('value')
    }
  }, []);

  return (
    <section className="search">
      <form className="search__form" noValidate onSubmit={submitForm}>
        <div className="search__line">
          <input className="search__input"
            type="search"
            name="search"
            placeholder="Фильм"
            value={values.search || ""}
            onChange={handleChange}
            minLength={1}
            required />
          <button className={`search__button ${isValid ? "" : "search__button_disabled"}`} type="submit" disabled={!isValid} />
        </div>
        <div className="search__filter">
          <input className="search__filter-checkbox"
            type="checkbox"
            onChange={() => handleCheck()}
            checked={isChecked || false}
            />
          <span className="search__filter-span"></span>
          <h2 className="search__filter-subtitle">Короткометражки</h2>
        </div>
      </form>
    </section>
  );
}

export default SearchForm;