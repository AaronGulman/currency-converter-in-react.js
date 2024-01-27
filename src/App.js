import React, { useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'http://apilayer.net/api/live?access_key=268c2fed9a2e56c9bf97fa07ff916376&format'


function App() {
  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [])
 return (
  <>
    <h1>Convert</h1>
    <CurrencyRow />
    <div className='equals'>=</div>
    <CurrencyRow />
    </>
  );
}

export default App;
