import React, { useRef } from 'react';

import { ReactComponent as IconSearch } from '../../resources/svg/search.svg';
import { ReactComponent as IconClear } from '../../resources/svg/clear.svg'

import './Search.scss';


function Search(props) {
  const {
    value,
    handleChange,
    handleSearch,
    clearSearch,
  } = props;

  const inputElement = useRef(null);

  function handleClear() {
    inputElement.current.focus();
    clearSearch();
  }


  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        className="search__input"
        value={value}
        onChange={handleChange}
        ref={inputElement}
        autoFocus
      >
      </input>
      <button
        className="search__clear"
        onClick={handleClear}
        type="reset"
      >
        <IconClear className="search__clear-icon" />
      </button>
      <button className="search__button">
        <IconSearch className="search__icon" />
      </button>
    </form>
  );
}


export default Search;