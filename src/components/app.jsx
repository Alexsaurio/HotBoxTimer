import React from 'react';
import logo from '../shared/imagen.png';
import './App.css';

import Reloj from './reloj/reloj'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Reloj time={50}/>
      </header>
    </div>
  );
}

export default App;
