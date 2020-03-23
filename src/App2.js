import React, { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [data, setData] = useState(null);
  //original version
  /*
  const onClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
      setData(response.data);
    });
  };
  */

  //async?
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category => setCategory(category), []);
  return (
    <div>
      <div>
        <Categories category={category} onSelect={onSelect} />
        <NewsList category={category} />
      </div>
    </div>
  );
};

export default App;
