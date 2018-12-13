import React from 'react';
import './NavItems.scss';

const NavItems = (props) => {
  let active = false;
  return (
    <ul className="NavigationItems">
      <li className="NavItem"><a href="/" className="active">Burger Builder</a></li>
      <li className="NavItem"><a href="/">Checkout</a></li>
    </ul>
  );
};

export default NavItems;