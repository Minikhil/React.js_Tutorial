import React from 'react';
import classes from './Backdrop.css';

//Darkens the background when orderSummary shows
const backdrop = (props) =>(
  props.show? <div className={classes.Backdrop} onClick={props.clicked}>BACK DROP!!</div> : null
);

export default backdrop;
