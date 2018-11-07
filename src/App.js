import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>Toolbar, SideBar, backdrop</div>
        <main>
          <BurgerBuilder></BurgerBuilder>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
