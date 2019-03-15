import React, { Component } from 'react';
import Keypad from './components/keypad';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Keypad />
      </div>
    );
  }
}

export default App;
