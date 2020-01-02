import React from 'react';

import './App.css';
import Header from './components/Header'
import SectionGhost from './components/SectionGhost';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <SectionGhost />
      <Main />
    </div>
  );
}

export default App;
