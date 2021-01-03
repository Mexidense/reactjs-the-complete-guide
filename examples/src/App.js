import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Salva', age: 30 },
      { name: 'Teodoro', age: 28 },
      { name: 'Eustaquio', age: 25 }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: 'Salvador', age: 30},
        {name: 'Teodoro', age: 28},
        {name: 'Eustaquio', age: 18}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello word!</h1>
        <p>Hello again!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }/>
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }/>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }/>
      </div>
    );
  }
}

export default App;
