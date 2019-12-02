import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi Arnon Peleg</h1>
        <p>Is this working?</p>
        <Person />
      </div>
    );
  }
}

export default App;
