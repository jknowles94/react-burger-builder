import React from 'react';
import './Toolbar.scss';
import Logo from '../../Logo/Logo';

const Toolbar = (props) => {
  return (
  	<header className="Toolbar">
  		<div>MENU</div>
  		<Logo/>
  		<nav>
  			NAV
  		</nav>
  	</header>
  );
};

export default Toolbar;