import React from 'react';
import LogoImg from '../../assets/images/burger-logo.png';
import './Logo.scss';

const Logo = (props) => {
  return (
  	<div className="Logo">
  		<img src={LogoImg} alt="Burger Builder"/>
  	</div>
  );
};

export default Logo;