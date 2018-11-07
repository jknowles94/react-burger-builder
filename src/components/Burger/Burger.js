import React from 'react';
import './Burger.scss';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient.js';

const burger = (props) => {
  return (
    <div className="burger">
      <BurgerIngredient type="bread-top"/>
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;