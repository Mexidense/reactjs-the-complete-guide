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