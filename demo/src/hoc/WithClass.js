import React from 'react';

//gives component a class and returns children
const withClass = (props) => (
  <div className={props.classes}>
    {props.children}
  </div>
);

export default withClass;
