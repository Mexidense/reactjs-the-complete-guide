# Styling React components and elements

## Module introduction
We've added style with inline styles and import css files to apply style on components. We're going to focus on styling React components because there's more world to discover like:
- Adjusting styles or class names dynamically.
- Work around restrictions having scopes styles and don't use media queries or pseudo selectors.
 
## Setting styles dynamically

Everything is JavaScript and for that you can set the JS object where you want, for example, if we click on `Toggle persons` button we can set the button background color to another, e.g. red.
```js
style.backgroundColor = 'red';
```

# Setting class names dynamically
- Create CSS classes:
    ```css
    .red {
      color: red;
    }
    
    .bold {
      font-weight: bold;
    }
    ```
- Create a string with these classes
    ```js
    let classes = ['red', 'bold'].join(' ');
    ```
- Add classes variable to component to style
    ```js
    <p className={classes}>Hello again!</p>
    ```

Using JS arrays/object you can set whatever you want inside each component.

## Adding and using Radium

React doesn't have pseudo selector by default if we want to add pseudo selectors on styles like `:hover` we can install Radium.

- Install Radium:
  ```bash
  npm install --save radium
  ```
- Import on the file you want to use it:
  ```js
  import Radium from 'radium';
  // enable it
  export default Radium(App);
  ```
- Use selector:
  ```js
  const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };
  ```
- If we want to reassign values:
  ```js
  style[':hover'] = {
    backgroundColor: 'salmon',
    color: 'black'
  };
  ```

## Using Radium for Media queries

- Normally, we can use media queries on CSS files like:
  ```css
  @media (min-width: 500px) {
    .Person {
      width: 450px;
    }
  }
  ```

- However, if we can apply media queries dynamically, we can use Radium creating a const or variable:
  ```js
  const style = {
    '@media (minWidth: 500px)': {
      width: '450px'
    }
  };
 ```
- Remember to import Radium library.
  ```js
  import Radium from 'radium';
  ```

- We also need to use StyleRoot element as a wrapper on the used component:
  ```js
  <StyleRoot>
    <div className="App">
      <h1>Hello word!</h1>
      <p className={classes.join(' ')}>Hello again!</p>
      <button
              style={style}
              onClick={this.togglePersonsHandler}>Toggle persons
      </button>
      { persons }
    </div>
  </StyleRoot>
  ```

- To use the wrapper you should add the Style component from Radium library:
  ```js
  import Radium, { StyleRoot } from 'radium';
  ```
