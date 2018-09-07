import React from 'react';
import Person from './Person/Person';

// this component maps through each person in person array and creates a person component for it in app.js
const persons = (props) =>
  props.persons.map((person,index) =>{
    return <Person
      click = {() => props.clicked(index)} // clicked is a prop in Person component which call deletePersonHandler
      changed={(event) => props.changed(event, persons.id)} // changed is a prop in Person component which call nameChangedHandler
      name = {person.name}
      age={person.age} key={person.id}
    />

});




export default persons;
