import React from 'react';
import classes from './Cockpit.module.css';

const Cockpit = (props) => {
  const assignedClasses = [];
  let buttonClass = {};
  console.log(classes);

  if (props.showPersons) {
    buttonClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hello word!</h1>
      <p className={assignedClasses.join(' ')}>Hello again!</p>
      <button
        style={buttonClass}
        onClick={props.clicked}>Toggle persons
      </button>
    </div>
  );
};

export default Cockpit;