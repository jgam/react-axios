import React, { useState } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
 
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
  const onClick = async () => {
    try{
      var res = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=ab27d8e8234342ee84c8c97aae124ed0');
      setData(res.data);
      console.log(res.data);
    }
    catch(e){
      console.log(e);
    }
  }
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
        <NewsList />
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
    </div>
  );
};
 
export default App;