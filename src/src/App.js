import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pyramid from './pyramid/pyramid'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pruebas</h1>
        </header>
        <Pyramid/>
      </div>
    );
  }
}

export default App;
