import React from 'react';
import Radium from 'radium';

import './Person.css'

const person = (props) => {
    const style = {
      '@media(min-width: 500px)':{width: '450px'} // at screen size >= 500px person component fixed width to 450px
    };
    return (

      <div className = "Person" style = {style}>
        <p onClick = {props.click}> My name is:  {props.name} and my age is : {props.age}</p>
        <input type="text" onChange = {props.changed} value = {props.name}/>
      </div>


    )

};

export default Radium(person);
