import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants';
function WordList() {
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
      {data.map((dt, idx) => {
        return (
          <ul key={idx}>
            <li style={{ listStyle: 'none' }}>
              <h2>{dt.word}</h2>
            </li>
            <li>definition: {dt.definition}</li>
            <li>pron.: {dt.pronunciation}</li>
            <li>word type: {dt.word_type}</li>
            <li>chinese definition: {dt.definition_in_chinese}</li>
            <hr style={{ marginTop: 10 }} />
          </ul>
        );
      })}
    </div>
  );
}

export default WordList;
