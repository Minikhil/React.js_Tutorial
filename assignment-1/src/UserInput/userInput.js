import React from 'react';

const UserInput = (props) => {
  return <input type="text" value = {props.username} onChange={props.click} />
};

export default UserInput
