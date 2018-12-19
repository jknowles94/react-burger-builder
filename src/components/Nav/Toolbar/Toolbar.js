import React from 'react';
import classes from './Toolbar.module.scss';
import NavItems from '../NavItems/NavItems';
import Logo from '../../Logo/Logo';
import MenuIcon from '../Sidebar/MenuIcon/MenuIcon';

const Toolbar = (props) => {
  return (
  	<header className={classes.Toolbar}>
  		<MenuIcon click={props.menuIconClick}/>
      <div className={classes.Logo}>
  		  <Logo/>
      </div>
  		<nav className={classes.DesktopNav}>
  			<NavItems/>
  		</nav>
  	</header>
  );
};

export default Toolbar;