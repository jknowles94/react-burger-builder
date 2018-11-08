import React from 'react';
import './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';

const burger = (props) => {
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="cheese"/>
      <BurgerIngredient type="meat"/>
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;