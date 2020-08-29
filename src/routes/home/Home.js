  
import React, { useState, useEffect, useContext } from 'react';

import { getImages } from '../../api/api';

import Search from '../../components/search/Search';

import './Home.scss';


function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [items, setItems] = useState([]);

  async function search() {
    if (searchValue === '') return;

    setLoading(true);

    try {
      const result = await getImages(searchValue, 0);
      if (result.ok) {
        setItems(result.items);
      }
    } catch (e) {
      setError(e.message);
    }

    setLoading(false);
  }

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }

  async function handleSearch(event) {
    event.preventDefault();
    await search();
  }

  useEffect(() => {
    search();
  }, []);


  return (
    <main>
      <Search
        handleSearch={handleSearch}
        handleChange={handleSearchChange}
      />
      {items.map(item => (
        <p>{item.title}</p>
      ))}
    </main>
  );
}


export default Home;