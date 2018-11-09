import React from 'react';
import classes from './buildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  {label: "Salad", type: "salad"},
  {label: "Bacon", type: "bacon"},
  {label: "Cheese", type: "cheese"},
  {label: "Meat", type: "meat"}
];

const buildControls = (props) => {
  return (
    <div className={classes.buildControls}>
      <p>Current Price: <strong>£{props.price.toFixed(2)}</strong></p>
      {
        controls.map((ctrl) => {
          //invoke the function here to pass the type to the BuildControl component
          return <BuildControl label={ctrl.label} key={ctrl.label} less={() => props.removeIngredient(ctrl.type)} more={() => props.addIngredient(ctrl.type)} disabled={props.disabled[ctrl.type]}/>
        })
      }
    </div>
  );
};

export default buildControls;