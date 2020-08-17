import React, { useState } from 'react';
import './App.css';
import Parent from './Parent' 
import CounterContext from './CounterContext';


function App() {
  let setCount = useState(1);
  // let [count, setCount] = useState(30); 
  return (
    <CounterContext.Provider value={setCount}>
    <div>
      <Parent />
    </div>
    </CounterContext.Provider>
  );
}

export default App;
