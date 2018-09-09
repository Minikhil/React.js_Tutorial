import React from 'react';
import classes from './Person.css'
import PropTypes from 'prop-types';
import WithClass from '../../../hoc/WithClass'

const person = (props) => {
    const style = {
      '@media(min-width: 500px)':{width: '450px'} // at screen size >= 500px person component fixed width to 450px
    };
    return (


      <WithClass classes = {classes.Person} >
        <p onClick = {props.click}> My name is:  {props.name} and my age is : {props.age}</p>
        <input type="text" onChange = {props.changed} value = {props.name}/>
      </WithClass>


    )

};

//ONLY USE ON STATEFUL Component
// Person.propTypes = {
//   click: propTypes.func,
//   name: propTypes.string,
//   age: propTypes.number,
//   changed: propTypes.func
// };

export default person;
