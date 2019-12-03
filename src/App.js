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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 33 },
        { name: 'Arnon', age: 45 },
        { name: 'Peleg', age: 109 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Gilad', age: 33 },
        { name: event.target.value, age: 45 },
        { name: 'Peleg', age: 109 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <p>Is this working?</p>
        <button onClick={() => this.switchNameHandler('Gilad Gur :)')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Gili!!!')}
          changed={this.nameChangedHandler} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
