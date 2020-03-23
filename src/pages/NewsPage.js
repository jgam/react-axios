import NewsList from '../components/NewsList';
import Categories from '../components/Categories';
import React from 'react';

const NewsPage = ({ match }) => {
  //if categories not selected then use all as default
  const category = match.params.category || 'all';

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
