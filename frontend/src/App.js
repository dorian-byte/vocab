import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from './constants';
import WordList from './pages/words/WordList';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(API_URL + 'words').then((res) => {
      setData(res.data);
    });
  }, []);

  useEffect(() => {
    console.log('data', data);
  }, [data]);

  return (
    <div>
      <WordList />
    </div>
  );
}

export default App;
