import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Gilad', age: 33 },
      { name: 'Arnon', age: 45 },
      { name: 'Peleg', age: 76 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Gilad Gur', age: 33 },
        { name: 'Arnon', age: 45 },
        { name: 'Peleg', age: 109 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <p>Is this working?</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
