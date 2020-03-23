import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div``;

const NewsList = ({ category }) => {
  console.log('rerendering');
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async function declaration specifically here
    const fetchData = async () => {
      setLoading(true);
      console.log('fetchdata');
      try {
        //some axios call
        //here u define categories from parent component that is received from
        const query = category === 'all' ? '' : `&category=${category}`;
        console.log('query is ');
        console.log(query);
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f' +
            query,
        );
        console.log('even slower than state changes?');
        console.log(response.data.articles);
        setArticles(response.data.articles);
        console.log('in try');
      } catch (e) {
        console.log(e);
      }
      console.log('between in try and rerendering at the end');
      setLoading(false);
    };
    fetchData();
  }, [category]);

  //when loading
  if (loading) {
    console.log('here is loading');
    return <NewsListBlock>loading..</NewsListBlock>;
  }

  //when articles value not defined
  if (!articles) {
    return null;
  }

  //if articles
  return (
    <NewsListBlock>
      {articles.map(article => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
