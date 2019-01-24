import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Model from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.5,
  bacon: 1
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchasable: false,
    purchaseMode: false
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;

    //Create immutable copy of state that i am changing
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    //Update the price
    const priceAddition = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice + priceAddition;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;

    //Create immutable copy of state that i am changing
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;

    //Update the price
    const priceDeduction = INGREDIENT_PRICES[type];
    const newPrice = this.state.totalPrice - priceDeduction;

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients
    });
    //Pass the updated ingredients to the update purchase state
    this.updatePurchaseState(updatedIngredients);
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients).map((key) => {
      return ingredients[key]
    }).reduce((sum, el) => {
      return sum + el;
    }, 0);

    this.setState({purchasable: sum > 0});
  }

  purchaseHandler = () => {
    this.setState({purchaseMode: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchaseMode: false});
  }

  purchaseContinueHandler = () => {
    //.json is for firebase only
    const order = {
      ingredients: this.state.ingredients,
      // in real world databse you would get the price from the server
      price: this.state.totalPrice,
      customer: {
        name: "Jake Knowles",
        address: {
          street: "Test street",
          postcode: "CMM7RL",
          country: "United Kingdom",
        },
        email: "jakeyknowles@hotmail.co.uk",
        deliveryMethod: "Next Day"
      }
    };
    axios.post("/orders.json", order)
    .then(res => {
      this.setState({
        purchaseMode: false
      });
    })
    .catch(err => console.log(err));
  }

  render() {
    // immutable copy of state
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      //returns true or false
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <React.Fragment>
        <Model show={this.state.purchaseMode} modelClose={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} cancel={this.purchaseCancelHandler} continue={this.purchaseContinueHandler} price={this.state.totalPrice}/>
        </Model>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler} 
          disabled={disabledInfo} 
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchaseMode={this.purchaseHandler}
          />
      </React.Fragment>
    );
  }
}

export default BurgerBuilder;