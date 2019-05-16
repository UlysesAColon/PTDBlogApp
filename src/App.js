import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         There will be an input for blog information here.
        </p>
        <a
          className="App-link"
          href="https://programmedtodestroy.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back to the other PTD Page
        </a>
      </header>
    </div>
  );
}

export default App;
