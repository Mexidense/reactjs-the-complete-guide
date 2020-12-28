# Refreshing Next Generation JavaScript (optional)

## Module introduction

This chapter is about new features of next generation JavaScript. This chapter is fine if you have knowledge in JS to review the news and for beginners too.

## Understanding "let" and "const"

`var` keyword comes to declare whatever variable. 
`let` is for variable values.
`const` is for constant values.

## Arrow functions

It's a new way to create JavaScript functions.

- Regular way to create JS functions:
    ```js
    function myFunction() {
        // to-do
    }
    ```
- Arrow function
    ```js
    const myFunction = () => {
        // to-do
    }
    ```
Why is it the difference? 
With that kind of function you can avoid failures with the `this` keyword  

What happens with the argument or parameters?
```js
// Arrow function with only one argument
const myFunction = (argument) => {
    // todo with the argument   
}

// Short arrow function version
const myFunction = (fistArgument) => fistArgument

// Even shorter arrow function (only one argument)
const myFunction = fistArgument => fistArgument

// Arrow function with two arguments
const myFunction = (fistArgument, secondArgument) => {
    // to-do with first and second argument
  return fistArgument + ' ' + secondArgument //e.g. concatenate string
}

// Short arrow function version with two arguments
const myFunction = (fistArgument, secondArgument) => fistArgument * secondArgument
```
