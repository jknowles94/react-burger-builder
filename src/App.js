import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import './App.scss';
import Toolbar from './components/Nav/Toolbar/Toolbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Toolbar/>
        <main>
          <BurgerBuilder></BurgerBuilder>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
