# Component deep dive

## Module introduction

We deep on the React components, how they work, what happens behind the scenes, what we can do with them...

## A better project structure

We should have the following folder structure:

- `assets` folder which contains the different assets for application
- `components` folder which contains the whole of our components
- `containers` folder which contains the different app containers (SPA/MPA)

## Splitting an App into components

- We decoupled map function into `Persons` component.
- We decoupled the App header to `Cockpit` component.

## Component lifecycle overview

*Only available in Class-based Components!*

Also called Life-cycle hooks

- Component life-cycle - Creation: 
  - `constructor(props)` => Set up state
  - `getDerivedStateFromProps(props, state)` => Sync state
  - `render()` => Prepare & structure your JSX code
  - Render child components
  - `componentDidMount()` => Cause side-effects

- Component life-cycle - Update:
  - `getDeriverStateFromProps(props, state)` => Sync state to props
  - `shouldComponentUpdate(nextProps, nextState)` => Decide whether to continue or not
  - `render()` => Prepare & structure your JSX code
  - `getSnapshotBeforeUpdate(prevProps, prevState)` => Last-minute DOM operations
  - `ComponentDidUpdate()` => Cause side-effects

## Using useEffect() in functional components

`useEffect()` hook is a function on functional components with the same behaviour of componentDidUpdate on class-bassed components.
It is run when a component is re-rendered in the life-cicle.

You can import the hook on this way:
```js
import React, { useEffect } from 'react';
```

And you should use that inside component function like this:
```js
const Component = (props) => {
  useEffect(() => {
    // Something to-do when you want to update a component.
  });

  return <div>Hello world!</div>
}
```

You can add a second argument in order to re-run the useEffect with a condition:

```js
  useEffect(() => {
    // It'll re-render the component if the props called `status` changes
  },[props.status])
``` 

## Optimizing functional component with React.memo()

Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

React has a way to use that technique when you export a component:
```js
export default React.memo(Component);
```