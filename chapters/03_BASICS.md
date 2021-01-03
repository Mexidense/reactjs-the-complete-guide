# The basics

## Module introduction
A brief introduction about explaining on this chapter: what is it, how to set up project on our machine, how to use the concepts, workflow, syntax, components...

## The build workflow  

Why should use a build workflow?
- Recommended for single page applications & multi page applications (SPAs & MPAs)
- Optimize code
- Use Next-Gen JavaScript features (ES6 vs ES5)
- To be more productive

How should use a build workflow?
- Use dependency management tool like `npm` or `yarn`
- Use bundler, Webpack is recommended
- Use a compiler like Babel + presets
- Use a development server

## Using create React App

- Take a quick look to Create React App repository: https://github.com/facebook/create-react-app
- Install NodeJS
- Install create React app package globally:

  ```bash
    npm install -g create-react-app
    create-react-app <project-directory>
    npm run start
  ```
- Go to the browser: http://locahost:3000

## Understanding the folder structure
Taking a look the main folders and cleaning & custom the project.


## Understanding component basics

How to create a component?
There are two ways to create a components:
One of them is:
- Create a class which extends from React Component class.  
- Inside the class you have to create a render method with JSX component (like HTML DOM).
- Finally, export the class. 

## Understanding JSX

The other way to create a component is using the method `createElement` of the `React` class.
- 1st argument: HTML element type
- 2nd argument: configuration JS object
- 3rd argument: Children object

## JSX restrictions

- You have to add the components inside main `div` component

## Creating a functional component

We've created the Person functional component.

```js
import React from 'react';

const person = () => {
    return <p>I'm a Person!</p>
}

export default person;
```

## Outputting dynamic content
We've created the dynamic variables: [examples/src/Person/Person.js](/examples/src/Person/Person.js)

```js
import React from 'react';

const person = () => {
  const years = Math.floor(Math.random() * 30);
  return <p>I'm a Person!, I am { years } years old!</p>
}

export default person;
```

## Working with props (properties)
```js
import React from 'react';

const person = (props) => {
    return <p>I'm { props.name }!, I am { props.age } years old!</p>
}

export default person;
```

```jsx
<Person name="Salva" age="30"/>
<Person name="Teodoro" age="28">My hobby is: Dancing</Person>
<Person name="Eustaquio" age="25"/>
```

## Understanding the "children" props
```js
import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm { props.name }!, I am { props.age } years old!</p>
            <p>{ props.children }</p>
        </div>
    );
}

export default person;
```

```js
import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
      <div className="App">
        <h1>Hello word!</h1>
        <p>Hello again!</p>
        <Person name="Salva" age="30"/>
        <Person name="Teodoro" age="28">My hobby is: Dancing</Person>
        <Person name="Eustaquio" age="25"/>
      </div>
  );
}

export default App;
```

## Understanding and using state

```js
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Salva', age: 30 },
      { name: 'Teodoro', age: 28 },
      { name: 'Eustaquio', age: 25 }
    ]
  };

  render() {
    return (
      <div className="App">
        <h1>Hello word!</h1>
        <p>Hello again!</p>
        <button>Switch name</button>
        <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age }/>
        <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age }/>
        <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age }/>
      </div>
    );
  }
}

export default App;
```

## Handling events with methods

```js
// Create JSX element:
<button onClick={this.switchNameHandler}>Switch name</button>

// Create the event function:
switchNameHandler = () => {
  console.log('It was clicked');
}
```

## Which events can you listen to?

React has supported events, they're listened to here: https://reactjs.org/docs/events.html#supported-events

## Manipulating the state

We can use the setState method in order to modify the states/pros:
```js
switchNameHandler = () => {
    // this.state.persons[0].name = 'Salvador'; // DON'T DO THIS
    this.setState({
      persons: [
        {name: 'Salvador', age: 30},
        {name: 'Teodoro', age: 28},
        {name: 'Eustaquio', age: 18}
      ]
    })
  }
```

## Using the useState() Hook for state manipulation

- Add the import:
  ```js
  import React, { Component, useState } from 'react';
  ```
- Use functional components
- Use `useState` hook, set initial value and set use state function
- Change properties to local variables.


```js
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
```

## Stateless vs stateful component

Stateful component is a component that manages states.
```js
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
```
Stateless component is a component that doesn't have an internal logic or just have a presentational components.
```js
const person = (props) => {
  return (
    <div>
      <p>I'm {props.name}!, I am {props.age} years old!</p>
      <p>{props.children}</p>
    </div>
  );
}
```

## Passing method references between components

From stateful component:
```js
 <Person
  name={ this.state.persons[1].name }
  age={ this.state.persons[1].age }
  click={this.switchNameHandler}/>
```

On the stateless component:
```js
return (
  <div>
    <p onClick={props.click}>I'm {props.name}!, I am {props.age} years old!</p>
    <p>{props.children}</p>
  </div>
);
```

If you want to pass a parameter to `onClick` handler, you can set the argument to the function and use the `bind` method to calling it.
```js
// Add new argument `newName`.
switchNameHandler = (newName) => {
  this.setState({
    persons: [
      {name: newName, age: 30},
      {name: 'Teodoro', age: 28},
      {name: 'Eustaquio', age: 18}
    ]
  })
}

// use bind function
<button
        onClick={this.switchNameHandler.bind(this, 'Salvador from button')}>Switch name
</button>

<Person
  name={ this.state.persons[1].name }
  age={ this.state.persons[1].age }
  click={this.switchNameHandler.bind(this, 'Salvador from stateless component')}/>
```

## Adding two-way binding
```js
// Add a input text and add onChange methods to create a handler on the stateful component.
const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I'm {props.name}!, I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

// Handler:
nameChangedHandler = (event) => {
  this.setState({
    persons: [
      {name: 'Salva', age: 30},
      {name: event.target.value, age: 99},
      {name: 'Eustaquio', age: 18}
    ]
  });
}

// Passing method reference
<Person
  name={ this.state.persons[1].name }
  age={ this.state.persons[1].age }
  click={this.switchNameHandler.bind(this, 'Salvador from stateless component')}
  changed={this.nameChangedHandler}/>
```