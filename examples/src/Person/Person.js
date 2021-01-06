import React from 'react';
import './Person.css';

const person = (props) => {
  const randomNumber = Math.random();

  if ( randomNumber > 0.5 ) {
    throw Error('Something went wrong');
  }
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name}!, I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  );
}

export default person;