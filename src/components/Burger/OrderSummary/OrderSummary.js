import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
  const IngredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key="igKey">
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    )
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>Delicious burger with the following ingredients</p>
      <ul>
        {IngredientSummary}
      </ul>
      <p><strong>Total Price: £{props.price.toFixed(2)}</strong></p>
      <p>Continure to checkout?</p>
      <Button btnType="Danger" clicked={props.cancel}>Cancel</Button>
      <Button btnType="Success" clicked={props.continue}>Continue</Button>
    </React.Fragment>
  );
};

export default OrderSummary;