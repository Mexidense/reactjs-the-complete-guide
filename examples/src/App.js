import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Salva', age: 30 },
      { name: 'Teodoro', age: 28 },
      { name: 'Eustaquio', age: 25 }
    ]
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Salvador', age: 30},
        {name: 'Teodoro', age: 28},
        {name: 'Eustaquio', age: 18}
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hello word!</h1>
      <p>Hello again!</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age }/>
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }/>
      <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age }/>
    </div>
  );
}

export default App;
