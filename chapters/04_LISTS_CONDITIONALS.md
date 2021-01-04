# Working with lists and conditionals

## Module introduction
In this module, we're going to create truly dynamic apps. How to update the data and provides data to our application.

## Rendering content conditionally

We use a JSX conditional to display or not the Person component. 
- We added a state property called `showPersons: false`
- Create a method to change the `showPersons` state:
    ```js
    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }
    ```
- Add conditional and event to button component:
    ```js
    <button
      style={style}
      onClick={this.togglePersonsHandler}>Toggle persons
    </button>
    {
      this.state.showPersons ?
      <div >
        <Person
        name={ this.state.persons[0].name }
        age={ this.state.persons[0].age }/>
        <Person
        name={ this.state.persons[1].name }
        age={ this.state.persons[1].age }
        click={this.switchNameHandler.bind(this, 'Salvador from stateless component')}
        changed={this.nameChangedHandler}/>
        <Person
        name={ this.state.persons[2].name }
        age={ this.state.persons[2].age }/>
      </div> : null
    }
    ```

## Handling dynamic content "The JavaScript way"

We use the `if conditional` on the normal statement outside `render` method, it's an JS/elegant way
```js
  let persons = null;
  
  if (this.state.showPersons) {
    persons = (
      <div >
        <Person
          name={ this.state.persons[0].name }
          age={ this.state.persons[0].age }/>
        <Person
          name={ this.state.persons[1].name }
          age={ this.state.persons[1].age }
          click={this.switchNameHandler.bind(this, 'Salvador from stateless component')}
          changed={this.nameChangedHandler}/>
        <Person
          name={ this.state.persons[2].name }
          age={ this.state.persons[2].age }/>
      </div>
    );
  }

  // Inside render method
  <button
    style={style}
    onClick={this.togglePersonsHandler}>Toggle persons
  </button>
  { persons }
```

## Outputting lists

In this point, we're going to see how to get out source data. We can iterate each element from person data list.
For that we use the `map` function:
```js
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
```

## List & state

- Create a method to erase elements from the list:
  ```js
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  ```
- Add the handler to element on the list
  ```js
  <div >
    { this.state.persons.map((person, index) => {
      return <Person
        name={ person.name }
        age={ person.age }
        click={ () => this.deletePersonHandler(index) }
        changed={this.nameChangedHandler}/>
    })}
  </div>
  ```
Now when you click inside each Person component, it'll erase from the list and then from the visual components because the state was modified.


## Updating state immutably

Don't do this:
```js
const persons = this.state.persons;
```
Do this:
```js
const persons = [...this.state.persons];
// or
const persons = this.state.persons.slice();
```

## List and keys

The key props is an important property that expect to define a unique identify. For that we did:
- Add a key property to person object on states:
  ```js
  state = {
    persons: [
      { id: 'a0e84ab1-8227-4211-96a0-326f141f99ae', name: 'Salva', age: 30 },
      { id: '24037216-4661-49f2-a226-5f9fee64e68c', name: 'Teodoro', age: 28 },
      { id: '8917b06e-bc79-4ad7-b540-7a46ef4dad58', name: 'Eustaquio', age: 25 }
    ],
    otherState: 'some other value',
    showPersons: false
  };
  ```
- Add key property to Person component:
  ```js
    return <Person
      name={ person.name }
      age={ person.age }
      click={ () => this.deletePersonHandler(index) }
      changed={ this.nameChangedHandler }
      key={ person.id }/>
  ```
  
## Flexible  lists

- Search the index of the element to modify.
- Get the index and modify the element of the array with that key.
- Finally, set state:
  ```js
  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
  
    });
  
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
  
    this.setState({ persons: persons });
  }
  ```
- Add the new parameter to event->handler
  ```js
  <Person
    name={ person.name }
    age={ person.age }
    click={ () => this.deletePersonHandler(index) }
    changed={ (event) => this.nameChangedHandler(event, person.id) } //Here
    key={ person.id }/>
  ```
  
