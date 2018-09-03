import React from 'react';

const validation = (props) => {
  let validationMessage = 'Text Too Short';
  if (props.textLengt <= 5){
    validationMessage = 'Text Too Long';
  }


  return(
    <div>
      <p> {validationMessage} </p>
    </div>
  );
};

export default validation
