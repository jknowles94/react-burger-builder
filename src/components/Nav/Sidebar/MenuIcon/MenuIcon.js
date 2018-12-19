import React from 'react';
import './MenuIcon.scss';

const MenuIcon = (props) => {
  return (
    <div className="menu_burger" onClick={props.click}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default MenuIcon;