import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loading from '../../components/loading/Loading';
import Card from '../../components/card/Card';

import './List.scss';


function List(props) {
  const {
    items,
    handleSearchScroll,
    hasMore,
    loading,
  } = props;

  return (
    <InfiniteScroll
      className="list"
      dataLength={items.length}
      next={handleSearchScroll}
      hasMore={hasMore}
      loader={loading && <Loading />}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }>
      {items.map((item, i) => (
        <Card {...item} key={i} />
      ))}
    </InfiniteScroll>
  );
}


export default List;