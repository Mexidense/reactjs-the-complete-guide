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

We've created the Person functional component: [examples/src/Person/Person.js](/examples/src/Person/Person.js)

