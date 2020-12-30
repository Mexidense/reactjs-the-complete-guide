import './App.css';
import React from 'react';

function App() {
  const title = React.createElement('h1', null, 'Hello world!');
  return React.createElement('div', { className: 'App' }, title);
}

export default App;
