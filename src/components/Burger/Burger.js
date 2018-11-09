import React from 'react';
import './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';

const burger = (props) => {
  // getting all the object keys of props.ingredients
  let transformedIngredients = Object.keys(props.ingredients)
    .map(key => {;
      // using the spread operater to create an empty array and using the value of the key to define how long it is.
      return [...Array(props.ingredients[key])].map((_, i) => {
        // maps through the empty array and creates a burger ingredient for each one using the type
        return <BurgerIngredient key={key + i} type={key}/>;
      });
    })
    .reduce((arr, el) => {
      // getting the array of arrays and reducing them to 1 array full of objects by concating the array inside the array
      return arr.concat(el);
    }, []);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className="burger">
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;