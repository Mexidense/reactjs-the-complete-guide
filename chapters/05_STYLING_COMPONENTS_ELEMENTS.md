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

