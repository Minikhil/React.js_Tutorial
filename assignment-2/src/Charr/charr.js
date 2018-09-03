import React from 'react';
import './charr.css';

const charr = (props) => {



  return(
    <div className = "charr" onClick = {props.clicked}>
      <p> {props.character} </p>
    </div>
  );
};

export default charr;
