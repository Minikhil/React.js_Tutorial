import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const assignedClasses = [];
  let btnClass = '';


  if(props.person.length <= 2){
    assignedClasses.push(classes.red);
  }
  if(props.person.length <= 1){
    assignedClasses.push(classes.bold);
  }

  if(props.showPersons){
    btnClass = classes.red;
  }

  return(
    <div className={classes.Cockpit}>
      <h1> My React App! </h1>
      <button onClick ={props.clicked} className={btnClass} > Toggle Name </button>
      {props.persons}
    </div>
  )
};

export default cockpit;
