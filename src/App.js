import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <p>Is this working?</p>
        <Person name="Gilad" age="33" />
        <Person name="Arnon" age="45" >(what a loser)</Person>
        <Person name="Peleg" age="76" />
      </div>
    );
  }
}

export default App;
