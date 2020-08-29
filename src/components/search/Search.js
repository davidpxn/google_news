  
import React from 'react';

import { ReactComponent as IconSearch } from '../../resources/svg/search.svg'
import './Search.scss';


function Search(props) {
  const {
    value,
    handleChange,
    handleSearch,
  } = props;

  return (
    <form className="search" onSubmit={handleSearch}>
      <input
        className="search__input"
        value={value}
        onChange={handleChange}>
      </input>
      <button className="search__button">
        <IconSearch className="search__icon"/>
      </button>
    </form>
  );
}


export default Search;