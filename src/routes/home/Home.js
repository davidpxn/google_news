
import React, { useState, useEffect, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getImages } from '../../api/api';

import Search from '../../components/search/Search';
import Card from '../../components/card/Card';
import Loading from '../../components/loading/Loading';

import './Home.scss';


function Home() {
  const [searchValue, setSearchValue] = useState('');
  const [hasMore, setHasMore] = useState(true);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [items, setItems] = useState([]);


  async function search() {
    if (searchValue === '') return [];

    setLoading(true);
    let newItems = [];

    try {
      const result = await getImages(searchValue, items.length + 1);

      setHasMore(result.hasMore);
      if (result.ok) {
        newItems = result.items;
      }
    } catch (e) {
      setError(e.message);
    }

    setLoading(false);
    return newItems;
  }

  function handleSearchChange(event) {
    setSearchValue(event.target.value);
  }

  async function handleSearchClick(event) {
    event.preventDefault();

    setItems([]);
    setHasMore(true);

    const newItems = await search();
    setItems(newItems);
  }

  async function handleSearchScroll() {
    const newItems = await search();
    setItems(previousItems => previousItems.concat(newItems));
  }

  function clearSearch() {
    setSearchValue('');
  }


  return (
    <main>
      <Search
        value={searchValue}
        handleSearch={handleSearchClick}
        handleChange={handleSearchChange}
        clearSearch={clearSearch}
      />
      <InfiniteScroll
        dataLength={items.length}
        next={handleSearchScroll}
        hasMore={hasMore}
        loader={loading && <Loading />}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }>
        {items.map(i => (
          <Card {...i} />
        ))}
      </InfiniteScroll>
    </main>
  );
}


export default Home;