
import React, { useState } from 'react';

import { getImages } from '../../api/api';

import Search from '../../components/search/Search';
import List from '../../containers/list/List';
import Message from '../../components/message/Message';


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

  async function handleSearchClick() {
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


  let message = '';
  if (error) {
    message = error;
  } else if (items.length === 0 && !loading) {
    message = "Leitaðu af íslenskum fréttamyndum hér að ofan";
  }

  return (
    <main>
      <Search
        value={searchValue}
        handleSearch={handleSearchClick}
        handleChange={handleSearchChange}
        clearSearch={clearSearch}
      />
      {message && (<Message text={message}/>)}
      <List
        items={items}
        handleSearchScroll={handleSearchScroll}
        hasMore={hasMore}
        loading={loading}>
      </List>
    </main>
  );
}


export default Home;