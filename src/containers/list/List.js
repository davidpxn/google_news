import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import Loading from '../../components/loading/Loading';
import Card from '../../components/card/Card';
import Empty from '../../components/empty/Empty';

import './List.scss';


function List(props) {
  const {
    items,
    handleSearchScroll,
    hasMore,
    loading,
  } = props;


  if (items.length === 0 && !loading) {
    return (<Empty />);
  }

  return (
    <InfiniteScroll
      className="list"
      dataLength={items.length}
      next={handleSearchScroll}
      hasMore={hasMore}
      loader={loading && <Loading />}
      endMessage={
        <h3 className="list__end">Wooow þú ert búinn að skoða allar myndirnar 😝</h3>
      }>
      {items.map((item, i) => (
        <Card {...item} key={i} />
      ))}
    </InfiniteScroll>
  );
}


export default List;