import React from 'react';

import './App.css';
import Header from './components/Header'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
      <header className="App-Header">
        <Header />
        <NavBar />
      </header>

      <div className="container">
        <h1>Body</h1>
      </div>
    </div>
  );
}

export default App;
