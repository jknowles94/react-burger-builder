import React from 'react';

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
      <p>Continure to checkout</p>
    </React.Fragment>
  );
};

export default OrderSummary;