import React from 'react';
import Counter from './Counter';
import hoc from './hoc';
import './App.css';
import App1 from './Hoc/Pure1';

const NewCounter = hoc(Counter);

const App = () => {
  return (
    <div>
      <NewCounter />
      <App1></App1>
    </div>
  );
};

export default App;
