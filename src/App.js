import React, { Component } from 'react';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import './App.scss';
import Toolbar from './components/Nav/Toolbar/Toolbar';
import Sidebar from './components/Nav/Sidebar/Sidebar';

class App extends Component {
  state = {
    showSidebar: false
  }

  sidebarClosedHandler = () => {
    this.setState({showSidebar: false});
  }

  sidebarToggleHandler = () => {
    // dont use this.state in setState use the functional version of set state using prevState
    this.setState((prevState) => { return {showSidebar: !prevState.showSidebar} })
  }

  render() {
    return (
      <React.Fragment>
        <Sidebar open={this.state.showSidebar} closed={this.sidebarClosedHandler}/>
        <Toolbar menuIconClick={this.sidebarToggleHandler}/>
        <main>
          <BurgerBuilder></BurgerBuilder>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
