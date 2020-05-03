import React from 'react';
import logo from './logo.svg';
import './App.css';
import { num1 as x, num2 as y, multiple, default as Testing } from './module';

function App() {
  return (
    <div className="App">
      <h1>
        the sum of {x} and {y} is {x + y}
      </h1>
      <h1>
        the multiply of {x} and {y} is {multiple()}
      </h1>
      <h1>
        Random Number is: {Testing()}
      </h1>
    </div>
  );
}

export default App;
