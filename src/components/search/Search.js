import React, { useRef, useState, useEffect } from 'react';

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

  const [isMinimized, setIsMinimized] = useState(false);
  const inputElement = useRef(null);

  function handleSearchClick(event) {
    event.preventDefault();
    inputElement.current.focus();

    if (isMinimized) {
      setIsMinimized(false);
    } else {
      handleSearch();
    }
  }

  function handleClear() {
    inputElement.current.focus();
    clearSearch();
  }

  function handleScroll() {
    if (window.pageYOffset > 50) {
      setIsMinimized(true);
    } else {
      setIsMinimized(false);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <form className={`search ${isMinimized ? 'search--minimized' : ''}`} onSubmit={handleSearchClick}>
      <div className="search__field">
        <input
          className="search__input"
          value={value}
          onChange={handleChange}
          ref={inputElement}
          autoFocus
        />
        <button
          className="search__clear"
          onClick={handleClear}
          type="reset"
        >
          <IconClear className="search__clear-icon" />
        </button>
      </div>
      <button className="search__button">
        <IconSearch className="search__icon" />
      </button>
    </form>
  );
}


export default Search;