import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import './App.scss';
import Toolbar from './components/Nav/Toolbar/Toolbar';
import Sidebar from './components/Nav/Sidebar/Sidebar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Sidebar />
        <Toolbar/>
        <main>
          <BurgerBuilder></BurgerBuilder>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
