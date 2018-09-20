import React from 'react';
import Aux from '../../../hoc/Aux';

//need to add logic so use {return();}; for function body else use ();
const orderSummary = (props) =>{
  const ingridentSummary = Object.keys(props.ingredients)
        .map(igKey=>{
            return (<li key={igKey}> <span style={{textTransform: 'capitalize'}}> {igKey} </span>: {props.ingredients[igKey]} </li>);
        })
  return(
    <Aux>
      <h3> Your Order </h3>
      <p> A delicious burger with the following ingridients:</p>
      <ul> {ingridentSummary} </ul>
      <p> Continue to Checkout </p>
    </Aux>
  );
};

export default orderSummary;
