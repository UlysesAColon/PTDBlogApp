import React from 'react';
import PTDLLCIcon from '../src/images/PTDLLCIcon.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={PTDLLCIcon} className="App-logo box bounce-1" alt="logo" />
        <p>
         This is a blog page for Programmed To Destroy
        </p>
        <form>
        <label>Blog element input:
          <textarea>
          Area for blog input      
          </textarea>
          </label>
          <button>Submit</button>
        </form>
        <br />
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
