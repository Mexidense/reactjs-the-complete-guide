import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
      <div className="App">
        <h1>Hello word!</h1>
        <p>Hello again!</p>
        <Person />
      </div>
  );

  // const title = React.createElement('h1', null, 'Hello world!');
  // return React.createElement('div', { className: 'App' }, title);
}

export default App;
