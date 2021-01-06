# Debugging React Apps

In this module, we're going to discover how you can to debug your React application, how you can read and handle errors.

The main tool to debug an application is the browser developer tool. Also, you can install [React developer tool extension for Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=es)

## Using error boundaries

One of the React 16+ features is Error Boundary, this feature allows creating customs exceptions. For that we'll apply an example:
- Simulate an error throwing an exception/error:
  ```js
  const randomNumber = Math.random();
  
  if ( randomNumber > 0.5 ) {
    throw Error('Something went wrong');
  }
  ```
- Create an Error boundary
  ```js
    import React, { Component } from 'react';
    
    class ErrorBoundary extends Component {
    state = {
      hasError: false,
      errorMessage: ''
    };
    
    componentDidCatch = (error, errorInfo) => {
      this.setState({ hasError: true, errorMessage: error });
    }
    
    render() {
      if (this.state.hasError) {
        return (
          <div>
            <h1>{ this.state.errorMessage }</h1>
          </div>
        )
      }
      
          return this.props.children;
      }
    }
    
    export default ErrorBoundary;
    ```
- Import the Error boundary where you want to use
  ```js
  import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
  ```
- Wrap the component to handler the error.
  ```js
  return <ErrorBoundary key={ person.id }><Person
    name={ person.name }
    age={ person.age }
    click={ () => this.deletePersonHandler(index) }
    changed={ (event) => this.nameChangedHandler(event, person.id) }/></ErrorBoundary>
  ```
