import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'a0e84ab1-8227-4211-96a0-326f141f99ae', name: 'Salva', age: 30 },
      { id: '24037216-4661-49f2-a226-5f9fee64e68c', name: 'Teodoro', age: 28 },
      { id: '8917b06e-bc79-4ad7-b540-7a46ef4dad58', name: 'Eustaquio', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Salva', age: 30},
        {name: event.target.value, age: 99},
        {name: 'Eustaquio', age: 18}
      ]
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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
          { this.state.persons.map((person, index) => {
            return <Person
              name={ person.name }
              age={ person.age }
              click={ () => this.deletePersonHandler(index) }
              changed={ this.nameChangedHandler }
              key={ person.id }/>
          })}
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
