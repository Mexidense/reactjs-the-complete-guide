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
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 30},
        {name: 'Teodoro', age: 28},
        {name: 'Eustaquio', age: 18}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Salva', age: 30},
        {name: event.target.value, age: 99},
        {name: 'Eustaquio', age: 18}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div >
          { this.state.persons.map(person => {
            return <Person
              name={ person.name }
              age={ person.age }
              click={this.switchNameHandler.bind(this, 'Salvador from stateless component')}
              changed={this.nameChangedHandler}/>
          })};
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hello word!</h1>
        <p>Hello again!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle persons
        </button>
        { persons }
      </div>
    );
  }
}

export default App;
